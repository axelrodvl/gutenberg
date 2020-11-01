import React, {useState} from 'react';
import './App.css';
import {Breadcrumb, BreadcrumbItem, Container, Jumbotron} from "react-bootstrap";
import Article from "./article/Article";
import Main from "./main/Main";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faFilePdf} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    const [main, setMain] = useState(true);

    const [articleTitle, setArticleTitle] = useState(null);
    const [articleMarkdownUrl, setArticleMarkdownUrl] = useState(null);

    return (
        <div className="App">
            <Container className="text-center">
                <Header/>

                <Router>
                    <div>
                        <Breadcrumb className="text-center sticky-top">
                            <BreadcrumbItem>
                                <Link onClick={() => {
                                    setMain(true);
                                    window.scrollTo(0, 0);
                                }} to="/">Главная</Link>
                            </BreadcrumbItem>
                            {!main
                                ? <BreadcrumbItem active={true}>Статьи</BreadcrumbItem>
                                : null
                            }
                        </Breadcrumb>
                        <Switch>
                            <Route path="/article">
                                <Article markdownFileUrl={articleMarkdownUrl} title={articleTitle} setMain={setMain}/>
                            </Route>
                            <Route path="/">
                                <Main setArticle={setArticleMarkdownUrl} setArticleTitle={setArticleTitle} setMain={setMain}/>
                            </Route>
                        </Switch>
                    </div>
                </Router>

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
                <a href="cv/CV-Axelrod_Vadim.pdf"><FontAwesomeIcon icon={faFilePdf}/> Резюме</a>
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