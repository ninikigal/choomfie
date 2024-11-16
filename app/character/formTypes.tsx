export interface RoleFormData {
    role: string
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

export type CultureFormData = Pick<LifepathFormData, "culturalOrigin" | "languages">

export type FormData = {
    role: RoleFormData;
    lifepath: LifepathFormData;
}

export function createEmptyStepData<T extends keyof FormData>(step: T): FormData[T] {
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
        default:
            throw new Error(`Unknown Step ${step}`);
    }
}