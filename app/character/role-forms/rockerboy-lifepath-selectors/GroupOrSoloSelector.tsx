"use client"

import { useState } from "react";
import { RockerLifepathFormData } from "../../formTypes"

interface GroupOrSoloSelectorProps {
    setValue: (field: keyof RockerLifepathFormData, value: RockerLifepathFormData["isInGroup" | "wasInGroup"]) => void;
    onPrev: () => void;
    onNext: () => void;
}

export default function GroupOrSoloSelector({setValue, onPrev, onNext}: GroupOrSoloSelectorProps) {

    const [inGroup, setInGroup] = useState<boolean>(true)
    const [wasInGroup, setWasInGroup] = useState<boolean>(false)

    return (
        <div>
            <p>Are You in a Group or a Solo Act?</p>
            <button
                type="button"
                onClick={() => {
                    setInGroup(true);
                    setValue("isInGroup", true);
                    setValue("wasInGroup", false);
                }}
            >
                group
            </button>
            <button
                type="button"
                onClick={() => {
                    setInGroup(false);
                    setValue("isInGroup", false);
                    setValue("wasInGroup", false);
                }}
            >
                solo
            </button>
            {!inGroup && (
                <div>
                    <p>Were you once in a group?</p>
                    <button
                        type="button"
                        onClick={() => {
                            setWasInGroup(false)
                            setValue("wasInGroup", false)
                        }}
                    >
                    no, solo
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setWasInGroup(true)
                            setValue("wasInGroup", true)
                        }}
                    >
                    ye, was in group :3
                    </button>
                </div>
            )}
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}