import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MainLightBlueBg({ children }: Props) {
  return (
    <div className="bg-background-light-blue px-10 sm:px-15 md:px-20 lg:px-30 xl:px-40 py-10 grid gap-6 grid-cols-1 lg:grid-cols-2 justify-center items-center drop-shadow-md">
      {children}
    </div>
  )
}