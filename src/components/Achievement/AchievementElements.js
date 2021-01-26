import styled from 'styled-components';

export const EducationContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }

`;

export const EducationWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const EducationCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 500px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{

    }
`;

export const EducationIcon = styled.img`
    height: 300px;
    width: 200px;
    margin-bottom: 10px;
`;
export const EducationIcon2 = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 10px;
`;
export const EducationIcon3 = styled.img`
    height: 50px;
    width: 200px;
    margin-bottom: 10px;
`;

export const EducationH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const EducationH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const EducationP = styled.p`
    font-size: 1rem;
    text-align: center;
`;