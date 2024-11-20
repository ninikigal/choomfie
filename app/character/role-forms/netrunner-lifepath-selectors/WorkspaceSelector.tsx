"use client"

import { NetrunnerLifepathFormData } from "../../formTypes"

interface WorkspaceSelectorProps {
    setValue: (field: keyof NetrunnerLifepathFormData, value: NetrunnerLifepathFormData["workspace"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const workspaces = [
    "There are screens everywhere.",
    "It looks better in Virtuality, you swear.",
    "It's a filthy bed covered in wires.",
    "Corporate, modular, and utilitarian.",
    "Minimalist, clean, and organized.",
    "It's taken over your entire living space."
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