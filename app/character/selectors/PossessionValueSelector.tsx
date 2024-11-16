"use client"

import { LifepathFormData } from "../formTypes"

interface PossessionValueSelectorProps {
    setValue: (field: keyof LifepathFormData, value: string) => void;
    onPrev: () => void;
    onNext: () => void;
}

type Possession = string;

const possessions: Possession[] = [
    "A weapon",
    "A tool",
    "A piece of clothing",
    "A photograph",
    "A book or diary",
    "A recording",
    "A musical instrument",
    "A piece of jewelry",
    "A toy",
    "A letter"
]

export default function PossessionValueSelector({setValue, onPrev, onNext}: PossessionValueSelectorProps) {

    return (
        <div>
            <h3>select most valued possession</h3>
            {
                possessions.map((possession) => (
                    <button
                        type="button"
                        key={possession}
                        onClick={() => {
                            setValue("valueMostPossession", possession);
                        }}
                    > 
                        {possession}
                    </button>
                ))
            }
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    )
}