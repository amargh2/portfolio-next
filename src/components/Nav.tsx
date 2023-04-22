import Link  from 'next/link'
export default function Nav() {
  return (
    <div className="flex align-middle justify-center py-2">
      <div className="flex justify-center align-middle">
        <div className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          <Link href='/home'>
            <button
              type="button"
              className="hover:bg-gradient-to-r hover:to-indigo-500 hover:from-cyan-300 rounded-l-lg bg-gradient-to-br py-1 w-24 hover:text-white font-medium"
            >
              Home
            </button>
          </Link>
          <Link href='/about'>
            <button
              type="button"
              className="hover:bg-gradient-to-r hover:to-indigo-500 hover:from-cyan-300 rounded-l-lg bg-gradient-to-br py-1 w-24 hover:text-white font-medium"
            >
              About Me
            </button>
          </Link>
          <Link href='/projects'>
            <button
              type="button"
              className="hover:bg-gradient-to-br hover:to-indigo-500 hover:from-cyan-300 bg-gradient-to-tr rounded-r-lg py-1 w-24 hover:text-white font-medium"
            >
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}