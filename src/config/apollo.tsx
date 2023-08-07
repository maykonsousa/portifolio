import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from 'react'


const url = process.env.NEXT_PUBLIC_STRAPI_API_URL

const client = new ApolloClient({
    uri: `${url}`,
    cache: new InMemoryCache(),
});

interface StrapiProviderProps {
    children: React.ReactNode
}

export const StrapiProvider = ({ children }:StrapiProviderProps) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}