import React, {useState} from 'react';
import './App.css';
import {Container, Jumbotron} from "react-bootstrap";
import Article from "./article/Article";
import Main from "./main/Main";

function App() {
    const [menu, setMenu] = useState(true);

    const [articleTitle, setArticleTitle] = useState(null);
    const [article, setArticle] = useState(null);

    return (
        <div className="App">
            <Container className="text-center">
                <Header/>

                {menu ? <Main setArticle={setArticle} setArticleTitle={setArticleTitle} setMenu={setMenu}/> :
                    <Article markdownFileUrl={article} title={articleTitle} setMenu={setMenu}/>}

                <Footer/>
            </Container>
        </div>
    );
}

function Header() {
    return (
        <Jumbotron className="mt-4">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-auto">
                    <h3 className="text-center">Вадим Аксельрод</h3>
                    <span className="text-center">Разработчик ПО</span>
                    <p className="text-center text-muted mt-1 mb-0"><a href="https://github.com/axelrodvl"><i
                        className="fab fa-github"> axelrodvl</i></a></p>
                    <p className="text-center text-muted mb-0"><a href="mailto:vadim@axelrod.co"><i
                        className="far fa-envelope"> vadim@axelrod.co</i></a></p>
                    <p className="text-center text-muted mb-0"><a href="https://github.com/axelrodvl"><i
                        className="far fa-file-pdf"> Résumé</i></a></p>
                </div>
            </div>
        </Jumbotron>
    )
}

function Footer() {
    return (
        <Jumbotron>
            <div className="container-fluid">
                <div className="row align-items-end">
                    <div className="col-auto text-left">
                        <p className="mb-0 font-weight-bold">Vadim Axelrod</p>
                        <small className="d-block">&copy;&nbsp;2020</small>
                    </div>
                    <div className="col text-right">
                        <p className="m-0">Powered by</p>
                        <p className="m-0 font-weight-bold"><a href="https://github.com/axelrodvl/gutenberg" title="gutenberg">gutenberg</a></p>
                    </div>
                </div>
            </div>
        </Jumbotron>
    )
}

export default App;