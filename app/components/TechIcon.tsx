interface Props {
  techName: string,
  imgSrc: string
}

export default function TechIcon({
  techName,
  imgSrc
}: Props) {
  return (
    <div className='bg-white flex flex-col justify-end items-center rounded-md p-3 shadow-md'>
      <div className="flex justify-center items-center grow">
        <img src={imgSrc} alt="HTMLIcon" className='w-20 mb-2' />
      </div>
      <div className='font-notoSerifJPLight text-text-title-dark-blue text-center'>{techName}</div>
    </div>
  )
}