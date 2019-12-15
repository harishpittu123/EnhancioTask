import React from "react";
import styled from 'styled-components';

/**
 * to show fulscreen dialog with wrapped content
 * @param {props} props 
 */
export function FullScreenDialog({ children, visible }) {
    return visible ? 
        <MainContainer >
            {children}
        </MainContainer > :
        null
}

const MainContainer = styled.div`
    z-index: 1000;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display : flex;
    background: #00000045;
    justify-content : center;
    align-items : center;   
`;