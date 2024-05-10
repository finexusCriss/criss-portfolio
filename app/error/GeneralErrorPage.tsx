import { Link } from "@remix-run/react";
import MainLightBlueBg from "~/components/layout/MainLightBlueBg";
import BigTitleText from "~/components/typography/BigTitleText";
import BodyText from "~/components/typography/BodyText";
import ErrorIllus from '../assets/images/error_404.svg';

interface Props {
  error: string,
}

export default function GeneralErrorPage({
  error
}: Props) {
  return (
    <div className="h-screen flex flex-col justify-center items-">
      <div className="bg-background-light-blue px-10 sm:px-15 md:px-20 lg:px-30 xl:px-40 py-10 grid gap-6 grid-cols-1 lg:grid-cols-2 justify-center items-center drop-shadow-md h-full">
        <div >
          <BigTitleText text="Error" />
          <BodyText text={error} />
          <Link to='/'>
            <div className="bg-primary-blue inline-block rounded-lg px-6 py-3 text-white font-notoSerifJPMedium mt-3">
              Back to Home
            </div>
          </Link>
        </div>
        <div>
          <img src={ErrorIllus} alt="Error Illustration" />
        </div>
      </div>
    </div>
  )
}