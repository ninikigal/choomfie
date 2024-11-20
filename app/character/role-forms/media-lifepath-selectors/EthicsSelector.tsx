"use client"

import { MediaLifepathFormData } from "../../formTypes"

interface EthicsSelectorProps {
    setValue: (field: keyof MediaLifepathFormData, value: MediaLifepathFormData["ethics"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const ethics = [
    "Fair, honest reporting, strong ethical practices. You only report the verifiable truth.",
    "Fair and honest reporting, but willing to go on hearsay and rumor if that's what it takes.",
    "Will occasionally slip and do unethical things, but it's rare. You have some standards.",
    "Willing to bend any rules to get the bad guys. But only the bad guys.",
    "Ruthless and determined to make it big, even if it means breaking the law. You're a muckraker.",
    "Totally corrupt. You take bribes, engage in illegal, unethical reporting all the time. Your pen is for hire to the highest bidder."  
];

export default function EthicsSelectorProps({setValue, onPrev, onNext}: EthicsSelectorProps) {
    return (
        <div>
            {ethics.map((ethics) => (
                <button
                    type="button"
                    key={ethics}
                    onClick={() => setValue("ethics", ethics)}
                >
                    {ethics}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}
