import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import BigTitleText from "../typography/BigTitleText"
import BodyText from "../typography/BodyText"

interface Props {
  mainTitleLineOne: string,
  mainTitleLineTwo?: string | null,
  date: string,
  body: string
}

export default function MainTitleCaptionBodyLayout({
  mainTitleLineOne,
  mainTitleLineTwo,
  date,
  body
}: Props) {
  return (
    <div className="px-16">
      <BigTitleText text={mainTitleLineOne} />
      {
        mainTitleLineTwo &&
        <BigTitleText text={mainTitleLineTwo} />
      }
      <div className="flex justify-between items-center text-text-title-dark-blue font-notoSerifJPLight border-t-0.8 border-separator-blue pt-2 pb-4">
        <div className="flex justify-center items-center">
          <IoIosCheckmarkCircleOutline className="mr-1" />
          Completed
        </div>
        <div>{date}</div>
      </div>
      <BodyText
        text={body}
      />
    </div>
  )
}