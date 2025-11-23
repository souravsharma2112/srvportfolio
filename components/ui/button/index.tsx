import Link from 'next/link'

const ButtonLink = ({goto , title , className} : {goto:string; title : string; className:string;}) => {
  return (
    <Link href={goto} className={`btn ${className}`}>
      {title}
    </Link>
  )
}

export default ButtonLink
