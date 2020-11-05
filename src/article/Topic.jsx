import useFetch from "../utils/hooks";
import {Container} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import React from "react";
import {useParams} from "react-router-dom";

function Image(props) {
    return <img {...props} className="img-fluid"/>
}

export default function Topic() {
    let { topicId } = useParams();
    let [markdown] = useFetch("/article/" + topicId + ".md");
    return (
        <Container className="text-left mb-4">
            {/*<h4 className="mb-4">{props.title}</h4>*/}
            <ReactMarkdown renderers={{image: Image}}>{markdown}</ReactMarkdown>
        </Container>
    );
}