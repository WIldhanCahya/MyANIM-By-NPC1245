export const getAnimeResponse = async(resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}

export const getNestedAnimeResponse = async(resource, objectProperty) => {
    const response = await getAnimeResponse(resource)
    return response.data?.flatMap(item => item[objectProperty])
}

export const reproduce = (data, length) => {
    const first = ~~(Math.random() * (data?.length - length) + 1)
    const last = first + length

    const response = {
        data: data?.slice(first, last)
    }

    return response
}