export interface MethodFormData {
    method: "streetrat" | "edgerunner" | "complete"
}

export interface RoleFormData {
    role: "" 
    | "rockerboy" | "solo" | "netrunner" | "tech" | "medtech"
    | "media" | "exec" | "lawman" | "fixer" | "nomad"
}

export interface FriendFormData {
    id: number;
    relationship: string | null;
}

export interface EnemyFormData {
    id: number;
    type: string | null;
    cause: string | null;
    threat: string | null;
    revenge: string | null;
}

export interface TragicLoveAffairFormData {
    id: number;
    end: string | null;
}

export interface LifepathFormData {
    culturalOrigin: string | null;
    languages: string | null;
    personality: string | null;
    clothingStyle: string | null;
    hairstyle: string | null;
    affectation: string | null;
    valueMostCore: string | null;
    feelingsOfPeople: string | null;
    valueMostPerson: string | null;
    valueMostPossession: string | null;
    familyBackground: string | null;
    childhoodEnvironment: string | null;
    familyCrisis: string | null;
    friends: FriendFormData[] | null;
    enemies: EnemyFormData[] | null;
    lovers: TragicLoveAffairFormData[] | null;
    goal: string | null;
}

export interface RockerLifepathFormData {
    type: string | null;
    isInGroup: boolean | null;
    wasInGroup: boolean | null;
    leavingReason: string | null;
    performingVenue: string | null;
    opposition: string | null;
}

export interface SoloLifepathFormData {
    type: string | null;
    moralCompass: string | null;
    territory: string | null;
    opposition: string | null;
}

export interface NetrunnerLifepathFormData {
    type: string | null;
    hasPartner: boolean | null;
    partnerType: string | null;
    workspace: string | null;
    clients: string | null;
    getsProgramsAt: string | null;
    opposition: string | null;
}

export interface TechLifepathFormData {
    type: string | null;
    hasPartner: boolean | null;
    partnerType: string | null;
    workspace: string | null;
    clients: string | null;
    getsSuppliesAt: string | null;
    opposition: string | null;
}

export interface MedtechLifepathFormData {
    type: string | null;
    hasPartner: boolean | null;
    partnerType: string | null;
    workspace: string | null;
    clients: string | null;
    getsSuppliesAt: string | null;
}

export interface MediaLifepathFormData {
    type: string | null;
    publication: string | null;
    ethics: string | null;
    story: string | null;
}

export interface ExecLifepathFormData {
    type: string | null;
    division: string | null;
    morals: string | null;
    based: string | null;
    opposition: string | null;
    bossStanding: string | null;
}

export interface LawmanLifepathFormData {
    positions: string | null;
    jurisdiction: string | null;
    corrupt: string | null;
    opposition: string | null;
    target: string | null;
}

export interface FixerLifepathFormData {
    type: string | null;
    hasPartner: boolean | null;
    partnerType: string | null;
    workspace: string | null;
    clients: string | null;
    opposition: string | null;
}

export interface NomadLifepathFormData {
    packSize: string | null;
    workType: string | null;
    work: string | null;
    type: string | null;
    philosophy: string | null;
    opposition: string | null;
}

export interface StatsFormData {
    intelligence: number | null;
    willpower: number | null;
    cool: number | null;
    empathy: number | null;
    technique: number | null;
    reflexes: number | null;
    luck: number | null;
    body: number | null;
    dexterity: number | null;
    movement: number | null;
}


export interface CustomSkill {
    name: string | null;
    skillPoints: number | null;
}

export interface SkillsFormData {
    // awareness skills
    concentration: number | null;
    conealRevealObject: number | null;
    lipReading: number | null;
    perception: number | null;
    tracking: number | null;
    // body skills
    athletics: number | null;
    contortionist: number | null;
    dance: number | null;
    endurance: number | null;
    resistTortureDrugs: number | null;
    stealth: number | null;
    // control skills
    driveLandVehicle: number | null;
    pilotAirVehicle: number | null;
    pilotSeaVehicle: number | null;
    riding: number | null;
    // education skills
    accounting: number | null;
    animalHandling: number | null;
    bureaucracy: number | null;
    business: number | null;
    composition: number | null;
    criminology: number | null;
    cryptography: number | null;
    deducation: number | null;
    education: number | null;
    gamble: number | null;
    language: CustomSkill[] | null;
    librarySearch: number | null;
    localExpert: CustomSkill[] | null;
    science: CustomSkill[] | null;
    tactics: number | null;
    wildernessSurvival: number | null;
    // fighting skills
    brawling: number | null;
    evasion: number | null;
    martialArts: number | null;
    meleeWeappon: number | null;
    // performance skills
    acting: number | null;
    playInstrument: CustomSkill[] | null;
    // ranged weapon skills
    archery: number | null;
    autofire: number | null;
    handgun: number | null;
    heavyWeapons: number | null;
    shoulderArms: number | null;
    // social skills
    bribery: number | null;
    conversation: number | null;
    humanPerception: number | null;
    interrogation: number | null;
    persuasion: number | null;
    personalGrooming: number | null;
    streetwise: number | null;
    trading: number | null;
    wardrobeStyle: number | null;
    // technique skills
    airVehicleTech: number | null;
    basicTech: number | null;
    cybertech: number | null;
    demolitions: number | null;
    electronicsSecurityTech: number | null;
    firstAid: number | null;
    forgery: number | null;
    landVehicleTech: number | null;
    paintDrawSculpt: number | null;
    paramedic: number | null;
    photographyFilm: number | null;
    pickLock: number | null;
    pickPocket: number | null;
    seaVehicleTech: number | null;
    weaponstech: number | null;
}

export type CultureFormData = Pick<LifepathFormData, "culturalOrigin" | "languages">

export type FormData = {
    method: MethodFormData;
    role: RoleFormData;
    lifepath: LifepathFormData;
    roleLifepath:
        | RockerLifepathFormData
        | SoloLifepathFormData
        | NetrunnerLifepathFormData
        | TechLifepathFormData
        | MedtechLifepathFormData
        | MediaLifepathFormData
        | ExecLifepathFormData
        | LawmanLifepathFormData
        | FixerLifepathFormData
        | NomadLifepathFormData
    stats: StatsFormData;
    skills: SkillsFormData;
}

export function createEmptyStepData<T extends keyof FormData>(step: T, role?: string): FormData[T] {
    switch(step) {
        case "method":
            return { method: "streetrat" } as FormData[T]
        case "role":
            return { role: "" } as FormData[T];
        case "lifepath":
            return {
                culturalOrigin: null,
                languages: null,
                personality: null,
                clothingStyle: null,
                hairstyle: null,
                affectation: null,
                valueMostCore: null,
                feelingsOfPeople: null,
                valueMostPerson: null,
                valueMostPossession: null,
                familyBackground: null,
                childhoodEnvironment: null,
                familyCrisis: null,
                friends: null,
                enemies: null,
                lovers: null,
                goal: null,
            } as FormData[T];
        case "roleLifepath":
            switch(role) {
                case "": 
                    return {
                        type: null
                    } as FormData[T]
                case "rockerboy":
                    return {
                        type: null,
                        isInGroup: null,
                        wasInGroup: null,
                        leavingReason: null,
                        performingVenue: null,
                        opposition: null,
                    } as FormData[T]
                case "solo":
                    return {
                        type: null,
                        moralCompass: null,
                        territory: null,
                        opposition: null,
                    } as FormData[T]
                case "netrunner":
                    return {
                        type: null,
                        hasPartner: null,
                        partnerType: null,
                        workspace: null,
                        clients: null,
                        getsProgramsAt: null,
                        opposition: null,
                    } as FormData[T]
                case "tech":
                    return {
                        type: null,
                        hasPartner: null,
                        partnerType: null,
                        workspace: null,
                        clients: null,
                        getsSuppliesAt: null,
                        opposition: null,
                    } as FormData[T]
                case "medtech":
                    return {
                        type: null,
                        hasPartner: null,
                        partnerType: null,
                        workspace: null,
                        clients: null,
                        getsSuppliesAt: null
                    } as FormData[T]
                case "media":
                    return {
                        type: null,
                        publication: null,
                        ethics: null,
                        story: null,
                    } as FormData[T]
                case "exec":
                    return {
                        type: null,
                        division: null,
                        morals: null,
                        based: null,
                        opposition: null,
                        bossStanding: null
                    } as FormData[T]
                case "lawman":
                    return {
                        positions: null,
                        jurisdiction: null,
                        corrupt: null,
                        opposition: null,
                        target: null
                    } as FormData[T]
                case "fixer":
                    return {
                        type: null,
                        hasPartner: null,
                        partnerType: null,
                        workspace: null,
                        clients: null,
                        opposition: null
                    } as FormData[T]
                case "nomad":
                    return {
                        packSize: null,
                        workType: null,
                        work: null,
                        type: null,
                        philosophy: null,
                        opposition: null
                    } as FormData[T]
                default:
                    throw new Error(`Unknown role ${role}`);
            }
        case "stats":
            return {
                intelligence: null,
                willpower: null,
                cool: null,
                empathy: null,
                technique: null,
                reflexes: null,
                luck: null,
                body: null,
                dexterity: null,
                movement: null,
            } as FormData[T]
        case "skills":
            return {
                    // awareness skills
                    concentration: null,
                    conealRevealObject: null,
                    lipReading: null,
                    perception: null,
                    tracking: null,
                    // body skills
                    athletics: null,
                    contortionist: null,
                    dance: null,
                    endurance: null,
                    resistTortureDrugs: null,
                    stealth: null,
                    // control skills
                    driveLandVehicle: null,
                    pilotAirVehicle: null,
                    pilotSeaVehicle: null,
                    riding: null,
                    // education skills
                    accounting: null,
                    animalHandling: null,
                    bureaucracy: null,
                    business: null,
                    composition: null,
                    criminology: null,
                    cryptography: null,
                    deducation: null,
                    education: null,
                    gamble: null,
                    language: null,
                    librarySearch: null,
                    localExpert: null,
                    science: null,
                    tactics: null,
                    wildernessSurvival: null,
                    // fighting skills
                    brawling: null,
                    evasion: null,
                    martialArts: null,
                    meleeWeappon: null,
                    // performance skills
                    acting: null,
                    playInstrument: null,
                    // ranged weapon skills
                    archery: null,
                    autofire: null,
                    handgun: null,
                    heavyWeapons: null,
                    shoulderArms: null,
                    // social skills
                    bribery: null,
                    conversation: null,
                    humanPerception: null,
                    interrogation: null,
                    persuasion: null,
                    personalGrooming: null,
                    streetwise: null,
                    trading: null,
                    wardrobeStyle: null,
                    // technique skills
                    airVehicleTech: null,
                    basicTech: null,
                    cybertech: null,
                    demolitions: null,
                    electronicsSecurityTech: null,
                    firstAid: null,
                    forgery: null,
                    landVehicleTech: null,
                    paintDrawSculpt: null,
                    paramedic: null,
                    photographyFilm: null,
                    pickLock: null,
                    pickPocket: null,
                    seaVehicleTech: null,
                    weaponstech: null,
            } as FormData[T]
        default:
            throw new Error(`Unknown Step ${step}`);
    }
}