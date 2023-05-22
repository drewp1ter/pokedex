import { makeAutoObservable, runInAction } from 'mobx'
import * as api from '../api'

interface SortedStats {
  name: string
  value?: number
}

class Pokemon {
  state: State = 'idle'
  errorMessage = ''
  data: PokemonDTO | null = null

  constructor() {
    makeAutoObservable(this)
  }

  get mainType(): string {
    return this.data?.types.find((type) => type.slot === 1)?.type.name || 'unknown'
  }

  get abilities(): string {
    return this.data?.abilities.map((ability) => ability.ability.name.replaceAll('-', ' ').toCapitalize()).join(' - ') || ''
  }

  get hp(): number | undefined {
    return this.data?.stats.find((stat) => stat.stat.name.toLowerCase() === 'hp')?.base_stat
  }

  get sortedStats(): SortedStats[] {
    return [
      ['attack', 'Attack'],
      ['defense', 'Defense'],
      ['special-attack', 'Sp Attack'],
      ['special-defense', 'Sp Defense']
    ].map((item) => ({
      value: this.data?.stats.find((stat) => stat.stat.name.toLowerCase() === item[0])?.base_stat,
      name: item[1]
    }))
  }

  async fetchPokemon(name: string) {
    if (this.state === 'pending') return
    this.state = 'pending'
    try {
      const data = await api.fetchPokemon(name)
      runInAction(() => {
        this.data = data
        this.state = 'done'
        this.errorMessage = ''
      })
    } catch (e: any) {
      runInAction(() => {
        this.state = 'error'
        this.errorMessage = e.message
      })
    }
  }
}

export default Pokemon
