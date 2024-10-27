import { getGithubData } from "@/actions/getGithubData";
import { TeamGrid } from "@/components/TeamGrid";

const githubIds = ["user-64bit", "hkirat", "torvalds"];

export default async function OurTeamPage() {
  const team = await getGithubData({ githubIds });
  return (
    <div>
      <h3 className="text-3xl text-center py-5 underline">Our Team</h3>
      <TeamGrid team={team} />
    </div>
  );
}
