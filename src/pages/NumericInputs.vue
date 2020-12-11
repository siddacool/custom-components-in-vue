<template>
  <NumericInput
    :value="textVal"
    label="Numer"
    allowNegative
    allowDecimal
    @change="onChange"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NumericInput from '../components/NumericInput.vue';

export default defineComponent({
  name: 'TextFieldsPage',
  components: {
    NumericInput,
  },
  setup() {
    const textVal = ref(-123);

    const onChange = (value: number) => {
      textVal.value = value;
    };

    return {
      textVal,
      onChange,
    };
  },
});
</script>
