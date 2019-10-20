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
  min-width: 200px;
  justify-content: space-between;
  max-width: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: scroll;
    .TodoItem {
        width: 130px;
        max-width: 100px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: scroll;
        text-align: left;
    }
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