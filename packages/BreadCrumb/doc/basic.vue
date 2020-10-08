<template>
  <div>
    <Breadcrumb>
      <BreadcrumbItem><a href="#">Bulma</a></BreadcrumbItem>
      <BreadcrumbItem><a href="#">Documentation</a></BreadcrumbItem>
      <BreadcrumbItem><a href="#">Components</a></BreadcrumbItem>
      <BreadcrumbItem><a href="#">Breadcrumb</a></BreadcrumbItem>
    </Breadcrumb>
  </div>
  <!-- <div>
    <Breadcrumb>
      <template #separator>
        <span style="color: red;">~</span>
      </template>
      <BreadcrumbItem>Bulma</BreadcrumbItem>
      <BreadcrumbItem>Documentation</BreadcrumbItem>
<BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  </div> -->
  <!-- <div>
    <Breadcrumb alignment="centered">
      <li><span class="rol-breadcrumb__item">Bulma</span></li>
      <li><span class="rol-breadcrumb__item">Documentation</span></li>
      <li><span class="rol-breadcrumb__item">Components</span></li>
      <li class="is-active"><span class="rol-breadcrumb__item" aria-current="page">Breadcrumb</span></li>
    </Breadcrumb>
  </div>
  <div>
    <Breadcrumb alignment="right">
      <li><span class="rol-breadcrumb__item">Bulma</span></li>
      <li><span class="rol-breadcrumb__item">Documentation</span></li>
      <li><span class="rol-breadcrumb__item">Components</span></li>
      <li class="is-active"><span class="rol-breadcrumb__item" aria-current="page">Breadcrumb</span></li>
    </Breadcrumb>
  </div>-->
  <div>
    <Breadcrumb>
      <BreadcrumbItem>Bulma</BreadcrumbItem>
      <BreadcrumbItem to="Documentation">Documentation</BreadcrumbItem>
      <BreadcrumbItem to="Components">Components</BreadcrumbItem>
      <BreadcrumbItem to="Breadcrumb">Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script lang="ts">
import { Breadcrumb, BreadcrumbItem } from '@rol-ui/breadcrumb'
// import Icon from '@rol-ui/icon'
export default {
  components: {
    Breadcrumb,
    BreadcrumbItem,
    // Icon,
  },
}
</script>

<style></style>
