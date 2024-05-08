import { IoIosCheckmarkCircleOutline } from "react-icons/io";

interface Props {
  projectName: string,
  imgSrc: string
}

export default function ProjPrevCard({
  projectName,
  imgSrc
}: Props) {
  return (
    <div className='bg-white p-2 shadow-md rounded'>
    <div className='bg-[#F6F6F6] flex justify-center items-center p-2'>
      <img src={imgSrc} alt="FaceLiveness" className='w-56' />
    </div>
    <div className='font-notoSerifJPLight text-text-title-dark-blue'>{projectName}</div>
    <div className='flex justify-start items-center'>
      <IoIosCheckmarkCircleOutline className="mr-1"/>
      <div className='font-notoSerifJPLight text-text-title-dark-blue text-xs'>Completed</div>
    </div>
  </div>
  )
}