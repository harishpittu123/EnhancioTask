import React from "react";
import styled from 'styled-components';

/**
 * 
 * @param {mandatory} flag  
 */
export function SwitchButton({ mandatory }) {

    return (
        <MainContainer mandatory={mandatory}>
            <span className={'dot'} />
        </MainContainer >
    );
}

const MainContainer = styled.div`
        border: 2px solid ${p => p.mandatory === 'Y' ? '#8BC34A' : 'grey'};
        width: 40px;
        height: 15px;
        border-radius: 12px;
        display: flex;
        justify-content: ${p => p.mandatory === 'Y' ? 'flex-end' : 'flex-start'};
   .dot{
        width: 10px;
        height: 10px;
        background: ${p => p.mandatory === 'Y' ? '#8BC34A' : 'grey'};
        align-self: center;
        margin: 2px;
        border-radius: 50%;
   }    
     
`;