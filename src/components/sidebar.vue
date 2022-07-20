<template>
  <div class="sidebar col-sm-2 d-none d-sm-block">
    <div class="sidebar-link">
      <router-link class="btn" to="/"><span class="fa fa-home"></span> Dashboard</router-link>
      <router-link class="btn" to="/campaigns">Campaigns</router-link>
      <router-link class="btn" to="/donations">Donations</router-link>
      <router-link class="btn" to="/pending-approval">Pending approval(10)</router-link>
    </div>
  </div>
</template>

<style scoped>
@import url(../../public/assets/css/sidebar.css);
</style>

