"use client"

import { FixerLifepathFormData } from "../../formTypes"

interface ClientSelectorProps {
    setValue: (field: keyof FixerLifepathFormData, value: FixerLifepathFormData["clients"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const clientTypes = [
    "Local Rockerboys or Medias who use you to get them gigs or contacts",
    "Local gangers who also protect your work area or home",
    "Corporate Execs who use you for \"black project\" procurement work",
    "Local Solos or other combat types who use you to get them jobs or contacts",
    "Local Nomads and Fixers who use you to set up transactions or deals",
    "Local politicos or Execs who depend on you for finding out information"
];

export default function ClientSelector({setValue, onPrev, onNext}: ClientSelectorProps) {
    return (
        <div>
            {clientTypes.map((client) => (
                <button
                    type="button"
                    key={client}
                    onClick={() => setValue("clients", client)}
                >
                    {client}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}