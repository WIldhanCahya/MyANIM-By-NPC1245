import Image from "next/image"

const Page = async({params, index}) => {
    const { id } = await params

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/manga/${id}`, {cache: "no-store"})
    const manga = await response.json()

    return (
         <>
              <div className="min-h-screen flex-col items-center border border-white rounded-xl m-5 cursor-pointer py-5 px-3">
                <div className="flex flex-col md:flex-row gap-10 p-5">
                  <div>
                    <Image
                      src={manga.data?.images.webp.image_url}
                      alt={manga.data?.title}
                      width={1820}
                      height={400}
                      className=""
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-white text-xl md:text-5xl">
                      {manga.data?.title}
                    </h1>
                    <p className="font-bold text-white md:text-xl md:mt-5">
                      Type: <span className="text-[#FFD369]">{manga.data?.type}</span>,
                      Author:{" "}
                      <span className="text-[#FFD369]">{manga.data.authors[0].name}</span>,
                      Published:{" "}
                      <span className="text-[#FFD369]">{manga.data.published.prop.from.year} - {manga.data.published.prop.to.year}</span>
                    </p>
                  <div className="mt-4">
                    <h1 className="font-bold text-white md:text-md">Sypnosis: <span className="text-[#FFD369]">{manga.data.synopsis}</span></h1>
                  </div>
                  </div>
                </div>
              </div>
            </>
    )
}

export default Page