"use client"

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import Loader from "../Loader"
import { ClipLoader } from "react-spinners"

const SearchInput = () => {
    const querySearch = useRef()
    const router = useRouter()
    
    const handleClick = (e) => {
        e.preventDefault()
        const keyword = querySearch.current.value            
        router.push(`/search/${keyword}`)
    }

    const handleEnter = (e) => {
        if (e.key == 'Enter') {
        e.preventDefault()
        const keyword = querySearch.current.value
        router.push(`/search/${keyword}`)
        }
    }

    return (
        <div className="relative">
        <input placeholder="Search..." className="bg-white p-2 rounded w-full" ref={querySearch}  onKeyDown={handleEnter}/>
        <button onClick={handleClick}>
        <MagnifyingGlass size={24} className="absolute top-2 end-1 cursor-pointer" />
        </button>
        </div>
    )
}

export default SearchInput