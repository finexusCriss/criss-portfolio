import type { MetaFunction } from "@remix-run/deno";

import SiteLogo from '../assets/images/SiteLogo.png';
import ResumeImage from '../assets/images/ResumeImage.png';
import { redirect } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Criss Portfolio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  return redirect("/about");
}

export default function Index() {
  return (
    <></>
  );
}
