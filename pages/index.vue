<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-layout justify-center>
        <v-btn x-large @click="add()">{{ count }}</v-btn>
      </v-layout>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data(): {
    count: number;
  } {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
    },
  },
});
</script>
