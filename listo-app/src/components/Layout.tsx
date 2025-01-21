import { Outlet } from "react-router-dom"
import { useState } from "react"
import Logo from "./common/Logo"
import Login from "./features/auth/Login"
import Navbar from "../components/features/navbar/Navbar"

const Layout = () => {
    const [selectedOption, setSelectedOption] = useState("lists")
  return (
    <div className="w-full flex h-screen">
            <div className="flex flex-col w-1/6 border-2 border-blue-500">
                <Logo/>
                <Login/>
                <Navbar
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}/>
            </div>
            <div className="w-5/6">
                <Outlet/>
            </div>
        </div>
  )
}

export default Layout