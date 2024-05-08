import SiteLogo from '../assets/images/SiteLogo.png';
import ResumeImage from '../assets/images/ResumeImage.png';
import { Outlet } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: "Criss Portfolio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function App() {
  return (
    <>
      {/* Top menu bar */}
      <div className="bg-primary-blue text-white flex justify-between py-5 px-12">
        {/* Site logo */}
        <div className="flex justify-content items-center">
          <div>
            <img src={SiteLogo} alt="SiteLogo" className="w-12 mr-4" />
          </div>
          <div className="font-pacifico text-2xl">CJH</div>
        </div>

        {/* Menu */}
        <div className="flex justify-between items-center gap-6 font-notoSerifJPMedium">
          <div>About</div>
          <div>Project</div>
          <div>Contact</div>
          <div className="flex justify-content items-center bg-white p-2 rounded-md">
            <img src={ResumeImage} alt="ResumeIcon" className="w-4 mr-2 shadow-md" />
            <div className="text-primary-blue">Resume</div>
          </div>
        </div>
      </div>
      <Outlet />
    </>

  )
}