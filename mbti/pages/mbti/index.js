import { useEffect, useState } from "react";
import { Mbti_Layout,StartLogo,StartPageLayout,StartButton,StartLogo1,StartLogo2 } from "../../styles/mbti_css";
import theme from "../../styles/theme";

export default function App() {
    
const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
    useEffect(()=> {
        setVh()
    

    function onResize() {
        setVh()
    }

    window.addEventListener('resize' , onResize)

    },[])

    const [page,setPage] = useState(0)

    return (
        <Mbti_Layout>
            {page===0?
            <StartPageLayout>
                <StartLogo>
                    <StartLogo1>MBTI</StartLogo1>
                    <StartLogo2>▼</StartLogo2>
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

