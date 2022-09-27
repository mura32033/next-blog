import Head from 'next/head'
import { client } from '../../libs/client'
import type { Article } from '../../types/article'
import Image from "next/image";
import Link from "next/link";
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

type Props = {
  articles: Article[]
}

export default function Home({ articles }: Props) {
  return (
    <div className="flex-1">
      <Head>
        <title>Articles - murasan blog</title>
      </Head>

      <div className="container mx-auto p-10">
        <div className="mt-8">
        <h1 className="font-sans text-5xl font-medium tracking-wide mb-8">Articles</h1>
          <div className="grid grid-cols-2 gap-4">
            {articles.map((article) => (
              <Link key={article.id} href={`/article/${article.id}`} passHref>
                <div className="rounded overflow-hidden shadow-lg bg-slate-800 cursor-pointer">
                  <div className='flex flex-row'>
                    <Image
                      src={article.eyecatch.url}
                      alt={article.title}
                      width={article.eyecatch.width / 5}
                      height={article.eyecatch.height / 5}
                    />
                    <div className="font-sans flex flex-col p-4 w-full">
                      <div className="flex flex-row items-center mb-2">
                        <div className="font-bold text-xl truncate">
                          {article.title}
                        </div>
                        <div className="ml-auto">
                          {article.category && (
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 min-w-[5rem]">
                              {article.category.name}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="ml-auto">
                        <span className="text-slate-400">更新日時: {dayjs.utc(article.updatedAt).tz('Asia/Tokyo').format('YYYY/MM/DD HH:mm:ss')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
      </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'blogs', queries: {
    orders: '-updatedAt'
  } })
  return {
    props: {
      articles: data.contents,
    },
  }
}