import Image from "next/image";
import Link from "next/link";

export default function AchievementCard({ image, title, description, link }: { image: string, title: string, description: string, link?: string }) {
    return (
        <Link href={link ? link : ""} target="_blank">
            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-900 transition-colors duration-200 cursor-pointer group">
                <div className="border border-gray-700 rounded-full flex items-center justify-center w-14 h-14 shrink-0 group-hover:border-gray-600 transition-colors">
                    <Image 
                        src={image} 
                        alt={title} 
                        height={44} 
                        width={44} 
                        className="rounded-full" 
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <h1 className="font-semibold text-lg text-white group-hover:text-gray-100 transition-colors">
                        {title}
                    </h1>
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
}