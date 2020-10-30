import Card from "react-bootstrap/Card";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Main(props) {
    return (
        <Row className="justify-content-between">
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
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
            </Col>

            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
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
            </Col>
        </Row>
    )
}

function LinkButton(props) {
    return (
        <Card className="mb-3 btn btn-outline-dark">
            <a href={props.link} onClick={() => {
                if (props.linkToFetch) {
                    props.setArticle(props.linkToFetch);
                    props.setArticleTitle(props.title)
                }
                props.setMenu(false);
            }} className="text-reset text-decoration-none">
                <Card.Body>
                    <h6 className="card-subtitle mb-1">{props.title}</h6>
                    {props.body ? <p className="mb-0">{props.body}</p> : <></>}
                    {props.tags.map((tag) => (
                        <span className="badge badge-primary mr-1">{tag}</span>
                    ))}
                </Card.Body>
            </a>
        </Card>
    )
}

export default Main;