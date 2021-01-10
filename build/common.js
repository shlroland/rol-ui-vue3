module.exports = {
  noElPrefixFile: /(utils|directives|hooks|locale|style)/,
  toLine(name) {
    name = name.replace(name[0], name[0].toLowerCase())
    return name.replace(/([A-Z])/g, '-$1').toLowerCase()
  },
  toCamel(str) {
    str = str.replace(str[0], str[0].toUpperCase())
    return (str + '').replace(/-\D/g, function (match) {
      return match.charAt(1).toUpperCase()
    })
  },
}
