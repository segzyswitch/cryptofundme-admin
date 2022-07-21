<template>
  <div class="sidebar col-sm-2 d-none d-sm-block">
    <div class="sidebar-link">
      <router-link class="btn" to="/"><span class="fa fa-home"></span> Dashboard</router-link>
      <router-link class="btn" to="/administrators"><span class="fa fa-users"></span> Administrators</router-link>
      <router-link class="btn" to="/financial-nalytics">Financial Analytics</router-link>
      <router-link class="btn" to="/inbox"><span class="fa fa-envelope-o"></span> Inbox</router-link>
      <router-link class="btn" to="/campaigns"><span class="fa fa-file-text-o"></span> Campaigns</router-link>
      <router-link class="btn" to="/donations">Donations</router-link>
      <router-link class="btn" to="/pending-approval">Pending approval(10)</router-link>
      <router-link class="btn" to="/support"><span class="fa fa-question-circle-o"></span> Support</router-link>
      <router-link class="btn" to="/settings">Settings</router-link>

    </div>


    <div class="text-center text-light p-2 position-absolute bottom-0 start-0"
      style="background-color: #00ada6; width:80%;" v-if="page_name=='Campaigns'">
      <small style="font-size:12px;">Total Campaigns</small>
      <h4>127,377</h4>
    </div>



  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },

  props: ["page_name"],
}
</script>

<style scoped>
@import url(../../public/assets/css/sidebar.css);

.sidebar-link .btn {
  font-size: 12px;
}
</style>

