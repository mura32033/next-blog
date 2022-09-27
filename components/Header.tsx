import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  const link = [
    {
      name: 'Article',
      path: '/article',
    },
    {
      name: 'Profile',
      path: '/profile',
    }
  ]
  return (
    <header className="bg-slate-900">
      <div className="container mx-auto flex flex-row flex-wrap p-5 items-center">
        <Link href={'/'}>
          <a className="font-medium font-sans text-2xl items-center text-white">
            Blog
          </a>
        </Link>
        <nav className="flex flex-row ml-auto gap-4">
          {link.map((item) => {
            return (
              <Link key={item.name} href={item.path} passHref>
                <a className={`font-sans items-center text-slate-100 hover:text-slate-200 ${router.pathname === item.path ? 'text-slate-200 font-medium underline' : ''}`}>{item.name}</a>
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}