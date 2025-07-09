import { PreparationMethod, PrepMethodKey, WeightUnit } from "@/types"

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

export const PREP_METHODS: Record<PrepMethodKey, PreparationMethod> = {
  [PrepMethodKey.Whole]: { pastTense: 'whole', verb: '', action: '' },
  [PrepMethodKey.Chopped]: { pastTense: 'chopped', verb: 'chop', action: 'chopped' },
  [PrepMethodKey.Sliced]: { pastTense: 'sliced', verb: 'slice', action: 'sliced' },
  [PrepMethodKey.Cubed]: { pastTense: 'cubed', verb: 'cube', action: 'cubed' },
  [PrepMethodKey.Diced]: { pastTense: 'diced', verb: 'dice', action: 'diced' },
  [PrepMethodKey.Minced]: { pastTense: 'minced', verb: 'mince', action: 'minced' },
  [PrepMethodKey.Peeled]: { pastTense: 'peeled', verb: 'peel', action: 'skinned' },
  [PrepMethodKey.Julienne]: { pastTense: 'julienne', verb: 'julienne', action: 'juliennedned?' },
  [PrepMethodKey.Halved]: { pastTense: 'halved', verb: 'halve', action: 'halved' },
  [PrepMethodKey.Quartered]: { pastTense: 'quartered', verb: 'quarter', action: 'quartered' },
  [PrepMethodKey.Spiralised]: { pastTense: 'spiralised', verb: 'spiralise', action: 'spun' },
  [PrepMethodKey.Chunks]: { pastTense: 'cut into chunks', verb: 'chunky chop', action: 'chunked' },
  [PrepMethodKey.AsItIs]: { pastTense: '', verb: '', action: '' },
  [PrepMethodKey.ZestedAndJuiced]: {
    pastTense: 'zested and juiced',
    verb: 'zest & juice',
    action: 'grated and squeezed',
  },
  [PrepMethodKey.Zested]: { pastTense: 'zested', verb: 'zest', action: 'grated' },
  [PrepMethodKey.Juiced]: { pastTense: 'juiced', verb: 'juice', action: 'squeezed' },
};

// These prep methods should be auto-prepped/checked
export const AUTO_COMPLETE_PREP_METHODS: PrepMethodKey[] = [PrepMethodKey.AsItIs, PrepMethodKey.Whole]

