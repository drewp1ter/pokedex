import Link from 'next/link'
import { PokemonList, SearchBar } from '@/features/home/components'
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
  const { query, page } = searchParams
  let pokemons: NamedAPIResource[] = []
  let count = 0
  let total = 0

  try {
    const res = await api.fetchPokemons({ query, page, pageSize })
    pokemons = res.results
    count = res.count
    total = res.total
  } catch (e: any) {
    console.error(e.message)
  }

  const numberOfPages = ((count / pageSize) >> 0) + 1

  return (
    <section className={styles.homePage}>
      <h1 className={styles.title}>
        {total} <b>Pokemons</b> for you to choose your favorite
      </h1>
      <SearchBar className={styles.searchInput} />

      <div className={styles.home}>
        <PokemonList pokemons={pokemons} />
        <div className={styles.pages}>
          {[...Array(numberOfPages > 5 ? 5 : numberOfPages).keys()].map((key) => (
            <Link key={key} className={styles.page} href={'/' + encodeSearchParams({ query, page: key + 1 })} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pokemons
