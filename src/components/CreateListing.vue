<template>
  <div class="createListing">
    <h1>Insert Listing</h1>
      <li>{{ listing }}</li>

  </div>
</template>

<script>
export default {
  name: 'createListing',
  data() {
    return {
      listing: 'THIS IS LISTING',
    };
  },
};
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
