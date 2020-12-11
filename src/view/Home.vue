<template>
  <div class="home bg-gray-200 pt-16 pb-6 px-6">
    <div class="home__container mx-auto">
      <Card name="Text Fields">
        <TextFields />
      </Card>
      <Card name="Numeric Inputs">
        <NumericInputs />
      </Card>
      <Card name="Search">
        <Searches />
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '../dev-components/Card.vue';
import TextFields from '../pages/TextFields.vue';
import NumericInputs from '../pages/NumericInputs.vue';
import Searches from '../pages/Searches.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Card,
    TextFields,
    NumericInputs,
    Searches,
  },
});
</script>

<style lang="scss">
.home {
  min-height: inherit;

  &__container {
    max-width: 700px;
  }
}
</style>
