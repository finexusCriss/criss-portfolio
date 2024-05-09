import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function BodyLightBlueBg({ children }: Props) {
  return (
    <div className="bg-background-light-blue px-40 py-20 flex flex-col justify-center items-center border-b-0.8 border-separator-blue">
      {children}
    </div>
  )
}