import Link from "next/link";
import Image from "next/image";

type TwoDCardProps = {
    headText: string;
    content: string;
    imgSrc: string;
    cardHref: string;
};

export default function TwoDCard({ headText, content, imgSrc, cardHref }: TwoDCardProps) {
    return (
        <div className="flex flex-col items-center justify-center w-[320px] h-[450px] border border-custom-cyan rounded-xl bg-white z-20 p-4">
            <Link href={cardHref}>
                <div className="flex flex-col items-center justify-center max-w-[300px]">
                    <h1 className="font-bold mb-4 text-custom-brown mt-8 text-2xl text-center break-words">
                        {headText}
                    </h1>
                    <div className="text-center break-words w-[300px] mb-2 text-custom-brown">
                        {content}
                    </div>
                    <Image src={imgSrc} alt="Image description" width={280} height={280} placeholder="empty" />
                    <div className="flex justify-between items-center w-full mt-6 p-4">
                        <p className="">Mehr Infos →</p>
                        
                        <p className=" py-2 px-4 bg-custom-brown text-custom-cyan border rounded-lg">Details</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}