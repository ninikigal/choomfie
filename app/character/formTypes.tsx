export interface RoleFormData {
    role: string;
}

interface FriendFormData {
    relationship: string;
}

interface EnemyFormData {
    type: string;
    cause: string;
    threat: string;
    revenge: string;
}

interface TragicLoveAffairFormData {
    end: string;
}

export interface LifepathFormData {
    culturalOrigin: string | null;
    languages: string | null;
    personality: string | null;
    clothingStyle: string | null;
    hairstyle: string | null;
    affectation: string | null;
    valueMost: string | null;
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

export type FormData = {
    role: RoleFormData;
    lifepath: LifepathFormData;
  };

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
                valueMost: null,
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