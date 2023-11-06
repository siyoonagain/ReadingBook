import "@/styles/globals.css";
import type { AppProps } from "next/app";
import BookHeader from "../src/commons/header/index.presenter";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  const uploadLink = createUploadLink({
    uri: "gs://readingbook-6f0e8.appspot.com",
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([uploadLink]),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <BookHeader />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
