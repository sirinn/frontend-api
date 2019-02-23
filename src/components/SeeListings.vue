<template>
    <div class="seeListing">
      <h1>Our Listings</h1>
      <button v-on:click="getRawData">GetData</button>
       <ul>
          <li>
            {{listing_one}}
          </li>
          <li>
            {{listing_two}}
          </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'readListing',

  data() {
    return {
      listing_one: [],
      listing_two: 'This is second listing',
    };
  },
  methods: {
    getRawData() {
      const URL = 'https://getspaceapp.herokuapp.com/';
      async function asyncFetch(url) {
        const response = await fetch(url, {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            'content-Type': 'application/json',
          },
        });
        if (response.ok) return response.json();
        throw new Error(response.error);
      }
      this.listing_one.push(asyncFetch(URL));
    },
  },
};
</script>

<style scoped>
h1 {
  font-weight: normal;
}
ul {
  list-style-type: none;
}
  </style>
