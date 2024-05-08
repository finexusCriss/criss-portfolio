import TechIcon from '~/components/TechIcon';
import AboutMe from '../assets/images/AboutMeIllus.png';
import ProjectIcon from '../assets/images/MyProject.png';

// Tech Stack Icon
import HTMLIcon from '../assets/images/techIcon/HTMLIcon.png';
import JSIcon from '../assets/images/techIcon/JavascriptIcon.png';
import RemixIcon from '../assets/images/techIcon/Remix.png';
import NodeJSIcon from '../assets/images/techIcon/NodeJS.png';
import AWSLambdaIcon from '../assets/images/techIcon/AWSLamda.png';
import AWSAPIIcon from '../assets/images/techIcon/AWSAPIGateway.png';
import DockerIcon from '../assets/images/techIcon/Docker.png';
import CSSIcon from '../assets/images/techIcon/CSSIcon.png';
import TSIcon from '../assets/images/techIcon/Typescript.png';
import ReactJSIcon from '../assets/images/techIcon/React.png';
import SwiftUIIcon from '../assets/images/techIcon/SwiftUI.png';
import AWSDynamoDBIcon from '../assets/images/techIcon/AWSDynamoDB.png';
import FigmaIcon from '../assets/images/techIcon/FigmaTechStack.png';
import PortainerIcon from '../assets/images/techIcon/PortainerIcon.png';

// ProjectCover
import FLCover from '../assets/images/FaceLiveness.png';
import ProjPrevCard from '~/components/ProjectPreviewCard';
import ESig from '../assets/images/ElectronicSignature.png';
import Fido2Cover from '../assets/images/Fido2Cover.png';
import DigIden from '../assets/images/DigitalIdentity.png';
import TraIti from '../assets/images/TravelItinerary.png';
import TraBud from '../assets/images/TravelBudgetApp.png';

export default function About() {

  const techStackArr = [
    {
      techIcon: HTMLIcon,
      techName: 'HTML'
    },
    {
      techIcon: JSIcon,
      techName: 'Javascript'
    },
    {
      techIcon: RemixIcon,
      techName: 'Remix'
    },
    {
      techIcon: NodeJSIcon,
      techName: 'NodeJS'
    },
    {
      techIcon: AWSLambdaIcon,
      techName: 'AWS Lambda'
    },
    {
      techIcon: AWSAPIIcon,
      techName: 'API Gateway'
    },
    {
      techIcon: DockerIcon,
      techName: 'Docker'
    },
    {
      techIcon: CSSIcon,
      techName: 'CSS'
    },
    {
      techIcon: TSIcon,
      techName: 'Typescript'
    },
    {
      techIcon: SwiftUIIcon,
      techName: 'SwiftUI'
    },
    {
      techIcon: ReactJSIcon,
      techName: 'React JS'
    },
    {
      techIcon: AWSDynamoDBIcon,
      techName: 'AWS DynamoDB'
    },
    {
      techIcon: FigmaIcon,
      techName: 'Figma'
    },
    {
      techIcon: PortainerIcon,
      techName: 'Portainer'
    },
  ]

  return (
    <>
      <div className="bg-background-light-blue px-40 py-10 grid gap-6 grid-cols-2 justify-center items-center drop-shadow-md">
        {/* Main Text */}
        <div className=''>
          <div className="text-text-title-dark-blue text-2xl font-notoSerifJPBlack mb-2">About me</div>
          <div className="text-text-title-dark-blue font-notoSerifJPLight mb-4">I’m a front end developer based in Kuala Lumpur, Malaysia</div>
          <div className="text-text-title-dark-blue font-notoSerifJPMedium">Solving intricate mathematical and logical problems has always held a fascination for me, while designing and coding an elegant user interface that provides a good user experience brings me joy in my role as a front-end developer.</div>
        </div>
        {/* Illustration */}
        <img src={AboutMe} alt="AboutMeIllustration" className='px-16' />
      </div>
      <div className='bg-background-second-blue px-40 py-20 flex flex-col justify-center items-center border-b-0.8 border-separator-blue'>
        {/* Tech Icon Box */}
        <div className='grid grid-rows-2 grid-cols-7 gap-2 mb-12'>
          {techStackArr.map((tech, index) => (
            <TechIcon
              key={tech.techName}
              techName={tech.techName}
              imgSrc={tech.techIcon}
            />
          ))}
        </div>
        <div className="text-text-title-dark-blue text-xl font-notoSerifJPBlack mb-2 text-center">My Tech Stack</div>
        <div className="text-text-title-dark-blue font-notoSerifJPMedium w-3/4">Working in a R&D team has exposed me to variety type of language and framework that I have to learn fast to develop the solution requested. Typescript in ReactJS is the one that I have been using the most in my experience.</div>
      </div>
      <div className="bg-background-light-blue px-40 py-10 flex flex-col justify-center items-center">
        <img src={ProjectIcon} alt="MyProjectIcon" className='w-48' />
        <div className="text-text-title-dark-blue text-xl font-notoSerifJPBlack mb-2 text-center">My Projects</div>
        <div className="text-text-title-dark-blue font-notoSerifJPMedium mb-6">Click to view my past and ongoing projects</div>

        {/* Project Preview Card */}
        <div className='grid grid-rows-2 grid-cols-3 gap-4'>
          <ProjPrevCard
            projectName='Face Liveness Verification'
            imgSrc={FLCover}
          />
          <ProjPrevCard
            projectName='Electronic Signature'
            imgSrc={ESig}
          />
          <ProjPrevCard
            projectName='FIDO2'
            imgSrc={Fido2Cover}
          />
          <ProjPrevCard
            projectName='Digital Identity'
            imgSrc={DigIden}
          />
          <ProjPrevCard
            projectName='Travel Itinerary Web App'
            imgSrc={TraIti}
          />
          <ProjPrevCard
            projectName='Travel Budget Web App'
            imgSrc={TraBud}
          />
        </div>
      </div>
    </>
  )
}