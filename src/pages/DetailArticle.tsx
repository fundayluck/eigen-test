import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Typography, Image, Row, Col, Button, } from 'antd'
import moment from 'moment'
import { ArrowLeftOutlined } from '@ant-design/icons'
import useDetailArticleHook from '../components/hooks/useDetailArticleHook'
const FailedImage = require('../assets/image/FailedImage.png')

const { Text, Title, Link } = Typography;


const DetailArticle: React.FC = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const Id: any = id
    const { DetailArticle } = useDetailArticleHook(Id)


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
                        src={DetailArticle?.urlToImage !== null ? DetailArticle?.urlToImage : FailedImage}
                        style={{
                            borderRadius: 10,
                        }}
                    />

                </Col>
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
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

                    <Col
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 24 }}
                        lg={{ span: 24 }}
                        xl={{ span: 24 }}
                        xxl={{ span: 24 }}
                    >
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