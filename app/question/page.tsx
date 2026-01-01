import Question from "@/components/Question";
import { getQuestions } from "@/utils/functions";
import React from "react";

// Question page to render all quiz questions
// 모든 퀴즈 문제를 렌더링하는 Question 페이지
const QuestionPage = () => {
    // Load question data
    // 퀴즈 문제 데이터 로드
    const questions = getQuestions();

    return (
        <div className="flex flex-col space-y-4 md:space-y-8 p-4 lg:p-8">
            {/* Render question list */}
            {/* 문제 목록 렌더링 */}
            {questions.map((question) => (
                <Question
                    key={question.id}
                    question={question}
                    withId={false}
                    checkEnabled={true}
                />
            ))}
        </div>
    );
};

export default QuestionPage;
