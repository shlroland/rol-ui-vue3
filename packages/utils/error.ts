class RolUIError extends Error {
  constructor(m: string) {
    super(m)
    this.name = 'RolUIError'
  }
}

export default (scope: string, m: string) => {
  throw new RolUIError(`[${scope}] ${m}`)
}

export function warn(scope: string, m: string) {
  console.warn(new RolUIError(`[${scope}] ${m}`))
}
