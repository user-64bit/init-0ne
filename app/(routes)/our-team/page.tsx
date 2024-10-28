import { getGithubData } from "@/actions/getGithubData";
import { Appbar } from "@/components/AppBar";
import { TeamGrid } from "@/components/TeamGrid";
import { Button } from "@/components/ui/button";

const githubIds = ["user-64bit", "hkirat", "torvalds"];

export default async function OurTeamPage() {
  const team = await getGithubData({ githubIds });
  return (
    <div>
      <Appbar title="Our Team" />
      <Button
        variant={"ghost"}
        className="border float-end mb-2 mx-16 font-sans"
      >
        Send 0.5 SOL & Support us
      </Button>
      <div className="clear-both border-b border-b-slate-400/20"></div>
      <TeamGrid team={team} />
    </div>
  );
}
