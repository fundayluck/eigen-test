import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Typography, Image, Row, Col, Space, Button } from 'antd'
import moment from 'moment'
import { ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons'
const FailedImage = require('../assets/image/FailedImage.png')

const { Text, Title, Link } = Typography;

interface DetailProps {
    title?: string
    description?: string
    content?: string
    url?: string
    urlToImage?: string
    publishedAt?: string
    author?: string
}

const DetailArticle: React.FC = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const Id: any = id

    const [DetailArticle, setDetailArticle] = useState<DetailProps>()
    console.log(DetailArticle);


    useEffect(() => {
        const savedData = localStorage.getItem('data')
        if (savedData) {
            const parsedData = JSON.parse(savedData)
            console.log(parsedData)
            setDetailArticle(parsedData[Id - 1])
        }
    }, [Id])

    return (
        <>
            <Button type="text" onClick={() => navigate('/')} icon={<ArrowLeftOutlined />}>
                Back to Articles
            </Button>
            <Row
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 25
                }}
                gutter={[16, 16]}
            >
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 10 }}
                    xl={{ span: 10 }}
                    xxl={{ span: 10 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        width={500}
                        src={DetailArticle?.urlToImage}
                        style={{
                            borderRadius: 10
                        }}
                    />

                </Col>
                <Col
                    md={{ span: 10 }}
                >
                    <Col
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 24 }}
                        lg={{ span: 24 }}
                        xl={{ span: 24 }}
                        xxl={{ span: 24 }}
                    >
                        <Title level={3}>{DetailArticle?.title}</Title>
                        <Text italic strong>{moment(DetailArticle?.publishedAt).format('DD MMM YYYY')} | {DetailArticle?.author}</Text>
                    </Col>

                    <Col>
                        <Text>{DetailArticle?.content}</Text>
                        <Link href={DetailArticle?.url} target="_blank">
                            Read More
                        </Link>
                    </Col>
                </Col>
            </Row >
        </>
    )
}

export default DetailArticle