# Question Page

## 0.intro

-   퀴즈 앱의 Question 기능을 중심으로 데이터 구조부터 화면 렌더링까지의 기본 흐름을 완성
    문제 데이터(JSON)를 타입으로 정리하고, 이를 화면에서 렌더링하며 정답을 확인하는 인터랙션까지 구현

---

## 1. 타입 및 데이터 구조 정리

-   퀴즈 문제와 상태 데이터를 표현하기 위해 다음 타입을 정의함
    -   `IQuestion`
    -   `IState`
    -   `QuestionTypes`
-   JSON 데이터 구조와 TypeScript 타입이 일치하도록 조정하여 타입 에러를 해결함
-   enum은 JSON과의 호환을 고려해 string enum 기반으로 정리함

---

## 2. 데이터 접근 유틸 함수 구현

-   정적 JSON 데이터를 불러오기 위한 유틸 함수 구현
    -   `getQuestions`
    -   `getStates`
    -   `getQuizQuestions`
-   기본 문제와 상태별 문제를 조합해 퀴즈에 사용할 문제 세트를 생성하도록 구성함

---

## 3. Question 컴포넌트 구현

-   단일 퀴즈 문제를 담당하는 `Question` 컴포넌트 구현
-   주요 기능
    -   선택지 클릭을 통한 답변 선택
    -   정답 확인 버튼 노출
    -   정답/오답에 따른 아이콘 및 스타일 변경
    -   `react-spring`을 활용한 버튼 애니메이션 적용
-   컴포넌트 책임을 명확히 분리하여 재사용 가능하도록 구성함

---

## 4. Question 페이지 연결

-   `/question` 페이지를 생성하여 문제 목록을 순회 렌더링
-   각 문제를 `Question` 컴포넌트로 분리해 표시하도록 구성함
-   페이지 단에서는 데이터 로드와 렌더링만 담당하도록 역할 분리함

---

## 5. 전역 레이아웃 구성

-   `layout.tsx`에서 전역 레이아웃 구조 정리
    -   Header 적용
    -   공통 컨테이너 스타일 적용
    -   Footer 추가
-   App Router 구조에 맞게 전역 스타일(`globals.css`) 적용 위치를 정리함

---

## 6. 개발 환경 및 타입 에러 정리

-   Path alias(`@/*`) 설정을 현재 폴더 구조에 맞게 수정
-   JSON import, enum 타입 불일치, strict 모드 관련 에러 해결
-   Next.js + TypeScript + ESLint 환경에서 발생하던 주요 에러를 정리함
