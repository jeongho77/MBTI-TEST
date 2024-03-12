import { useEffect, useState } from "react";
import { Mbti_Layout,StartLogo,StartPageLayout,StartButton,StartLogo_Mbti,StartLogo_motion } from "../../styles/mbti_css";
import theme from "../../styles/theme";

export default function App() {
    
const setVh = () => {
    const vh = window.innerHeight * 0.01; 
    //현재 viewport 파악후 1/100 하기
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    //element 최상위 루트 요소의 스타일 '--vh'라는 변수 추가후 {vh}px 값 저장하기
}
    useEffect(()=> {  //useEffect는 화면이 렌더링되는 순간 실행
        setVh() //화면이 켜지는순간 함수실행 height 스타일 변경

        function onResize() { //렌더링이 아니여도 창크기 변경시 대응하기 위한 함수생성
            setVh() 
        }
        
        window.addEventListener('resize' , onResize) 
        //브라우저 창크기가 변경될때마다 호출되는 함수

    } , [])

    const [page,setPage] = useState(0)

    return (
        <Mbti_Layout>    
            {page===0? 
            //삼항연산자를 사용하여 0일때 StartPageLayout까지 보여줌
            //버튼이 눌려질때까지 0페이지를 보여주고 1이 넘어가면 다음페이지를 보여줌!
            //삼항연산자를 이렇게도 사용할수 있다.
            <StartPageLayout>
                <StartLogo>
                    <StartLogo_Mbti>MBTI</StartLogo_Mbti>
                    <StartLogo_motion>▼</StartLogo_motion>
                </StartLogo>
                <StartButton onClick={()=> setPage(1)}>테스트 시작하기</StartButton>
            </StartPageLayout>
            :
            <div>
                테스트페이지
            </div>
        }
        </Mbti_Layout>
    );
}

