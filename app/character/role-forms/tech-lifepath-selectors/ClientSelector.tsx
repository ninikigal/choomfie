"use client"

import { TechLifepathFormData } from "../../formTypes"

interface ClientSelectorProps {
    setValue: (field: keyof TechLifepathFormData, value: TechLifepathFormData["clients"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const clientTypes = [
    "Local Fixers who send you clients",
    "Local gangers who also protect your work area or home",
    "Corporate Execs who use you for \"black project\" work",
    "Local Solos or other combat types who use you for weapon upkeep",
    "Local Nomads and Fixers who bring you \"found\" tech to repair",
    "You work for yourself and sell what you invent/repair"
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