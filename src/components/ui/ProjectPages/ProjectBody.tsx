'client'
import { TextGenerateEffect } from "../text-generate-effect"

type ProjectBodyProps = {
    header: string;
    description: string;
 }

export default function ProjectBody({ header, description}:ProjectBodyProps) {
    return (
        <div className="w-full flex flex-col z-20">
            <div>
                <h1 className="text-3xl md:text-5xl font-bold ml-6 p-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 bg-opacity-50">
                    {header}
                </h1>

            </div>
        </div>
    )
}