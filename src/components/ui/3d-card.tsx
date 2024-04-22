"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card-config";
import Link from "next/link";

type ThreeDCardProps = {
    headText: string;
    content: string;
    imgSrc: string;
    cardHref: string;
};

export function ThreeDCard({ headText, content, imgSrc, cardHref }: ThreeDCardProps) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card hover:shadow-xl transtition duration-100 ease-in-out border-custom-cyan w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {headText}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {content}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={imgSrc}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={cardHref}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        Mehr Infos →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Details
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
