"use client"

import { TechLifepathFormData } from "../../formTypes"

interface WorkspaceSelectorProps {
    setValue: (field: keyof TechLifepathFormData, value: TechLifepathFormData["workspace"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

const workspaces = [
    "A mess strewn with blueprint paper.",
    "Everything is color coded, but it's still a nightmare.",
    "Totally digital and obsessively backed up every day.",
    "You design everything on your Agent.",
    "You keep everything just in case you need it later.",
    "Only you understand your filing system."
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