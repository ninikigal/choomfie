"use client"

import { NetrunnerLifepathFormData } from "../../formTypes"

interface ClientSelectorProps {
    setValue: (field: keyof NetrunnerLifepathFormData, value: NetrunnerLifepathFormData["clients"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const clientTypes = [
    "Local Fixers who send you clients",
    "Local gangers who also protect your work area while you sweep for NET threats",
    "Corporate Execs who use you for 'black project' work",
    "Local Solos or other combat types who use you to keep their personal systems secure",
    "Local Nomads and Fixers who use you to keep their family systems secure",
    "You work for yourself and sell whatever data you can find on the NET"
];

export default function ClientSelector({setValue, onPrev, onNext}: ClientSelectorProps) {
    return (
        <div>
            {clientTypes.map((clientType) => (
                <button
                    type="button"
                    key={clientType}
                    onClick={() => setValue("clients", clientType)}
                >
                    {clientType}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}