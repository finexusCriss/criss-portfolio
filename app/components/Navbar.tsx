import SiteLogo from '../assets/images/SiteLogo.png';
import ResumeImage from '../assets/images/ResumeImage.png';
import { Link } from '@remix-run/react';

export default function Navbar() {
  return (
    <div className="bg-primary-blue text-white flex justify-between py-5 px-12">
      <div className="flex justify-content items-center">
        <div>
          <img src={SiteLogo} alt="SiteLogo" className="w-12 mr-4" />
        </div>
        <div className="font-pacifico text-2xl">TSY</div>
      </div>

      {/* Menu */}
      <div className="flex justify-between items-center gap-6 font-notoSerifJPMedium">
        <Link to='/about'>
          <div>About</div>
        </Link>
        <Link to='/project'>
          <div>Project</div>
        </Link>
        <div>Contact</div>
        <div className="flex justify-content items-center bg-white p-2 rounded-md">
          <img src={ResumeImage} alt="ResumeIcon" className="w-4 mr-2 shadow-md" />
          <div className="text-primary-blue">Resume</div>
        </div>
      </div>
    </div>
  )

}