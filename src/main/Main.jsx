import Card from "react-bootstrap/Card";
import React, {useCallback} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {useHistory} from 'react-router-dom';

function Main(props) {
    return (
        <Row className="justify-content-between">
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                <h5 className="mb-3">Статьи</h5>

                <LinkButton
                    setMain={props.setMain}
                    setArticle={props.setArticle}
                    setArticleTitle={props.setArticleTitle}
                    body="Собираем домашнюю метеостанцию с Telegram ботом на Raspberry Pi"
                    linkToFetch="/article/raspberry-pi-meteo.md?v=2"
                    tags={["Разработка"]}
                />
                <LinkButton
                    setMain={props.setMain}
                    setArticle={props.setArticle}
                    setArticleTitle={props.setArticleTitle}
                    body="Airplane ground handling - технология наземного обслуживания самолетов представителем на перроне"
                    linkToFetch="/article/airplane-ground-handling.md?v=2"
                    tags={["Авиация"]}
                />
                <LinkButton
                    setMain={props.setMain}
                    setArticle={props.setArticle}
                    setArticleTitle={props.setArticleTitle}
                    body="Скорость и высота в авиации, и почему использовать в полёте барометр
                  и GPS телефона (почти) бесполезно"
                    linkToFetch="/article/airplane-speed-and-gps.md?v=2"
                    tags={["Авиация"]}
                />
                <LinkButton
                    setMain={props.setMain}
                    setArticle={props.setArticle}
                    setArticleTitle={props.setArticleTitle}
                    body="Верификация и валидация"
                    linkToFetch="/article/verification-validation.md?v=2"
                    tags={["ISO 9000:2005"]}
                />
                <LinkButton
                    setMain={props.setMain}
                    setArticle={props.setArticle}
                    setArticleTitle={props.setArticleTitle}
                    body="Поднимаем собственный блог на Hugo"
                    linkToFetch="/article/how-to-blog.md?v=2"
                    tags={["Разработка"]}
                />
            </Col>

            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                <h5 className="mb-3">Работы</h5>

                <LinkButton
                    title="Gutenberg"
                    body="Платформа этого блога"
                    link="https://github.com/axelrodvl/gutenberg"
                    tags={["React"]}
                />
                <LinkButton
                    title="IBM MQ Client"
                    body="CLI для IBM MQ"
                    link="https://github.com/axelrodvl/ibm-mq-client"
                    tags={["Java", "IBM MQ"]}
                />
                <LinkButton
                    title="Jenkins toolkit for Kubernetes"
                    body="Создание pipeline на Jenkins в Kubernetes для сборки Java/Gradle"
                    link="https://github.com/axelrodvl/jenkins-toolkit"
                    tags={["Jenkins", "Kubernetes"]}
                />
                <LinkButton
                    title="Smirnov Tennis"
                    body="Веб-сайт тренера по большому теннису"
                    link="https://smirnovtennis.com"
                    tags={["JavaScript", "React", "Bootstrap"]}
                />
                <LinkButton
                    title="Skyduck Web"
                    body="Разработка frontend для Skyduck"
                    link="https://skyduck.app/cabinet/"
                    tags={["JavaScript", "React", "Bootstrap"]}
                />
                <LinkButton
                    title="toU – couple game"
                    body="Backend для мобильного приложения"
                    link="https://apps.apple.com/ru/app/tou-couple-game/id1478656277"
                    tags={["Java", "Spring", "MongoDB"]}
                />
                <LinkButton
                    title="youlost.today"
                    body="Калькулятор изменения курсов валют с момента начала COVID-19"
                    link="https://youlost.today/"
                    tags={["JavaScript"]}
                />
            </Col>
        </Row>
    )
}

function LinkButton(props) {
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/article'), [history]);

    return (
        <Card className="mb-3 btn btn-outline-dark">
            <a href={props.link} onClick={() => {
                if (props.linkToFetch) {
                    props.setArticle(props.linkToFetch);
                    props.setArticleTitle(props.title);
                    handleOnClick();
                }
                props.setMain(false);
            }} className="text-reset text-decoration-none">
                <Card.Body>
                    {props.title ? <h6 className="mb-1">{props.title}</h6> : null}
                    {props.body ? <p className="mb-1">{props.body}</p> : null}
                    {props.tags.map((tag) => (
                        <span className="badge badge-primary mr-1">{tag}</span>
                    ))}
                </Card.Body>
            </a>
        </Card>
    )
}

export default Main;