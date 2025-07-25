import AnimeList from "@/components/animelist"
import Header from "@/components/animelist/Header"
import MangaList from "@/components/mangalist"
import { use } from "react"

export default async function Page({params}) {
    const { keyword } = params
    const decodedKeyword = decodeURI(keyword)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`,
        { cache: 'no-store'})
    const searchAnime = await response.json()
    const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/manga?q=${decodedKeyword}`,
        { cache: 'no-store'})
    const searchManga = await response2.json()

    return(
        <>
        <Header title={`Hasil Dari ${decodedKeyword}...`}/>
        <Header title={"Anime"}/>
        <section>
        <AnimeList api={searchAnime}/>
        </section>
        <Header title={"Manga"}/>
        <section>
        <MangaList api={searchManga}/>
        </section>
        </>
    )
}