# MBTI-TEST

https://jeongho77.github.io/MBTI-TEST/index.html

# **시작페이지 만들기**

## 제작방식은?

- **[React] 스타일드 컴포넌트(styled-components) 기법을 사용하여 제작중!**
    - 스타일드 컴포넌트란 ?
    
    [[React] 스타일드 컴포넌트(styled-components)](https://jisilver-k.tistory.com/59)
    

## 디자인 패턴은?

- **추후에 container-presenter 패턴을 사용해 디자인 패턴을 할 예정입니다!**
    - container-presenter란 ?
    
    [[React] 실무용 폴더구조 container / presenter](https://velog.io/@badassong/React-실무용-폴더구조-props)
    

 ================================================================

## 코드리뷰

- **vh와 vw란?**
    - **`vh`**와 **`vw`**는 CSS의 상대 단위(relative units)로, 뷰포트(viewport)의 크기에 상대적으로 크기를 지정하는 데 사용됩니다.
        - **`vh`**(Viewport Height): 뷰포트의 높이에 상대적인 크기를 나타냅니다. 뷰포트의 높이가 100%에 해당하는 값입니다. 예를 들어, **`50vh`**는 뷰포트 높이의 50%를 의미합니다.
        - **`vw`**(Viewport Width): 뷰포트의 너비에 상대적인 크기를 나타냅니다. 뷰포트의 너비가 100%에 해당하는 값입니다. 예를 들어, **`50vw`**는 뷰포트 너비의 50%를 의미합니다.
        

![a1](https://github.com/jeongho77/MBTI-TEST/assets/115057094/eea53844-c569-45a2-aa16-adf060fedd7f)

### setVh 함수 기능

- 다양한 웹 플랫폼과, 다양한 휴대폰기기에서 사용할수 있는만큼 **다양한 레이아웃에 
대응하기 위한** 함수!
- viewport란?
    - 뷰포트(Viewport)는 웹 페이지를 표시하는 브라우저 창의 영역을 나타냅니다. 즉, **사용자가 보고 있는 화면의 영역**을 의미합니다.

![a2](https://github.com/jeongho77/MBTI-TEST/assets/115057094/40d4cb1d-c979-48c9-8247-211ecfbd1cc5)

- **—vh 라는 변수로 height 를 정의해주었음**
- 주석적기!

### 화면 크기가 조정되거나 새로고침, 렌더링될 때 화면 레이아웃 맞추기

![3](https://github.com/jeongho77/MBTI-TEST/assets/115057094/963bccd7-0865-4353-b782-efd15031da85)

### 삼항연산자를 사용하여 웹페이지를 구현

- 발상의 전환! 유연한 사고!

![4](https://github.com/jeongho77/MBTI-TEST/assets/115057094/64eaea5c-6632-4b3f-9c7a-1d946a3116ba)


# 테스트페이지 구현하기

## 질문리스트 객체로 만들기

![5](https://github.com/jeongho77/MBTI-TEST/assets/115057094/3d60f010-af29-4b2d-95e1-9c24954f175c)

**questionList 라는 객체를 만들어** 

**질문과 질문의 타입, 답변을 적었습니다!**

## handleCkAnswer 함수

![6](https://github.com/jeongho77/MBTI-TEST/assets/115057094/5900c3c9-d5b5-4da3-8215-ff4cfe939fa1)

handleCkAnswer 함수는 답변을 받아 답변의 타입(I,E,S,N 등등)의 COUNT를 +1 해주는 함수

+1을 해주고 setMbtiList에 반영하여서 바꿔줘야함!
Page도 1올려주어 다음 질문 보여주기!

## QuestionList.map으로 객체의 값들을 val로 저장하고 idx로 구분하기

![7](https://github.com/jeongho77/MBTI-TEST/assets/115057094/6fe6a32e-b7eb-4595-aab8-9e3b375bb005)
![b](https://github.com/jeongho77/MBTI-TEST/assets/115057094/11314896-bee8-4a23-9aa9-d236028b925e)


val.q.map으로 질문의 데이터값과 idx 뽑아내기
q의 값만 뽑습니다!

## **val.a 답변상자 출력하기**

![8](https://github.com/jeongho77/MBTI-TEST/assets/115057094/59acc3a5-37bd-42f1-bc52-b70f7d2c5383)

[val.a.map](http://val.a.map) 으로 밑에 사진의 a를 뽑아내어 출력하기!

a는 요소의 값이 두개이기때문에 두번 출력함!

요소를 3개적으면 3번 출력이 됨!
![9](https://github.com/jeongho77/MBTI-TEST/assets/115057094/fe213bac-6cd3-475d-adca-24f1418f2599)

![10](https://github.com/jeongho77/MBTI-TEST/assets/115057094/c8ed99cf-9b90-4d2a-b24d-ca9fe838b1dc)

### **그냥 편하게 questionList.q.map을 사용하면 되지않을까? ?**

![11](https://github.com/jeongho77/MBTI-TEST/assets/115057094/c40ff94b-d599-4529-b9b1-4fd484473eaa)
**!!! 해봤는데 이렇게하면 에러남!!!**

map메소드는 배열만 되고 val을 배열로 만들어주기때문에 

questionList.q 는 q부터 객체이기때문에 

배열만 되는 map 메소드를 사용할수가 없다.

val로 만들어주고 val.q.map을 통해 q 속성에 접근하여 배열을 순회할수 있다!

## 삼항연산자 (질문 : true : false)

page ≤questionList.length 값이 page가 더 많아지면 

결과페이지를 보여준다!
![12](https://github.com/jeongho77/MBTI-TEST/assets/115057094/2e2f8d8e-4d04-416d-b589-aaffcc1cf800)


# 결과페이지 만들기!

결과에 출력할 MBTI 타입별 내용 만들기!

![13](https://github.com/jeongho77/MBTI-TEST/assets/115057094/38a316d3-b13d-4f91-bbb9-14f66c72835a)

page가 질문리스트의 끝에 도달하면 결과페이지에 필요한 로직을 실행!

![14](https://github.com/jeongho77/MBTI-TEST/assets/115057094/b76b1983-df1c-40f3-923f-eb439e4c91db)

1. 테스트페이지 구현하기에 handleCKAnswer 함수로

mbtiList 속성별 카운트+1 해주는 로직을 만들었었는데

![15](https://github.com/jeongho77/MBTI-TEST/assets/115057094/a7c8b03c-342c-4f2d-ba72-8e6e3f04a5a9)


![16](https://github.com/jeongho77/MBTI-TEST/assets/115057094/9bdfcedd-90ab-4a5d-a927-44e3e39cfddc)

이걸 이용하여 결과페이지에 도착하면 더많이 카운트된걸 조합하여 결과창에 보여준다!

![17](https://github.com/jeongho77/MBTI-TEST/assets/115057094/db9966df-555a-4363-bf63-6c1bb93161a3)

## **현재 삼항연산자 구조**

{page===0 ? 시작페이지 출력 : mbti 질문페이지!

page ≤ questionList.length ?  질문화면 : 결과화면!
