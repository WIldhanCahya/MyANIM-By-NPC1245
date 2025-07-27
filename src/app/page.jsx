
import AnimeList from "@/components/animelist";
import Header from "@/components/animelist/Header";
import MangaList from "@/components/mangalist";
import Link from "next/link";
import { getAnimeResponse } from "./libs/api-libs";

export default async function Page() {
    const topAnime = await getAnimeResponse("top/anime", "limit=8")
    const topManga = await getAnimeResponse("top/manga", "limit=8")
    
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

