'use client'
import React, { useState } from 'react'
import { Input } from '@/components'
import { encodeSearchParams } from '@/utils'
import { useRouter, useSearchParams } from 'next/navigation'

interface Props {
  className?: string
}

let timeoutId: NodeJS.Timeout
const debounceTime = 1000

function SearchBar({ className }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams?.get('query') || '')

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget
    setQuery(value)
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => router.replace(value ? encodeSearchParams({ query: value }) : '/'), debounceTime)
  }

  return <Input className={className} value={query} placeholder="Encuentra tu pokémon..." onChange={handleSearchChange} autoFocus />
}

export default SearchBar
