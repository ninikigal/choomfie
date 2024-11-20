"use client"

import { LawmanLifepathFormData } from "../../formTypes"

interface OppositionSelectorProps {
    setValue: (field: keyof LawmanLifepathFormData, value: LawmanLifepathFormData["opposition"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const oppositions = [
    "Organized Crime",
    "Boostergangs",
    "Police Accountability Group",
    "Dirty Politicians",
    "Smugglers",
    "Street Criminals"
];

export default function OppositionSelector({setValue, onPrev, onNext}: OppositionSelectorProps) {
    return (
        <div>
            {oppositions.map((opposition) => (
                <button
                    type="button"
                    key={opposition}
                    onClick={() => setValue("opposition", opposition)}
                >
                    {opposition}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}