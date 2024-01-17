import Image from 'next/image';
import React, {ReactNode} from 'react';
import Wrapper from "@/app/wrapper";
import Text from "./Text"
import 'tailwindcss/tailwind.css'

type Props = {
    backgroundUrl: string;
    title: ReactNode;
    description: ReactNode;
};

export default function ImageHeader() {
    return (
        <div className="relative">
            <Image
                sizes="100vw"
                priority
                src={"/banner.jpg"}
                alt=""
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/75"/>
            <Wrapper className="relative pt-24 pb-14 text-white">
                <h1 className="text-5xl font-bold max-w-xl text-white">{"Project Spokemon"}</h1>
                <h1 className="text-5xl mt-4 font-bold max-w-xl text-white">{"言灵计划"}</h1>
                <p className="text-xl mt-4 pl-1 max-w-xl text-white">{"中二嘴炮大作战"}</p>
            </Wrapper>
        </div>
    );
}
