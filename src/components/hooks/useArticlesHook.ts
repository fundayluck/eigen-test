import axios from "axios"
import { useEffect, useState } from "react"

interface ArticleProps {
    title?: string;
    description?: string;
    url?: string;
    urlToImage?: string;
}

const useArticlesHooks = () => {
    const [article, setArticle] = useState<ArticleProps[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {
        const getData = async () => {
            const date = new Date()
            const key = '5f62ea80633148e1915f37f6da71ad0d'
            try {
                const response = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=${date}&sortBy=publishedAt&apiKey=${key}`)
                setArticle(response.data.articles)
                const dataString = JSON.stringify(response.data.articles)
                localStorage.setItem('data', dataString)
                setLoading(false)
            } catch (err) {
                console.error('Error fetching data:', err);
                setLoading(false)
                setError(true)
            }
        }
        getData()
    }, [])

    return { article, loading, error }

}

export default useArticlesHooks