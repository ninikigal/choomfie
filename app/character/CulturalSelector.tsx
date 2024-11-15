"use client"

import { useState } from "react";
import { LifepathFormData } from "./formTypes";

interface Culture {
    name: string
    languages: string[];
}

const cultures: Culture[] = [
    {
        name: "North American",
        languages: [
            "Chinese", "Cree", "Creole", "English", "French",
            "Navajo", "Spanish"
        ]
    },
    {
        name: "South/Central American",
        languages: [
            "Creole", "English", "German", "Guarani", "Mayan",
            "Portuguese", "Quechua", "Spanish"
        ]
    },
    {
        name: "Western European",
        languages: [
            "Dutch", "English", "French", "German", "Italian",
            "Norwegian", "Portuguese", "Spanish"
        ]
    },
    {
        name: "Eastern European",
        languages: [
            "English", "Finnish", "Polish", "Romanian", "Russian",
            "Ukrainian"
        ]
    },
    {
        name: "Middle Eastern/North African",
        languages: [
            "Arabic", "Berber", "English", "Farsi",
            "French", "Hebrew", "Turkish"
        ]
    },
    {
        name: "Sub-Saharan",
        languages: [
            "Arabic", "English", "French", "Hausa", "Lingala",
            "Oromo", "Portuguese", "Swahili", "Twi", "Yoruba"
        ]
    },
    {
        name: "South Asian",
        languages: [
            "Bengali", "Dari", "English", "Hindi", "Nepali",
            "Sinhalese", "Tamil", "Urdu"
        ]
    },
    {
        name: "South East Asian",
        languages: [
            "Arabic", "Burmese", "English", "Filipino", "Hindi",
            "Indonesian", "Khmer", "Malayan", "Vietnamese"
        ]
    },
    {
        name: "East Asian",
        languages: [
            "Cantonese Chinese", "English", "Japanese", "Korean",
            "Mandarin Chinese", "Mongolian"
        ]
    },
    {
        name: "Oceania/Pacific Islander",
        languages: [
            "English", "French", "Hawaiian", "Maori", "Pama-Nyungan",
            "Tahitian"
        ]
    }
]

interface CulturalSelectorProps {
    setValue: (field: keyof LifepathFormData, value: string) => void;
    onNext: () => void;
}

export default function CulturalSelector({setValue, onNext}: CulturalSelectorProps) {
    const [selectedCulture, setSelectedCulture] = useState<Culture | null>(null)

    return (
        <div>
            <h3>Select your Cultural Region:</h3>
            {cultures.map((culture) => (
                <button 
                    type="button" 
                    key={culture.name} 
                    onClick={() => {
                        setSelectedCulture(culture);
                        setValue("culturalOrigin", culture.name); // Update culture
                        setValue("languages", ""); // Reset language when culture changes
                    }}
                >
                    {culture.name}
                </button>
            ))}

            {selectedCulture && (
                <>
                    <h4>Select your Language:</h4>
                    {selectedCulture.languages.map((language) => (
                        <button 
                            type="button" 
                            key={language} 
                            onClick={() => setValue("languages", language)}
                        >
                            {language}
                        </button>
                    ))}
                </>
            )}
            <button onClick={onNext}>go next substep</button>
        </div>
    );
}