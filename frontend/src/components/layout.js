import React from 'react';
import styled from 'styled-components';

const handleTextChange = () => {

}

export const Layout = (props) => {
    const { onChange } = props;
    return(
        <WrapperLayout>
            <input type="text" placeholder="digite uma URL"></input>
            <button type="button" onClick={onChange}>Encurtar</button>
            <label>Encurtada</label>
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