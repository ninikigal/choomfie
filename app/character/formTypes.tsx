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

export type CultureFormData = Pick<LifepathFormData, "culturalOrigin" | "languages">

export type FormData = {
    role: RoleFormData;
    lifepath: LifepathFormData;
    roleLifepath:
        | RockerLifepathFormData
        | SoloLifepathFormData
        | NetrunnerLifepathFormData
        | TechLifepathFormData
        | MedtechLifepathFormData
        | MediaLifepathFormData
}

export function createEmptyStepData<T extends keyof FormData>(step: T, role?: string): FormData[T] {
    switch(step) {
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
                default:
                    throw new Error(`Unknown role ${role}`);
            }
        default:
            throw new Error(`Unknown Step ${step}`);
    }
}