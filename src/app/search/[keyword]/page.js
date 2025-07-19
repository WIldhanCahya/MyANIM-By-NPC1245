import AnimeList from "@/components/animelist"
import Header from "@/components/animelist/Header"

const Page =  async ({params}) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${params.keyword}`)
    const searchAnime = await response.json()

    return(
        <>
        <Header title={`Hasil Dari ${params.keyword}...`}/>
        <AnimeList api={searchAnime}/>
        </>
    )
}
export default Page