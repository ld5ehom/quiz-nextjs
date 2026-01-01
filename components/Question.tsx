"use client";

import { IQuestion } from "@/utils/types";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useTransition, animated } from "@react-spring/web";
import React, { useState } from "react";

// Question component
// 단일 퀴즈 문제 컴포넌트
interface Props {
    question: IQuestion;
    withId: boolean;
    checkEnabled: boolean;
    getAnswer?: (answer: boolean) => void;
}

// Quiz question UI
const Question = ({ question, withId, checkEnabled, getAnswer }: Props) => {
    // Selected option id(선택된 옵션 id)
    const [answer, setAnswer] = useState(0);

    // Answer check state(정답 확인 여부)
    const [isAnswered, setIsAnswered] = useState(false);

    // Correct answer state(정답 여부)
    const [isTrue, setIsTrue] = useState(false);

    // Check button animation
    // 정답 확인 버튼 애니메이션
    const transitions = useTransition(isAnswered, {
        from: { opacity: 0, height: 0 },
        enter: { opacity: 1, height: 40 },
        leave: { opacity: 0, height: 0 },
        config: {
            duration: 200,
        },
    });

    return (
        <div
            className={`bg-slate-100 rounded-xl shadow p-4 border-4 border-t-8 ${
                isAnswered
                    ? isTrue
                        ? "border-green-600"
                        : "border-red-600"
                    : "border-transparent"
            }`}
        >
            {/* Question text */}
            {/* 문제 텍스트 */}
            <div className="text-slate-500 text-xl mb-4">
                {(withId ? question.id + ") " : "") + question.text}
            </div>

            {/* Answer options */}
            {/* 답변 선택지 */}
            {question.options.map((option) => (
                <label
                    key={option.id}
                    onClick={() => {
                        setAnswer(option.id);
                        setIsAnswered(false);
                        if (getAnswer) {
                            getAnswer(question.answer === answer);
                        }
                    }}
                    htmlFor={`option_${question.id}_${option.id}`}
                    className={`flex justify-start items-center space-x-4 text-gray-500 bg-white
                    shadow-sm rounded-lg my-2 px-4 py-2 border-2 duration-200 border-transparent
                    hover:border-blue-600 cursor-pointer`}
                >
                    {/* Result icon */}
                    {/* 정답/오답 아이콘 */}
                    {isAnswered &&
                        (isTrue ? (
                            option.id === question.answer ? (
                                <CheckCircleIcon className="w-6 h-6 stroke-green-600" />
                            ) : null
                        ) : option.id === question.answer ? (
                            <CheckCircleIcon className="w-6 h-6 stroke-green-600" />
                        ) : (
                            <XCircleIcon className="w-6 h-6 stroke-red-600" />
                        ))}

                    {/* Radio input */}
                    {/* 라디오 입력 */}
                    <input
                        id={`option_${question.id}_${option.id}`}
                        type="radio"
                        name={`question_${question.id}`}
                    />
                    <span className="w-full">{option.text}</span>
                </label>
            ))}

            {/* Answer check button */}
            {/* 정답 확인 버튼 */}
            {checkEnabled &&
                transitions(
                    (styles, item) =>
                        answer > 0 &&
                        !item && (
                            <animated.div
                                style={{ overflow: "hidden", ...styles }}
                            >
                                <div
                                    onClick={() => {
                                        setIsAnswered(true);
                                        setIsTrue(question.answer === answer);
                                    }}
                                    className="bg-blue-600 p-2 text-slate-50 rounded text-center
                                    shadow hover:bg-blue-500 duration-200 cursor-pointer"
                                >
                                    Check the answer
                                </div>
                            </animated.div>
                        )
                )}
        </div>
    );
};

export default Question;
