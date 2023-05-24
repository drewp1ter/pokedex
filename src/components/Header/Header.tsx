'use client'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import styles from './Header.module.scss'
import Logo from './assets/logo.svg'
import Link from 'next/link'

export enum Routes {
  Home = '/',
  Pokedex = '/pokedex',
  Legendaries = '/legendaries',
  Documentation = '/documentation'
}

interface Props {
  className?: string
}

function Header({ className }: Props) {
  const pathname = usePathname()

  return (
    <header className={clsx(styles.header, className)}>
      <div className={styles.alignContainer}>
        <Link href="/">
          <Logo />
        </Link>
        <nav className={styles.navbar} data-pathname={pathname}>
          <Link className={styles.homeLink} href={Routes.Home}>Home</Link>
          <Link className={styles.pokedexLink} href={Routes.Pokedex}>Pokédex</Link>
          <Link className={styles.legendariesLink} href={Routes.Legendaries}>Legendaries</Link>
          <Link className={styles.documentationLink} href={Routes.Documentation}>Documentation</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
