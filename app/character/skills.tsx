"use client"

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MethodFormData, SkillsFormData } from "./formTypes";

interface SkillsFormProps {
    data: SkillsFormData
    method: MethodFormData["method"];
    onFormSubmit: (data: SkillsFormData) => void;
    onPreviousClick: () => void;
}

interface Skill {
    label: string;
    min?: number;
    max?: number;
}

type SkillConfig = Record<string, Record<string, Skill>>

const skillsConfig: SkillConfig = {
    "Awareness": {
        concentration: { label: "Concentration", min: 2 },
        conealRevealObject: { label: "Conceal/Reveal Object" },
        lipReading: { label: "Lip Reading" },
        perception: { label: "Perception", min: 2 },
        tracking: { label: "Tracking" },
    },
    "Body": {
        athletics: { label: "Athletics", min: 2 },
        contortionist: { label: "Contortionist" },
        dance: { label: "Dance" },
        endurance: { label: "Endurance" },
        resistTortureDrugs: { label: "Resist Torture/Drugs" },
        stealth: { label: "Stealth", min: 2 },
    },
    "Control": {
        driveLandVehicle: { label: "Drive Land Vehicle" },
        pilotAirVehicle: { label: "Pilot Air Vehicle" },
        pilotSeaVehicle: { label: "Pilot Sea Vehicle" },
        riding: { label: "Riding" },
    },
    "Education" : {
        accounting: { label: "Accounting" },
        animalHandling: { label: "Animal Handling" },
        bureaucracy: { label: "Bureaucracy" },
        business: { label: "Business" },
        composition: { label: "Composition" },
        criminology: { label: "Criminology" },
        cryptography: { label: "Cryptography" },
        deducation: { label: "Deduction" },
        education: { label: "Education", min: 2 },
        gamble: { label: "Gamble" },
        language: { label: "Language" },
        librarySearch: { label: "Library Search" },
        localExpert: { label: "Local Expert" },
        science: { label: "Science" },
        tactics: { label: "Tactics" },
        wildernessSurvival: { label: "Wilderness Survival" },
    },
    "Fighting" : {
        brawling: { label: "Brawling", min: 2 },
        evasion: { label: "Evasion", min: 2 },
        martialArts: { label: "Martial Arts" },
        meleeWeappon: { label: "Melee Weapon" },
    },
    "Performance": {
        acting: { label: "Acting" },
        playInstrument: { label: "Play Instrument" },
    },
    "Ranged Weapon": {
        archery: { label: "Archery" },
        autofire: { label: "Autofire" },
        handgun: { label: "Handgun" },
        heavyWeapons: { label: "Heavy Weapons" },
        shoulderArms: { label: "Shoulder Arms" },
    },
    "Social": {
        bribery: { label: "Bribery" },
        conversation: { label: "Conversation", min: 2 },
        humanPerception: { label: "Human Perception", min: 2 },
        interrogation: { label: "Interrogation" },
        persuasion: { label: "Persuasion", min: 2 },
        personalGrooming: { label: "Personal Grooming" },
        streetwise: { label: "Streetwise" },
        trading: { label: "Trading" },
        wardrobeStyle: { label: "Wardrobe & Style" },
    },
    "Technique": {
        airVehicleTech: { label: "Air Vehicle Tech" },
        basicTech: { label: "Basic Tech" },
        cybertech: { label: "Cybertech" },
        demolitions: { label: "Demolitions" },
        electronicsSecurityTech: { label: "Electronics/Security Tech" },
        firstAid: { label: "First Aid", min: 2 },
        forgery: { label: "Forgery" },
        landVehicleTech: { label: "Land Vehicle Tech" },
        paintDrawSculpt: { label: "Paint/Draw/Sculpt" },
        paramedic: { label: "Paramedic" },
        photographyFilm: { label: "Photography & Film" },
        pickLock: { label: "Pick Lock" },
        pickPocket: { label: "Pick Pocket" },
        seaVehicleTech: { label: "Sea Vehicle Tech" },
        weaponstech: { label: "Weaponstech" },
    }
};

export default function SkillsForm({data, method, onFormSubmit, onPreviousClick}: SkillsFormProps) {

    const initialPoints: number = 86;
    const [availablePoints, setAvailablePoints] = useState<number>(initialPoints)

    const {register, getValues, handleSubmit} = useForm<SkillsFormData>({
        defaultValues: data
    })

    const recalculatePoints = () => {
        const values = getValues();
        const usedPoints = Object.values(values).reduce((sum, value) => sum + (Number(value) || 0), 0);
        setAvailablePoints(initialPoints - usedPoints);
    }

    useEffect(() => {
        console.log("kappa penis");
    }, [])

    return (
        <div>
            <h1>Points Available: {availablePoints}</h1>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                {/* Render each category */}
                {Object.entries(skillsConfig).map(([ category, skills ]) => (
                    <div key={category}>
                        <h1>{category} Skills</h1>
                        {/* Render each skill in category */}
                        {Object.entries(skills).map(([ skill, properties ]) => (
                            <div key={skill}>
                                <label>{properties.label}</label>
                                <input
                                    type="number"
                                    {...register(skill as keyof SkillsFormData, {
                                        valueAsNumber: true,
                                        max: properties.max ?? 6,
                                        min: properties.min ?? 0,
                                        onChange: recalculatePoints
                                    })}
                                    max={properties.max ?? 6}
                                    min={properties.min ?? 0}
                                />
                            </div>
                        ))}
                    </div>
                ))}
                <button type="button" onClick={onPreviousClick}>
                    Previous
                </button>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}