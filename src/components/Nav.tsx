import Link  from 'next/link'
export default function Nav(props:any) {
  
  return (
    <div className="flex align-middle justify-center p-2">
      <div className="flex justify-center p-2 align-middle">
        <div className="flex rounded-full bg-white/90 text-sm text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
          <Link href='/'>
            <button
              type="button"
              className= { props.selected==='home' ? "bg-gradient-to-r to-indigo-500 from-cyan-300 py-1 w-24 text-white font-medium rounded-l-2xl" : "hover:bg-gradient-to-r hover:to-indigo-500 hover:from-cyan-300 bg-gradient-to-br py-1 w-24 rounded-l-2xl hover:text-white font-medium"}
            >
              Home
            </button>
          </Link>
          <Link href='/projects'>
            <button
              type="button"
              className={ props.selected==='projects' ? "bg-gradient-to-r from-indigo-500 to-cyan-300 bg-gradient-to-br py-1 w-24 text-white font-medium rounded-r-2xl" : "hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-300 bg-gradient-to-br py-1 rounded-r-2xl w-24 hover:text-white font-medium"}
            >
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}