import BodyIllusTitleBodyLayout from "~/components/layout/BodyIllusTitleBodyLayout";
import BodyLightBlueBg from "~/components/layout/BodyLightBlueBg";
import MainLightBlueBg from "~/components/layout/MainLightBlueBg";
import MainTitleCaptionBodyLayout from "~/components/layout/MainTitleCaptionBodyLayout";
import SecondaryBlueBg from "~/components/layout/SecondaryBlueBg";
import TechIcon from "~/components/TechIcon";
import DgIdCov from '../assets/images/DgId.png';
import SwiftUIIcon from '../assets/images/techIcon/SwiftUI.png';
import SecureEnclaveIcon from '../assets/images/SecureEnclave.png';
import Fido2Icon from '../assets/images/FIDO2.png';
import AWSRekogIcon from '../assets/images/Rekognition.png'; 
import PassportNFCIcon from '../assets/images/PassportNFC.png'; 
import LightWide from "~/components/typography/LightWide";
import RemixIcon from '../assets/images/techIcon/Remix.png';

export default function DigitalID() {
  return (
    <>
      <MainLightBlueBg>
        <MainTitleCaptionBodyLayout
          mainTitleLineOne="Digital Identity"
          date='April 2024'
          body='Our digital identity system allows users to log in securely to any app utilizing our Single Sign-On (SSO). Furthermore, clients can effortlessly obtain verified user information with user consent, eliminating the need to integrate eKYC individually. This system employs FIDO2 as the transaction authentication protocol and OIDC as the SSO protocol, ensuring robust security and streamlined access for both users and clients.'
        />

        <div className="">
          <img src={DgIdCov} alt="Digital Identity Cover" />
        </div>
      </MainLightBlueBg>

      <SecondaryBlueBg>
        <BodyIllusTitleBodyLayout
          illus={
            <div className="grid grid-rows-1 grid-cols-1">
              <TechIcon techName='SwiftUI' imgSrc={SwiftUIIcon} />       
            </div>
          }
          title='Written natively in SwiftUI'
          body='Since both FIDO2 and passport NFC operate in native Swift, and with the objective of minimizing app size while aiming for native performance, the decision was made to write the app natively in SwiftUI. Despite being new to Swift, I found the learning curve for SwiftUI to be relatively manageable. Consequently, I was able to develop a prototype of this app within a span of three months.'
        />
      </SecondaryBlueBg>

      <BodyLightBlueBg>
        <BodyIllusTitleBodyLayout
          illus={
            <img src={SecureEnclaveIcon} alt="Secure Enclave Icon" className="w-36" />
          }
          title='Data encryption using Secure Enclave'
          body='Sensitive data in this app is encrypted using a private key stored in the Secure Enclave. This ensures an exceptionally high level of security, as the private key is isolated from the rest of the hardware system. Consequently, only the user device possesses the capability to decrypt the sensitive data, enhancing overall data security.'
        />
      </BodyLightBlueBg>

      <SecondaryBlueBg>
        <BodyIllusTitleBodyLayout
          illus={
            <img src={Fido2Icon} alt="Fido2 Icon" className="w-36" />
          }
          title='Implementing FIDO2 with iOS Passkey'
          body='The FIDO2 in iOS is used and can only be used with Passkey at the moment. I have written the function to use the FIDO2 function natively in Swift. The purpose of FIDO2 in this app use case is to authenticate any transaction.'
        />
      </SecondaryBlueBg>

      <BodyLightBlueBg>
        <BodyIllusTitleBodyLayout
          illus={
            <img src={AWSRekogIcon} alt="Secure Enclave Icon" className="w-48" />
          }
          title='Integrated with 3rd party library'
          body='I have integrated a third-party paid library to enhance the user experience in the eKYC (Electronic Know Your Customer) section. This integration involves managing licenses and handling any errors generated by the library. Additionally, I have been in communication with the library provider to address any issues that may arise during implementation.'
        />
      </BodyLightBlueBg>

      <SecondaryBlueBg>
        <BodyIllusTitleBodyLayout
          illus={
            <img src={PassportNFCIcon} alt="Passport NFC Icon" className="w-36" />
          }
          title='Integrated with NFC passport scanner '
          body='To enhance the level of confidence for eKYC, I have integrated with passport NFC scanner as most iOS phone has the NFC feature. This uses an open source library that enable the use of passport NFC scanner, and I have studied on CSCA certificates that ensure the passport is valid and has not been tampered.'
        />
      </SecondaryBlueBg>

      <BodyLightBlueBg>
        <LightWide text='TECH USED' />
        <div className="grid grid-rows-1 grid-cols-2 lg:grid-cols-2 gap-2">
          <TechIcon
            key='SwiftUI'
            techName='SwiftUI'
            imgSrc={SwiftUIIcon}
          />
          <TechIcon
            key='Remix'
            techName='Remix'
            imgSrc={RemixIcon}
          />
        </div>
      </BodyLightBlueBg>
    </>
  )
}