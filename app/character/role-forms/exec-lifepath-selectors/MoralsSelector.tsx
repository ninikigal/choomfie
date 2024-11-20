"use client"

import { ExecLifepathFormData } from "../../formTypes"

interface MoralsSelectorProps {
    setValue: (field: keyof ExecLifepathFormData, value: ExecLifepathFormData["morals"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const morals = [
    "Always working for good, fully supporting ethical practices.",
    "Operates as a fair and honest business all the time.",
    "Will occasionally slip and do unethical things, but it's rare.",
    "Willing to bend the rules to get what it needs.",
    "Ruthless and profit-centered, willing to do some bad things.",
    "Totally evil. Will engage in illegal, unethical business all the time"
];

export default function MoralsSelector({setValue, onPrev, onNext}: MoralsSelectorProps) {
    return (
        <div>
            {morals.map((moral) => (
                <button
                    type="button"
                    key={moral}
                    onClick={() => setValue("morals", moral)}
                >
                    {moral}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}