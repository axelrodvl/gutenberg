import React, {useEffect, useState} from 'react';
import './App.css';
import {Breadcrumb, BreadcrumbItem, Container, Jumbotron} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ReactMarkdown from "react-markdown";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    async function fetchUrl() {
        console.log(url);
        const response = await fetch(url);
        const text = await response.text();
        setData(text);
        setLoading(false);
    }
    useEffect(() => {
        fetchUrl();
    }, []);
    return [data, loading];
}

function App() {
  const [menu, setMenu] = useState(true);

  const [articleTitle, setArticleTitle] = useState(null);
  const [article, setArticle] = useState(null);

  return (
    <div className="App">

      <Container>
        <Jumbotron className="mt-4">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-auto">
              <h3 className="text-center">Вадим Аксельрод</h3>
              <span className="text-center">Разработчик ПО</span>
              <p className="text-center text-muted mt-1 mb-0"><a href="https://github.com/axelrodvl"><i className="fab fa-github"> axelrodvl</i></a></p>
              <p className="text-center text-muted mb-0"><a href="mailto:vadim@axelrod.co"><i className="far fa-envelope"> vadim@axelrod.co</i></a></p>
              <p className="text-center text-muted mb-0"><a href="https://github.com/axelrodvl"><i className="far fa-file-pdf"> Résumé</i></a></p>
            </div>
          </div>
        </Jumbotron>

        {menu ? <Articles setArticle={setArticle} setArticleTitle={setArticleTitle} setMenu={setMenu}/> : <Article article={article} articleTitle={articleTitle} setMenu={setMenu}/>}

        <Jumbotron>
          <div className="container-fluid">
            <div className="row align-items-end">
              <div className="col-auto text-left">
                <p className="mb-0 font-weight-bold">Vadim Axelrod</p>
                <small className="d-block">&copy;&nbsp;2020</small>
              </div>
              <div className="col text-right">
                <p className="m-0">Powered by</p>
                <p className="m-0 font-weight-bold"><a href="https://axelrod.co" title="axelrod.co">axelrod-webserver</a>
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </Container>
    </div>
  );
}

function Article(props) {
    const [article, setArticle] = useFetch(props.article);

  return (
      <>
        <Breadcrumb>
          <BreadcrumbItem><a href="#" onClick={() => props.setMenu(true)}>Главная</a></BreadcrumbItem>
          <BreadcrumbItem active="true">Статьи</BreadcrumbItem>
        </Breadcrumb>

        <Container className="text-left mb-4">
          <h4 className="mb-4">{props.articleTitle}</h4>
          <ReactMarkdown>{article}</ReactMarkdown>
        </Container>
      </>
  )
}

function Articles(props) {
  return (
      <div className="row justify-content-between">
        <div className="col-xl-6 col-sm-10">
          <h5>Статьи</h5>

          <LinkButton
              setMenu={props.setMenu}
              setArticle={props.setArticle}
              setArticleTitle={props.setArticleTitle}
              title="Собираем домашнюю метеостанцию с Telegram ботом на Raspberry Pi"
              linkToFetch="/article/raspberry-pi-meteo.md"
              tags={["Разработка"]}
          />
          <LinkButton
              setMenu={props.setMenu}
              setArticle={props.setArticle}
              setArticleTitle={props.setArticleTitle}
              title="Скорость и высота в авиации, и почему использовать в полёте барометр
                  и GPS телефона (почти) бесполезно"
              linkToFetch="/article/airplane-speed-and-gps.md"
              tags={["Авиация"]}
          />
            <LinkButton
                setMenu={props.setMenu}
                setArticle={props.setArticle}
                setArticleTitle={props.setArticleTitle}
                title="Верификация и валидация"
                linkToFetch="/article/verification-validation.md"
                tags={["ISO 9000:2005"]}
            />
            <LinkButton
                setMenu={props.setMenu}
                setArticle={props.setArticle}
                setArticleTitle={props.setArticleTitle}
                title="Поднимаем собственный блог на Hugo"
                linkToFetch="/article/how-to-blog.md"
                tags={["Разработка"]}
            />
        </div>

        <div className="col-xl-6 col-sm-10">
          <h5>Работы</h5>

          <LinkButton
              title="IBM MQ Client"
              body="CLI для IBM MQ"
              link="https://github.com/axelrodvl/ibm-mq-client"
              tags={["Java", "IBM MQ"]}
          />
          <LinkButton
              title="Skyduck Web"
              body="Разработка front-end для Skyduck"
              link="https://skyduck.app/cabinet/"
              tags={["JavaScript", "React", "Bootstrap"]}
          />
          <LinkButton
              title="toU – couple game"
              body="Back-end для мобильного приложения"
              link="https://apps.apple.com/ru/app/tou-couple-game/id1478656277"
              tags={["Java", "Spring", "MongoDB"]}
          />
        </div>
      </div>
  )
}

function LinkButton(props) {
  return (
      <Card className="mb-3 btn btn-outline-dark">
        <a href={props.link} onClick={() => {
            if(props.linkToFetch) {
                props.setArticle(props.linkToFetch);
                props.setArticleTitle(props.title)
            }
            props.setMenu(false);
        }} className="text-reset text-decoration-none">
          <Card.Body>
            <h6 className="card-subtitle mb-1">{props.title}</h6>
            {props.body ? <p className="mb-0">{props.body}</p> : <></>}
            {props.body2 ? <p className="mb-0">{props.body2}</p> : <></>}
            {props.tags.map((tag) => (
              <span className="badge badge-primary mr-1">{tag}</span>
            ))}
          </Card.Body>
        </a>
      </Card>
  )
}

export default App;