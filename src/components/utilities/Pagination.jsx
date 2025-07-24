const Pagination = ({page, lastPage, setPage}) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
    
    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }
    
    const handlePrevPage = () => {
        if (page <= 1) return;
        
        setPage((prevState) => prevState - 1)
        scrollTop()
    }



    return(
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-white text-2xl">
            <button className="transition-all hover:text-[#FFD369] cursor-pointer" onClick={handlePrevPage}>Prev</button>
            <p>{page} of {lastPage}</p>
            <button className="transition-all hover:text-[#FFD369] cursor-pointer" onClick={handleNextPage}>Next</button>
        </div>
    )
}

export default Pagination