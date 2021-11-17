import React, { createContext, useState } from "react";
import './App.css';
import { Layout } from '../../components/layout';
import api from '../../services/api';

export const AppContext = createContext();

function App() {
  const handleUrl = async () => {
    const url = await api.generate(textUrl);
    console.log(url);
    setAppInit( { shortUrl : url.shortUrl, hash : url.hash, originUrl : url.originUrl});
  }
  const handleTextChange = (event) => {
    setTextUrl(event.target.value);
    setAppInit({ shortUrl : '', hash : '', originUrl : ''})
  }
  const [ appInit, setAppInit ] = useState({ shortUrl : '', hash : '', originUrl : ''});
  const [textUrl, setTextUrl] = useState();
  return (
    <AppContext.Provider value={ appInit }>
        <Layout onClick={handleUrl} onChange={handleTextChange}/>
    </AppContext.Provider>
  );
}

export default App;
