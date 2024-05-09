import BodyLightBlueBg from "~/components/layout/BodyLightBlueBg";
import ProjPrevCard from "~/components/ProjectPreviewCard";
import BodyText from "~/components/typography/BodyText";
import SecondTitleText from "~/components/typography/SecondTitleText";
import projectList from "~/data/projectList";
import ProjectIcon from '../assets/images/MyProject.png';


export default function Project() {
  return (
    <BodyLightBlueBg smallVerticalPadding={true}>
      <img src={ProjectIcon} alt="MyProjectIcon" className='w-48' />
      <SecondTitleText text='My Projects' />
      <BodyText text='Click to view my past and ongoing projects' />

      {/* Project Preview Card */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6'>
        {projectList.map((project, index) => (
          <ProjPrevCard
            projectName={project.projectName}
            imgSrc={project.projectCoverImg}
            route={project.route}
          />
        ))}
      </div>
    </BodyLightBlueBg>
  )
}