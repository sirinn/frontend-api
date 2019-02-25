<template>
    <div class="seeListing">
      <h1>Post listing</h1>
      <form>
        <label for="name">Name</label>
          <input type="text" id="name" v-model="listing.name"><br>
        <label for="location-point">Location point</label>
          <input type="text" id="location-point" v-model="listing.locationPoint"><br>
        <label for="space-type">Space type</label>
          <input type="text" id="space-type" v-model="listing.spaceType"><br>
        <label for="owner-id">Owner ID</label>
          <input type="text" id="owner-id" v-model="listing.ownerId"><br>
        <button v-on:click.prevent="post">Send data</button>
      </form>
      <ul>
          <li>
            {{ listing.name }}
          </li>
          <li>
            {{ listing.locationPoint }}
          </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'PostListing',
  data() {
    return {
      listing: {
        name: '',
        locationPoint: '',
        spaceType: '',
        ownerId: '',
      },
    };
  },
  methods: {
    post() {
      this.$http.post('http://getspaceapp.herokuapp.com/', {
        name: this.name,
        locationPoint: this.locationPoint,
        spaceType: this.spaceType,
        ownerId: this.ownerId,
      });
    },
  },
};
</script>

<!--private String name;-->
<!--private BigDecimal locationPoint;-->
<!--private String spaceType;-->
<!--private Integer ownerId;-->


<style scoped>

</style>
