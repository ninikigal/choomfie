"use client"

import { useState } from "react";
import { TechLifepathFormData } from "../../formTypes"

interface PartnerSelectorProps {
    setValue: (field: keyof TechLifepathFormData, value: TechLifepathFormData["hasPartner" | "partnerType"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const partners = [
    "Family member",
    "Old friend",
    "Possible romantic partner as well",
    "Mentor",
    "Secret partner with mob/gang connections",
    "Secret partner with Corporate connections"
]

export default function PartnerSelector({setValue, onPrev, onNext}: PartnerSelectorProps) {
    const [hasPartner, setHasPartner] = useState<boolean | null>(null);

    return (
        <div>
            <>
                <button type="button" onClick={() => {
                    setValue("hasPartner", true);
                    setHasPartner(true);
                }}>Yes, I have a partner</button>
                <button type="button" onClick={() => {
                    setValue("hasPartner", false);
                    setValue("partnerType", null);
                    setHasPartner(false);
                }}>No, I work alone</button>
            </>

            {hasPartner === true && (
                <div>
                    <h3>Select your partner type:</h3>
                    {partners.map((partner, index) => (
                        <button key={index} onClick={() => setValue("partnerType", partner)}>
                            {partner}
                        </button>
                    ))}
                </div>
            )}

            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}