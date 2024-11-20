"use client"

import { MedtechLifepathFormData } from "../../formTypes"

interface ClientSelectorProps {
    setValue: (field: keyof MedtechLifepathFormData, value: MedtechLifepathFormData["clients"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const clientTypes = [
    "Local Fixers who send you clients.",
    "Local gangers who also protect your work area or home in exchange for medical help.",
    "Corporate Execs who use you for \"black project\" medical work.",
    "Local Solos or other combat types who use you for medical help.",
    "Local Nomads and Fixers who bring you wounded clients.",
    "Trauma Team paramedical work."
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