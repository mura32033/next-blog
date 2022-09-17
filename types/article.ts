export type Article = {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  category: {
    id: string
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
  }
  eyecatch: {
    url: string
    height: number
    width: number
  }
}