// Question data structure
// 퀴즈 문제 데이터 구조
export interface IQuestion {
    id: number;
    text: string;
    options: IOption[];
    answer: number;
    img: boolean;
    type: QuestionTypes;
}

// Question input types
// 문제 입력 방식 타입
export enum QuestionTypes {
    CHECK_BOX = "CHECK_BOX",
    RADIO_BOX = "RADIO_BOX",
}

// Question option structure
// 문제 선택지 데이터 구조
interface IOption {
    id: number;
    text: string;
}

// State-based question group
// 상태(State)별 문제 그룹 구조
export interface IState {
    id: number;
    title: string;
    questions: IQuestion[];
}
