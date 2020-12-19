// export { default } from './src/tag.vue'
// export { default as Tags } from './src/tags.vue'
// export { default as TagsAddons } from './src/tags-addons.vue'
import { App } from 'vue'
import Tag from './src/tag.vue'
import Tags from './src/tags.vue'
import TagsAddons from './src/tags-addons.vue'

Tag.install = (app: App) => {
  app.component(Tag.name, Tag)
}
Tags.install = (app: App) => {
  app.component(Tags.name, Tags)
}
TagsAddons.install = (app: App) => {
  app.component(TagsAddons.name, TagsAddons)
}

export { Tag, Tags, TagsAddons }
