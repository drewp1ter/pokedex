import { makeAutoObservable } from 'mobx'
import Pokemon from './features/home/stores/pokemon'

class Store {
  pokemon: Pokemon

  constructor() {
    makeAutoObservable(this)
    this.pokemon = new Pokemon()

  }
}

export default Store