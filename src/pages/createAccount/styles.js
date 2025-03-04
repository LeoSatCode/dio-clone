import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 126px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;

export const Wrapper = styled.div`
    max-width: 300px;
`;

export const Colunm = styled.div`
    flex: 1;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

export const Title = styled.h2`
    font-family: 'Open-Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 180px;
    line-height: 44px;

    color: #FFFFFF;
`;

export const TitleAccount = styled.p`
    font-family: 'Open-Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 20px;
    line-height: 44px;
`;

export const SubTitleAccount = styled.p`
    font-family: 'Open-Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`;


export const BottomAccount = styled.p`
    font-family: 'Open-Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 25px;
`;

export const BottomLogin = styled.p`
    font-family: 'Open-Sans', sans-serif;
    font-style: normal;
    font-weight: bolder;
    font-size: 12px;
    margin-bottom: 80px;
    line-height: 25px;
    text-decoration: none;
`;

export const BottomLink = styled.a`
    font-family: 'Open-Sans', sans-serif;
    font-style: normal;
    font-weight: bolder;
    font-size: 12px;
    
    margin-bottom: 80px;
    margin-right: 145px;
    
    line-height: 25px;
    text-decoration: none;
    color: #28d97f;

    cursor: pointer;
`;

