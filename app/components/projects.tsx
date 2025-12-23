import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold mb-8">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <ProjectCard
          projectImage="/carbon.png"
          projectTitle="Carbon"
          projectDescription="Carbon credit with auction on Solana"
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
          projectGithub="https://github.com/NeelContractor/solanax"
        />
        <ProjectCard
          projectImage="/airRights.png"
          projectTitle="AirRights"
          projectDescription="Buy, Sell air rights on Solana"
          projectLink="https://air-rights.vercel.app/"
          projectGithub="https://github.com/NeelContractor/AirRights"
        />
        <ProjectCard
          projectImage="/timeFun.png"
          projectTitle="TimeFun"
          projectDescription="Buy, Sell creator tokens and connect with them on Solana"
          projectLink="https://timefun.vercel.app/"
          projectGithub="https://github.com/NeelContractor/timefun"
        />
        <ProjectCard
          projectImage="/ledgerLines.png"
          projectTitle="LedgerLines"
          projectDescription="Write your journals on chain with Solana"
          projectLink="https://ledgerlines.vercel.app/"
          projectGithub="https://github.com/NeelContractor/LedgerLines"
        />
        <ProjectCard
          projectImage="/tokenLaunchpad.png"
          projectTitle="Token Launchpad"
          projectDescription="Solana Token Launchpad"
          projectLink="https://token-launchpad-better-steel.vercel.app/"
          projectGithub="https://github.com/NeelContractor/token-launchpad-better"
        />
        <ProjectCard
          projectImage="/webWallet.png"
          projectTitle="Web Wallet"
          projectDescription="Web based wallet on Solana. Create account with just one click"
          projectLink="https://web-based-wallet-better.vercel.app/"
          projectGithub="https://github.com/NeelContractor/web-based-wallet-better"
        />
      </div>

      <p className="text-center text-gray-500 text-sm">
        More projects on GitHub
      </p>
    </div>
  )
}