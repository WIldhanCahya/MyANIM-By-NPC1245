import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-neutral-900 border-b border-white">
            <nav className="flex md:justify-between md:flex-row md:items-center flex-col p-4 gap-2">
                <Link href="/" className="font-bold text-[#FFD369] text-2xl">MyANIM</Link>
                <input placeholder="Search..." className="bg-white p-2 rounded"/>
            </nav>
        </header>
    )
}

export default Navbar