import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Spin } from 'antd';
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

    let RenderView

    if (loading) {
        RenderView = <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: "center",
                minHeight: '90vh'
            }}
        >
            <Spin />
        </div >
    } else if (!error) {
        RenderView = <Row gutter={[16, 16]}>
            {article.map((item, index) =>
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 12 }}
                    md={{ span: 12 }}
                    lg={{ span: 8 }}
                    xl={{ span: 6 }}
                    xxl={{ span: 3 }}
                    key={index}
                >
                    <NavLink to={`/detail/${index + 1}`}>
                        <Card
                            hoverable
                            cover={<img width={200} height={150} alt="example" src={item?.urlToImage ? item?.urlToImage : "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} />}
                        >
                            <Meta style={{ height: 100 }} title={item?.title} description={item?.description} />
                        </Card>
                    </NavLink>
                </Col>
            )}
        </Row>
    } else {
        RenderView = <div>error view</div>
    }

    return RenderView
}

export default Article