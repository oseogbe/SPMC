import Contact from "../components/Contact"
import Socials from "../components/Socials"

export default function AboutLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <Contact />
            <Socials />
        </>
    )
}