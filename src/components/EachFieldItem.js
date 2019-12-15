import React from "react";
import styled from 'styled-components';
import { SwitchButton } from './SwitchButton';
import { FaTimes, FaUndo } from 'react-icons/fa';

/**
 * Each field item for lane
 * @param {content} data 
 * @param {onRemoveFields} callback 
 * @param {onUndoFields} callback 
 * @param {isBinFolder} flag 
 */
export function EachFieldItem({ content, onRemoveFields, onUndoFields, isBinFolder }) {
    const { fieldName, order, mandatory, fieldType, expectedValues } = content;

    return (
        <MainContainer>
            <input type="text" name="name" placeholder={fieldName} className='textInput' />
            <label className='index'>{order}</label>
            {isBinFolder ?
                <FaUndo className='icon' onClick={() => onUndoFields(content)} /> :
                <FaTimes className='icon' onClick={() => onRemoveFields(content)} />
            }
            <SwitchButton mandatory={mandatory} />

        </MainContainer >
    );
}

const MainContainer = styled.div`
          
    width: 300px;
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #424242;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    position:relative;
    background : white;

:hover .icon{
        display : flex;
}
:hover .index{
        display : none;
}

.textInput{

    width: 240px;
    height: 30px;
    outline: none;
    border: none;
    background: none;
}

.index{
        width: 30px;
        display : block;
        text-align : center;
}
.icon{
        display : none;
        width: 30px;
}

.closeIcon{
    width : 15px;
    height : 15px;
}
       
     
`;