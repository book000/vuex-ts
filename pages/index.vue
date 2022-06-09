<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-layout justify-center>
        <v-btn x-large @click="add()">{{ get() }}</v-btn>
      </v-layout>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    add() {
      this.$accessor.counter.setCount(this.get() + 1)
    },
    get() {
      return this.$accessor.counter.count
    }
  },
});
</script>
