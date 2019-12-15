import React from "react";
import styled from 'styled-components';
import { FaFolderOpen } from 'react-icons/fa';


/**
 * 
 * @param {count} number  
 * @param {onClick} callback  
 */
export function FolderButton({ count, onClick }) {

    return (
        <MainContainer onClick={onClick}>
            <FaFolderOpen className='folder'  />
            <span className='count'>{count}</span>
        </MainContainer >
    );
}

const MainContainer = styled.div`
     position : relative;

    .folder{
        width: 40px;
        padding: 10px;
        height: 40px;
        color: grey;
        cursor: pointer;
    }

    .count{
        position: absolute;
        top: 0px;
        right: 0px;
        width: 25px;
        display: flex;
        border-radius: 50%;
        color: white;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        height: 25px;
        background: #424242;
    }  
     
`;