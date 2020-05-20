import React from 'react';
import Header from './components/Header';
import Global from './components/Global';
import Footer from './components/Footer';
import Content from './components/Content';

export default function Home() {
  return (
      <div>
        <>
          <Global/>
          <Header/>
          <Content/>
          <Footer/>
        </> 
    </div>
  );
}