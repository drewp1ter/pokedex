'use client'
import clsx from 'clsx'
import { useState } from 'react'
import { Button, Modal } from '@/components'
import { PokemonDetails } from '../PokemonDetails'
import styles from './PokemonList.module.scss'

interface Props {
  pokemons: NamedAPIResource[]
  className?: string
}

function PokemonList({ pokemons, className }: Props) {
  const [isPokemonDetailsOpen, setIsPokemonDetailsOpen] = useState(false)
  const [currentPokemonName, setCurrentPokemonName] = useState('')

  const handlePokemonNameClick: React.MouseEventHandler<HTMLButtonElement> = ({ currentTarget }) => {
    setIsPokemonDetailsOpen(true)
    setCurrentPokemonName(currentTarget.title)
  }

  const handlePokemonDetailsClose = () => {
    setIsPokemonDetailsOpen(false)
  }

  return (
    <div className={clsx(styles.alignWrapper, className)}>
      <div className={styles.pokeNames}>
        {pokemons.map((pokemon) => (
          <Button className={styles.pokeButton} title={pokemon.name} onClick={handlePokemonNameClick} key={pokemon.name}>
            {pokemon.name.replaceAll('-', ' ').toCapitalize()}
          </Button>
        ))}
      </div>
      <Modal open={isPokemonDetailsOpen} onClose={handlePokemonDetailsClose}>
        <PokemonDetails pokemonName={currentPokemonName} />
      </Modal>
    </div>
  )
}

export default PokemonList
