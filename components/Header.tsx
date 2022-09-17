import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-slate-900">
      <div className="container mx-auto flex flex-row flex-wrap p-5 items-center">
        <Link href={'/'} passHref>
          <a className="font-medium font-sans text-2xl items-center text-white">
            Blog
          </a>
        </Link>
        <nav className="flex flex-row ml-auto gap-4">
          <Link href={'/article'} passHref>
            <a className="font-medium font-sans items-center text-white">
              Articles
            </a>
          </Link>
          <Link href={'/profile'} passHref>
          <a className="font-medium font-sans items-center text-white">
            Profile
          </a>
        </Link>
        </nav>
      </div>
    </header>
  )
}