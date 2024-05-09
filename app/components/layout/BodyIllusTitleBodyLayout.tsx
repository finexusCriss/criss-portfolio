import { ReactNode } from "react";
import SecondTitleText from "../typography/SecondTitleText";
import BodyTextContainer from "./BodyTextContainer";

interface Props {
  illus: ReactNode
  title: string,
  body: string
}

export default function BodyIllusTitleBodyLayout({
  illus,
  title,
  body
}: Props) {
  return (
    <>
      <div className="mb-12">
        {illus}
      </div>
      <SecondTitleText text={title} />
      <BodyTextContainer
        text={body}
      />
    </>
  )
}