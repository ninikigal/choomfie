"use client"

import { MediaLifepathFormData } from "../../formTypes"

interface TypeSelectorProps {
    setValue: (field: keyof MediaLifepathFormData, value: MediaLifepathFormData["type"]) => void;
    onNext: () => void;
}

const mediaTypes = [
    "Blogger",
    "Writer (Books)",
    "Videographer",
    "Documentarian",
    "Investigative Reporter",
    "Street Scribe"
];

export default function TypeSelector({setValue, onNext}: TypeSelectorProps) {
    return (
        <div>
            {mediaTypes.map((media) => (
                <button
                    type="button"
                    key={media}
                    onClick={() => setValue("type", media)}
                >
                    {media}
                </button>
            ))}
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}
