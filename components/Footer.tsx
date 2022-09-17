export default function Footer() {
  return (
    <header className="bg-slate-900">
      <div className="container mx-auto flex flex-row flex-wrap p-5 items-center">
        <div className="font-sans font-medium text-sm items-center text-white">
          ©{new Date().getFullYear()} murasan.
        </div>
      </div>
    </header>
  )
}