import React from "react";
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

/**
 * Close button with icon and red background
 * @param {onClose} callback 
 */
export function CloseButton({ onClose }) {
    return (
        <MainContainer onClick={onClose}>
            <FaTimes className='icon' />
        </MainContainer >
    );
}

const MainContainer = styled.div`
   position: absolute;
    width: 20px;
    right: -10px;
    top: -10px;
    padding : 5px;
    border-radius: 50%;
    color: white;
    display : flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    cursor : pointer;
    background: red; 

   .icon{
       width : 15px;
       height : 15px;
   }
     
`;