import Link from 'next/link'
import { PokemonList } from '@/features/home/components'
import * as api from '@/features/home/api'
import { encodeSearchParams } from '@/utils'
import styles from './page.module.scss'

interface SearchParams {
  query?: string
  page?: string
}

interface Props {
  searchParams: SearchParams
}

const pageSize = 24

async function Pokemons({ searchParams }: Props) {
  const page = Math.max(Number(searchParams.page), 1) || 1
  const { query } = searchParams
  let pokemons: NamedAPIResource[] = []

  try {
    const res = await api.fetchPokemons(10000)
    pokemons = res.results
  } catch (e: any) {
    console.error(e.message)
  }

  if (query) pokemons = pokemons.filter((pokemon) => ~pokemon.name.indexOf(query))
  const offsetStart = (page - 1) * pageSize
  const offsetEnd = offsetStart + pageSize
  const numberOfPages = ((pokemons.length / pageSize) >> 0) + 1
  const currentPokemonList = pokemons.slice(offsetStart, offsetEnd)

  return (
    <div className={styles.home}>
      <PokemonList pokemons={currentPokemonList} />
      <div className={styles.pages}>
        {[...Array(numberOfPages > 5 ? 5 : numberOfPages).keys()].map((key) => (
          <Link key={key} className={styles.page} href={'/' + encodeSearchParams({ query, page: key + 1 })} />
        ))}
      </div>
    </div>
  )
}

export default Pokemons
