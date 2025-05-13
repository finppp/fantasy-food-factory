import { PreparationMethod, WeightUnit } from "@/types"

export const PLURALIZED_UNITS = [
  WeightUnit.count,
  WeightUnit.splash,
  WeightUnit.sprinkle,
  WeightUnit.rasher,
  WeightUnit.pack,
  WeightUnit.tin,
  WeightUnit.stick,
  WeightUnit.clove
]

/** Difficulty strings */
export const DIFFICULTIES = [
  'Tinchy Stryder',
  'Easy',
  'Baverage',
  'Sweaty boy',
  'Super difficult deluxe supreme'
]

/** Fattboi strings */
export const FATBOI_RATINGS = [
  'Dry dry dessert',
  'Thin boi',
  'Boring salad',
  'Pretttty dry',
  'Meduim grease-ball',
  'Pretttty greasy.',
  'Rolling around',
  'Flabby monster',
  'Greasy cheesburger boi',
  'Fatboi deluxe supreme'
]

export const PREP_METHODS: { [key: string]: PreparationMethod } = {
  whole: { pastTense: 'whole', verb: '', action: '' },
  chopped: { pastTense: 'chopped', verb: 'chop', action: 'chopped' },
  sliced: { pastTense: 'sliced', verb: 'slice', action: 'sliced' },
  cubed: { pastTense: 'cubed', verb: 'cube', action: 'cubed' },
  diced: { pastTense: 'diced', verb: 'dice', action: 'diced' },
  minced: { pastTense: 'minced', verb: 'mince', action: 'minced' },
  peeled: { pastTense: 'peeled', verb: 'peel', action: 'skinned' },
  julienne: { pastTense: 'julienne', verb: 'julienne', action: 'juliennedned?' },
  halved: { pastTense: 'halved', verb: 'halve', action: 'halved' },
  quartered: { pastTense: 'quartered', verb: 'quarter', action: 'quartered' },
  spiralised: { pastTense: 'spiralised', verb: 'spiralise', action: 'spun' },
  chunks: { pastTense: 'cut into chunks', verb: 'chunky chop', action: 'chunked' },
  asItIs: { pastTense: '', verb: '', action: '' },
  zestedAndJuiced: {
    pastTense: 'zested and juiced',
    verb: 'zest & juice',
    action: 'grated and squeezed'
  },
  zested: { pastTense: 'zested', verb: 'zest', action: 'grated' },
  juiced: { pastTense: 'juiced', verb: 'juice', action: 'squeezed' }
}

// These prep methods should be auto-prepped/checked
export const AUTO_COMPLETE_PREP_METHODS = [PREP_METHODS.asItIs, PREP_METHODS.whole]

