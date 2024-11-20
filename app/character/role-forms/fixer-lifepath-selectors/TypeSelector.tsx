"use client"

import { FixerLifepathFormData } from "../../formTypes"

interface TypeSelectorProps {
    setValue: (field: keyof FixerLifepathFormData, value: FixerLifepathFormData["type"]) => void;
    onNext: () => void;
}

const types = [
    "Broker deals between rival gangs",
    "Procure rare or atypical resources for exclusive clientele",
    "Specialize in brokering Solo or Tech services as an agent",
    "Supply a regular resource for the Night Markets, like food, medicines, or drugs",
    "Procure highly illegal resources, like street drugs or milspec weapons",
    "Supply resources for Techs and Medtechs, like parts and medical supplies",
    "Operate several successful Night Markets, although not as owner",
    "Broker use contracts for heavy machinery, military vehicles, and aircraft",
    "Broker deals as a fence for scavengers raiding Corps or Combat Zones",
    "Act as an exclusive agent for a Media, Rockerboy, or a Nomad Pack"
];

export default function TypeSelector({setValue, onNext}: TypeSelectorProps) {
    return (
        <div>
            {types.map((type) => (
                <button
                    type="button"
                    key={type}
                    onClick={() => setValue("type", type)}
                >
                    {type}
                </button>
            ))}
            <button onClick={onNext}>NEXT</button>
        </div>
    );
}