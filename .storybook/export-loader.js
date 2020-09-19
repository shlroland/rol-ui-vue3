module.exports = function (content, map, meta) {
  content = content.replace(
    /^export\s*{\s*default as (.+?)}(.+)/gm,
    `
  import _$1 $2
  export const $1 = () => _$1
  `.trim()
  )
  this.callback(null, content, map, meta)
  return
}
