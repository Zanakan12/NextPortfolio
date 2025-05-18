import Image from "next/image"

export default function InstagramPhoto({ src }: { src: string }) {
  return (
    <div className="relative aspect-square overflow-hidden rounded shadow border">
      <Image
        src={src}
        alt="Instagram"
        fill
        className="object-cover"
      />
    </div>
  )
}
