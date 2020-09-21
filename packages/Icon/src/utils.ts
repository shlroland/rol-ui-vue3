import { h } from 'vue'
import {
  IconLookup,
  IconPrefix,
  IconName,
  AbstractElement,
} from '@fortawesome/fontawesome-svg-core'

export type Icon = IconLookup | string[] | string

export function normalizeIconArgs(icon: Icon): IconLookup {
  if (icon === null) {
    return null
  }

  if (
    typeof icon === 'object' &&
    (icon as IconLookup).prefix &&
    (icon as IconLookup).iconName
  ) {
    return icon as IconLookup
  }

  if (Array.isArray(icon) && icon.length === 2) {
    return { prefix: icon[0] as IconPrefix, iconName: icon[1] as IconName }
  }

  if (typeof icon === 'string') {
    return { prefix: 'fas', iconName: icon as IconName }
  }
}

function defineProperty(obj: any, key: any, value: any) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    })
  } else {
    obj[key] = value
  }

  return obj
}

export function classList(props: any) {
  let _classes

  const classes =
    ((_classes = {
      'fa-spin': props.spin,
      'fa-pulse': props.pulse,
      'fa-fw': props.fixedWidth,
      'fa-border': props.border,
      'fa-li': props.listItem,
      'fa-inverse': props.inverse,
      'fa-flip-horizontal':
        props.flip === 'horizontal' || props.flip === 'both',
      'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both',
    }),
    defineProperty(_classes, 'fa-' + props.size, Boolean(props.size)),
    defineProperty(
      _classes,
      'fa-rotate-' + props.rotation,
      Boolean(props.rotation),
    ),
    defineProperty(_classes, 'fa-pull-' + props.pull, Boolean(props.pull)),
    defineProperty(_classes, 'fa-swap-opacity', Boolean(props.swapOpacity)),
    _classes)
  return Object.keys(classes)
    .map(function (key) {
      return classes[key] ? key : null
    })
    .filter(function (key) {
      return key
    })
}

export function objectWithKey(key: any, value: any) {
  return (Array.isArray(value) && value.length > 0) ||
    (!Array.isArray(value) && value)
    ? defineProperty({}, key, value)
    : {}
}

function _isNumerical(obj: any) {
  obj = obj - 0
  return obj === obj
}

export function objectWithoutProperties(obj: any, keys: string[]) {
  const target = {} as any

  for (const i in obj) {
    if (keys.indexOf(i) >= 0) continue
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
    target[i] = obj[i]
  }

  return target
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function combineClassObjects(classes: any) {
  if (typeof classes === 'object') {
    return classes
  }

  if (typeof classes === 'string') {
    const classArr = classes.split(' ')
    const _classes = {}
    classArr.forEach(item => {
      defineProperty(_classes, item, true)
    })
    return _classes
  } else {
    return {}
  }
}

function camelize(string: string) {
  if (_isNumerical(string)) {
    return string
  }
  string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : ''
  })
  // Ensure 1st char is always lowercase
  return string.substr(0, 1).toLowerCase() + string.substr(1)
}

function styleToObject(style: string) {
  return style
    .split(';')
    .map(function (s) {
      return s.trim()
    })
    .filter(function (s) {
      return s
    })
    .reduce(function (acc, pair) {
      const i = pair.indexOf(':')
      const prop = camelize(pair.slice(0, i))
      const value = pair.slice(i + 1).trim()

      acc[prop] = value

      return acc
    }, {})
}

function classToObject(cls: string) {
  return cls.split(/\s+/).reduce(function (acc, c) {
    acc[c] = true

    return acc
  }, {})
}

export function convert(
  abstractElement: AbstractElement,
  props = {},
  attrs = {} as any,
) {

  if (typeof abstractElement === 'string') {
    return abstractElement
  }

  const children = (abstractElement.children || [])
    .map(child => convert(child))
    .map(renderFn => (typeof renderFn === 'string' ? renderFn : renderFn()))

  const mixins = Object.keys(abstractElement.attributes || {}).reduce(
    function (acc, key) {
      const val = abstractElement.attributes[key]
      switch (key) {
        case 'class':
          acc['class'] = classToObject(val)
          break
        case 'style':
          acc['style'] = styleToObject(val)
          break
        default:
          acc.attrs[key] = val
      }
      return acc
    },
    { class: {}, style: {}, attrs: {} },
  )

  const { class: _aClass = {}, style: aStyle = {}, ...otherAttrs } = attrs

  return () =>
    h(
      abstractElement.tag,
      {
        ...props,
        class: { ...mixins.class, ...combineClassObjects(_aClass) },
        style: { ...mixins.style, ...aStyle },
        ...mixins.attrs,
        ...otherAttrs,
      },
      children,
    )
}
