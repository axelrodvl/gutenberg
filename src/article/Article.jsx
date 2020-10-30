import useFetch from "../utils/hooks";
import {Container} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import React from "react";

function Article(props) {
    const [markdown] = useFetch(props.markdownFileUrl);

    return (
        <Container className="text-left mb-4">
            <h4 className="mb-4">{props.title}</h4>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </Container>
    )
}

export default Article;