import BodyIllusTitleBodyLayout from "~/components/layout/BodyIllusTitleBodyLayout";
import MainLightBlueBg from "~/components/layout/MainLightBlueBg";
import MainTitleCaptionBodyLayout from "~/components/layout/MainTitleCaptionBodyLayout";
import SecondaryBlueBg from "~/components/layout/SecondaryBlueBg";
import TravelBudgetCov from '../assets/images/TraBudCov.png';
import RecordSpending from '../assets/images/SpendingRecord.png';
import BodyLightBlueBg from "~/components/layout/BodyLightBlueBg";
import SpendingHistory from '../assets/images/SpendingHistory.png';
import LightWide from "~/components/typography/LightWide";
import ReactJSIcon from '../assets/images/techIcon/React.png';
import TechIcon from "~/components/TechIcon";
import AWSDynamoDBIcon from '../assets/images/techIcon/AWSDynamoDB.png';

export default function TravelBudget() {
  return (
    <>
      <MainLightBlueBg>
        <MainTitleCaptionBodyLayout
          mainTitleLineOne="Travel Itinerary Web App"
          date='Oct 2022'
          body='The purpose of this app is to know how much left for each category of spending for e.g. how much left you can spend for meal in a traveling trip, and if it’s over spent or leftover, what’s the accumulated budget for the next day. Setting budget down to single day for each category of spending is something necessary and yet not found in the market’s app.'
        />

        <div className="">
          <img src={TravelBudgetCov} alt="Travel Budget Cover" />
        </div>
      </MainLightBlueBg>

      <SecondaryBlueBg>
        <BodyIllusTitleBodyLayout
          illus={
            <img src={RecordSpending} alt="Spending Record Example" className="w-56" />
          }
          title='A visual way of recording spending'
          body='Once a user start to type the description of the spending record, a coupon-like statement is shown on top of the form and updating synchronously what has user typed, and the colour of the statement change according to the type of spending, and the font size of the price is the largest among of the info, allowing user to easily check at a glance.'
        />
      </SecondaryBlueBg>

      <BodyLightBlueBg>
        <BodyIllusTitleBodyLayout
          illus={
            <img src={SpendingHistory} alt="Travel Itinerary Example" className="w-56" />
          }
          title='Edit the spending record by swiping left'
          body='The spending record can be edited easily by swiping left, and then tapping the edit icon, and the field is populated accordingly and user can make whatever changes they want. The same goes for the deleting the spending record, a confirmation modal will be shown after tapping the delete button to prevent accidental deletion of spending record.'
        />
      </BodyLightBlueBg>

      <SecondaryBlueBg>
        <LightWide text='TECH USED' />
        <div className="grid grid-rows-1 grid-cols-2 lg:grid-cols-2 gap-2">
          <TechIcon
            key='ReactJS'
            techName='ReactJS'
            imgSrc={ReactJSIcon}
          />
          <TechIcon
            key='AWS Dynamp DB'
            techName='AWS Dynamo DB'
            imgSrc={AWSDynamoDBIcon}
          />
        </div>
      </SecondaryBlueBg>
    </>
  )
}