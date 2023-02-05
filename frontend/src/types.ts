export type PostType = { id: number; title: string; body: string; timestamp: number };
export type Status = 'loading' | 'ready' | 'error' | 'idle';
export type DarkMode = 'dark' | 'light';