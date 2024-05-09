interface Props {
  text: string
}

export default function BodyText({ text }: Props) {
  return (
    <div className="text-text-title-dark-blue font-notoSerifJPMedium">{text}</div>
  )
}