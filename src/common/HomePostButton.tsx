import React from "react"
import { PlusIcon } from "../assets/icons"

type Props = {}

const HomePostButton = (props: Props) => {
  return (
    <div>
      <div className="border-2 border-primary hidden md:flex items-center rounded-full py-[5px] pl-1 pr-4 gap-[13px] text-sm text-content-secondary font-medium">
        <PlusIcon className="bg-primary rounded-full h-[30px] w-[30px]" />
        <span>Post</span>
      </div>
      <div>
        <PlusIcon className="bg-primary rounded-full h-[30px] w-[30px] md:hidden" />
      </div>
    </div>
  )
}

export default HomePostButton
