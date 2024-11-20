"use client"

import { LawmanLifepathFormData } from "../../formTypes"

interface JurisdictionSelectorProps {
    setValue: (field: keyof LawmanLifepathFormData, value: LawmanLifepathFormData["jurisdiction"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const jurisdictions = [
    "Corporate Zones",
    "Standard City Patrol Zone",
    "Combat Zones",
    "Outer City",
    "Recovery Zones",
    "Open Highways"
];

export default function JurisdictionSelector({setValue, onPrev, onNext}: JurisdictionSelectorProps) {
    return (
        <div>
            {jurisdictions.map((jurisdiction) => (
                <button
                    type="button"
                    key={jurisdiction}
                    onClick={() => setValue("jurisdiction", jurisdiction)}
                >
                    {jurisdiction}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}