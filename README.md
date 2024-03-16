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
        

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/aafcde50-e80f-48fb-92b5-14300c82804d/ce31efd0-e92b-47c5-b2d7-d2804c33b390/Untitled.png)

### setVh 함수 기능

- 다양한 웹 플랫폼과, 다양한 휴대폰기기에서 사용할수 있는만큼 **다양한 레이아웃에 
대응하기 위한** 함수!
- viewport란?
    - 뷰포트(Viewport)는 웹 페이지를 표시하는 브라우저 창의 영역을 나타냅니다. 즉, **사용자가 보고 있는 화면의 영역**을 의미합니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/aafcde50-e80f-48fb-92b5-14300c82804d/ba9a637c-f48f-49fd-b2fa-9f045c576e77/Untitled.png)

- **—vh 라는 변수로 height 를 정의해주었음**
- 주석적기!

### 화면 크기가 조정되거나 새로고침, 렌더링될 때 화면 레이아웃 맞추기

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/aafcde50-e80f-48fb-92b5-14300c82804d/219bd4ec-296c-4226-a5a3-87d20a3bc18e/Untitled.png)

### 삼항연산자를 사용하여 웹페이지를 구현

- 발상의 전환! 유연한 사고!

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/aafcde50-e80f-48fb-92b5-14300c82804d/4bc4dfe3-52a3-4d95-8a02-e70bdbcc626f/Untitled.png)


# 테스트페이지 구현하기

## 질문리스트 객체로 만들기

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/aafcde50-e80f-48fb-92b5-14300c82804d/d97fded7-607d-4048-8e36-ad28c3245ac2/Untitled.png)

**questionList 라는 객체를 만들어** 

**질문과 질문의 타입, 답변을 적었습니다!**

## handleCkAnswer 함수

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/aafcde50-e80f-48fb-92b5-14300c82804d/520b4045-9051-49eb-90a5-d9dc0facfce6/Untitled.png)

handleCkAnswer 함수는 답변을 받아 답변의 타입(I,E,S,N 등등)의 COUNT를 +1 해주는 함수

+1을 해주고 setMbtiList에 반영하여서 바꿔줘야함!
Page도 1올려주어 다음 질문 보여주기!

## QuestionList.map으로 객체의 값들을 val로 저장하고 idx로 구분하기

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/aafcde50-e80f-48fb-92b5-14300c82804d/de34a0cb-fb4d-41de-81f2-958a86b2f56d/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/aafcde50-e80f-48fb-92b5-14300c82804d/a8e62472-49cd-4d6b-8222-70523513b249/Untitled.png)

val.q.map으로 질문의 데이터값과 idx 뽑아내기
q의 값만 뽑습니다!

## **val.a 답변상자 출력하기**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/aafcde50-e80f-48fb-92b5-14300c82804d/f12f3693-9cd1-40d5-8716-f05982295074/Untitled.png)

[val.a.map](http://val.a.map) 으로 밑에 사진의 a를 뽑아내어 출력하기!

a는 요소의 값이 두개이기때문에 두번 출력함!

요소를 3개적으면 3번 출력이 됨!

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/aafcde50-e80f-48fb-92b5-14300c82804d/29eb759e-2fbe-4020-b18d-3c84036169fe/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/aafcde50-e80f-48fb-92b5-14300c82804d/fe487add-a53b-49bd-a1bb-f88095fcfc72/Untitled.png)

### **그냥 편하게 questionList.q.map을 사용하면 되지않을까? ?**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/aafcde50-e80f-48fb-92b5-14300c82804d/1873440f-7dd1-4596-a3b0-870aa8abfc8a/Untitled.png)

**!!! 해봤는데 이렇게하면 에러남!!!**

map메소드는 배열만 되고 val을 배열로 만들어주기때문에 

questionList.q 는 q부터 객체이기때문에 

배열만 되는 map 메소드를 사용할수가 없다.

val로 만들어주고 val.q.map을 통해 q 속성에 접근하여 배열을 순회할수 있다!

## 삼항연산자 (질문 : true : false)

page ≤questionList.length 값이 page가 더 많아지면 

결과페이지를 보여준다!

# 결과페이지 만들기!

결과에 출력할 MBTI 타입별 내용 만들기!

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/aafcde50-e80f-48fb-92b5-14300c82804d/67bf6af3-0cc6-4f14-b06b-cbcbd2cefa0f/Untitled.png)

page가 질문리스트의 끝에 도달하면 결과페이지에 필요한 로직을 실행!

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/aafcde50-e80f-48fb-92b5-14300c82804d/3d368454-7577-401e-822c-a90b4c1c4e48/Untitled.png)

1. 테스트페이지 구현하기에 handleCKAnswer 함수로

mbtiList 속성별 카운트+1 해주는 로직을 만들었었는데

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/aafcde50-e80f-48fb-92b5-14300c82804d/8b82ea4d-02ca-46df-9ff5-8ad8f21d33e2/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/aafcde50-e80f-48fb-92b5-14300c82804d/5cb06f44-cf1d-405d-9a33-822f21edc8a6/Untitled.png)

이걸 이용하여 결과페이지에 도착하면 더많이 카운트된걸 조합하여 결과창에 보여준다!

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/aafcde50-e80f-48fb-92b5-14300c82804d/c99bdc8b-db3c-4f03-b9fe-db8095253d23/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/aafcde50-e80f-48fb-92b5-14300c82804d/a60ab1ae-bfef-454d-bd23-f1835f48c81f/Untitled.png)

## **현재 삼항연산자 구조**

{page===0 ? 시작페이지 출력 : mbti 질문페이지!

page ≤ questionList.length ?  질문화면 : 결과화면!
