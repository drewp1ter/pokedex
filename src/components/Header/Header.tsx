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
        <nav>
          <ul className={styles.navbar} data-pathname={pathname}>
            <li>
              <Link href={Routes.Home}>Home</Link>
            </li>
            <li>
              <Link href={Routes.Pokedex}>Pokédex</Link>
            </li>
            <li>
              <Link href={Routes.Legendaries}>Legendaries</Link>
            </li>
            <li>
              <Link href={Routes.Documentation}>Documentation</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
