import React from 'react';
import './App.css';
import {Breadcrumb, BreadcrumbItem, Container, Jumbotron} from "react-bootstrap";
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
import Card from "react-bootstrap/Card";
import Topic from "./article/Topic";

export default function App() {
    return (
        <div className="App">
            <Container className="text-center">
                <Header/>

                <Router>
                    <div>
                        <Breadcrumb className="text-center sticky-top">
                            <BreadcrumbItem>
                                <Link onClick={() => {
                                    window.scrollTo(0, 0);
                                }} to="/">Главная</Link>
                            </BreadcrumbItem>
                            {!true
                                ? <BreadcrumbItem active={true}>Статьи</BreadcrumbItem>
                                : null
                            }
                        </Breadcrumb>

                        <Switch>
                            <Route path="/">
                                <Topics />
                            </Route>
                        </Switch>
                    </div>
                </Router>

                <Footer/>
            </Container>
        </div>
    );
}

function LinkButton(props) {
    return (

        <Card className="mb-3 btn btn-outline-dark">
            <Link className="text-reset text-decoration-none"
                  to={`/${props.linkToFetch}`}>
                <Card.Body>
                    {props.title ? <h6 className="mb-1">{props.title}</h6> : null}
                    {props.body ? <p className="mb-1">{props.body}</p> : null}
                    {props.tags.map((tag) => (
                        <span className="badge badge-primary mr-1">{tag}</span>
                    ))}
                </Card.Body>
            </Link>
        </Card>
    )
}

function LinkButtonExternal(props) {
    return (
        <Card className="mb-3 btn btn-outline-dark">
            <a className="text-reset text-decoration-none" href={props.link}>
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

function Topics() {
    return (
        <div>
            <Switch>
                <Route path={`/:topicId`}>
                    <Topic />
                </Route>
                <Route path="/">
                    <Row className="justify-content-between">
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <h5 className="mb-3">Статьи</h5>

                            <LinkButton
                                title="План вхождения в backend разработку"
                                linkToFetch="backend-plan"
                                tags={["Разработка", "Backend", "Обучение"]}
                            />
                            <LinkButton
                                title="Обзор IBM App Connect Enterprise"
                                linkToFetch="ibm-app-connect-enterprise"
                                tags={["IBM", "App Connect Enterprise", "Integration Bus"]}
                            />
                            <LinkButton
                                title="Собираем домашнюю метеостанцию с Telegram ботом на Raspberry Pi"
                                linkToFetch="raspberry-pi-meteo"
                                tags={["Разработка"]}
                            />
                            <LinkButton
                                title="Airplane ground handling - технология наземного обслуживания самолетов представителем на перроне"
                                linkToFetch="airplane-ground-handling"
                                tags={["Авиация"]}
                            />
                            <LinkButton
                                title="Скорость и высота в авиации, и почему использовать в полёте барометр
                  и GPS телефона (почти) бесполезно"
                                linkToFetch="airplane-speed-and-gps"
                                tags={["Авиация"]}
                            />
                            <LinkButton
                                title="Верификация и валидация"
                                linkToFetch="verification-validation"
                                tags={["ISO 9000:2005"]}
                            />
                            <LinkButton
                                title="Поднимаем собственный блог на Hugo"
                                linkToFetch="how-to-blog"
                                tags={["Разработка"]}
                            />
                        </Col>

                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <h5 className="mb-3">Работы</h5>

                            <LinkButtonExternal
                                title="ChatWords"
                                body="Telegram бот - словарь и тренажер для изучения иностранной лексики"
                                link="https://chatwords.app"
                                tags={["Java", "Telegram"]}
                            />
                            <LinkButtonExternal
                                title="Gutenberg"
                                body="Платформа этого блога"
                                link="https://github.com/axelrodvl/gutenberg"
                                tags={["React"]}
                            />
                            <LinkButtonExternal
                                title="IBM MQ Client"
                                body="CLI для IBM MQ"
                                link="https://github.com/axelrodvl/ibm-mq-client"
                                tags={["Java", "IBM MQ"]}
                            />
                            <LinkButtonExternal
                                title="Jenkins toolkit for Kubernetes"
                                body="Создание pipeline на Jenkins в Kubernetes для сборки Java/Gradle"
                                link="https://github.com/axelrodvl/jenkins-toolkit"
                                tags={["Jenkins", "Kubernetes"]}
                            />
                            <LinkButtonExternal
                                title="Smirnov Tennis"
                                body="Веб-сайт тренера по большому теннису"
                                link="https://smirnovtennis.com"
                                tags={["JavaScript", "React", "Bootstrap"]}
                            />
                            <LinkButtonExternal
                                title="Skyduck Web"
                                body="Разработка frontend для Skyduck"
                                link="https://skyduck.app/cabinet/"
                                tags={["JavaScript", "React", "Bootstrap"]}
                            />
                            <LinkButtonExternal
                                title="toU – couple game"
                                body="Backend для мобильного приложения"
                                link="https://apps.apple.com/ru/app/tou-couple-game/id1478656277"
                                tags={["Java", "Spring", "MongoDB"]}
                            />
                            <LinkButtonExternal
                                title="youlost.today"
                                body="Калькулятор изменения курсов валют с момента начала COVID-19"
                                link="https://youlost.today/"
                                tags={["JavaScript"]}
                            />
                        </Col>
                    </Row>
                </Route>
            </Switch>
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
