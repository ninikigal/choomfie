"use client"

import { RockerLifepathFormData } from "../../formTypes"

interface LeaveReasonSelectorProps {
    setValue: (field: keyof RockerLifepathFormData, value: RockerLifepathFormData["leavingReason"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const reasons = [
    "You were a jerk and the rest of the group voted you out.",
    "You got caught sleeping around with another member's mainline.",
    "The rest of the group was killed in a tragic \"accident.\"",
    "The rest of the group was murdered or otherwise broken up by external enemies.",
    "The group broke up over \"creative differences.\"",
    "You decided to go solo."
];

export default function LeaveReasonSelector({setValue, onPrev, onNext}: LeaveReasonSelectorProps) {

    return (
        <div>
            {reasons.map((reason) => (
                <button
                    type="button"
                    key={reason}
                    onClick={() => setValue("leavingReason", reason)}
                >
                    {reason}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}