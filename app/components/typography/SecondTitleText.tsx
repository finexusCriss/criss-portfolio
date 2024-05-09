interface Props {
  text: string
}

export default function SecondTitleText({ text }: Props) {
  return (
    <div className="text-text-title-dark-blue text-xl font-notoSerifJPBlack mb-2 text-center">{text}</div>
  )
}