import React, { useEffect, useMemo, useState } from "react"
import { toast } from "../redux-slices/toast/toastSlices"
import { useAppDispatch, useAppSelector } from "../redux-toolkit-store/hooks"

type Props = {}

const Toast = (props: Props) => {
  const { toast: toastifier } = useAppSelector((state) => state.toastify)
  const [isToast, setIsToast] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const handleDismiss = () => {
    setIsToast(false)
    dispatch(toast.remove())
  }

  useEffect(() => {
    if (toastifier.message !== "" && toastifier.type !== "") {
      setIsToast(true)
    }
  }, [toastifier])

  useEffect(() => {
    let timeout: any
    if (isToast) {
      timeout = setTimeout(() => {
        setIsToast(false)
        dispatch(toast.remove())
      }, 5000)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [isToast])

  return (
    <div
      // className={`fixed top-0 right-0 ${
      //   toastifier.type === "success"
      //     ? "s"
      //     : toastifier.type === "error"
      //     ? "bg-paradise-pink-error"
      //     : ""
      // } w-full z-[60] py-[20px] text-white font-medium flex gap-4 items-center justify-center animation ${
      //   isToast ? "translate-x-0" : "translate-x-full"
      // }`}
      className=""
    >
      <span>{toastifier.message}</span>
      <button className="font-normal" onClick={handleDismiss}>
        Dismiss
      </button>
    </div>
  )
}

export default Toast
