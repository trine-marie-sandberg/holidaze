import React from "react";
import PageWrapper from "../../ui/pagewrapper";
import { useParams } from "react-router-dom";

export default function NotFound() {
    console.log(useParams())
    return(
        <PageWrapper>
            <h1>404 Page not found</h1>
        </PageWrapper>
    )
}