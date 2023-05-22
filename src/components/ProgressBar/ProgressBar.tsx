import { memo } from 'react'
import clsx from "clsx"
import styles from './ProgressBar.module.scss'

interface Props {
  value?: number
  max?: number
  color: 'green' | 'yellow'
  className?: string
}

function ProgressBar({ value, max, className, color }: Props) {
  const progress = value !== undefined && max !== undefined ? value / max * 100 : 0
  return (
    <div className={clsx(styles.progressBar, className)} data-color={color}>
      <span style={{ width: `${progress}%` }} />
    </div>
  )
}

export default memo(ProgressBar)