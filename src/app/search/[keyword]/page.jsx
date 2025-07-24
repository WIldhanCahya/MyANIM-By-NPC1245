import AnimeList from "@/components/animelist"
import Header from "@/components/animelist/Header"
import MangaList from "@/components/mangalist"

export default async function Page({params}) {
    const { keyword } = params
    const decodedKeyword = decodeURI(keyword)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`,
        { cache: 'no-store'})
    const searchAnime = await response.json()

    return(
        <>
        <Header title={`Hasil Dari ${decodedKeyword}...`}/>
        <section>
        <AnimeList api={searchAnime}/>
        </section>
        </>
    )
}