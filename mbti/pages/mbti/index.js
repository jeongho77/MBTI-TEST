import { useEffect, useState } from "react";
import { Mbti_Layout,StartLogo,StartPageLayout,StartButton,StartLogo_Mbti,StartLogo_motion,AnswerItemLayout,MbtiTitle,MbtiTitle1,QuestionItemLayout,QuestionLayout,QuestionList,ChatBox,ChatListLayout,ProfileImg,ProfileImg1,ProfileImg2, AchatBox, AnswerBox,} from "../../styles/mbti_css";
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

    const questionList = [
        {q:['갑자기 일이 생겨서' , '오늘 못 만날 것 같아'],
        a:[{type:'I' , text:'어쩔 수 없지 뭐 ㅠㅠ (오예!!!)'},
           {type:'E', text:'어쩔 수 없지 뭐 ㅠㅠ (다른사람 누구 만나지?'}]},
        
        {q:['너 이번주에 엄청 바빴다며','주말엔 뭐해?'],
        a:[{type:'E',text:'바빠서 못놀았어ㅠㅠ 나가 놀아야지!'},
           {type:'I',text:'너무 힘들었어ㅠㅠ 집에서 쉬어야지'}]},

        {q:['(자주 가는 카페 사장님이 아는척을 했다)'],
        a:[{type:'E',text:'(더 자주 와야지)'},
           {type:'I',text:'(이제 그만 와야지)'},]},

        {q:['넌 노래 들을때 뭘 중요하게 생각해?'],
        a:[{type:'S',text:'멜로디'}
          ,{type:'N',text:'가사'}]},

        {q:['사과하면 뭐가 떠올라?'],
        a:[{type:'N',text:'아이폰 로고ㅋㅋ 백설공주도 생각난다.'},
           {type:'S',text:'빨갛다. 맛있다. 동그랗다. 과일'},]},
        
        {q:['오늘 점심 뭐 먹을래?'],
        a:[{type:'S',text:'음. 파스타 먹을까?'},
           {type:'N',text:'파스타 먹을까? 아! 파스타 먹으면 느끼하니까 저녁엔 김치찌개를 먹어야겠다!'}]},

        {q:['나 요즘 너무 우울해서','여행 가려고'],
        a:[{type:'T',text:'어디로 여행가게?'},
           {type:'F',text:'무슨 일 있어?'}]},
           
        {q:['슬픔을 나누면 어떻게될까?'],
        a:[{type:'F',text:'슬픔이 반이 되지'},
           {type:'T',text:'슬픈 사람이 둘이 되겠지'}]},
           
        {q:['나 시험에서 떨어졌어...ㅠㅠ'],
        a:[{type:'F',text:'아고, 많이 속상하겠다ㅠㅠ'},
           {type:'T',text:'무슨 시험 봤는데? 몇점 받았는데?'}]},
       
        {q:['안읽은메시지 갯수 몇개야?'],
        a:[{type:'J',text:'0개 ~ 한자리수'},
           {type:'P',text:'10개 이상'}]},
              
        {q:['여행 일정 짰어?'],
        a:[{type:'J',text:'7시30분 만남, 8시 할매국밥, 9시 유리박물관, 11시 유리해수욕장, 12시 유리카페...'},
           {type:'P',text:'ㅇㅇ 국밥 먹고 바다가서 놀다가 카페가자'}]},
          
        {q:['2주 뒤에 시험입니다.'],
        a:[{type:'J',text:'시험이 2주밖에 안남았네. 이틀에 한과목씩은 끝내놔야겠다.'},
           {type:'P',text:'시험이 2주나 남았네!'}]},
           
]

    const handleCkAnswer = (type,idx) => {
        let ls = mbtiList;
        for(let i = 0; i < ls.length; i++){
            if(ls[i].name===type){
                ls[i].count = ls[i].count + 1;
            }
        }

        setMbtiList(ls);
        setPage(page+1);
        
        if(idx+1 === questionList.length){
            console.log('결과보기')
        }
    }

    const [mbtiList , setMbtiList] = useState([
        {name:'I', count:0} , {name:'E' , count:0 } , {name:'S' , count:0} , {name:'N',count:0},
        {name:'F', count:0} , {name:'T' , count:0 } , {name:'P' , count:0} , {name:'J',count:0},
        ])

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
            :page <= questionList.length?
            <QuestionLayout>
                <MbtiTitle>
                    <MbtiTitle1>MBTI 테스트</MbtiTitle1>
                    <div>{`${page} / ${questionList.length}`}</div> 
                    {/* 현재 페이지 / 전체 페이지 */}
                </MbtiTitle>
                {questionList.map((val,idx)=>
                    <QuestionList style={{display:page===idx+1?'flex':'none'}} key={idx}>
                        {console.log(mbtiList)}
                        <QuestionItemLayout>
                            <ProfileImg>
                                <ProfileImg1></ProfileImg1>
                                <ProfileImg2></ProfileImg2>
                            </ProfileImg>
                            
                            <ChatListLayout>
                               {val.q.map((qval, qidx) =>
                                    <ChatBox key={qidx}>
                                        <div>◀</div> <div>{qval}</div>
                                    </ChatBox>
                                )}  
                            </ChatListLayout>
                        </QuestionItemLayout>
                        <AnswerItemLayout>
                            <AchatBox>
                                <div>*</div> <div>#</div>
                            </AchatBox>


                            {val.a.map((aval,aidx)=>
                             <AnswerBox key={aidx} onClick={()=>handleCkAnswer(aval.type,idx)} >
                                {aval.text}
                             </AnswerBox>
                            )}
                        </AnswerItemLayout>
                    </QuestionList>
                )}
            </QuestionLayout>
            :
            <div>
                결과페이지
            </div>
        }
        </Mbti_Layout>
    );
}

