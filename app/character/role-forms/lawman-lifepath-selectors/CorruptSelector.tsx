"use client"

import { LawmanLifepathFormData } from "../../formTypes"

interface CorruptSelectorProps {
    setValue: (field: keyof LawmanLifepathFormData, value: LawmanLifepathFormData["corrupt"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const corruptLevels = [
    "Fair, honest policing, strong ethical practices.",
    "Fair and honest policing, but hard on lawbreakers.",
    "Will occasionally slip and do unethical things, but it's rare.",
    "Willing to bend any rules to get the bad guys.",
    "Ruthless and determined to control The Street, even if it means breaking the law.",
    "Totally corrupt. You take bribes, engage in illegal, and unethical business all the time."
];

export default function CorruptSelector({setValue, onPrev, onNext}: CorruptSelectorProps) {
    return (
        <div>
            {corruptLevels.map((level) => (
                <button
                    type="button"
                    key={level}
                    onClick={() => setValue("corrupt", level)}
                >
                    {level}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}