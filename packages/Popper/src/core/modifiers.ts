import type { StrictModifiers } from '@popperjs/core'

interface ModifierProps {
  offset?: number
  arrow?: HTMLElement
  arrowOffset?: number
}

export default function buildModifier(props: ModifierProps, externalModifiers: StrictModifiers[] = []) {
  const { arrow, arrowOffset, offset } = props

  const modifiers: Array<StrictModifiers> = [
    {
      name: 'offset',
      options: {
        offset: [0, offset ?? 12],
      },
    },
    {
      name: 'preventOverflow',
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5,
        },
      },
    },
    {
      name: 'flip',
      options: {
        padding: 5,
      },
    },
    {
      name: 'computeStyles',
      options: {
        adaptive: true,
      },
    },
  ]
  if (arrow) {
    modifiers.push({
      name: 'arrow',
      options: {
        element: arrow,
        padding: arrowOffset ?? 5,
      },
    })
  }

  modifiers.push(...externalModifiers)
  return modifiers
}
