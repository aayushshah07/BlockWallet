import React from 'react';
import {Menu} from 'semantic-ui-react';
import Header from './Header'
import {Container} from 'semantic-ui-react';
import Head from 'next/head';

export default props =>
{
    return(
        <Container>
            <Head>
            <link
           rel="stylesheet"
           href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
            /> 
            </Head>

            <Header/>
            {props.children}
            
        </Container>
    )
} 