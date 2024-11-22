import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    background-color: #CACACA;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const Content = styled.div`
    background-color: #FAFAFA;
    width: 60%;
    padding: 20px;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`