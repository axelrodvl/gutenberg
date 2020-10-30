import React, {useState} from 'react';
import './App.css';
import {Container, Jumbotron} from "react-bootstrap";
import Article from "./article/Article";
import Main from "./main/Main";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faFilePdf} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
    const [main, setMain] = useState(true);

    const [articleTitle, setArticleTitle] = useState(null);
    const [articleMarkdownUrl, setArticleMarkdownUrl] = useState(null);

    return (
        <div className="App">
            <Container className="text-center">
                <Header/>

                {main
                    ? <Main setArticle={setArticleMarkdownUrl} setArticleTitle={setArticleTitle} setMain={setMain}/>
                    : <Article markdownFileUrl={articleMarkdownUrl} title={articleTitle} setMain={setMain}/>
                }

                <Footer/>
            </Container>
        </div>
    );
}

function Header() {
    return (
        <Jumbotron className="mt-4">
            <h3>Вадим Аксельрод</h3>
            <span>Разработчик ПО</span>
            <p className="mt-1 mb-0">
                <a href="https://github.com/axelrodvl"><FontAwesomeIcon icon={faGithub}/> axelrodvl</a>
            </p>
            <p className="mb-0">
                <a href="mailto:vadim@axelrod.co"><FontAwesomeIcon icon={faEnvelope}/> vadim@axelrod.co</a>
            </p>
            <p className="mb-0">
                <a href="https://github.com/axelrodvl"><FontAwesomeIcon icon={faFilePdf}/> Резюме</a>
            </p>
        </Jumbotron>
    )
}

function Footer() {
    return (
        <Jumbotron>
            <Container fluid={true}>
                <Row className="align-items-end">
                    <Col className="col-auto text-left">
                        <p className="mb-0 font-weight-bold">Vadim Axelrod</p>
                        <small className="d-block">&copy; {new Date().getFullYear()}</small>
                    </Col>

                    <Col className="text-right">
                        <p className="mb-0">Powered by</p>
                        <p className="mb-0 font-weight-bold">
                            <a href="https://github.com/axelrodvl/gutenberg" title="gutenberg">gutenberg</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default App;