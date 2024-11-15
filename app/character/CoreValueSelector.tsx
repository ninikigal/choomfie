"use client"

import { LifepathFormData } from "./formTypes";

interface CoreValuesSelectorProps {
    setValue: (field: keyof LifepathFormData, value: string) => void;
    onPrev: () => void;
    onNext: () => void;
}

type CoreValue = string;

const coreValues: CoreValue[] = [
    "Money",
    "Honor",
    "Your word",
    "Honesty",
    "Knowledge",
    "Vengeance",
    "Love",
    "Power",
    "Family",
    "Friendship"
]

export default function CoreValueSelector({ setValue, onPrev, onNext }: CoreValuesSelectorProps) {

    return (
        <div>
            <h3>select core value</h3>
            {
                coreValues.map((value) => (
                    <button
                        type="button"
                        key={value}
                        onClick={() => {
                            setValue("valueMostCore", value)
                        }}
                    >
                        {value}
                    </button>
                ))
            }
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    )
}