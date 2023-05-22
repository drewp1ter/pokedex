import clsx from 'clsx'
import styles from './PokemonType.module.scss'

interface Props {
  type: string
  className?: string
}

function PokemonType({ type, className }: Props) {
  return (
    <div className={clsx(styles.pokemonType, className)} data-type={type}>{type.toCapitalize()}</div>
  )
}

export default PokemonType