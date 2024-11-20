"use client"

import { NomadLifepathFormData } from "../../formTypes"

interface PhilosophySelectorProps {
    setValue: (field: keyof NomadLifepathFormData, value: NomadLifepathFormData["philosophy"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const philosophies = [
    "Always working for good; your Pack accepts others, just wants to get along.",
    "It's more like a family business. Operates as a fair and honest concern.",
    "Will occasionally slip and do unethical things, but it's rare.",
    "Willing to bend the rules whenever they get in the way to get what the Pack needs.",
    "Ruthless and self-centered, willing to do some bad things if it will get the Pack ahead.",
    "Totally evil. You rage up and down the highways, killing, looting, and just terrorizing everyone"
];

export default function PhilosophySelector({setValue, onPrev, onNext}: PhilosophySelectorProps) {
    return (
        <div>
            {philosophies.map((philosophy) => (
                <button
                    type="button"
                    key={philosophy}
                    onClick={() => setValue("philosophy", philosophy)}
                >
                    {philosophy}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}