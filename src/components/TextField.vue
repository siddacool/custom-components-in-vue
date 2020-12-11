<template>
  <div class="cc__text-field">
    <label>{{ label }}</label>
    <div class="input-holder">
      <section><slot name="before"></slot></section>
      <input
        :name="name"
        :type="type"
        :value="value"
        :placeholder="placeholder"
        @change="handleOnChange"
      />
      <section><slot name="after"></slot></section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { BrowserEvent } from '../helpers/types';

export default defineComponent({
  name: 'TextField',
  props: {
    name: String,
    label: String,
    placeholder: String,
    value: [String, Number],
    type: {
      type: String,
      default: 'text',
    },
  },
  emits: ['change'],
  setup(props, context) {
    const handleOnChange = (e: BrowserEvent) => {
      context.emit('change', e.target.value, e);
    };

    return { handleOnChange };
  },
});
</script>

<style lang="postcss">
.cc__text-field label {
  @apply text-sm;
}

.cc__text-field .input-holder {
  @apply flex items-center border-2 border-gray-400 border-gray-500 rounded-md;
  height: 40px;
}

.cc__text-field input {
  @apply h-full border-0 bg-transparent w-full px-2 focus:outline-none;
}

.cc__text-field section {
  @apply h-full flex items-center;
}
</style>
