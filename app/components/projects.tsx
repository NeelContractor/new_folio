import ProjectCard from "./ProjectCard";

export default function Projects() {
    return <div className="my-10">
        <h1 className="text-2xl font-bold">Projects</h1>
        <div className="min-h-screen py-5">
            <div className="grid grid-cols-2 md:grid-rows-2 lg:grid-rows-2 ">
                {/* <ProjectCard
                    projectImage="/perp.png"
                    projectTitle="Perp-Dex"
                    projectDescription="Dex for perp futures with multiple liquidation on solana"
                    projectLink=""
                /> */}
                <ProjectCard
                    projectImage="/carbon.png"
                    projectTitle="Carbon"
                    projectDescription="Carbon cardit with auction on Solana"
                    projectLink="https://github.com/NeelContractor/carbon"
                />
                <ProjectCard
                    projectImage="/clmm.png"
                    projectTitle="CLMM"
                    projectDescription="CLMM on Solana"
                    projectLink="https://github.com/NeelContractor/clmm-program"
                />
                <ProjectCard
                    projectImage="/solanax.png"
                    projectTitle="SolanaX"
                    projectDescription="Social media on Solana"
                    projectLink="https://github.com/NeelContractor/solanax"
                />
            </div>
        </div>
    </div>
}