"use client"

import { LifepathFormData } from "../formTypes"

interface FamilyBackgroundSelectorProps {
    setValue: (field: keyof LifepathFormData, value: string) => void;
    onPrev: () => void;
    onNext: () => void;
}

type Background = {
    name: string;
    description: string;
}

const backgrounds: Background[] = [
    {
        name: "Corporate Execs",
        description: "Wealthy, powerful, with servants, luxury homes, and the best of everything. \
        Private security made sure you were always safe. You definitely went to a big-name private school."
    },
    {
        name: "Corporate Managers",
        description: "Well to do, with large homes, safe neighborhoods, nice cars, etc. \
        Sometimes your parent(s) would hire servants, although this was rare. You had a mix of private and corporate education."
    },
    {
        name: "Corporate Technicians",
        description: "Middle-middle class, with comfortable conapts or Beaverville suburban homes, minivans and corporate-run technical schools. \
        Kind of like living 1950s America crossed with 1984."
    },
    {
        name: "Nomad Pack",
        description: "You had a mix of rugged trailers, vehicles, and huge road kombis for your home. \
        You learned to drive and fight at an early age, but the family was always there to care for you. \
        Food was actually fresh and abundant. Mostly home schooled."
    },
    {
        name: "Ganger \"Family\"",
        description: "A savage, violent home in any place the gang could take over. You were usually hungry, cold, and scared. \
        You probably didn't know who your actual parents were. Education? The Gang taught you how to fight, kill, and steal—what else did you need to know?"
    },
    {
        name: "Combat Zoners",
        description: "A step up from a gang \"family,\" your home was a decaying building somewhere in the 'Zone', heavily fortified. \
        You were hungry at times, but regularly could score a bed and a meal. Home schooled."
    },
    {
        name: "Urban Homeless",
        description: "You lived in cars, dumpsters, or abandoned shipping modules. If you were lucky. \
        You were usually hungry, cold, and scared, unless you were tough enough to fight for the scraps. \
        Education? School of Hard Knocks."
    },
    {
        name: "Megastructure Warren Rats",
        description: "You grew up in one of the huge new megastructures that went up after the War. \
        A tiny conapt, kibble and scop for food, a mostly warm bed. Some better educated adult warren dwellers or a local Corporation may have set up a school."
    },
    {
        name: "Reclaimers",
        description: "You started out on the road, but then moved into one of the deserted ghost towns or cities to rebuild it. \
        A pioneer life: dangerous, but with plenty of simple food and a safe place to sleep. You were home schooled if there was anyone who had the time."
    },
    {
        name: "Edgerunners",
        description: "Your home was always changing based on your parents' current \"job.\" \
        Could be a luxury apartment, an urban conapt, or a dumpster if you were on the run. \
        Food and shelter ran the gamut from gourmet to kibble."
    }
]

export default function FamilyBackgroundSelector({setValue, onPrev, onNext}: FamilyBackgroundSelectorProps) {

    return (
        <div>
            <h3>select family background</h3>
            {
                backgrounds.map((background) => (
                    <button
                        type="button"
                        key={background.name}
                        onClick={() => {
                            setValue("familyBackground", background.name);
                        }}
                    > 
                        {background.name}
                    </button>
                ))
            }
            <button onClick={onPrev}>PREV</button>
            <button onClick={onNext}>NEXT</button>
        </div>
    )
}