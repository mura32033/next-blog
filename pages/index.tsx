import Head from 'next/head'
import { client } from '../libs/client'
import type { Article } from '../types/article'

import ArticleList from '../components/LatestArticleList'

type Props = {
  articles: Article[]
}

export default function Home({ articles }: Props) {
  return (
    <div className="flex-1">
      <Head>
        <title>Top - murasan blog</title>
        <meta name="description" content="This is murasan's blog." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto p-10">
        <h1 className="font-sans text-5xl font-medium tracking-wide mb-8">Welcome</h1>
        <p>This is a blog of murasan.</p>
        <ArticleList articles={articles} />
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'blogs', queries: {
    limit: 5,
    orders: '-updatedAt'
  } })
  return {
    props: {
      articles: data.contents,
    },
  }
}