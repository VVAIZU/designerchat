"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { TbMinusVertical } from "react-icons/tb";



type Props = Record<string, never>;

type Timeline = {
    label: string;
    timelines: {
        title: string;
        href: string;
    }[];
};

const timelineData: Timeline[] = [
    {
        label: "Chats1",
        timelines: [
            {
                href: "page1",
                title: "SomeTitle1",
            },
            {
                href: "page2",
                title: "SomeTitle2",
            },
            {
                href: "page3",
                title: "SomeTitle3",
            },
        ],
    },
    {
        label: "Chats2",
        timelines: [
            {
                href: "page11",
                title: "SomeTitle11",
            },
            {
                href: "page22",
                title: "SomeTitle22",
            },
            {
                href: "page33",
                title: "SomeTitle33",
            },
        ],
    },
];

export default function NavBar({ }: Props) {
    const [isSidebar, setSidebar] = useState(true)

    function toggleSidebar() {
        setSidebar(!isSidebar)
    }

    return (
        <div className={cn("fixed inset-y-0 left-0 z-50 transition-all",
            {
                "-translate-x-full": !isSidebar,
                "w-full max-w-[244px]": isSidebar
            }
        )}>
            {isSidebar &&
                <div
                    className={cn("min-h-screen w-full pl-4 pr-6 pt-20 bg-[#0D0D0D]")}
                >
                    {/* New chat button */}
                    <div className="absolute top-5 left-0 pl-4 pr-6 w-full">
                        <Link
                            href={"/"}
                            className="flex bg-[#0D0D0D] justify-between w-full p-5 hover:bg-slate-800/80 rounded-lg items-center transition-all"
                        >
                            <section className="flex items-center gap-2">
                                <div className="h-5 w-5 bg-white p-1 rounded-full">
                                    {/* <img src="/assets/chatgpt-log.svg" alt="" /> */}
                                </div>
                                <p className="text-sm">New Chat</p>
                                <FiEdit className="ml-10 text-white text-sm" />
                            </section>
                        </Link>
                    </div>

                    {/* timels */}
                    <div className="w-full flex flex-col gap-5">
                        {timelineData.map((d, i) => (
                            <Timeline key={i} label={d.label} timelines={d.timelines} />
                        ))}
                    </div>
                </div>
            }
            <div className=" absolute inset-y-0 right-[-30px]  flex items-center justify-center w-[30px]">
                <button
                    onClick={toggleSidebar}
                    className=" h-[100px] group  text-gray-500 hover:text-white   w-full flex items-center justify-center  transition-all   "
                >
                    {/* <FaChevronLeft /> */}
                    <FaChevronLeft className="hidden group-hover:flex  text-xl    delay-500 duration-500 ease-in-out transition-all" />
                    <TbMinusVertical className="text-3xl group-hover:hidden   delay-500 duration-500 ease-in-out  transition-all" />
                </button>
            </div>
        </div>
    );
}

function Timeline(props: Timeline) {
    const pathName = usePathname();

    return (
        <div className="w-full flex flex-col">
            <p className="text-sm text-gray-500 font-bold p-2">{props.label}</p>

            {props.timelines.map((d, i) => (
                <Link
                    key={i}
                    className={cn("p-2 hover:bg-slate-800/80 rounded-lg transition-all items-center text-sm w-full flex-justify-between",
                        { "bg-slate-800": `/${d.href}` === pathName }
                    )}
                    href={{
                        pathname: `/${d.href}`,
                        query: { name: d.title },
                    }}
                >
                    <div className="text-ellipsis overflow-hidden w-[80%] whitespace-nowrap">
                        {d.title}
                    </div>
                </Link>
            ))}
        </div>
    );
}
