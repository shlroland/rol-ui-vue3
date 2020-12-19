export interface InstallOptions {
  size: string
  zIndex: number
  locale?: any
}

const $ROLUI: Record<string, unknown> = {}

const setConfig = (key: string, value: unknown): void => {
  $ROLUI[key] = value
}

const getConfig = (key: string): unknown => {
  return $ROLUI[key]
}

export { getConfig, setConfig }
