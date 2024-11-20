"use client"

import { NetrunnerLifepathFormData } from "../../formTypes"

interface ProgramSourceSelectorProps {
    setValue: (field: keyof NetrunnerLifepathFormData, value: NetrunnerLifepathFormData["getsProgramsAt"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const programSources = [
    "Dig around in old abandoned City Zones.",
    "Steal them from other Netrunners you brain-burn.",
    "Have a local Fixer supply programs in exchange for hack work.",
    "Corporate Execs supply you with programs in exchange for your services.",
    "You have backdoors into a few Corporate warehouses.",
    "You hit the Night Markets and score programs whenever you can"
];

export default function ProgramSourceSelector({setValue, onPrev, onNext}: ProgramSourceSelectorProps) {
    return (
        <div>
            {programSources.map((source) => (
                <button
                    type="button"
                    key={source}
                    onClick={() => setValue("getsProgramsAt", source)}
                >
                    {source}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}