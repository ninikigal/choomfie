"use client"

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CustomSkill, MethodFormData, SkillsFormData } from "./formTypes";
import CustomSkillInput from "./skills-components/CustomSkillForm";

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
    cost?: number;
    isCustom?: boolean;
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
        pilotAirVehicle: { label: "Pilot Air Vehicle", cost: 2 },
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
        language: { label: "Language", isCustom: true },
        librarySearch: { label: "Library Search" },
        localExpert: { label: "Local Expert", isCustom: true },
        science: { label: "Science", isCustom: true },
        tactics: { label: "Tactics" },
        wildernessSurvival: { label: "Wilderness Survival" },
    },
    "Fighting" : {
        brawling: { label: "Brawling", min: 2 },
        evasion: { label: "Evasion", min: 2 },
        martialArts: { label: "Martial Arts", cost: 2 },
        meleeWeappon: { label: "Melee Weapon" },
    },
    "Performance": {
        acting: { label: "Acting" },
        playInstrument: { label: "Play Instrument", isCustom: true},
    },
    "Ranged Weapon": {
        archery: { label: "Archery" },
        autofire: { label: "Autofire", cost: 2 },
        handgun: { label: "Handgun" },
        heavyWeapons: { label: "Heavy Weapons", cost: 2 },
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
        demolitions: { label: "Demolitions", cost: 2 },
        electronicsSecurityTech: { label: "Electronics/Security Tech", cost: 2 },
        firstAid: { label: "First Aid", min: 2 },
        forgery: { label: "Forgery" },
        landVehicleTech: { label: "Land Vehicle Tech" },
        paintDrawSculpt: { label: "Paint/Draw/Sculpt" },
        paramedic: { label: "Paramedic", cost: 2 },
        photographyFilm: { label: "Photography & Film" },
        pickLock: { label: "Pick Lock" },
        pickPocket: { label: "Pick Pocket" },
        seaVehicleTech: { label: "Sea Vehicle Tech" },
        weaponstech: { label: "Weaponstech" },
    }
};

const doubleCostSkills = Object.entries(skillsConfig).flatMap(([category, skills]) => (
    Object.entries(skills)
        .filter(([skill, skillProperty]) => skillProperty.cost === 2)
        .map(([skill, skillproperty]) => (
            skill
        ))
))

const customSkills = Object.entries(skillsConfig).flatMap(([category, skills]) => (
    Object.entries(skills)
        .filter(([skill, skillProperty]) => skillProperty.isCustom === true)
        .map(([skill, skillProperty]) => (
            skill
        ))
))

export default function SkillsForm({data, method, onFormSubmit, onPreviousClick}: SkillsFormProps) {

    const initialPoints: number = 86;
    const [availablePoints, setAvailablePoints] = useState<number>(initialPoints)

    const {register, getValues, setValue, handleSubmit} = useForm<SkillsFormData>({
        defaultValues: data
    })

    const recalculatePoints = () => {
        const entries = Object.entries(getValues());

        let usedPoints = 0;
        entries.forEach(([skill, skillValue]) => (
            usedPoints += (doubleCostSkills.includes(skill)) ? (Number(skillValue) * 2 || 0) : (Number(skillValue) || 0)
        ))

        setAvailablePoints(initialPoints - usedPoints);
    }

    useEffect(() => {
        recalculatePoints();
        console.log(customSkills);
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
                                {!properties.isCustom ? (
                                    <>
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
                                            onInput={(e) => {
                                                const input = e.target as HTMLInputElement;
                                                const newValue = parseInt(input.value) || 0;
                                                const currentValue = Number(getValues()[skill as keyof SkillsFormData]);
                                                const pointCost = doubleCostSkills.includes(skill) ? 2 : 1;
                                                
                                                // Only prevent if trying to increment
                                                if (newValue > currentValue && availablePoints - pointCost < 0) {
                                                    input.value = String(currentValue);
                                                    e.preventDefault();
                                                }
                                            }}
                                        />
                                    </>
                                ) : (
                                    <CustomSkillInput
                                        skillName={properties.label}
                                        value={getValues()[skill as keyof SkillsFormData] as CustomSkill[]|| []}
                                        setValue={(subSkills) => {
                                            setValue(skill as keyof SkillsFormData, subSkills as CustomSkill[])
                                        }}
                                    />
                                )}
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