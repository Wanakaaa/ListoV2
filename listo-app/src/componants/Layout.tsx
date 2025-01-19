import { Outlet } from "react-router-dom"
import { useState } from "react"
import Logo from "../componants/Nav/Logo"
import Login from "../componants/Nav/Login"
import Navbar from "../componants/Nav/Navbar"

export default function Layout() {
    const [selectedOption, setSelectedOption] = useState("lists")
  return (
    <div className="w-full flex h-screen">
            <div className="flex flex-col w-1/6 border-2 border-blue-500">
                <Logo/>
                <Login/>
                <Navbar
                    setSelectedOption={setSelectedOption}/>
            </div>
            <div className="w-5/6">
                <Outlet/>
            </div>
        </div>
  )
}
