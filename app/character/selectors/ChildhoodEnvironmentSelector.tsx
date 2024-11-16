"use client"

import { LifepathFormData } from "../formTypes"

interface ChildhoodEnvironmentSelectorProps {
    setValue: (field: keyof LifepathFormData, value: string) => void;
    onPrev: () => void;
    onNext: () => void;
}

type Environment = string;

const environments: Environment[] = [
    "Ran on The Street, with no adult supervision.",
    "Spent in a safe Corp Zone walled off from the rest of the City.",
    "In a Nomad pack moving from place to place.",
    "In a Nomad pack with roots in transport (ships, planes, caravans).",
    "In a decaying, once upscale neighborhood, now holding off the boosters to survive.",
    "In the heart of the Combat Zone, living in a wrecked building or other squat.",
    "In a huge \"megastructure\" building controlled by a Corp or the City.",
    "In the ruins of a deserted town or city taken over by Reclaimers.",
    "In a Drift Nation (a floating offshore city) that is a meeting place for all kinds of people.",
    "In a Corporate luxury \"starscraper,\" high above the rest of the teeming rabble."
]

export default function ChildhoodEnvironmentSelector({setValue, onPrev, onNext}: ChildhoodEnvironmentSelectorProps) {

    return (
        <div>
            <h3>select childhood environment</h3>
            {
                environments.map((environment) => (
                    <button
                        type="button"
                        key={environment}
                        onClick={() => {
                            setValue("childhoodEnvironment", environment);
                        }}
                    > 
                        {environment}
                    </button>
                ))
            }
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    )
}