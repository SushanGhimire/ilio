import Head from "next/head"
import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

type Props = {
  children: JSX.Element
  title: string
}

const HomeLayout = ({ title, children }: Props) => {
  return (
    <div className="h-screen flex">
      <Head>
        <title>{title}</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <div className=" flex-1 overflow-y-auto h-full pb-10">
        <div className="container">
          <Navbar />
          <div className="px-4 pb-10">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default HomeLayout
