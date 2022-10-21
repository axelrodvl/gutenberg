import useFetch from "../utils/hooks";
import {Breadcrumb, BreadcrumbItem, Container} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import React from "react";
import {Link, useParams} from "react-router-dom";

function Image(props) {
    return <img {...props} className="img-fluid"/>
}

export default function Topic() {
    let { topicId } = useParams();
    let [markdown] = useFetch("/article/" + topicId + ".md");

    let title = markdown.toString().split('\n')[0]

    let lines = markdown.toString().split('\n');
    lines.splice(0,1);
    let newMarkdown = lines.join('\n');

    // markdown = markdown.toString().split('\n').splice(0, 1).join('\n');

    return (
        <>
            <Breadcrumb className="sticky-top">
                <BreadcrumbItem>
                    <Link onClick={() => {
                        window.scrollTo(0, 0);
                    }} to="/">Vadim Axelrod</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active={true} style={{textAlign: "left"}}>{title}</BreadcrumbItem>
            </Breadcrumb>

            <Container className="text-left mb-4">
                <h4 className="mb-4">{title}</h4>
                <ReactMarkdown renderers={{image: Image}}>{newMarkdown}</ReactMarkdown>
            </Container>
        </>
    );
}