interface Props {
  text: string
}

export default function LightWide({ text }: Props) {
  return (
    <div className="font-notoSerifJPLight text-text-title-dark-blue mb-6 tracking-wider">{text}</div>
  )
}