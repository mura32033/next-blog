import Image from "next/image";
import Link from "next/link";
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import type { Article } from "../types/article";

dayjs.extend(utc)
dayjs.extend(timezone)

type Props = {
  articles: Article[]
}

export default function ArticleList({ articles }: Props) {
  return (
    <div className="mt-8">
      <h1 className="font-sans text-5xl font-medium tracking-wide mb-8">New Articles</h1>
        <div className="grid grid-cols-2 gap-4">
          {articles.map((article) => (
            <Link key={article.id} href={`/article/${article.id}`} passHref>
              <div className="rounded overflow-hidden shadow-lg bg-slate-800 cursor-pointer">
                <div>
                  <Image
                    src={article.eyecatch.url}
                    alt={article.title}
                    width={article.eyecatch.width}
                    height={article.eyecatch.height}
                  />
                  <div className="font-sans flex flex-col p-4">
                    <div className="flex flex-row items-center mb-2">
                      <div className="font-bold text-xl">
                        {article.title}
                      </div>
                      <div className="ml-auto">
                        {article.category && (
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
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
  )
}