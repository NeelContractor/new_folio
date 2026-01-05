import AchievementCard from "./AchievementCard";

export default function Achievement() {
    return <div className="mb-10">
        <h1 className="text-2xl font-semibold mb-2">Achievements</h1>
        <div>
            {/* <AchievementCard image={"/superteams.png"} title={"Superteams"} description={'Won Hackathon'} /> */}
            <AchievementCard image={"/100xschool.png"} title={"100xdevs"} description={'Won Mini Hackathon'} link={'https://earn.superteam.fun/feed/submission/d5916dac-e084-4df0-8d07-30da37731662'} />
        </div>
    </div>
}