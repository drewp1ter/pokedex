import { PropsWithChildren } from 'react'
import { SearchBar } from '@/features/home/components'
import styles from './layout.module.scss'

async function HomePage({ children }: PropsWithChildren) {
  return (
    <section className={styles.homePage}>
      <h1 className={styles.title}>
        800 <b>Pokemons</b> for you to choose your favorite
      </h1>
      <SearchBar className={styles.searchInput} />
      {children}
    </section>
  )
}

export default HomePage
