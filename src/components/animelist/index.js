const { default: Image } = require("next/image")
const { default: Link } = require("next/link")

const AnimeList = ({title, images, id, type, episode, rating, source, year}) => {
    return(
        <Link href={"/"} className="flex flex-col items-center">
            <Image src={images} alt={title} width={600} height={400} className="w-full max-h-[400px]" />
            <h3 className="font-bold md:text-xl text-md p-1 md:p-4 text-[#FFD369] text-center">{title}</h3>
            <p className="text-white font-bold self-start text-sm md:text-md">Type: <span className="text-[#FFD369]">{type}</span></p>
            <p className="text-white font-bold self-start text-sm md:text-md">Episodes: <span className="text-[#FFD369]">{episode}</span></p>
            <p className="text-white font-bold self-start text-sm md:text-md">Rating: <span className="text-[#FFD369]">{rating}</span></p>
            <p className="text-white font-bold self-start text-sm md:text-md">Source: <span className="text-[#FFD369]">{source}</span></p>
            <p className="text-white font-bold self-start text-sm md:text-md">Year: <span className="text-[#FFD369]">{year}</span></p>
        </Link>
    )
}

export default AnimeList