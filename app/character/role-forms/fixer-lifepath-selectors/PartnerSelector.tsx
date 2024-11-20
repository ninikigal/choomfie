"use client"

import { useState } from "react";
import { FixerLifepathFormData } from "../../formTypes"

interface PartnerSelectorProps {
    setValue: (field: keyof FixerLifepathFormData, value: FixerLifepathFormData["hasPartner"] | FixerLifepathFormData["partnerType"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const partnerTypes = [
    "Family member",
    "Old friend",
    "Possible romantic partner as well",
    "Mentor",
    "Secret partner with mob/gang connections",
    "Secret partner with Corporate connections"
];

export default function PartnerSelector({setValue, onPrev, onNext}: PartnerSelectorProps) {
    const [hasPartner, setHasPartner] = useState<boolean | null>(null);

    return (
        <div>
            <>
                <h3>Do you have a partner?</h3>
                <button type="button" onClick={() => {
                    setValue("hasPartner", true);
                    setHasPartner(true);
                }}>
                    Yes
                </button>
                <button type="button" onClick={() => {
                    setValue("hasPartner", false);
                    setValue("partnerType", null);
                    setHasPartner(false);
                }}>
                    No
                </button>
            </>
            
            {hasPartner === true && (
                <div>
                    {partnerTypes.map((type) => (
                        <button
                            type="button"
                            key={type}
                            onClick={() => setValue("partnerType", type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            )}
                
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}