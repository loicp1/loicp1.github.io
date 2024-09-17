import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export interface SocialMedia {
  link: string;
  icon: JSX.Element;
}

export const media: SocialMedia[] = [
  {
    link: "https://github.com/loicp1",
    icon: <FaGithub />,
  },
  {
    link: "https://twitter.com/ptitlouisp1",
    icon: <FaTwitter />
  },
];