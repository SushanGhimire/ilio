import React from "react"
import DogCard from "../../common/DogCard"
import HomeLayout from "../../components/layout/HomeLayout"

type Props = {}

const HomePage = (props: Props) => {
  return (
    <HomeLayout title="Home">
      <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-9 border-b border-content-secondary/10 pb-10">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, index) => {
            return <DogCard key={index} index={index} />
          })}
        </div>
        <div className="flex flex-col justify-center items-center text-content-primary font-medium mt-10">
          <h1 className="tracking-wide">Continue viewing dogs</h1>
          <div className="rounded-full border border-content-primary text-sm px-6 py-2 mt-4">
            Show More
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default HomePage
