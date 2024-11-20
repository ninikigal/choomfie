"use client"

import { MedtechLifepathFormData } from "../../formTypes"

interface WorkspaceSelectorProps {
    setValue: (field: keyof MedtechLifepathFormData, value: MedtechLifepathFormData["workspace"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const workspaces = [
    "Sterilized daily in the morning like clockwork.",
    "It's not state-of-the-art anymore, but it's comfortable to you.",
    "Your cryo equipment is also used to cool drinks.",
    "Everything possible is single-use and stored compacted until needed.",
    "Not as clean as many of your patients may have hoped.",
    "Meticulously organized, sharpened, and sterilized."
];

export default function WorkspaceSelector({setValue, onPrev, onNext}: WorkspaceSelectorProps) {
    return (
        <div>
            {workspaces.map((workspace) => (
                <button
                    type="button"
                    key={workspace}
                    onClick={() => setValue("workspace", workspace)}
                >
                    {workspace}
                </button>
            ))}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}