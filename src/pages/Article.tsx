import React from 'react'
import { Card, Col, Row, Spin, Image, Skeleton } from 'antd'
import { NavLink } from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons'
import useArticlesHooks from '../components/hooks/useArticlesHook'
const FailedImage = require('../assets/image/FailedImage.png')
const { Meta } = Card;


const antIcon = <LoadingOutlined spin />

const Article: React.FC = () => {
    const { loading, article, error, active } = useArticlesHooks()



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
            <Spin size="large" indicator={antIcon} />
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
                            cover={<Image
                                height={150}
                                alt="example"
                                src={item?.urlToImage}
                                preview={false}
                                placeholder={
                                    <Skeleton.Image style={{ width: '100%', height: 150 }} active={active} />
                                }
                                fallback={FailedImage}
                            />}
                        >
                            <Meta style={{ height: 100 }} title={item?.title} description={item?.description} />
                        </Card>
                    </NavLink>
                </Col>
            )}
        </Row >
    } else {
        RenderView = <Row>
            <Col
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
                span={24}
            >Something when wrong!</Col>
        </Row>
    }

    return RenderView
}

export default Article