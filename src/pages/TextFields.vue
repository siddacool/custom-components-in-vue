<template>
  <TextField :value="textVal" label="Lala" @change="onChange" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TextField from '../components/TextField.vue';

export default defineComponent({
  name: 'TextFieldsPage',
  components: {
    TextField,
  },
  setup() {
    const textVal = ref('sss');

    const onChange = (value: string) => {
      textVal.value = value;
    };

    return {
      textVal,
      onChange,
    };
  },
});
</script>
