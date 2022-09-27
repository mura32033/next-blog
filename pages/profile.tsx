import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex-1">
      <Head>
        <title>Profile - murasan blog</title>
      </Head>
      <div className="container mx-auto p-10">
        <div className="my-8">
          <h1 className="font-sans text-5xl font-medium tracking-wide">About me</h1>
        </div>
        <div>
          <p className="text-xl">My name is murasan.</p>
          <p className="text-xl">Visit my <a href="https://portfolio.mura32033.com" className="underline" target="_blank" rel="noreferrer">portfolio site</a>.</p>
        </div>
      </div>
    </div>
  )
}