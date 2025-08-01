import { AUTHORS } from '@/constants/authors/authors'
import { PrepMethodKey, Recipe, TimeUnit, WeightUnit } from '@/types'

export const CLARIFIED_MILK_PUNCH: Recipe = {
  title: 'Clarified Milk Punch',
  slug: 'clarified-milk-punch',
  defaultPortions: 2,
  duration: {
    count: 2,
    unit: TimeUnit.Days
  },
  description: 'This milky curdley coctail is one declicious joy',
  author: AUTHORS.finlay.key,
  difficulty: 4,
  unhealthinessRating: 8,
  ingredients: [
    {
      name: 'lemon',
      count: 6,
      unit: WeightUnit.count,
      preparationMethod: PrepMethodKey.ZestedAndJuiced
    },
    {
      name: 'whole milk',
      count: 2,
      unit: WeightUnit.l,
      preparationMethod: PrepMethodKey.AsItIs
    },
    {
      name: 'pineapple',
      count: 1,
      unit: WeightUnit.count,
      preparationMethod: PrepMethodKey.Chopped
    },
    {
      name: 'really strong black tea',
      count: 250,
      unit: WeightUnit.ml,
      preparationMethod: PrepMethodKey.AsItIs
    },
    {
      name: 'demmerearara sugar',
      count: 200,
      unit: WeightUnit.grams,
      preparationMethod: PrepMethodKey.AsItIs
    },
    {
      name: 'gold rum',
      count: 500,
      unit: WeightUnit.ml,
      preparationMethod: PrepMethodKey.AsItIs
    },
    {
      name: 'overproof rum',
      count: 200,
      unit: WeightUnit.ml,
      preparationMethod: PrepMethodKey.AsItIs
    },
    {
      name: 'cinnamon',
      count: 1,
      unit: WeightUnit.stick,
      preparationMethod: PrepMethodKey.AsItIs
    }
  ],
  method: [
    'Mix the lemon zest, lemon juice, pineapple chunks, sugar and cinnamon in a bowl',
    'Potato mash it for 5 minutes',
    'Leave it for an hourish',
    'Sieve it into a jug. Squeeze the mush in the sieve to maximize the juice',
    'Add the tea and both rums',
    'Leave overnight in the fridge',
    'Put the milk in a big bowl or pot',
    'Slowly stir the milk while adding the boozey mix',
    'Keep slowly stirring it every few mins for half an hourish. Get them lumps even lumpier!',
    'Spoon the lumpy mix though a sieve with coffee filter/cheese cloth into a jug. Make sure you pour the mix slowly into the sieve. Try pouring onto a spoon to soften the landing.',
    'Strain the liquid through the cheesey lumpy sieve a few times until the liquid is clear',
    'Strain this liquid throught a clean coffee filter',
    'Fill a bottle with your pineapple gold',
    'Serve neat with cube of ice'
  ]
}
