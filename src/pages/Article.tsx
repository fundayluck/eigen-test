import React from 'react'
import { Card, Col, Row, Spin, Image } from 'antd';
import { NavLink } from 'react-router-dom';
import useArticlesHooks from '../components/hooks/useArticlesHook';
const FailedImage = require('../assets/image/FailedImage.png')
const { Meta } = Card;



const Article: React.FC = () => {
    const { loading, article, error } = useArticlesHooks()


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
                            cover={<Image
                                height={150}
                                alt="example"
                                src={item?.urlToImage}
                                preview={false}
                                placeholder={
                                    <Image
                                        preview={false}
                                        src={FailedImage}
                                        width={300}
                                        height={150}
                                    />
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