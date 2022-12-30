import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { LogoIcon, MenuIcon, UserIcon } from "../../assets/icons"
import HomePostButton from "../../common/HomePostButton"
import { nav_routes } from "./routes"

type Props = {}

const Navbar = (props: Props) => {
  const router = useRouter()
  return (
    <div className="px-4 flex justify-between py-5 sm:py-0 mb-4">
      <div className="flex items-center">
        <LogoIcon className="w-14 h-7" />
      </div>
      <div className="hidden sm:flex items-center gap-6 md:gap-10 text-sm">
        {nav_routes.map((data, index) => {
          return (
            <Link href={data.path} key={index}>
              <div
                className={`${
                  router.pathname === data.path
                    ? "text-content-primary font-semibold border-b-2 border-primary"
                    : "text-content-secondary font-medium"
                } py-5`}
              >
                {data.name}
              </div>
            </Link>
          )
        })}
      </div>
      <div className="w-1"></div>

      <div className="flex gap-6 items-center">
        {/* post  */}
        <HomePostButton />
        {/* menu icon  */}
        <div className="sm:hidden">
          <MenuIcon className="w-8 h-8" />
        </div>
        <div className="hidden w-10 h-10 rounded-full bg-background-gray sm:grid place-content-center">
          <UserIcon className="w-6 h-6" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
