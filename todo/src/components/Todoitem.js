import React from 'react';
import styled from 'styled-components';

const listWrap = styled.div `
    display: 'flex';
    justify-content: 'center';
    align-items: 'center';
    flex-direction: 'column';
    
   
`
const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  display: inline-flex;

    .None {
        text-decoration: line-through;
    }
    .deleted {
        display: none;
    }
`;

const Todoitem = ({checked, text, id, onCheck, deleted}) => {
    console.log(id)
    return (
        <listWrap>
            <Title>  
                <div className={`TodoItem ${checked && 'None'}`}
                    onClick={()=>onCheck(id)}
                >{text}
                </div>
                <div><button onClick={() => deleted(id)}>delete</button></div>
            </Title>
        </listWrap>
    );
};

export default Todoitem;