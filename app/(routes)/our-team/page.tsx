import { getGithubData } from "@/actions/getGithubData";
import { Appbar } from "@/components/AppBar";
import { TeamGrid } from "@/components/TeamGrid";

const githubIds = ["user-64bit", "hkirat", "torvalds"];

export default async function OurTeamPage() {
  const team = await getGithubData({ githubIds });
  return (
    <div>
      <Appbar title="Our Team" />
      <TeamGrid team={team} />
    </div>
  );
}
