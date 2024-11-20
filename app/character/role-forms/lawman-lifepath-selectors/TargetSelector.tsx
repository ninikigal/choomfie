"use client"

import { LawmanLifepathFormData } from "../../formTypes"

interface TargetSelectorProps {
    setValue: (field: keyof LawmanLifepathFormData, value: LawmanLifepathFormData["target"]) => void;
    onPrev: () => void;
}

const targets = [
    "Organized Crime",
    "Boostergangs",
    "Drug Runners",
    "Dirty Politicians",
    "Smugglers",
    "Street Crime"
];

export default function TargetSelector({setValue, onPrev}: TargetSelectorProps) {
    return (
        <div>
            {targets.map((target) => (
                <button
                    type="button"
                    key={target}
                    onClick={() => setValue("target", target)}
                >
                    {target}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
        </div>
    );
}