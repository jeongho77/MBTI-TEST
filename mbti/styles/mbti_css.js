import styled from "@emotion/styled";



export const Mbti_Layout = styled.div`
    width : 100vw;
    font-size : 14px;
    display :flex;
    justify-content: center;
    background-color: yellow;
    height:calc(var(--vh,1vh)*100);
`

export const StartPageLayout = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color : #ffea35;
    width : 100%;
    max-width : 900px;
    height: 100%;
    color : #413730;
`

export const StartLogo = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    font-weight:700;
`
export const StartLogo1 = styled.div`
    background-color : #413730;
    color: #ffea35;
    width : 100px;
    height: 80px;
    display : flex;
    align-items : center;
    justify-content : center;
    border-radius : 50px;
`

export const StartLogo2 = styled.div`
    margin-top : 15px;
`


export const StartButton = styled.button`
    font-size : 17px;
    font-weight : 700;
    margin-top : 20px;
    background-color: transparent; /* 배경색을 투명하게 설정 */
    border: none; /* 테두리 제거 */
`