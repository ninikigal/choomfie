"use client"

import { NomadLifepathFormData } from "../../formTypes"

interface PackSizeSelectorProps {
    setValue: (field: keyof NomadLifepathFormData, value: NomadLifepathFormData["packSize"]) => void;
    onNext: () => void;
}

const packSizes = [
    "A single extended tribe or family",
    "A couple dozen members",
    "Forty or fifty members",
    "A hundred or more members",
    "A Blood Family (hundreds of members)",
    "An Affiliated Family (made of several Blood Families)"
];

export default function PackSizeSelector({setValue, onNext}: PackSizeSelectorProps) {
    return (
        <div>
            {packSizes.map((size) => (
                <button
                    type="button"
                    key={size}
                    onClick={() => setValue("packSize", size)}
                >
                    {size}
                </button>
            ))}
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}