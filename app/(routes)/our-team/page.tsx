import { getGithubData } from "@/actions/getGithubData";
import { Appbar } from "@/components/AppBar";
import { SendCrypto } from "@/components/SendCrypto";
import { TeamGrid } from "@/components/TeamGrid";

const githubIds = ["user-64bit", "hkirat", "torvalds"];

export default async function OurTeamPage() {
  const team = await getGithubData({ githubIds });
  return (
    <div>
      <Appbar title="Our Team" />
      <SendCrypto />
      <div className="clear-both border-b border-b-slate-400/20"></div>
      <TeamGrid team={team} />
    </div>
  );
}
