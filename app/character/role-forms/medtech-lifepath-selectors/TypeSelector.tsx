"use client"

import { MedtechLifepathFormData } from "../../formTypes"

interface TypeSelectorProps {
    setValue: (field: keyof MedtechLifepathFormData, value: MedtechLifepathFormData["type"]) => void;
    onNext: () => void;
}

const types = [
    "Surgeon",
    "General Practitioner",
    "Trauma Medic",
    "Psychiatrist",
    "Cyberpsycho Therapist",
    "Ripperdoc",
    "Cryosystems Operator",
    "Pharmacist",
    "Bodysculptor",
    "Forensic Pathologist"
];

export default function TypeSelector({setValue, onNext}: TypeSelectorProps) {
    return (
        <div>
            {types.map((type) => (
                <button
                    type="button"
                    key={type}
                    onClick={() => setValue("type", type)}
                >
                    {type}
                </button>
            ))}
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}