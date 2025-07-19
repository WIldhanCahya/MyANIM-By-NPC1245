
import AnimeList from "@/components/animelist";
import Header from "@/components/animelist/Header";
import Loader from "@/components/Loader";
import Link from "next/link";

export default async function Page() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
    const topAnime = await response.json()
    
    return (
      <>
      <div>
        <Header title={"Paling Populer"} titleHref={"See All >"}/>
        <AnimeList api={topAnime}/>
      </div>
    </>
  );
}

