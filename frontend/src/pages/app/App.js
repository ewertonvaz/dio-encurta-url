import React, { createContext, useState } from "react";
import './App.css';
import { Layout } from '../../components/layout';
import api from '../../services/api';
import { validateUrl } from "../../helpers";

export const AppContext = createContext();

function App() {
  const handleUrl = async () => {
    const url = await api.generate(textUrl);
    setAppInit({
      url : { shortUrl : url.shortUrl, hash : url.hash, originUrl : url.originUrl },
      formValidated: false,
    });
  }
  const handleTextChange = (event) => {
    setTextUrl(event.target.value);
    const validated = validateUrl(event.target.value);
    setAppInit({
      url: { shortUrl : '', hash : '', originUrl : ''},
      formValidated: validated
    });
  }
  //const [ appInit, setAppInit ] = useState({ shortUrl : '', hash : '', originUrl : ''});
  const [ appInit, setAppInit ] = useState();
  const [textUrl, setTextUrl] = useState();
  return (
    <AppContext.Provider value={ appInit }>
        <Layout onClick={handleUrl} onChange={handleTextChange}/>
    </AppContext.Provider>
  );
}

export default App;
