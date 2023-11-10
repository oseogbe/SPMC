/* eslint-disable @next/next/no-img-element */
import { Rufina } from "next/font/google"

const rufina = Rufina({ subsets: ['latin'], weight: "700" })

const OurTeam = () => {

    const teamMembers = [
        {
            name: "Mrs. Ajoke Murtala Muhammad",
            role: "Chairman",
            image: "/img/team/ajoke-murtala.jpg"
        },
        {
            name: "Adnan Adeosun",
            role: "CEO",
            image: "/img/team/adnan-adeosun.jpg"
        },
        {
            name: "Egbo Chinonso P.",
            role: "Head of Operation",
            image: "/img/team/user1.png"
        },
        {
            name: "Ajogbor Arotimme E.",
            role: "Head of Admin",
            image: "/img/team/user2.png"
        },
    ]

    return (
        <div className="w-full max-w-7xl mx-auto pt-8 lg:pt-16">
            <img className="mx-auto w-[80%]" src="/img/divider.svg" alt="divider" />
            <div className="relative px-5 lg:px-10 py-6 lg:py-12">
                <div className="text-center">
                    <h3 className={rufina.className + " text-secondary text-3xl lg:text-5xl font-bold"}>Our Team</h3>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-6 lg:mt-16">
                    {teamMembers.map((member, i) => (
                        <a key={i} className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition" href="#">
                            <img src={member.image} alt="" />
                            <div className="p-4 md:p-5 text-center">
                                <h5 className="text-xs lg:text-lg font-bold text-secondary">
                                    {member.role}
                                </h5>
                                <h4 className="mt-2 text-sm lg:text-2xl font-bold text-primary">
                                    {member.name}
                                </h4>
                                <img className="mt-4" src="/img/3-lines.svg" alt="" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurTeam