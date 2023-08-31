export interface JokesSchema {
  isLoading?: boolean;
  error?: boolean;
  list?: Joke[];
  inited?: boolean;
}

export interface Joke {
  id: string;
  url: string;
  value: string;
  created_at: string;
}
