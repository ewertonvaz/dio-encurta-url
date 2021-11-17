import React, { useEffect, useContext } from "react";
import styled from 'styled-components';
import { AppContext } from "../pages/app/App";
import {baseURL} from "../services/api";

export const Layout = (props) => {
    const { onClick, onChange } = props;
    const layoutState = useContext(AppContext);
    useEffect( ()=> {}, [layoutState])
    return(
        <WrapperLayout>
            <input type="text" placeholder="digite uma URL" onChange={onChange}></input>
            <button type="button" onClick={onClick}>Encurtar</button>
            <ShortenResult>
              <p>Nova URL: 
                <span>
                <a href={baseURL.toString() + '/' + layoutState.hash} target='_blank'>
                {baseURL.toString() + '/' + layoutState.hash}</a>
                </span>
              </p>
              <p>Hash: <span>{layoutState.hash}</span></p>
              <p>URL original: <span>{layoutState.originUrl}</span></p>
            </ShortenResult>
        </WrapperLayout>
    );
}

const WrapperLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-top: 10px;

    input {
      font-size: 1.5rem;
    }

    button {
      margin-top: 5px;
      text-transform: uppercase;
      font-size: 1.5rem;
      padding: 10px;
    }
`;

const ShortenResult = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  font-size: 1rem;
  margin-top: 10px;
  padding: 10px;
  background-color: lightblue;
  p {
    margin-top 2px;
    margin-bottom: 2px;
  }
  span {
    font-weight: bold;
  }
`;