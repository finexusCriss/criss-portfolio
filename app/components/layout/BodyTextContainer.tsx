import BodyText from "../typography/BodyText";

interface Props {
  text: string,
}

export default function BodyTextContainer({ text }: Props) {
  return (
    <div className='w-3/4'>
      <BodyText
        text={text}
      />
    </div>
  )
}
