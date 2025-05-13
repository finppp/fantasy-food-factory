import { PREP_METHODS } from "..";
import { AUTHORS } from "../authors/authors";
import { Recipe, TimeUnit, WeightUnit } from "@/types";

export const CORIANDER_SALAD: Recipe = {
  title: 'Randerz Salad',
  slug: 'coriander-salad',
  image: 'coriander-salad.jpg',
  portions: 2,
  duration: {
    count: 15,
    unit: TimeUnit.Minutes
  },
  description:
    'This is a dummy description is this. A medium sized bit of text about how the recipe is eaten or what food it goes with. Maybe ending with a hillarious line.',
  author: AUTHORS.finlay.key,
  difficulty: 4,
  ingredients: [
    {
      name: 'coriander',
      count: 5,
      unit: WeightUnit.grams,
      prepMethod: PREP_METHODS.chopped
    },
    {
      name: 'onion',
      count: 5,
      unit: WeightUnit.count,
      prepMethod: PREP_METHODS.diced
    },
    {
      name: 'cucumber',
      count: 0.5,
      unit: WeightUnit.kg,
      prepMethod: PREP_METHODS.diced
    },
    {
      name: 'milk',
      count: 2,
      unit: WeightUnit.ml,
      prepMethod: PREP_METHODS.chopped
    },
    {
      name: 'onion powder',
      count: 5,
      unit: WeightUnit.tbsp,
      prepMethod: PREP_METHODS.diced
    },
    {
      name: 'mango',
      count: 2,
      unit: WeightUnit.count,
      prepMethod: PREP_METHODS.diced
    }
  ],
  method: [
    'Put all the ingredients in a bowl.',
    'Mix all the ingredints with a big old spoon.'
  ]
}
