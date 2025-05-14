"use client";

import { useRef, useEffect, useState } from "react";
import { Work } from "@/data/works";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import Link from "next/link";

type WorksIconProps = {
  work: Work;
  openedId: string | null;
  setOpenedId: (id: string | null) => void;
  centerOffset: number;
  onClick: (id: string, el: HTMLDivElement | null) => void;
};

const textVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 0 },
  spacing: { marginLeft: 18, marginTop: 10 },
  none: { marginLeft: 0, marginTop: 0 },
};

export default function WorksIcon({
  work,
  openedId,
  setOpenedId,
  centerOffset,
  onClick,
}: WorksIconProps) {
  const isOpened = openedId === work.id;
  const ref = useRef<HTMLDivElement>(null);
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      setIsWide(window.innerWidth >= 1024); // 1024px以上なら"wide"
    };

    updateWidth(); // 初期実行
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div>
      <motion.div
        ref={ref}
        className={`relative m-4 md:m-8 bg-white rounded-xl flex flex-col items-start justify-start cursor-pointer overflow-hidden shadow-lg ${isOpened ? "z-100" : "z-10"}`}
        onClick={(e) => {
            e.stopPropagation(); // これで親の onClick が発火しないようにする
            isOpened ? null : onClick(work.id, ref.current);
        }}
        initial={{ width: 100, height: 100, x: 0 }}
        animate={
          isOpened
            ? {
                width: isWide ? "60vw" : "90vw",
                height: "100vh",
                x: centerOffset,
              }
            : {
                width: 100,
                height: 100,
                x: 0,
              }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {!openedId && (
            <motion.div
            className="absolute inset-0 rounded-xl bg-gray-500 opacity-20 z-0"
            animate={{
                scale: [0.95, 1.4],
                opacity: [0.3, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeOut",
            }}
            />
        )}
        <motion.div 
            className="relative w-full aspect-[16/9] overflow-hidden rounded-t-xl"
            variants={textVariants}
            animate={isOpened ? "visible" : "hidden"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover object-top"
            />
            <button
            onClick={(e) => {
                e.stopPropagation(); // 親の onClick を防ぐ
                setOpenedId(null);
            }}
            className="absolute top-2 left-2 bg-white hover:bg-opacity-100 text-black rounded-full p-2 shadow-md"
            >
                <IoIosClose size={28} />
            </button>
        </motion.div>

        <motion.div 
            className="flex flex items-center"
            variants={textVariants}
            animate={isOpened ? "spacing" : "none"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <Image
                src={work.icon}
                alt={work.title}
                width={100}
                height={100}
                className="rounded-xl"
            />
            <AnimatePresence>
                {isOpened && (
                    <motion.div 
                        className="flex flex-col"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link href={work.url} target="_blank">
                            <h2
                                className="ml-2 md:m-none mr-10  md:text-xl font-medium text-gray-800 hover:underline"
                            >
                                {work.title}
                            </h2>
                        </Link>
                        <h3
                            className="ml-2 text-sm font-medium text-gray-400 mt-1"
                        >
                            {work.type}
                        </h3>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
        <AnimatePresence>
            {isOpened && (
                <motion.div
                    className="md:mx-10 mx-5 my-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                >
                    <p>{work.description}</p>
                    <div className="space-y-4 mt-12">
                        {work.techUsed.map((section) => (
                            <div key={section.category}>
                                <h4 className="font-semibold text-gray-700">{section.category}</h4>
                                <ul className="flex flex-wrap gap-2 mt-1 text-sm text-gray-600">
                                    {section.technologies.map((tech) => (
                                    <li key={tech} className="bg-gray-100 px-2 py-1 rounded-md">
                                        {tech}
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </motion.div>
            )}
        </AnimatePresence>


      </motion.div>
    </div>
  );
}
