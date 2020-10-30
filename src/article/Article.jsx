import useFetch from "../utils/hooks";
import {Breadcrumb, BreadcrumbItem, Container} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import React from "react";

function Article(props) {
    const [markdown] = useFetch(props.markdownFileUrl);

    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="#" onClick={() => props.setMain(true)}>Главная</a>
                </BreadcrumbItem>
                <BreadcrumbItem active="true">Статьи</BreadcrumbItem>
            </Breadcrumb>

            <Container className="text-left mb-4">
                <h4 className="mb-4">{props.title}</h4>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </Container>
        </>
    )
}

export default Article;