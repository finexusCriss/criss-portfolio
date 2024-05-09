import BodyLightBlueBg from "~/components/layout/BodyLightBlueBg";
import BigTitleText from "~/components/typography/BigTitleText";
import BodyText from "~/components/typography/BodyText";
import EmailIcon from '../assets/images/GmailIcon.png';
import LinkedInIcon from '../assets/images/LinkedInIcon.png';
import ContactIllus from '../assets/images/Email.png';

export default function Contact() {
  return (
    <>
      <BodyLightBlueBg>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center pl-16">
            <BigTitleText
              text="Contact"
            />
            <div className="mb-5">
              <BodyText
                text="Contact me via email or Linkedin"
              />
            </div>
            <div>
              <div className="flex justify-start items-center mb-3">
                <img src={EmailIcon} alt="" className="w-12 mr-3" />
                <div className="font-notoSerifJPBold text-text-title-dark-blue">Email</div>
              </div>
              <div className="flex justify-start items-center">
                <img src={LinkedInIcon} alt="" className="w-12 mr-3" />
                <div className="font-notoSerifJPBold text-text-title-dark-blue">Linkedin</div>
              </div>
            </div>
          </div>

          <div>
            <img src={ContactIllus} alt="Contact illustration" className='px-12 sm:px-16 lg:px-32' />
          </div>
        </div>
      </BodyLightBlueBg>
    </>
  )
}