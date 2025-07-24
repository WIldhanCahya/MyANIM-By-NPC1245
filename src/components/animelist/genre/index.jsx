"use client"
import Link from "next/link"

const AnimeGenre = ({api}) => {
    
    const handleClick = () => {
        console.log(genre.name)
    }

 return (
    <div className="flex flex-wrap gap-2 md:gap-5 justify-center">
        {api.data.map((genre) => (
            <button key={genre.mal_id} className="bg-[#FFD369] rounded-xl hover:bg-transparent border border-[#FDD369] p-2 cursor-pointer md:p-3">
                <Link href={`/genre/${genre.name}`} key={genre.mal_id} className="text-white font-bold" onClick={handleClick}>{genre.name}</Link>
            </button>
            )
        
    )}
</div>
)
}

export default AnimeGenre