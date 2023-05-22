import clsx from 'clsx'
import styles from './Loader.module.scss'

interface Props {
  className?: string
}

function Loader({ className }: Props) {
  return (
    <div className={clsx(styles.loader, className)} />
  )
}

export default Loader