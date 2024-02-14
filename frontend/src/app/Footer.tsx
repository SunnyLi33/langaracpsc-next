import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import SocialIcons from "./SocialIcons";

export default function Footer()
{
    const forms = {
        feedback: "https://forms.gle/jaYbdo6KWbGFvJJG8",
        register: "row max-[600px]:flex-col"
    };

    const resourcesMap = new Map<string, string>([
        ["Course Planner", "https://planner.langaracs.tech/" ],
        ["Transfer Guides", "https://drive.google.com/drive/folders/19b_LSWvUddlm4c6Huh5XWbnOHZct7m5B?usp=sharing"],
        ["Feedback", forms.feedback],
        ["More", "/resources"]
    ]);
    
    const linksMap = new Map<string, string>([
        ["Home", "/" ],
        ["About", "/about"],
        ["Events", "/events"], 
        ["Rules", "/"]
    ]);

    const resources: Array<React.ReactNode> = [];
    
    const links: Array<React.ReactNode> = [];

    const router = useRouter(); 
    

    resourcesMap.forEach((value: string, key: string) => {
        resources.push(<>
            <a href={value} className="hover:text-lang-orange">{key}</a>
        </>);
    });
    
    linksMap.forEach((value: string, key: string) => {
        links.push(<>
            <a href={value} className="hover:text-lang-orange">{key}</a>
        </>);
    });

    return (<>
        <div className="grid grid-cols-3 bg-[#1E1E1E] p-2 justify-center">
            <div className="flex flex-col items-center">
                <div className={"font-bold"}>Resources</div>
                <div className={"flex flex-col text-sm gap-3 mt-3"}>
                    {resources}
                </div>
                <div className="mt-6 text-xs">Copyright © {new Date(Date.now()).getFullYear()} Langara Computer Science Club</div>
            </div>
            <div className="flex flex-col items-center">
                <div className={"font-bold"}>Links</div>
                <div className={"flex flex-col gap-1 mt-1 items-center"}>
                    {links}
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className={"flex flex-col gap-6 items-center"}>
                    <div className={"font-bold flex flex-rowrow max-[600px]:flex-col gap-3 items-center"}>
                        <div>
                            Join Us
                        </div>

                        <Button onClick={() => router.push(forms.register) } className="bg-lang-orange rounded text-white max-[600px]:text-[10px] max-[600px]:h-8 max-[600px]:w-15 h-10 font-bold">Register</Button>
                    </div>
                    <div className={"font-bold flex flex-row max-[600px]:flex-col gap-3 items-center"}>
                        <div>
                        Connect
                        </div> 
                        <div className="gap-3">
                            <SocialIcons height={25} width={25}/>
                        </div>
                    </div>
                    <div className={"flex flex-row max-[600px]:flex-col gap-3 hover:text-lang-orange"}>
                        <div>
                            <a href="#top">Go to top</a>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </>);
}