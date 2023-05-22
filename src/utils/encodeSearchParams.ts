export const encodeSearchParams = (params: Record<string, string | number | undefined>): string => {
  try {
    const result = Object.entries(params)
      .filter(([_key, value]) => value !== undefined)
      .map(([key, value]) => encodeURI(`${key}=${value}`))
      .join('&')
    return result ? `?${result}` : ''
  } catch (e: any) {
    console.error(e.message)
    return ''
  }
}
