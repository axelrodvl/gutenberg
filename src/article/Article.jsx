import useFetch from "../utils/hooks";
import {Container} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import React from "react";
import {Redirect} from "react-router-dom";

function Image(props) {
    return <img {...props} className="img-fluid"/>
}

function Article(props) {
    const [markdown] = useFetch(props.markdownFileUrl);

    return (
        <>
        {props.markdownFileUrl
                ? <Container className="text-left mb-4">
                    <h4 className="mb-4">{props.title}</h4>
                    <ReactMarkdown renderers={{image: Image}}>{markdown}</ReactMarkdown>
                </Container>
                : <Redirect to="/"/>
        }
        </>
    )
}

export default Article;