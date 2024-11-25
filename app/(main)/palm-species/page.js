import Content from "./Content.tsx"

import { fetchPalmTrees } from "@/app/lib/actions"

const PalmSpecies = async () => {
    const palmTrees = await fetchPalmTrees()

    return (
        <Content palmTrees={palmTrees} />
    )
}

export default PalmSpecies