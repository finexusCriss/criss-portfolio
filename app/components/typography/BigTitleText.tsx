interface Props {
  text: string
}

export default function BigTitleText({ text }: Props) {
  return (
    <div className="text-text-title-dark-blue text-2xl font-notoSerifJPBlack mb-2">{text}</div>
  )
}