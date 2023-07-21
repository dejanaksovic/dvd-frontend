import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home/Home"
import MainLayout from "./layouts/MainLayout"
import Archive from "./pages/Archive/Archive"

const router = createBrowserRouter(createRoutesFromElements(
  <Route element = {<MainLayout/>}>
    <Route path="/" element = {<Home/>}/>
    <Route path="/archive" element = {<Archive/>}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
    )
}

export default App
