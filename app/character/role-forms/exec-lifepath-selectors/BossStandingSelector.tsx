"use client"

import { ExecLifepathFormData } from "../../formTypes"

interface BossStandingSelectorProps {
    setValue: (field: keyof ExecLifepathFormData, value: ExecLifepathFormData["bossStanding"]) => void;
    onPrev: () => void;
}

const standings = [
    "Your Boss mentors you but watch out for their enemies.",
    "Your Boss gives you a free hand and doesn't want to know what you're up to.",
    "Your Boss is a micromanager who tries to meddle in your work.",
    "Your Boss is a psycho whose unpredictable outbursts are offset by quiet paranoia.",
    "Your Boss is cool and watches your back against rivals.",
    "Your Boss is threatened by your meteoric rise and is planning to knife you."
];

export default function BossStandingSelector({setValue, onPrev}: BossStandingSelectorProps) {
    return (
        <div>
            {standings.map((standing) => (
                <button
                    type="button"
                    key={standing}
                    onClick={() => setValue("bossStanding", standing)}
                >
                    {standing}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
        </div>
    );
}