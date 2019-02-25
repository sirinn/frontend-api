import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import CreateListing from '@/components/CreateListing';
import SeeListings from '@/components/SeeListings';
import PostListing from "../components/PostListing";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CreateListing',
      component: CreateListing,
    },
    {
      path: '/see-listing',
      name: 'SeeListing',
      component: SeeListings,
    },
    {
      path: '/post-listing',
      name: 'PostListing',
      component: PostListing,
    },
  ],
});
