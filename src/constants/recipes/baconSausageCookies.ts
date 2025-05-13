import { AUTHORS } from '@/constants/authors/authors'
import { TimeUnit, WeightUnit } from '@/types'
import { PREP_METHODS } from '..'

export const BACON_SAUSAGE_COOKIES = {
  title: 'Bacon and sausage Cookies',
  slug: 'bacon-sausage-cookies',
  image: 'bacon-sausage-cookies.jpeg',
  portions: 2,
  duration: {
    number: 1,
    unit: TimeUnit.Hours
  },
  description:
    'One of Adams most creative recipes, based on the classic bacon cookies. Make sure to use some very rich sausages to maximise the greasy flavour',
  author: AUTHORS.finlay.key,
  difficulty: 1,
  ingredients: [
    {
      name: 'powder cookie mix',
      count: 1,
      unit: WeightUnit.pack,
      prepMethod: PREP_METHODS.asItIs
    },
    {
      name: 'richmond sausages',
      count: 3,
      unit: WeightUnit.count,
      prepMethod: PREP_METHODS.chunks
    },
    {
      name: 'bacon',
      count: 3,
      unit: WeightUnit.rasher,
      prepMethod: PREP_METHODS.chopped
    }
  ],
  method: [
    'Follow the cookie recipe until you have a wet dough.',
    'Fry the bacon and sausages.',
    'Add the bacon and sausage pieces to the dough.',
    'Roll out the meaty dough.',
    'Cut into shapes',
    'Bake following the cookie recipe.'
  ]
}
