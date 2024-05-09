interface Props {
  text: string
}

export default function TitleSupportText({ text }: Props) {
  return (
    <div className="text-text-title-dark-blue font-notoSerifJPLight mb-4">{text}</div>
  )
}