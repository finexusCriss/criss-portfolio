import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SecondaryBlueBg({ children }: Props) {
  return (
    <div className="bg-background-second-blue px-10 sm:px-15 md:px-20 lg:px-30 xl:px-40 py-20 flex flex-col justify-center items-center border-b-0.8 border-separator-blue">
      {children}
    </div>
  )
}