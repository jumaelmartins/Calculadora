import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: lightgray;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content =  styled.div`
    width: 200px;
    max-width: 50%;
    background-color: white;
    border-radius: 3px;
 
`
export const Row =  styled.div`
    display: flex;
    flex-flow:row;
    justify-content: space-between;
`
export const Column =  styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
`    
