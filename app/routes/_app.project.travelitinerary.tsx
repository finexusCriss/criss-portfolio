import BodyIllusTitleBodyLayout from "~/components/layout/BodyIllusTitleBodyLayout";
import MainLightBlueBg from "~/components/layout/MainLightBlueBg";
import MainTitleCaptionBodyLayout from "~/components/layout/MainTitleCaptionBodyLayout";
import SecondaryBlueBg from "~/components/layout/SecondaryBlueBg";
import TravelitiCov from '../assets/images/TravItiCov.png';
import SpreadSheetIcon from '../assets/images/Spreadsheet.png';
import TechIcon from "~/components/TechIcon";
import BodyLightBlueBg from "~/components/layout/BodyLightBlueBg";
import TravelItineraryExample from '../assets/images/ItiDetails.png';
import LightWide from "~/components/typography/LightWide";
import ReactJSIcon from '../assets/images/techIcon/React.png';

export default function TravelItinerary() {
  return (
    <>
      <MainLightBlueBg>
        <MainTitleCaptionBodyLayout
          mainTitleLineOne="Travel Itinerary Web App"
          date='Oct 2022'
          body='This web app reads the data written in Google Spreadsheet, and translate it a carefully designed itinerary that solves most problems faced by users who have used to plan itinerary on spreadsheet. User only see what they need to see at a glance, and able to navigate to Google map with just a tap.'
        />

        <div className="">
          <img src={TravelitiCov} alt="Travel Itineray Cover" />
        </div>
      </MainLightBlueBg>

      <SecondaryBlueBg>
        <BodyIllusTitleBodyLayout
          illus={
            <div className="grid grid-rows-1 grid-cols-1">
              <TechIcon techName='Spreadsheet' imgSrc={SpreadSheetIcon} />
            </div>
          }
          title='Dynamically show data from Spreadsheet'
          body='The number of days, destinations, dates, transport details, and all can be changed very easily by just updating on spreadsheet, and the web app will read the data from there. This web app is reusable by just inputing the spreadsheet s with a new data .'
        />
      </SecondaryBlueBg>

      <BodyLightBlueBg>
        <BodyIllusTitleBodyLayout
          illus={
            <img src={TravelItineraryExample} alt="Travel Itinerary Example" className="w-56" />
          }
          title='UI UX Designed based on years of experiece'
          body='After my 4th Japan trips, I have collected enough data of what do I want to see at a screen, which feature is most helpful, and also what content needs to be included in an itinerary. This web app is proven useful on my 5th Japan trip and it can’t be easier to share the itinerary with your friend with just a URL link.'
        />
      </BodyLightBlueBg>

      <SecondaryBlueBg>
        <LightWide text='TECH USED' />
        <div className="grid grid-rows-1 grid-cols-2 lg:grid-cols-2 gap-2">
          <TechIcon
            key='Spreadsheet'
            techName='Spreadsheet'
            imgSrc={SpreadSheetIcon}
          />
          <TechIcon
            key='ReactJS'
            techName='ReactJS'
            imgSrc={ReactJSIcon}
          />
        </div>
      </SecondaryBlueBg>
    </>

  )
}