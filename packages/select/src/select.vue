<template>
  <div ref="selectWrapper" class="rol-select" :class="[selectSize ? `rol-select--${selectSize}` : '']">
    <Popper
      ref="popper"
      v-model:visible="dropMenuVisible"
      placement="bottom-start"
      :show-arrow="true"
      :append-to-body="popperAppendToBody"
      pure
      manual-mode
      effect="light"
      trigger="click"
      :offset="6"
    >
      <template #trigger>
        <div class="select-trigger">
          <rol-input
            ref="referebce"
            v-model="selectedLabel"
            type="text"
            :placeholder="currentPlaceholder"
            :name="name"
            :autocomplete="autocomplete"
            :size="selectSize"
            :disabled="selectDisabled"
            :readonly="readonly"
            :validate-event="false"
            :class="{ 'is-focus': visible }"
            :tabindex="multiple && filterable ? '-1' : null"
          >
            <template v-if="$slots.prefix" #prefix>
              <slot name="prefix"></slot>
            </template>
            <template #suffix>
              <rol-icon
                v-show="!showClose"
                :class="['rol-select__caret', 'rol-input__icon']"
                :name="iconClass"
              ></rol-icon>
            </template>
          </rol-input>
        </div>
      </template>

      <template #default> <div></div> </template>
    </Popper>
  </div>
</template>

<script lang="ts" src="./select.ts"></script>

<style></style>
