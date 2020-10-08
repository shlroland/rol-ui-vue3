<template>
  <div>
    <Breadcrumb>
      <li><span class="rol-breadcrumb__item" href="#">Bulma</span></li>
      <li><span class="rol-breadcrumb__separators">/</span><span class="rol-breadcrumb__item" href="#">Documentation</span></li>
      <li><span class="rol-breadcrumb__separators">/</span><span class="rol-breadcrumb__item" href="#">Components</span></li>
      <li class="is-active"><span class="rol-breadcrumb__separators">/</span><span class="rol-breadcrumb__item" href="#" aria-current="page">Breadcrumb</span></li>
    </Breadcrumb>
  </div>
  <div>
    <Breadcrumb alignment="centered">
      <li><span class="rol-breadcrumb__item" href="#">Bulma</span></li>
      <li><span class="rol-breadcrumb__item" href="#">Documentation</span></li>
      <li><span class="rol-breadcrumb__item" href="#">Components</span></li>
      <li class="is-active"><span class="rol-breadcrumb__item" href="#" aria-current="page">Breadcrumb</span></li>
    </Breadcrumb>
  </div>
  <div>
    <Breadcrumb alignment="right">
      <li><span class="rol-breadcrumb__item" href="#">Bulma</span></li>
      <li><span class="rol-breadcrumb__item" href="#">Documentation</span></li>
      <li><span class="rol-breadcrumb__item" href="#">Components</span></li>
      <li class="is-active"><span class="rol-breadcrumb__item" href="#" aria-current="page">Breadcrumb</span></li>
    </Breadcrumb>
  </div>
  <div>
    <Breadcrumb size="small">
      <li><span class="rol-breadcrumb__item" href="#">Bulma</span></li>
      <li><span class="rol-breadcrumb__item" href="#">Documentation</span></li>
      <li><span class="rol-breadcrumb__item" href="#">Components</span></li>
      <li class="is-active"><span class="rol-breadcrumb__item" href="#" aria-current="page">Breadcrumb</span></li>
    </Breadcrumb>
  </div>
</template>

<script>
import { Breadcrumb } from '@rol-ui/breadcrumb'
// import Icon from '@rol-ui/icon'
export default {
  components: {
    Breadcrumb,
    // Icon,
  },
}
</script>

<style></style>
