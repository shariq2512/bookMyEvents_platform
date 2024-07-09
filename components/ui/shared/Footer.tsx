import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          {/* <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          /> */}
          <h1 className="text-2xl font-semibold">book<span className="italic pr-1 text-neutral-100 font-thin bg-red-700 rounded-xl">My</span>Events</h1>
        </Link>

        <p>2024 BookMyEvents. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer