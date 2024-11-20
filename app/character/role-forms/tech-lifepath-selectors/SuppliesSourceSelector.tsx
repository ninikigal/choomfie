"use client"

import { TechLifepathFormData } from "../../formTypes"

interface ProgramSourceSelectorProps {
    setValue: (field: keyof TechLifepathFormData, value: any) => void;
    onPrev: () => void;
    onNext: () => void;
}

const suppliesSources = [
    "Scavenge the wreckage you find in abandoned City Zones.",
    "Strip gear from bodies after firefights.",
    "Have a local Fixer bring you supplies in exchange for repair work.",
    "Corporate Execs supply you with stuff in exchange for your services.",
    "You have backdoor into a few Corporate warehouses.",
    "You hit the Night Markets and score deals whenever you can."
];

export default function SuppliesSourceSelector({setValue, onPrev, onNext}: ProgramSourceSelectorProps) {
    return (
        <div>
            {suppliesSources.map((source) => (
                <button
                    type="button"
                    key={source}
                    onClick={() => setValue("getsSuppliesAt", source)}
                >
                    {source}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}