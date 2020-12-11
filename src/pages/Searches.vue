<template>
  <Search
    :value="textVal"
    @change="onChange"
    @search="onSearch"
    @clear="onClear"
    @keyDown.escape="onClear"
  />

  <div class="mt-2" v-if="searchTerm">🔍: {{ searchTerm }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Search from '../components/Search.vue';

export default defineComponent({
  name: 'Searches',
  components: {
    Search,
  },
  setup() {
    const textVal = ref('');
    const searchTerm = ref('');

    const onChange = (value: string) => {
      textVal.value = value;
    };

    const onSearch = (value: string) => {
      textVal.value = value;
      searchTerm.value = value;
    };

    const onClear = () => {
      textVal.value = '';
      searchTerm.value = '';
    };

    return {
      textVal,
      searchTerm,
      onChange,
      onSearch,
      onClear,
    };
  },
});
</script>
