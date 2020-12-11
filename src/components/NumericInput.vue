<template>
  <TextField
    class="cc__numeric-input"
    type="number"
    :value="valueFiltered"
    @change="handleOnChange"
    @keyDown="handleKeyDown"
  />
</template>

<script lang="ts">
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import { defineComponent, computed } from 'vue';
import TextField from './TextField.vue';
import type { BrowserEvent } from '../helpers/types';

export default defineComponent({
  name: 'NumericInput',
  props: {
    value: [Number],
    allowNegative: {
      type: Boolean,
      default: false,
    },
    allowDecimal: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['change', 'keyDown'],
  components: {
    TextField,
  },
  setup(props, context) {
    const digitKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const globalKeys = [8, 9];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const numberValidate = (val: any) => {
      const numArray = val.toString().split('');

      const filterdArr = numArray.filter(
        (naValue: string) =>
          digitKeys.includes(naValue) ||
          (props.allowNegative && naValue === '-') ||
          (props.allowDecimal && naValue === '.'),
      );

      if (props.allowDecimal) {
        return parseFloat(filterdArr.join(''));
      }
      return parseInt(filterdArr.join(''), 10);
    };

    const valueFiltered = computed(() => numberValidate(props.value));

    const handleOnChange = (value: string, e: BrowserEvent) => {
      context.emit('change', numberValidate(value), e);
    };

    const handleKeyDown = (e: BrowserEvent) => {
      const keyCheck =
        digitKeys.includes(e.key) ||
        globalKeys.includes(e.keyCode) ||
        (props.allowNegative && e.key === '-') ||
        (props.allowDecimal && e.key === '.');

      if (!keyCheck) {
        e.preventDefault();
      }
    };

    return { valueFiltered, handleOnChange, handleKeyDown };
  },
});
</script>

<style lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
