import { PREP_METHODS } from "@/constants";

export interface Recipe {
    title: string,
    slug: string,
    defaultPortions: number,
    duration: Duration, //count + units else e.g. 1, hour
    author: string, // get from list
    description: string,
    difficulty: number,
    ingredients: Ingredient[],
    method: string[],
    unhealthinessRating: number,
}

export interface RecipeWithStatus extends Omit<Recipe, 'method'> {
    ingredients: IngredientWithStatus[],
    method: MethodWithStatus[],
}

export interface Ingredient {
    name: string,
    count: number,
    unit: WeightUnit,
    preparationMethod: PrepMethodKey,
}

export interface IngredientWithStatus extends Ingredient {
    isPrepped: boolean,
    isOwned: boolean,
}

export interface MethodWithStatus {
    text: string,
    completed: boolean,
}

export interface Duration {
    count: number,
    unit: TimeUnit,
}

export type PreparationMethodKey = keyof typeof PREP_METHODS;

export interface PreparationMethod {
    pastTense: string,
    verb: string,
    action: string,
};

export enum WeightUnit {
    count = '',
    grams = 'g',
    kg = 'kg',
    ml = 'ml',
    cl = 'cl',
    l = 'L',
    tsp = 'tsp', // little spoon
    tbsp = 'tbsp', // big spoon
    splash = 'sploosh',
    sprinkle = 'Sprinkly boi',
    pinch = 'pinch',
    stick = 'stick',
    bunch = 'bunch',
    pack = 'pack',
    rasher = 'rasher',
    tin = 'tin',
    clove = 'clove',
    cmPiece = 'cm piece'
}

export enum PrepMethodKey {
    Whole = 'whole',
    Chopped = 'chopped',
    Sliced = 'sliced',
    Cubed = 'cubed',
    Diced = 'diced',
    Minced = 'minced',
    Peeled = 'peeled',
    Julienne = 'julienne',
    Halved = 'halved',
    Quartered = 'quartered',
    Spiralised = 'spiralised',
    Chunks = 'chunks',
    AsItIs = 'asItIs',
    ZestedAndJuiced = 'zestedAndJuiced',
    Zested = 'zested',
    Juiced = 'juiced',
  }

export enum TimeUnit {
    Seconds = 'Seconds',
    Minutes = 'Minutes',
    Hours = 'Hours',
    Days = 'Days'
}

// type Difficulty = 1 | 2 | 3 | 4 | 5;

// type Unhealthiness = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Author {
    firstName: string;
    lastName: string;
    nickname: string;
    key: string;
    bio: string;
    favouriteRecipe: string;
    favouriteCrisp: string;
    quote: string;
}
