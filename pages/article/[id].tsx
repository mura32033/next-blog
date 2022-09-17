import { GetServerSideProps } from "next";
import { client } from "../../libs/client";
import Image from "next/image";
import type { Article } from "../../types/article";
import BreadCrumb from "../../components/BreadCrumb";

type Props = {
  article: Article;
};

export default function Article({ article }: Props) {
  return (
    <div className="flex flex-col">
      <div className="relative flex flex-row h-80 w-full items-end">
        <Image
          src={article.eyecatch.url}
          alt={article.title}
          layout="fill"
          objectFit="cover"
          style={{ filter: "blur(10px)" }}
        />
        <h1 className="absolute z-10 text-slate-900 font-medium text-5xl left-8 mb-8">{article.title}</h1>
      </div>
      <div
        id="article-content"
        className="container mx-auto p-10"
      >
        <BreadCrumb
          lists={[
            { name: "ホーム", path: "/" },
            { name: article.title }
          ]}
        />
        <div
          dangerouslySetInnerHTML={{__html: `${article.content}`}}
        />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const article = await client.get({ endpoint: "blogs", contentId: idExceptArray });

  return {
    props: {
      article,
    },
  };
}