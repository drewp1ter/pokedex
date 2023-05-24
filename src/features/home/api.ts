import { encodeSearchParams } from '@/utils'

const apiPrefix = 'https://pokeapi.co/api/v2/'
const pokeEndpoint = apiPrefix + 'pokemon/'

export async function fetchPokemons({ query, page, pageSize = 24 }: FetchPokmonProps): Promise<FetchPokemonsResponse> {
  page = Math.max(Number(page), 1) || 1
  let pokemons: NamedAPIResource[] = []

  const res = await fetch(pokeEndpoint + encodeSearchParams({ limit: 10000, offset: 0 }), { cache: 'force-cache' })
  if (!res.ok) {
    throw new Error(`Status ${res.status}`)
  }

  const data = (await res.json()) as NamedAPIResourceList
  pokemons = data.results

  if (query) pokemons = pokemons.filter((pokemon) => ~pokemon.name.indexOf(query))
  const offsetStart = (page - 1) * pageSize
  const offsetEnd = offsetStart + pageSize
  return { count: pokemons.length, results: pokemons.slice(offsetStart, offsetEnd) }
}

export async function fetchPokemon(name?: string): Promise<PokemonDTO | null> {
  if (!name) return null
  const res = await fetch(pokeEndpoint + name, { cache: 'force-cache' })
  if (!res.ok) {
    throw new Error(`Status ${res.status}`)
  }

  return res.json()
}
