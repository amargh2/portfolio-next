import { BsGithub } from "react-icons/bs";
import Link from "next/link";

export default function Footer () {
  return (
  <div className='flex justify-center mb-4'>
    <Link href='https://www.github.com/amargh2'>
      <BsGithub size={30}/>
    </Link>
  </div>
  )
}