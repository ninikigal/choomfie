"use client"

import { FixerLifepathFormData } from "../../formTypes"

interface WorkspaceSelectorProps {
    setValue: (field: keyof FixerLifepathFormData, value: FixerLifepathFormData["workspace"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const workspaces = [
    "You don't have one. You like to keep it mobile.",
    "A booth in a local bar.",
    "All Data Pool messages and anonymous dead drops.",
    "Spare room in a warehouse, shop, or clinic.",
    "An otherwise abandoned building.",
    "The lobby of a cube hotel."
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