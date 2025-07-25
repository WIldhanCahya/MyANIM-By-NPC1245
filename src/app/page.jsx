
import AnimeList from "@/components/animelist";
import Header from "@/components/animelist/Header";
import MangaList from "@/components/mangalist";
import Link from "next/link";

export default async function Page() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
    const topAnime = await response.json()
    const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=8`)
    const topManga = await response2.json()
    const response3 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/genres/anime`)
    const genreAnime = await response3.json()
    
    return (
      <>
      <div>
        <section>
        <Header title={"Top Anime.."} titleHref={"See All >"} href={'populer/top%20anime'}/>
        <AnimeList api={topAnime}/>
        </section>
        <section className="mt-5">
        <Header title={"Top Manga.."} titleHref={"See All >"} href={'populer/top%20manga'}/>
        <MangaList api={topManga}/>
        </section>
      </div>
    </>
  );
}

