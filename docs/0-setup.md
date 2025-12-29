# Setup

## [27303f0](https://github.com/ld5ehom/quiz-nextjs/commit/27303f05dc7149030976829b55f3ca815179b80f)

```
(base) teo@MacBook-Air quiz-nextjs % npx create-next-app ./
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/_)? … No / Yes
✔ What import alias would you like configured? … @@/_
Creating a new Next.js app in /Users/teo/Desktop/quiz-nextjs.

Using npm.
```

---

### 폴더 3개(question , quiz , state)만들고 page.tsx 파일 생성.

rafce -> 탭 해서 초기화면 셋업

```
import React from "react";

const page = () => {
    return <div></div>;
};

export default page;
```

---

### 메인 page.tsx 내용 다 지우고 초기화

```
export default function Home() {
    return (
        <div>
            <h2>Home Page</h2>
        </div>
    );
}
```

---

##

### 1. 루트 폴더 구조 생성

프로젝트 루트 디렉토리에 아래 폴더를 생성한다.

-   `components`
-   `data`
-   `utils`

---

### 2. components 폴더 구성

`components` 폴더에 아래 TypeScript React 컴포넌트 파일을 생성한다.

-   `Header.tsx`
-   `Question.tsx`
-   `QuizForm.tsx`
-   `SelectState.tsx`
-   `State.tsx`

각 파일에서 다음 작업을 수행한다.

-   `rafce` 입력 후 `Tab` 키를 눌러 기본 React 컴포넌트 구조 생성
-   초기 화면 확인을 위한 기본 JSX만 작성

---

### 3. data 폴더 구성

테스트용 데이터를 위해 JSON 파일 2개를 생성한다.

-   퀴즈 및 질문 데이터 저장
-   화면 렌더링 및 로직 테스트 목적

---

### 4. utils 폴더 구성

공통 로직과 타입을 분리하기 위해 아래 파일을 생성한다.

-   `function.ts`
    -   공통으로 사용하는 함수 정의
-   `types.ts`
    -   TypeScript 타입 및 인터페이스 정의

---
