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

import ProjPrevCard from '~/components/ProjectPreviewCard';
import MainLightBlueBg from '~/components/layout/MainLightBlueBg';
import BigTitleText from '~/components/typography/BigTitleText';
import TitleSupportText from '~/components/typography/TitleSupportText';
import BodyText from '~/components/typography/BodyText';
import SecondaryBlueBg from '~/components/layout/SecondaryBlueBg';
import SecondTitleText from '~/components/typography/SecondTitleText';
import BodyLightBlueBg from '~/components/layout/BodyLightBlueBg';
import projectList from '~/data/projectList';
import BodyTextContainer from '~/components/layout/BodyTextContainer';

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
      {/* Top main section */}
      <MainLightBlueBg>
        {/* Main Text */}
        <div className=''>
          <BigTitleText
            text='About me'
          />
          <TitleSupportText
            text='I’m a front end developer based in Kuala Lumpur, Malaysia and I love my gf!!!'
          />
          <BodyText
            text='Solving intricate mathematical and logical problems has always held a fascination for me, while designing and coding an elegant user interface that provides a good user experience brings me joy in my role as a front-end developer.'
          />
        </div>
        {/* Illustration */}
        <img src={AboutMe} alt="AboutMeIllustration" className='px-8 sm:px-12 lg:px-32' />
      </MainLightBlueBg>

      <SecondaryBlueBg>
        {/* Tech Icon Box */}
        <div className='grid grid-cols-2 gap-2 mb-12 lg:grid-cols-7'>
          {techStackArr.map((tech, index) => (
            <TechIcon
              key={tech.techName}
              techName={tech.techName}
              imgSrc={tech.techIcon}
            />
          ))}
        </div>
        <SecondTitleText
          text='My Tech Stack'
        />
        <BodyTextContainer
          text='Working in a R&D team has exposed me to variety type of language and framework that I have to learn fast to develop the solution requested. Typescript in ReactJS is the one that I have been using the most in my experience.'
        />
      </SecondaryBlueBg>

      <BodyLightBlueBg>
        <img src={ProjectIcon} alt="MyProjectIcon" className='w-48' />
        <SecondTitleText text='My Projects' />
        <BodyText text='Click to view my past and ongoing projects' />

        {/* Project Preview Card */}
        <div className='grid grid-rows-2 grid-cols-1 lg:grid-cols-3 gap-4 mt-6'>
          {projectList.map((project, index) => (
            <ProjPrevCard
              projectName={project.projectName}
              imgSrc={project.projectCoverImg}
              route={project.route}
            />
          ))}
        </div>
      </BodyLightBlueBg>
    </>
  )
}