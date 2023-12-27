import styled from 'styled-components';


export const Container = styled.div`
        width: 100vw;
        height: 100vh;
        background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
        display: flex;
        justify-content: center;
        align-items: center;
`;

export const TodoList = styled.div`
        background: #FFFFFF;
        padding: 20px;
        border-radius: 5px;

`;

export const List = styled.ul`
        padding: 0;
        margin: ;
        
`;
export const Item = styled.li`
        color: #000000;
        font-size: 15px;
        font-weight: 400px;
        background: #E4E4E4;
        box-shadow: 1px 4px 10px rgb(0, 0, 0, 0.2);
        border-radius: 5px;
        list-style-type: none;
        height: 60px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
`;

export const Input = styled.input`
        border-radius: 5px;
        border: 2px solid;
        height: 40px;
        font-weight: 15px;
        outline: none;
        padding-left: 10px;
`;

export const Button = styled.button`
       background: #8052EC;
       border-radius: 5px;
       height: 40px;
       border: none;
       color: #FFFFFF;
       cursor: pointer;
       margin-left: 10px;
`;