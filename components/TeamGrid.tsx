"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ExternalLink, X } from "lucide-react";
import { BackgroundGradient } from "./ui/background-gradient";

export const TeamGrid = ({ team }: { team: any }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 place-items-center pt-4">
      {team.length !== 0 &&
        team.map((member: any, index: number) => (
          <BackgroundGradient
            key={index}
            className="rounded-[22px] py-6 xl:w-[350px] w-[250px] bg-zinc-900"
          >
            <div className="flex flex-col items-center justify-center">
              <img
                src={member.avatar_url}
                alt={member.name}
                className="w-32 h-32 rounded-full mt-2"
              />
              <div className="flex gap-x-4 justify-between w-full px-4 items-center mt-4">
                <div className="text-center">
                  <span className="text-sm font-light">
                    {member.followers > 1000
                      ? parseFloat(
                          (Number(member.followers) / 1000).toLocaleString(),
                        ).toFixed(1) + "k"
                      : member.followers}
                  </span>
                  <br />
                  <span className="text-sm font-light">Followers</span>
                </div>
                <div className="pr-7 text-center">
                  <span className="font-light">{member.login}</span>
                </div>
                <div className="cursor-pointer">
                  <a
                    target="_blank"
                    href={member.html_url}
                    className="cursor-pointer"
                  >
                    <GitHubLogoIcon className="w-6 h-6 text-gray-500" />
                  </a>
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-center text-sm font-light">
                  {member.bio ?? "Bro Doesn't need bio"}
                </p>
              </div>
              <div className="flex justify-between w-full px-4 items-center mt-4">
                <div>
                  <a
                    target="_blank"
                    href={
                      member.twitter_username
                        ? `https://x.com/${member.twitter_username}`
                        : "#"
                    }
                    className="cursor-pointer"
                  >
                    <X className="w-7 h-7 text-gray-500 hover:scale-125 transition-all" />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    href={member.location}
                    className="cursor-pointer"
                  >
                    {member.location ?? "Earth"}
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    href={member.blog ? `${member.blog}` : "#"}
                    className="cursor-pointer"
                  >
                    <ExternalLink className="w-6 h-6 text-gray-500 hover:scale-125 transition-all" />
                  </a>
                </div>
              </div>
            </div>
          </BackgroundGradient>
        ))}
    </div>
  );
};
