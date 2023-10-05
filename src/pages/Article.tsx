import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'antd';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const { Meta } = Card;

interface ArticleProps {
    title?: string;
    description?: string;
    url?: string;
    urlToImage?: string;
}

const Article: React.FC = () => {
    const [article, setArticle] = useState<ArticleProps[]>([])
    console.log(article);


    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-09-05&sortBy=publishedAt&apiKey=06306511c2da44d39362180452d02a56&page=1')
                setArticle(response.data.articles)
                const dataString = JSON.stringify(response.data.articles)
                localStorage.setItem('data', dataString)
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        }
        getData()
    }, [])

    return (
        <Row gutter={[16, 16]}>
            {article.map((item, index) =>
                <Col className="gutter-row" span={6} key={index}>
                    <NavLink to={`/detail/${index + 1}`}>
                        <Card
                            hoverable
                            cover={<img width={200} height={150} alt="example" src={item?.urlToImage ? item?.urlToImage : "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} />}
                        >
                            <Meta title={item?.title} description={item?.url} />
                        </Card>
                    </NavLink>
                </Col>
            )}
        </Row>
    )
}

export default Article