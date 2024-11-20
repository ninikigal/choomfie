"use client"

import { MedtechLifepathFormData } from "../../formTypes"

interface ProgramSourceSelectorProps {
    setValue: (field: keyof MedtechLifepathFormData, value: any) => void;
    onPrev: () => void;
}

const suppliesSources = [
    "Scavenge stashes of medical supplies you find in abandoned City Zones.",
    "Strip parts from bodies after firefights.",
    "Have a local Fixer bring you supplies in exchange for medical work.",
    "Corporate Execs or Trauma Team supply you with stuff in exchange for your services.",
    "You have a backdoor into a few Corporate or Hospital warehouses.",
    "You hit the Night Markets and score deals whenever you can."
];

export default function SuppliesSourceSelector({setValue, onPrev}: ProgramSourceSelectorProps) {
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
        </div>
    );
}