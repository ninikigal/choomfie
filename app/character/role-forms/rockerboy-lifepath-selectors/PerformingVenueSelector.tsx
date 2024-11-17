"use client"

import { RockerLifepathFormData } from "../../formTypes"

interface PerformingVenueSelectorProps {
    setValue: (field: keyof RockerLifepathFormData, value: RockerLifepathFormData["performingVenue"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const venues = [
    "Alternative Cafes",
    "Private Clubs",
    "Seedy Dive Bars",
    "Guerrilla Performances",
    "Nightclubs Around the City",
    "On the Data Pool"
];

export default function PerformingVenueSelector({setValue, onPrev, onNext}: PerformingVenueSelectorProps) {

    return (
        <div>
            {venues.map((venue) => (
                <button
                    type="button"
                    key={venue}
                    onClick={() => setValue("performingVenue", venue)}
                >
                    {venue}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}