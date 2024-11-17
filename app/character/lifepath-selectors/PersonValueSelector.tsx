"use client"

import { LifepathFormData } from "../formTypes"

interface PersonValueSelectorProps {
    setValue: (field: keyof LifepathFormData, value: string) => void;
    onPrev: () => void;
    onNext: () => void;
}

type Person = string;

const persons: Person[] = [
    "A parent",
    "A brother or sister",
    "A lover",
    "A friend",
    "Yourself",
    "A pet",
    "A teacher or mentor",
    "A public figure",
    "A personal hero",
    "No one"
]

export default function PersonValueSelector({setValue, onPrev, onNext}: PersonValueSelectorProps) {

    return (
        <div>
            <h3>select most valued person</h3>
            {
                persons.map((person) => (
                    <button
                        type="button"
                        key={person}
                        onClick={() => {
                            setValue("valueMostPerson", person);
                        }}
                    > 
                        {person}
                    </button>
                ))
            }
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    )
}