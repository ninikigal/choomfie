"use client"

import { MediaLifepathFormData } from "../../formTypes"

interface StorySelectorProps {
    setValue: (field: keyof MediaLifepathFormData, value: MediaLifepathFormData["story"]) => void;
    onPrev: () => void;
}

const stories = [
    "Political Intrigue",
    "Ecological Impact",
    "Celebrity News",
    "Corporate Takedowns",
    "Editorials",
    "Propaganda"
];

export default function StorySelectorProps({setValue, onPrev}: StorySelectorProps) {
    return (
        <div>
            {stories.map((story) => (
                <button
                    type="button"
                    key={story}
                    onClick={() => setValue("story", story)}
                >
                    {story}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
        </div>
    );
}
