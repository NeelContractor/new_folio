import Image from "next/image";
import Link from "next/link";

export default function Links() {
    return <div className="flex gap-5 items-center">
        <Link 
            href={'https://docs.google.com/document/d/1hvIJzoh7xqaMCDZHgYUTdtUDxu_JOR2NnIOZ5BSzhJM'} 
            target="_blank"
            className="transition-transform hover:scale-110 hover:opacity-70"
        >
            <Image
                src="/cv.png"
                alt="CV"
                width={20}
                height={20}
                className="brightness-0 invert"
            />
        </Link>

        <Link 
            href={'https://github.com/NeelContractor'} 
            target="_blank"
            className="transition-transform hover:scale-110 hover:opacity-70"
        >
            <Image
                src="/github.png"
                alt="GitHub"
                width={20}
                height={20}
                className="brightness-0 invert"
            />
        </Link>

        <Link 
            href={'https://x.com/NeelContractor1'} 
            target="_blank"
            className="transition-transform hover:scale-110 hover:opacity-70"
        >
            <Image
                src="/twitter.png"
                alt="Twitter"
                width={20}
                height={20}
                className="brightness-0 invert"
            />
        </Link>

        <Link 
            href={'https://in.linkedin.com/in/neel-contractor-695400164'} 
            target="_blank"
            className="transition-transform hover:scale-110 hover:opacity-70"
        >
            <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={20}
                height={20}
                className="brightness-0 invert"
            />
        </Link>
    </div>
}