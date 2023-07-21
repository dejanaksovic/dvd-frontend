import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home/Home"
import MainLayout from "./layouts/MainLayout"

const router = createBrowserRouter(createRoutesFromElements(
  <Route element = {<MainLayout/>}>
    <Route path="/" element = {<Home/>}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
    )
}

export default App
