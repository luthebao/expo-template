import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const API_BASE = 'https://jsonplaceholder.typicode.com';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type CreatePostInput = Omit<Post, 'id'>;

export function usePosts() {
    return useQuery({
        queryKey: ['posts'],
        queryFn: async (): Promise<Post[]> => {
            const response = await fetch(`${API_BASE}/posts`);
            if (!response.ok) throw new Error('Failed to fetch posts');
            return response.json();
        },
    });
}

export function usePost(id: number) {
    return useQuery({
        queryKey: ['posts', id],
        queryFn: async (): Promise<Post> => {
            const response = await fetch(`${API_BASE}/posts/${id}`);
            if (!response.ok) throw new Error('Failed to fetch post');
            return response.json();
        },
        enabled: id > 0,
    });
}

export function useCreatePost() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (newPost: CreatePostInput): Promise<Post> => {
            const response = await fetch(`${API_BASE}/posts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPost),
            });
            if (!response.ok) throw new Error('Failed to create post');
            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
        },
    });
}
