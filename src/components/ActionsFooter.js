import React from "react";
import styled from 'styled-components';
import { FolderButton } from './FolderButton';

/**
 * Close button with icon and red background
 * @param {onSave} callback 
 * @param {onBinFolder} callback 
 * @param {count} int 
 */
export function ActionsFooter({ count, onSave, onBinFolder }) {

    return (
        <MainContainer >
            <button className='save' onClick={() => onSave()}> Save</button>
            <FolderButton onClick={onBinFolder} count={count}/>
        </MainContainer >
    );
}

const MainContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    height: 100px;
    width: 100%;
    justify-content: center;
    align-items : center;

    .save{
       background : green;
       height : 40px;
       width : 100px;
       display : flex;
       align-items : center;
       color : white;
       cursor: pointer;
       justify-content: center;
    }

    .folderContainer{
        position : relative;
    }
     
`;