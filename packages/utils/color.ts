export const threeDimensionalReg = /^[0-9a-fA-F]{3}$/
export const sixDimensionalReg = /^[0-9a-fA-F]{6}$/

export function convertToSix(rawColor: string) {
  const color = rawColor.split('')
  for (let i = 2; i >= 0; i--) {
    color.splice(i, 0, color[i])
  }
  rawColor = color.join('')
  return rawColor
}

export function isHexColor(color: string) {
  return threeDimensionalReg.test(color) || sixDimensionalReg.test(color)
}

export function powerNumber(number: number, exp: number) {
  let value = 1
  if (exp > 0) {
    for (let i = 1; i <= exp; i++) {
      value = value * number
    }
  } else if (exp < 0) {
    for (let i = 1; i <= -exp; i++) {
      value = value / number
    }
  }
  return value
}

export function colorLuminance(color: string) {
  if (!isHexColor(color)) return 0.55
  let rawColor = color.replace('#', '')
  if (threeDimensionalReg.test(rawColor)) {
    rawColor = convertToSix(rawColor)
  }
  const colorRgb = {
    red: parseInt(rawColor.slice(0, 2), 16),
    green: parseInt(rawColor.slice(2, 4), 16),
    blue: parseInt(rawColor.slice(4, 6), 16),
  }
  for (const name in colorRgb) {
    let value = colorRgb[name] / 255
    if (value < 0.03928) {
      value = value / 12.92
    } else {
      value = (value + 0.055) / 1.055

      value = powerNumber(value, 2)
    }
    Object.assign(colorRgb, {
      [name]: value,
    })
  }
  return colorRgb['red'] * 0.2126 + colorRgb['green'] * 0.7152 + colorRgb['blue'] * 0.0722
}

export function HextoRgba(hex: string, alpha?: number) {
  if (hex.length <= 4) {
    const rawColor = hex.replace('#', '')
    hex = '#' + convertToSix(rawColor)
  }
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return `rgba(${r},${g},${b},${alpha})`
  } else {
    return `rgb(${r},${g},${b})`
  }
}

export function findColorInvert(hex: string) {
  hex = hex.replace('#', '')
  if (!isHexColor(hex)) {
    return ''
  }
  if (colorLuminance(hex) > 0.55) {
    return HextoRgba('#000000', 0.7)
  } else {
    return '#fff'
  }
}
