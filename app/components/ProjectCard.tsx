import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ projectImage, projectTitle, projectDescription, projectLink }: { projectImage: string, projectTitle: string, projectDescription: string, projectLink: string }) {
    return (
        <div className="relative w-full h-64 bg-black rounded-lg overflow-hidden cursor-pointer group">
            <Link href={projectLink} target="_blank">
                {/* Image - hidden by default, shows on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Image
                        src={projectImage}
                        alt={projectTitle}
                        fill
                        className="object-cover"
                    />
                </div>
                
                {/* Text content - visible by default, fades on hover */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                    <h3 className="text-white text-2xl font-bold mb-3">
                        {projectTitle}
                    </h3>
                    <p className="text-gray-300 text-sm">
                        {projectDescription}
                    </p>
                </div>
            </Link>
        </div>
    );
}