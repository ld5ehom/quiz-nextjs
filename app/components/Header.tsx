"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";

// Header component with responsive navigation
// 반응형 네비게이션을 제공하는 헤더 컴포넌트
const Header = () => {
    // Mobile menu open state
    // 모바일 메뉴 열림 상태
    const [open, setOpen] = useState(false);

    // Navigation route definitions
    // 네비게이션 경로 정의
    const routes = [
        { title: "Home", path: "/" },
        { title: "Question", path: "/question" },
        { title: "State", path: "/state" },
        { title: "Quiz", path: "/quiz" },
    ];

    return (
        <header className="shadow-lg">
            {/* Mobile side menu */}
            {/* 모바일 사이드 메뉴 */}
            <div
                className={`fixed lg:hidden 
                transition-all z-20 duration-300 
                ${
                    open ? "right-0" : "-right-64"
                } p-4 bg-blue-500 h-screen w-64`}
            >
                {/* Close button for mobile menu */}
                {/* 모바일 메뉴 닫기 버튼 */}
                <XCircleIcon
                    className="w-8 h-8 stroke-slate-50 mb-4"
                    stroke="2"
                    onClick={() => setOpen(false)}
                />

                {/* Mobile navigation links */}
                {/* 모바일 네비게이션 링크 */}
                <div
                    className="flex flex-col space-y-4"
                    onClick={() => setOpen(false)}
                >
                    {routes.map((route) => (
                        <Link
                            className="px-6 py-2 text-slate-100 rounded bg-blue-600"
                            href={route.path}
                            key={route.path}
                        >
                            {route.title}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Header main bar */}
            {/* 헤더 메인 바 */}
            <div className="flex justify-between items-center px-6 py-4 bg-blue-600">
                {/* App title */}
                {/* 앱 타이틀 */}
                <div className="text-slate-50 text-xl sm:text-4xl lg:text-2xl xl:text-4xl font-bold">
                    Quiz App
                </div>

                {/* Desktop navigation */}
                {/* 데스크톱 네비게이션 */}
                <nav className="space-x-8 hidden lg:flex">
                    {routes.map((route) => (
                        <Link
                            className="px-6 py-2 text-slate-100 rounded bg-blue-700"
                            href={route.path}
                            key={route.path}
                        >
                            {route.title}
                        </Link>
                    ))}
                </nav>

                {/* Mobile menu toggle button */}
                {/* 모바일 메뉴 토글 버튼 */}
                <Bars3Icon
                    onClick={() => setOpen(!open)}
                    className="lg:hidden stroke-indigo-50 w-6 h-6"
                />
            </div>
        </header>
    );
};

export default Header;
