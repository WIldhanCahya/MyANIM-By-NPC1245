import Image from "next/image";

const Page = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`
  );
  const anime = await response.json();

  return (
    <>
      <div className="min-h-screen flex-col items-center border border-white rounded-xl m-5 cursor-pointer py-5 px-3">
        <div className="flex flex-col md:flex-row gap-10 p-5">
          <div>
            <Image
              src={anime.data?.images.webp.image_url}
              alt={anime.data.title}
              width={1820}
              height={400}
              className=""
            />
          </div>
          <div>
            <h1 className="font-bold text-white text-xl md:text-5xl">
              {anime.data.title}
            </h1>
            <p className="font-bold text-white md:text-xl md:mt-5">
              Type: <span className="text-[#FFD369]">{anime.data.type}</span>,
              Episodes:{" "}
              <span className="text-[#FFD369]">{anime.data.episodes}</span>,
              Source:{" "}
              <span className="text-[#FFD369]">{anime.data.source}</span>
            </p>
          <div className="mt-4">
            <h1 className="font-bold text-white md:text-md">Sypnosis: <span className="text-[#FFD369]">{anime.data.synopsis}</span></h1>
          </div>
          </div>
        </div>
        <div className="mt-10 p-2 flex justify-center items-center">
            <iframe
            width="720"
            height="400"
        src={anime.data.trailer.embed_url}
        title="Anime Trailer"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="p-0 max-h-[220px] max-w-[320px] md:max-w-screen md:max-h-screen"
/>
        </div>
      </div>
    </>
  );
};

export default Page;
