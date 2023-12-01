import React from "react"
import PathConstants from "./pathConstants"

const Home = React.lazy(() => import("../pages/Home"))
const Auth = React.lazy(() => import("../pages/Auth"))
const NotFound = React.lazy(() => import("../pages/NotFound"))


const routes = [
    { 
      path: PathConstants.HOME, 
      element: Home 
    },
    { 
      path: PathConstants.AUTH, 
      element: Auth
    },
    {
      path: PathConstants.NOTFOUND,
      element: NotFound
    }
]

export default routes