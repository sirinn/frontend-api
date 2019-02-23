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
      const URL = 'http://getspaceapp.heroku.com/';
      fetch(URL).then(data => data.json()).then((res) => { print(res); });
      // this.listing_one = ['kokot', 'pica'];
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
