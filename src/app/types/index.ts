export interface NewsSource {
    id: string | null
    name: string
}

export interface NewsArticle {
    author: string | null
    content: string | null
    description: string | null
    publishedAt: string
    source: NewsSource
    title: string
    url: string
    urlToImage: string | null
}

export interface NewsApiResponse {
  status: 'ok' | 'error';
  totalResults: number;
  articles: NewsArticle[];
  code?: string;
  message?: string;
}
