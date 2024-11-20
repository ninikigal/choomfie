"use client"

import { MediaLifepathFormData } from "../../formTypes"

interface StorySelectorProps {
    setValue: (field: keyof MediaLifepathFormData, value: MediaLifepathFormData["story"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const stories = [
    "Fair, honest reporting, strong ethical practices. You only report the verifiable truth.",
    "Fair and honest reporting, but willing to go on hearsay and rumor if that's what it takes.",
    "Will occasionally slip and do unethical things, but it's rare. You have some standards.",
    "Willing to bend any rules to get the bad guys. But only the bad guys.",
    "Ruthless and determined to make it big, even if it means breaking the law. You're a muckraker.",
    "Totally corrupt. You take bribes, engage in illegal, unethical reporting all the time. Your pen is for hire to the highest bidder."  
];

export default function StorySelectorProps({setValue, onPrev, onNext}: StorySelectorProps) {
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
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}
