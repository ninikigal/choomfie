"use client"

import { useState } from "react";
import { LifepathFormData } from "./character/formTypes"

interface ClothingStyleSelectorProps {
    setValue: (field: keyof LifepathFormData, value: string) => void
    onNext: () => void;
    onPrev: () => void;
}

type ClothingStyle = string;

const clothingStyles: ClothingStyle[] = [
    "Generic Chic (Standard, Colorful, Modular)",
    "Leisurewear (Comfort, Agility, Athleticism)",
    "Urban Flash (Flashy, Technological, Streetwear)",
    "Businesswear (Leadership, Presence, Authority)",
    "High Fashion (Exclusive, Designer, Couture)",
    "Bohemian (Folksy, Retro, Free-spirited)",
    "Bag Lady Chic (Homeless, Ragged, Vagrant)",
    "Gang Colors (Dangerous, Violent, Rebellious)",
    "Nomad Leathers (Western, Rugged, Tribal)",
    "Asia Pop (Bright, Costume-like, Youthful)"
]

type HairStyle = string;

const hairStyles: HairStyle[] = [
    "Mohawk",
    "Long and ratty",
    "Short and spiked",
    "Wild and all over",
    "Bald",
    "Striped",
    "Wild colors",
    "Neat and short",
    "Short and curly",
    "Long and straight"
]

export default function ClothingHairStyleSelector({ setValue, onNext, onPrev}: ClothingStyleSelectorProps) {

    return (
        <div>
            <h3>set clothing style</h3>
            {
                clothingStyles.map((style) => (
                    <button
                        type="button"
                        key={style}
                        onClick={() => {
                            setValue("clothingStyle", style);
                        }}
                    >
                        {style}
                    </button>
                ))
            }
            <h3>also set hairstyle</h3>
            {
                hairStyles.map((style) => (
                    <button
                        type="button"
                        key={style}
                        onClick={() => {
                            setValue("hairstyle", style);
                        }}
                    >
                        {style}
                    </button>
                ))
            }
            <button onClick={onPrev}>gobackpl0x</button>
            <button onClick={onNext}>gonextpl0x</button>
        </div>
    )
}