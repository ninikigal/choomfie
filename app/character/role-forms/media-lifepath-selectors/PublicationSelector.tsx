"use client"

import { MediaLifepathFormData } from "../../formTypes"

interface PublicationSelectorProps {
    setValue: (field: keyof MediaLifepathFormData, value: MediaLifepathFormData["publication"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const publications = [
    "Monthly magazine",
    "Blog",
    "Mainstream vid feed",
    "News channel",
    "\"Book\" sales",
    "Screamsheets"
];

export default function PublicationSelectorProps({setValue, onPrev, onNext}: PublicationSelectorProps) {
    return (
        <div>
            {publications.map((publication) => (
                <button
                    type="button"
                    key={publication}
                    onClick={() => setValue("publication", publication)}
                >
                    {publication}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}
