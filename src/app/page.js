import AnimeList from "@/components/animelist";
import Link from "next/link";

export default async function Home() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`)
    const anime = await response.json()
    
    return (
      <main>
      <div className="p-4 flex justify-between items-center">
      <h1 className="text-[#FFD369] font-bold text-2xl">Paling Populer</h1>
      <Link href="/top" className="underline text-[#FFD369] font-bold text-md">See All &gt;</Link>
      </div>
      <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-4 sm:grid-cols-">
        {anime.data.map(data => {
          return (
          <div key={data.mal_id} className="shadow-md border border-white rounded p-2">
            <AnimeList year={data.year} title={data.title} images={data.images.webp.image_url} id={data.mal_id} type={data.type} source={data.source} rating={data.rating} episode={data.episodes}/>
          </div>
          )
        })}
      </div>
    </main>
  );
}

