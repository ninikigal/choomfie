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
    }
]

interface CulturalSelectorProps {
    setValue: (field: keyof LifepathFormData, value: any) => void;
}

export default function CulturalSelector({setValue}: CulturalSelectorProps) {
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
        </div>
    );
}