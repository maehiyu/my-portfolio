"use client";

import WorksIconList from "@/components/WorksIconList";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { stacks } from "@/data/works";

export default function Home() {
    const [expanded, setExpanded] = useState(false);
    return (
        <main className="bg-background relative">
            <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover sm:bg-contain pointer-events-none"
                style={{
                    backgroundImage: "url('/icon.svg')",
                    opacity: 0.1,
                }}
            />
            <div className="flex items-center justify-center h-screen">
                <WorksIconList />
            </div>
            <motion.div
                className="absolute bottom-0 bg-blue z-10 w-full overflow-hidden"
                initial={{ height: "3rem" }}
                animate={{ 
                    height: expanded ? "40vh" : "4rem",
                    backgroundColor: expanded ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0)",
                }}
                transition={{ duration: 0.4 }}
            >
                <div className="relative w-full h-5rem border-black border-[0.5px]">
                    <div
                        className="absolute right-12 top-2 w-12 h-12 cursor-pointer border border-black rounded-md flex p-4 "
                        onClick={() => setExpanded(!expanded)}
                    >
                        {!expanded && (
                            <motion.div
                                className="absolute inset-0 rounded-md bg-gray-500 opacity-20 z-0"
                                animate={{
                                    scale: [0.95, 1.2],
                                    opacity: [0.3, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeOut",
                                }}
                            />
                        )}
                        <motion.span
                            className="-ml-2 text-xl"
                            animate={{ rotate: expanded ? 90 : 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <BsChevronRight />
                        </motion.span>
                        <span className="text-lg text-xl -mt-1 -ml-1">_</span>
                    </div>
                </div>
                {expanded && (
                    <div className="md:p-12 p-6">
                        <h2 className="md:text-2xl text-lg font-bold">About</h2>
                        <p className="mt-2 text-sm md:text-base">
                            大学院にてCGレンダリングにおけるスペクトラルレンダリングの研究を行っております。
                            <br />
                            個人で開発と言うには仰々しいですが、作ってみたもの、必要に迫られ作ったもの、をまとめております。
                            <br />
                            上のアイコンをクリックすると、各プロジェクトの詳細が表示されます。
                            <br />
                        </p>
                        <ul className="flex flex-wrap gap-2 md:mt-12 mt-4">
                            {stacks.map((stack) => (
                                <li
                                    key={stack}
                                    className="bg-gray-200 px-3 py-1 rounded-md md:text-sm text-xs"
                                >
                                    {stack}
                                </li>
                            ))}
                        </ul>
                        {/* 連絡先メールアドレスを追加 */}
                        <div className="mt-6">
                            <h3 className="md:text-lg font-semibold">Contact</h3>
                            <p className="text mt-2">
                                <a
                                    href="mailto:m.hiyu3040@gmail.com"
                                    className="text-blue-500 hover:underline ml-1"
                                >
                                    m.hiyu3040@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                )}
            </motion.div>
        </main>
    );
}
