import Link from "next/link";
import breadCrumbStyles from "../styles/BreadCrumb.module.css";

type Props = {
  lists: {
    name: string
    path?: string
  }[]
}

export default function BreadCrumb({ lists }: Props) {
  return (
    <div aria-label="breadcrumb">
      {lists.map(({name = "ホーム", path = "/"}, index) => (
        <span key={index}>
          {lists.length - 1 != index ? (
            <Link href={path}>
              <a className={`${breadCrumbStyles['next']}`}>{name}</a>
            </Link>
          ) : (
            <span aria-current="page" className="text-slate-500">{name}</span>
          )}
        </span>
      ))}
    </div>
  )
}