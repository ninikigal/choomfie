"use client"

import { SoloLifepathFormData } from "../../formTypes"

interface MoralCompassSelectorProps {
    setValue: (field: keyof SoloLifepathFormData, value: SoloLifepathFormData["moralCompass"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const morals = [
    "Always working for good, trying to take out the \"bad guys.\"",
    "Always spare the innocent (elderly, women, children, pets).",
    "Will occasionally slip and do unethical or bad things, but it's rare.",
    "Ruthless and profit centered; you will work for anyone, take any job for the money.",
    "Willing to bend the rules (and the law) to get the job done.",
    "Totally evil. You engage in illegal, unethical work all the time; in fact, you enjoy it."
];

export default function MoralCompassSelector({setValue, onPrev, onNext}: MoralCompassSelectorProps) {

    return (
        <div>
            {morals.map((moral) => (
                <button
                    type="button"
                    key={moral}
                    onClick={() => setValue("moralCompass", moral)}
                >
                    {moral}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}