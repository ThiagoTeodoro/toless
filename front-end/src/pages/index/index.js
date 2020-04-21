import React from 'react';
import { Input, Row, Col, Button, Typography } from 'antd';
import {ArrowRightOutlined, GithubOutlined} from '@ant-design/icons';

import './styles.css';

const { Text } = Typography;

function index() {
    return(
        <div className="logon-container">

            <div className="form">
                
                <div className="logo">
                    TOLESS
                </div>

                <div className="text">
                    <Text>
                        TOLESS é um encurtador de URL's projetado para tornar suas URL's menores. O projeto está disponivel no 
                        GitHub para quem tiver curiosidade da construção do mesmo atrávez do icone no fim do panel.
                    </Text>
                </div>                

                <Row>
                    <Col span={11} className="col">
                        <Input size="large" placeholder="URL Original" />
                    </Col>
                    <Col span={2} className="col">
                        <Button type="primary" className="button" shape="circle" icon={<ArrowRightOutlined />} size={36} />
                    </Col>
                    <Col span={11} className="col">
                        <Input size="large" placeholder="URL Encurtada" />                        
                    </Col>
                </Row>
                <Row className="footer">
                    <a href="https://github.com/ThiagoTeodoro/toless#toless"><GithubOutlined style={{fontSize: 32}} /></a>
                </Row>

            </div>
            
        </div>
    );
}

export default index;

