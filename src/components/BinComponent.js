import React from "react";
import styled from 'styled-components';
import { CloseButton } from './CloseButton'
import { EachFieldItem } from './EachFieldItem'
import { FullScreenDialog } from "../popups/FullScreenDialog";

/**
 * 
 * To show removed fields from lane
 * @param {visible} flag 
 * @param {fields} object  
 * @param {onUndoFields} callback 
 * @param {onClose} callback 
 * 
 */
export function BinComponent({ visible, fields, onUndoFields, onClose }) {

    return (
        <FullScreenDialog visible={visible}>
            <MainContainer >
                <CloseButton onClose={onClose} />
                {fields.map((content) => {
                    return <EachFieldItem key={content.id} content={content} onUndoFields={onUndoFields} isBinFolder={true} />
                })}
            </MainContainer >
        </FullScreenDialog>
    );
}

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 30px;
    position : relative;
    border-radius: 10px;
     
`;