import { useEffect, useState } from "react"

interface DetailProps {
    title?: string
    description?: string
    content?: string
    url?: string
    urlToImage?: string
    publishedAt?: string
    author?: string
}

const useDetailArticleHook = (Id: number) => {
    const [DetailArticle, setDetailArticle] = useState<DetailProps>()
    console.log(DetailArticle?.urlToImage);

    useEffect(() => {
        const savedData = localStorage.getItem('data')
        if (savedData) {
            const parsedData = JSON.parse(savedData)
            setDetailArticle(parsedData[Id - 1])
        }
    }, [Id])

    return { DetailArticle }
}

export default useDetailArticleHook