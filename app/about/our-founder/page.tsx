import { Rufina } from "next/font/google"

const rufina = Rufina({ subsets: ['latin'], weight: "700" })

const OurFounder = () => {
    return (
        <div className="pt-20">
            <div className="w-full py-5 lg:py-10 bg-secondary-dark">
                <h3 className={rufina.className + " text-xl lg:text-5xl text-white text-center"}>About Our Founder</h3>
            </div>
            <div className="w-full max-w-7xl mx-auto">
                <div className="px-5 lg:px-10 text-sm lg:text-2xl lg:leading-9 text-justify">
                    <p className="py-4">
                        Ajoke Muhammed, one of Nigeria&apos;s previous first ladies, is now dedicated to protecting indigenous flora, notably the West African country&apos;s numerous palm tree varieties. She began her career as a dental therapist. Her spouse raised fish, aquatic snakes, and birds, but she developed her own passion for nature after he died, when she moved into a new house with a garden.
                    </p>
                    <p className="py-4">
                        She boasts the biggest private plant collection in Nigeria, with over 2,000 trees and bushes and 400 different varieties of palms flourishing in her garden in Abuja, which she has built up over the course of eight years.
                        She imports seeds from many of Nigeria&apos;s endangered species in order to save, propagate, and promote forgotten indigenous flora.
                    </p>
                    <p className="py-4">
                        She also feels that plants may be found everywhere, but palms have a unique aura and the potential to influence an atmosphere in ways that no other plant can.
                    </p>
                    <p className="py-4">
                        Mrs Muhammed&apos;s fight to save Nigeria&apos;s plants was highlighted during a trip to a village in Cross River state several years ago. She was taken aback when she discovered several davidia involucrate plants, which grow into what is generally known as the handkerchief tree due to its lovely white blossoms. Despite the fact that the plant is not native to Nigeria, it was growing wild along the river.
                    </p>
                    <p className="py-4">
                        Excited by this discovery, Mrs Muhammed and her team, which included workers from many Nigerian agriculture organizations, decided to use an air layering plant propagation technique, which stimulates a stem on the parent plant to establish its own roots, allowing it to be plucked and planted within a few weeks.
                    </p>
                    <p className="py-4">
                        Some expedition members had brought personal items in black polythene bags, which they tore apart to use as moisture barriers on the targeted stem.
                        The group had also taken a photographer with them, who documented the entire event on film.
                        Mrs Muhammed sent the photographer back six weeks later to document the progress of the newly rooted plants, but he discovered that they had all been felled by villagers.
                        They had summoned a conference with their village leader in horror after seeing fresh plants roots on the stems beside the spots of black plastic, and it was deemed that the plants were cursed.
                    </p>
                    <p className="py-4">
                        Mrs Muhammed believes that many plants native to other parts of the world can be found thriving in remote Nigerian forests where no foreigner could ever have planted them.
                        She laments the typical lack of interest in such topics among Africans, which leads to other areas claiming native species.
                        The flora and animals may be seen in the Murtala Muhammed Memorial Botanical Garden, which Mrs Muhammed established in the 1990s close outside Lagos.
                        It was named after her late husband, a prominent former military head of state slain in 1976; she also maintains a one-hectare garden in Lagos&apos;s Lekki neighborhood.
                        Neither of these gardens, however, is as well-stocked or as meticulously maintained as her Abuja garden, which includes a botanical and palm collection known as a Palmetum.
                    </p>
                    <p className="py-4">
                        She has visited Hawaii and Tahiti on a regular basis over the last five years to study how these lovely islands have managed to retain their particular flora and wildlife.
                        She also participates in international botanical conferences and volunteers at the Fairchild Tropical Botanical Garden in Florida. She is often the only black African in attendance at several of these conferences, and she has been attempting to create the Palm Society of Nigeria, but no one is interested.
                        The Sarius Palmetum also has an art gallery, a plant nursery, and six garden shops in addition to its extensive plant collection.
                    </p>
                    <p className="py-4">Finding excellent hands has been one of the most difficult obstacles for Mrs Muhammed&apos;s endeavor.
                        Most of her botany degree holders arrived with a plethora of theory but absolutely little practical understanding, so she had to educate everyone from beginning.
                        However, she has defied those who believe she would be better off employing expatriates, as many other agricultural organizations in Nigeria do, because she prefers to work with Nigerians. &quot;We will benefit in the long run,&quot; she argues.
                    </p>
                    <p className="py-4">
                        Her future ideas include a part for the sight handicapped dubbed the garden of the senses, which would have plants with unique textures and powerful aromas.
                        She is also working on a picture book on Nigerian flora in the hopes that it would inspire a new generation to continue her efforts.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurFounder