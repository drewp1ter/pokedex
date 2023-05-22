'use client'
import { useEffect, memo } from 'react'
import Image from 'next/image'
import { observer } from 'mobx-react-lite'
import clsx from 'clsx'
import { useStore, ProgressBar, Loader } from '@/components'
import { PokemonType } from '../PokemonType'
import styles from './PokemonDetails.module.scss'

interface Props {
  pokemonName: string
  className?: string
}

const PokemonDetails = observer(function ({ className, pokemonName }: Props) {
  const { pokemon } = useStore()

  useEffect(() => {
    pokemon.fetchPokemon(pokemonName)
  }, [pokemonName])

  if (!pokemon.data || pokemon.state === 'pending') {
    return <div className={clsx(styles.placeholder, className)}><Loader className={styles.loader}/></div>
  }

  if (pokemon.state === 'error') {
    return <div className={clsx(styles.placeholder, className)}><div className={styles.loader}>404 Not Found</div></div>
  }

  return (
    <div className={clsx(styles.pokemonDetails, className)} data-type={pokemon.mainType}>
      <div className={styles.image}>
        <Image src={pokemon.data.sprites.other['official-artwork'].front_default || ''} width={364} height={370} alt={pokemon.data.name} />
        <div className={styles.pokemonTypes}>
          {pokemon.data.types.map((type) => (
            <PokemonType className={styles.pokemonType} key={type.slot} type={type.type.name} />
          ))}
        </div>
      </div>
      <section className={styles.description}>
        <div className={styles.header}>
          <h2>{pokemon.data.name.replaceAll('-', ' ').toCapitalize()}</h2>
          <div className={styles.level}>
            <h4>Generation 1</h4> {/* i didn't find value for this and below */}
            <div>578</div>
          </div>
        </div>
        <div className={styles.abilities}>
          <h5>Abilities</h5>
          <p>{pokemon.abilities}</p>
        </div>
        <div className={styles.baseStats}>
          <div className={styles.baseStat}>
            <h5>Healthy Points</h5>
            <b>{pokemon.hp}</b>
            <ProgressBar value={pokemon.hp} max={100} className={styles.progressBar} color="green" />
          </div>
          <div className={styles.baseStat}>
            <h5>Experience</h5>
            <b>{pokemon.data.base_experience}</b>
            <ProgressBar value={pokemon.data.base_experience} max={600} color="yellow" />
          </div>
        </div>
        <div className={styles.stats}>
          {pokemon.sortedStats.map((stat) => (
            <div key={stat.name} className={styles.stat}>
              <p className={styles.circle}>{stat.value}</p>
              {stat.name}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
})

export default memo(PokemonDetails)
