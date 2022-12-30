import React from "react"

type Props = {}

const Footer = (props: Props) => {
  let currentYear = new Date().getFullYear()
  return (
    <div className="px-4 flex items-center justify-between text-xs font-light text-content-secondary">
      <div className="flex items-center gap-4">
        <span>&copy; {currentYear} ilio.</span>
        <span>Terms</span>
        <span>Policy</span>
        <span>Cookie</span>
      </div>
      <div className="text-content-primary font-medium">Logout</div>
    </div>
  )
}

export default Footer
