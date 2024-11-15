"use client"

import { LifepathFormData } from "./formTypes";

interface AffectationSelectorProps {
    setValue: (field: keyof LifepathFormData, value: string) => void;
    onPrev: () => void;
    onNext: () => void;
}

type Affectation = string;

const affectations: Affectation[] = [
    "Tattoos",
    "Mirrorshades",
    "Ritual scars",
    "Spiked gloves",
    "Nose rings",
    "Tongue or other piercings",
    "Strange fingernail implants",
    "Spiked boots or heels",
    "Fingerless gloves",
    "Strange contacts"
]

export default function AffectationSelector({ setValue, onPrev, onNext }: AffectationSelectorProps) {

    return (
        <div>
            <h3>select affectation brah</h3>
            {
                affectations.map((affectation) => (
                    <button
                        type="button"
                        key={affectation}
                        onClick={() => {
                            setValue("affectation", affectation)
                        }}
                    >
                        {affectation}
                    </button>
                ))
            }
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    )
}