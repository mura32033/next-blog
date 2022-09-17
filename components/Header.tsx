import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-slate-900">
      <div className="container mx-auto flex flex-row flex-wrap p-5 items-center">
        <Link href={'/'} passHref>
          <a className="font-medium text-2xl items-center text-white">
            Blog
          </a>
        </Link>
        <nav className="ml-auto">
          <a href="" className="text-white">Profile</a>
        </nav>
      </div>
    </header>
  )
}