import './Home.css';
import React from 'react';
import {useCookies} from 'react-cookie';

export default function Home() {
    const [cookies] = useCookies(['login']);
    const msg = cookies.login && cookies.login.username ? "connection OK" : "no connection";
    
    return (
        <>
        <h1 className="Home_title">
           5 Elements Newspaper !!
        </h1>

       
        <p>{msg}</p>


        
        </>

    );
}
