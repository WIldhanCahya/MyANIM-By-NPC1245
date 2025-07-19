const { Exo } = require("next/font/google")
const { default: Link } = require("next/link")

const Header = ({title, titleHref}) => {
    return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-[#FFD369] font-bold text-2xl">{title}</h1>
      {titleHref ? <Link href="/top" className="underline text-[#FFD369] font-bold text-md">{titleHref}</Link> : null}
      </div>
    )
}

export default Header