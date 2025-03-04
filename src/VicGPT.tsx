import { RouterProvider } from "react-router-dom"
import { router } from "./presentation/router/router"

export const VicGPT = () => {
  return (
    <RouterProvider router={router} />
  )
}
