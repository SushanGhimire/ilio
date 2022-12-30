import React from "react"
import { FilledHeartIcon, HeartIcon } from "../assets/icons"

type Props = {
  index: number
}

const dog_img =
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"

const DogCard = ({ index }: Props) => {
  return (
    <div className="font-inter">
      <div>
        <img
          src={dog_img}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      {/* dog info  */}
      <h1 className="mt-[10px] text-sm font-semibold text-content-primary">
        eliteboerboel
      </h1>
      <div className="text-xs flex justify-between items-center">
        <span className="text-content-secondary font-light ">boerboel</span>
        <span className="font-medium text-content-primary">Top Ad</span>
      </div>
      {/* pricing  */}
      <div className="flex items-center justify-between mt-[14px]">
        <span className="font-bold text-content-success">$ 2600</span>
        <div>
          {index % 3 === 0 ? (
            <FilledHeartIcon className="w-6 h-6" />
          ) : (
            <HeartIcon className="w-6 h-6" />
          )}
        </div>
      </div>
      {/* type  */}
      <p className="text-sm font-light text-content-secondary mt-1">
        Beach Haven Jacksonville, FL
      </p>
    </div>
  )
}

export default DogCard
