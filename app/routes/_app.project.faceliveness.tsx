import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import MainLightBlueBg from "~/components/layout/MainLightBlueBg";
import SecondaryBlueBg from "~/components/layout/SecondaryBlueBg";
import TechIcon from "~/components/TechIcon";
import BigTitleText from "~/components/typography/BigTitleText";
import BodyText from "~/components/typography/BodyText";
import SecondTitleText from "~/components/typography/SecondTitleText";
import FaceLivenessCover from "../assets/images/FaceLivenessProject.png";
import ReactJSIcon from '../assets/images/techIcon/React.png';
import TensorFlowIcon from '../assets/images/techIcon/TensorFlow.png';
import FakeIdentityIllus from '../assets/images/FakeIdentity.png';
import BodyLightBlueBg from "~/components/layout/BodyLightBlueBg";
import MainTitleCaptionBodyLayout from "~/components/layout/MainTitleCaptionBodyLayout";
import BodyTextContainer from "~/components/layout/BodyTextContainer";
import BodyIllusTitleBodyLayout from "~/components/layout/BodyIllusTitleBodyLayout";

export default function FaceLiveness() {
  return (
    <>
      <MainLightBlueBg>
        <MainTitleCaptionBodyLayout
          mainTitleLineOne="Face Liveness Verification -"
          mainTitleLineTwo='Front End Validation'
          date='June 2022'
          body='The purpose of face liveness verification is to ensure that the person in front of the camera is a real person instead of a photo, video or any other non-living representation.'
        />

        <div className="px-16">
          <img src={FaceLivenessCover} alt="Faceliveness cover photo" />
        </div>
      </MainLightBlueBg>

      <SecondaryBlueBg>
        <BodyIllusTitleBodyLayout
          illus={
            <div className="grid grid-rows-1 grid-cols-2 gap-2">
              <TechIcon
                key='React'
                techName='ReactJS'
                imgSrc={ReactJSIcon}
              />
              <TechIcon
                key='TensorFlow'
                techName='TensorFlow'
                imgSrc={TensorFlowIcon}
              />
            </div>
          }
          title='AI running on client side'
          body='During this verification process, user will be asked to turned their head to different direction, and to provide an instant feedback of their head movement, the AI and logic to detect the movement is running on client side. A smart method is used to ensure that these heavy process runs smoothly on most of the devices.'
        />
      </SecondaryBlueBg>

      <BodyLightBlueBg>
        <BodyIllusTitleBodyLayout
          illus={
            <img src={FakeIdentityIllus} alt="Fake Identity Illustration" className="w-48" />
          }
          title='Maximising the anti-spoofing capability'
          body='The difficulties of this project is not only in the complicated logic of detecting the head motion, but the parameters make it very difficult for one to spoof the system yet easy enough for a real person to pass the verification. As a physics degree graduate, I have utilised the experimental method to find the sweet spots and the results are proven to be useful.'
        />
      </BodyLightBlueBg>
    </>
  )
}