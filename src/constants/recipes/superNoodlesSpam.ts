import { AUTHORS } from '@/constants/authors/authors'
import { TimeUnit, WeightUnit } from '@/types'
import { PREP_METHODS } from '..'

export const SUPER_NOODLES_SPAM = {
  title: 'Super noodles with spam',
  slug: 'super-noodles-spam',
  image: 'super-noodles-spam.jpg',
  defaultPortions: 2,
  duration: {
    number: 30,
    unit: TimeUnit.Minutes
  },
  description:
    'What could be better then fried slices of spam with some perfectly cooked super noodles?',
  author: AUTHORS.finlay.key,
  difficulty: 1,
  ingredients: [
    {
      name: 'Super Noodles',
      count: 1,
      unit: WeightUnit.pack,
      prepMethod: PREP_METHODS.asItIs
    },
    {
      name: 'Spam',
      count: 1,
      unit: WeightUnit.tin,
      prepMethod: PREP_METHODS.sliced
    }
  ],
  method: [
    'Fry the slices of spam until they develop a nice golden coating.',
    'Boil the Super Noodles with water until soft',
    'Drain the noodle water to your desired amount. We recommend leaving 2/3 with the noodles.',
    'Bring the noodles back to a simmer',
    'Add the packet of sauce provided with youe noodles.',
    'Simmer for a further two minutes, adding water if dry',
    'Mix the fried Spam with the noodles.',
    'Serve with your finest crockery.'
  ]
}
