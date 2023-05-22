import { encodeSearchParams } from '@/utils'

const apiPrefix = 'https://pokeapi.co/api/v2/'
const pokeEndpoint = apiPrefix + 'pokemon/'

export async function fetchPokemons(limit = 24, offset = 0): Promise<NamedAPIResourceList> {
  const res = await fetch(pokeEndpoint + encodeSearchParams({ limit, offset }), { cache: 'force-cache' })
  if (!res.ok) {
    throw new Error(`Status ${res.status}`)
  }

  return res.json()
}

export async function fetchPokemon(name?: string): Promise<PokemonDTO | null> {
  if (!name) return null
  const res = await fetch(pokeEndpoint + name, { cache: 'force-cache' })
  if (!res.ok) {
    throw new Error(`Status ${res.status}`)
  }

  return res.json()
}
