import React, { useState } from 'react';
import { Input, Row, Col, Button, Typography } from 'antd';
import {ArrowRightOutlined, GithubOutlined} from '@ant-design/icons';

import './styles.css';
import ShortenService from '../../services/shorten';
import api from '../../config/AxiosConfig';


const { Text } = Typography;

export default function Index() { 
    
    const [error, setError] = useState('');
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortedUrl, setShortedUrl] = useState('');
    

    async function handleOnClick() {

        setError("");

        try{
            
            const response = await new ShortenService().shortenUrl(originalUrl);    
            setShortedUrl(api.defaults.baseURL + response.data.hashReference)            
        } catch (error) {

            setError("Ocorreu um erro ao relizar a chamada a API, verifique a digitação da URL a ser encurtada!");
        }
    }


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
                        <Input size="large" placeholder="URL Original" onChange={ e => setOriginalUrl(e.target.value)} type="url"/>
                    </Col>
                    <Col span={2} className="col">
                        <Button danger type="primary" className="button" shape="circle" icon={<ArrowRightOutlined />} size={36} onClick={handleOnClick}/>
                    </Col>
                    <Col span={11} className="col">
                        <Input size="large" placeholder="URL Encurtada" value={shortedUrl} />                        
                    </Col>
                </Row>
                <Row className="footer">
                    <div style={{marginRight: 30, color: 'rgb(236, 44, 44)', fontWeight: "bold"}}>
                        {error}
                    </div>
                    <a href="https://github.com/ThiagoTeodoro/toless#toless"><GithubOutlined style={{fontSize: 32, color: 'black'}} /></a>
                </Row>

            </div>
            
        </div>
    );
}

