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
  const { query, page } = searchParams
  let pokemons: NamedAPIResource[] = []
  let count = 0

  try {
    const res = await api.fetchPokemons({ query, page, pageSize })
    pokemons = res.results
    count = res.count
  } catch (e: any) {
    console.error(e.message)
  }

  const numberOfPages = ((count / pageSize) >> 0) + 1

  return (
    <div className={styles.home}>
      <PokemonList pokemons={pokemons} />
      <div className={styles.pages}>
        {[...Array(numberOfPages > 5 ? 5 : numberOfPages).keys()].map((key) => (
          <Link key={key} className={styles.page} href={'/' + encodeSearchParams({ query, page: key + 1 })} />
        ))}
      </div>
    </div>
  )
}

export default Pokemons
