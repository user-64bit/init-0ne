"use server";

export const getGithubData = async ({ githubIds }: { githubIds: string[] }) => {
  let final: any = [];
  await Promise.all(
    githubIds.map(async (id) => {
      const response = await fetch(`https://api.github.com/users/${id}`);
      const data = await response.json();
      final.push(data);
    }),
  );
  return final;
};
