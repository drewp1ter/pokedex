type URL = string
type State = 'idle' | 'pending' | 'done' | 'error'

declare interface String {
  toCapitalize(): string
}

interface NamedAPIResource {
  name: string
  url: string
}

interface NamedAPIResourceList {
  count: number
  next: string | null
  previous: string | null
  results: NamedAPIResource[]
}

interface PokemonAbility {
  is_hidden: boolean
  slot: number
  ability: NamedAPIResource
}

interface VersionGameIndex {
  game_index: number
  version: NamedAPIResource
}

interface PokemonHeldItemVersion {
  version: NamedAPIResource
  rarity: number
}

interface PokemonHeldItem {
  item: NamedAPIResource
  version_details: PokemonHeldItemVersion
}

interface PokemonMoveVersion {
  move_learn_method: NamedAPIResource
  version_group: NamedAPIResource
  level_learned_at: number
}

interface PokemonMove {
  move: NamedAPIResource
  version_group_details: PokemonMoveVersion[]
}

interface PokemonType {
  slot: number
  type: NamedAPIResource
}

interface PokemonTypePast {
  generation: NamedAPIResource
  types: PokemonType[]
}
interface PokemonSprites {
  back_default: null | string
  back_female: null | string
  back_shiny: null | string
  back_shiny_female: null | string
  front_default: null | string
  front_female: null | string
  front_shiny: null | string
  front_shiny_female: null | string
  other: Other
  versions: Versions
}

interface Other {
  dream_world: DreamWorld
  home: Home
  'official-artwork': OfficialArtwork
}

interface Other {
  dream_world: DreamWorld
  home: Home
  'official-artwork': OfficialArtwork
}

interface DreamWorld {
  front_default: null | string
  front_female: null | string
}

interface Home {
  front_default: null | string
  front_female: null | string
  front_shiny: null | string
  front_shiny_female: null | string
}

interface OfficialArtwork {
  front_default: null | string
  front_shiny: null | string
}

interface Versions {
  'generation-i': GenerationI
  'generation-ii': GenerationIi
  'generation-iii': GenerationIii
  'generation-iv': GenerationIv
  'generation-v': GenerationV
  'generation-vi': GenerationVi
  'generation-vii': GenerationVii
  'generation-viii': GenerationViii
}

interface GenerationI {
  'red-blue': RedBlue
  yellow: Yellow
}

interface RedBlue {
  back_default: null | string
  back_gray: null | string
  back_transparent: null | string
  front_default: null | string
  front_gray: null | string
  front_transparent: null | string
}

interface Yellow {
  back_default: null | string
  back_gray: null | string
  back_transparent: null | string
  front_default: null | string
  front_gray: null | string
  front_transparent: null | string
}

interface GenerationIi {
  crystal: Crystal
  gold: Gold
  silver: Silver
}

interface Crystal {
  back_default: null | string
  back_shiny: null | string
  back_shiny_transparent: null | string
  back_transparent: null | string
  front_default: null | string
  front_shiny: null | string
  front_shiny_transparent: null | string
  front_transparent: null | string
}

interface Gold {
  back_default: null | string
  back_shiny: null | string
  front_default: null | string
  front_shiny: null | string
  front_transparent: null | string
}

interface Silver {
  back_default: null | string
  back_shiny: null | string
  front_default: null | string
  front_shiny: null | string
  front_transparent: null | string
}

interface GenerationIii {
  emerald: Emerald
  'firered-leafgreen': FireredLeafgreen
  'ruby-sapphire': RubySapphire
}

interface Emerald {
  front_default: null | string
  front_shiny: null | string
}

interface FireredLeafgreen {
  back_default: null | string
  back_shiny: null | string
  front_default: null | string
  front_shiny: null | string
}

interface RubySapphire {
  back_default: null | string
  back_shiny: null | string
  front_default: null | string
  front_shiny: null | string
}

interface GenerationIv {
  'diamond-pearl': DiamondPearl
  'heartgold-soulsilver': HeartgoldSoulsilver
  platinum: Platinum
}

interface DiamondPearl {
  back_default: null | string
  back_female: null | string
  back_shiny: null | string
  back_shiny_female: null | string
  front_default: null | string
  front_female: null | string
  front_shiny: null | string
  front_shiny_female: null | string
}

interface HeartgoldSoulsilver {
  back_default: null | string
  back_female: null | string
  back_shiny: null | string
  back_shiny_female: null | string
  front_default: null | string
  front_female: null | string
  front_shiny: null | string
  front_shiny_female: null | string
}

interface Platinum {
  back_default: null | string
  back_female: null | string
  back_shiny: null | string
  back_shiny_female: null | string
  front_default: null | string
  front_female: null | string
  front_shiny: null | string
  front_shiny_female: null | string
}

interface GenerationV {
  'black-white': BlackWhite
}

interface BlackWhite {
  animated: Animated
  back_default: null | string
  back_female: null | string
  back_shiny: null | string
  back_shiny_female: null | string
  front_default: null | string
  front_female: null | string
  front_shiny: null | string
  front_shiny_female: null | string
}

interface Animated {
  back_default: null | string
  back_female: null | string
  back_shiny: null | string
  back_shiny_female: null | string
  front_default: null | string
  front_female: null | string
  front_shiny: null | string
  front_shiny_female: null | string
}

interface GenerationVi {
  'omegaruby-alphasapphire': OmegarubyAlphasapphire
  'x-y': XY
}

interface OmegarubyAlphasapphire {
  front_default: null | string
  front_female: null | string
  front_shiny: null | string
  front_shiny_female: null | string
}

interface XY {
  front_default: null | string
  front_female: null | string
  front_shiny: null | string
  front_shiny_female: null | string
}

interface GenerationVii {
  icons: GenerationViiIcons
  'ultra-sun-ultra-moon': UltraSunUltraMoon
}

interface GenerationViiIcons {
  front_default: null | string
  front_female: null | string
}

interface UltraSunUltraMoon {
  front_default: null | string
  front_female: null | string
  front_shiny: null | string
  front_shiny_female: null | string
}

interface GenerationViii {
  icons: GenerationViiiIcons
}

interface GenerationViiiIcons {
  front_default: null | string
  front_female: null | string
}

interface PokemonStat {
  stat: NamedAPIResource
  effort: number
  base_stat: number
}

interface PokemonType {
  slot: number
  type: NamedAPIResource
}

interface PokemonDTO {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: PokemonAbility[]
  forms: NamedAPIResource[]
  game_indices: VersionGameIndex[]
  held_items: PokemonHeldItem[]
  location_area_encounters: string
  moves: PokemonMove[]
  past_types: PokemonTypePast[]
  sprites: PokemonSprites
  species: NamedAPIResource
  stats: PokemonStat[]
  types: PokemonType[]
}
