import styled from "@emotion/styled";

export const Mbti_Layout = styled.div`
    width : 100vw;
    font-size : 14px;
    display : flex;
    justify-content: center;
    background-color: white;
    height:calc(var(--vh,1vh)*100);
    //layout의 높이를 다양한 화면기기 뷰포트에 알맞게끔 스타일 설정하기
    //var(변수값1 ,변수값2 ) 변수값 1이없으면 2로 설정하기
`

export const StartPageLayout = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color : cornflowerblue;
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

export const StartLogo_Mbti = styled.div`
    background-color : #413730;
    color: #ffea35;
    width : 300px;
    height: 100px;
    display : flex;
    align-items : center;
    justify-content : center;
    border-radius : 50px;
    font-size: 50px;
`

export const StartLogo_1 = styled.div`
    display: flex;
    flex-direction: row;
    margin-top : 15px;
    font-size: 50px;
    position: relative;
    transition: transform 1s ease;
`

export const StartLogo_motion_Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const StartLogo_motion = styled.div`
    display: flex;
    flex-direction: row;
    margin-top : 15px;
    font-size: 50px;
    position: relative;
    transition: transform 0.3s ease;
    
    &:hover {
        transform: translateY(-20px);
    }
`

export const StartLogo_motion_spacebar = styled.div`
      margin-top: 15px;
    font-size: 50px;
     position: absolute;
    left: -9999px; /* 왼쪽으로 화면 밖으로 이동 */
`


export const StartButton = styled.button`
   font-family: Arial, Helvetica, sans-serif;
    margin-top: 20px;
    width: 300px;
    height: 100px;
    border-radius: 50px;
    border : 5px solid yellow;
    background-color: orange;
    font-size: 25px;
    border-color: yellow;
    background: linear-gradient(45deg, yellow 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    transition: background 300ms ease-in-out;

    &:hover {
        background-position: 0;
    }

    &:active{
        background-color: white;
    }
`

export const QuestionLayout = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #bacee0;
    width : 100%;
    max-width: 900px;
    height:100%;
    overflow: hidden;
`

export const MbtiTitle = styled.div`
    display : flex;
    flex-direction: row;
    width : 100%;
    align-items: center;
    padding : 15px;
    box-sizing :border-box;
    font-weight : 700;
`

export const MbtiTitle1 = styled.div`
    display : flex;
    flex  : 1;
`

export const QuestionList = styled.div`
    flex-direction: column;
    height: 100%;
    overflow : scroll;
    scrollbar-width : none;
`

export const QuestionItemLayout = styled.div`
    display: flex;
    flex: 1;
    margin : 10px 15px 5px 15px;
`

export const AnswerItemLayout = styled.div`
    width:100%;
    background-color : #fff;
    padding-bottom: 10px;
    display:flex;
    flex-direction: column;
`

export const ProfileImg = styled.div`
    display: flex;
    flex-direction: column;
    width: 40px;
    height : 40px;
    background-color : #a1b6e9;
    border-radius: 15px;
    margin-right : 5px;
    align-items: center;
    justify-content: center;
`

export const ProfileImg1 = styled.div`
    background-color : #cbd6f2;
    width : 8px;
    height: 8px;
    border-radius: 4px;
`

export const ProfileImg2 = styled.div`
    background-color : #cbd6f2;
    width : 16px;
    height: 8px;
    border-radius: 8px 8px 0px 0px;
    margin-top : 2px;
`
export const ChatListLayout = styled.div`
    display: flex;
    flex-direction: column;
`

export const ChatBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    max-width : 60vw;
    margin : 3px 0px 12px 0px;

    > div:nth-child(1) {
        /* 두 번째 자식 div 요소에 스타일을 적용합니다. */
        color: white;
        font-size : 12px;
        margin-top: 8px;
    }

    > div:nth-child(2) {
        /* 두 번째 자식 div 요소에 스타일을 적용합니다. */
        padding : 7px 10px 7px 10px;
        background-color: #fff;
        margin-left : -4px;
        border-radius: 10px;
        text-align : left;
    }
`

export const AchatBox = styled.div`
    display:flex;
    width : 100%;
    color: #969696;
    font-size : 22px;
    border-bottom : 1px solid #eee;
    margin-bottom : 25px;

    > div:nth-child(1) {
        display : flex;
        flex : 1;
        padding : 10px;
        box-sizing: border-box;
    }

    > div:nth-child(2) {
        padding: 10px;
    }
`

export const AnswerBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    text-align: center;
    box-shadow : 2px 2px 0px #ededed;
    border:1px solid #ededed;
    margin : 0px 20px 15px 20px;
    border-radius: 15px;
`