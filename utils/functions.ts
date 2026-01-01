import { IQuestion, IState } from "./types";
import questions from "@/data/questions.json";
import states from "@/data/states.json";

// Get all base questions
// 기본 퀴즈 문제 목록을 불러오는 함수
export const getQuestions = (): IQuestion[] => {
    return questions as IQuestion[];
};

// Get all state-based question sets
// 상태(State)별 문제 데이터를 불러오는 함수
export const getStates = (): IState[] => {
    return states as IState[];
};

// Combine base questions with state-specific questions
// 기본 문제와 선택된 상태의 문제를 합쳐 퀴즈용 문제를 생성
export const getQuizQuestions = (state: number): IQuestion[] => {
    const baseQuestions = getQuestions();
    const stateQuestions = getStates()[state - 1].questions;

    return [...baseQuestions.slice(0, 30), ...stateQuestions.slice(0, 3)];
};
