import React from 'react';
import {Heading, Text} from "@chakra-ui/react";
import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <NavBar/>
        <Heading>Oops</Heading>
            <Text>{isRouteErrorResponse(error) ? 'Page does not exist' : 'Error Happened' }</Text>
        </>
    );
};

export default ErrorPage;