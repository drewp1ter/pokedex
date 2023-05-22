import clsx from 'clsx'
import styles from './Button.module.scss'

function Button({ children, className, ...rest }: JSX.IntrinsicElements['button']) {
  return (
    <button className={clsx(styles.button, className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
