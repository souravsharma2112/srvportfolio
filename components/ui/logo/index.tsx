import Link from 'next/link'

const Logo = ({ name = "SRV" }: { name?: string; }) => {
    return (
        <>
            <div aria-label="logo">
                <Link href={"/"} className={`logo gradientText`}>
                    <span>{name}</span>
                </Link>
            </div>
        </>
    )
}

export default Logo