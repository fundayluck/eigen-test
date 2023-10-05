import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface DetailProps {
    title?: string;
    description?: string;
    url?: string;
    urlToImage?: string;
}

const DetailArticle: React.FC = () => {
    const { id } = useParams()
    const Id: any = id

    const [DetailArticle, setDetailArticle] = useState<DetailProps>()
    console.log(DetailArticle);


    useEffect(() => {
        const savedData = localStorage.getItem('data')
        if (savedData) {
            const parsedData = JSON.parse(savedData)
            setDetailArticle(parsedData[Id - 1])
        }
    }, [Id])

    return (
        <div>{DetailArticle?.title}</div>
    )
}

export default DetailArticle