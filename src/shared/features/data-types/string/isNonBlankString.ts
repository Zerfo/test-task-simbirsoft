export const isNonBlankString = (value: unknown): value is string =>
  typeof value === 'string' && Boolean(value.trim())
