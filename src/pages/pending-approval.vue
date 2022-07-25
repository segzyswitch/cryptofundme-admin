<template>
  <!-- NAVBAR -->
  <navbar />

  <div class="container-fluid admin-body">
    <div class="row">
      <div class="col-sm-2 p-0">
        <!-- SIDEBAR -->
        <sidebar />
      </div>

      <div class="col-sm-10">
        <div class="w-100 main-page">
          <div class="row mb-4">
            <ul class="nav section-tab">
              <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="tab" href="#home">Pending approvals(15)</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#menu1">New(1)</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#menu2">Existing(6)</a>
              </li>
            </ul>
          </div>

          <div class="row mb-3">
            <div class="col-5">
              <router-link to="/approve-donation" class="approval-item text-sm">
                <div class="img">
                  <img src="assets/images/donations/donation-1.jpg" class="w-100" alt="Donation">
                </div>
                <div class="w-100 p-2">
                  <p class="text-pale mb-2">Create 2000 jobs for widows</p>
                  <b class="d-block text-warning">AGRICULTURE</b>
                  <div class="clearfix text-secondary">
                    <b class="d-block float-start">$100 Raised</b>
                    <b class="d-block float-end">25%</b>
                  </div>
                  <div class="warning-progress">
                    <div class="bar bg-warning pt-1" style="width:25%"></div>
                  </div>
                  <span class="btn-block text-pale text-xs">25 days left</span>
                  <b class="d-block text-secondary text-center"><i class="fa text-warning fa-stop-circle-o"></i> $10000
                    Goal</b>
                </div>
              </router-link>
            </div>
            <div class="col-5">
              <router-link to="/approve-donation" class="approval-item text-sm">
                <div class="img">
                  <img src="assets/images/donations/donation-2.jpg" class="w-100" alt="Donation">
                </div>
                <div class="w-100 p-2">
                  <p class="text-pale mb-2">Create 2000 jobs for widows</p>
                  <b class="d-block text-warning">AGRICULTURE</b>
                  <div class="clearfix text-secondary">
                    <b class="d-block float-start">$100 Raised</b>
                    <b class="d-block float-end">25%</b>
                  </div>
                  <div class="warning-progress">
                    <div class="bar bg-warning pt-1" style="width:25%"></div>
                  </div>
                  <span class="btn-block text-pale text-xs">25 days left</span>
                  <b class="d-block text-secondary text-center"><i class="fa text-warning fa-stop-circle-o"></i> $10000
                    Goal</b>
                </div>
              </router-link>
            </div>
            <div class="col-5">
              <router-link to="/approve-donation" class="approval-item text-sm">
                <div class="img">
                  <img src="assets/images/donations/donation-3.jpg" class="w-100" alt="Donation">
                </div>
                <div class="w-100 p-2">
                  <p class="text-pale mb-2">Create 2000 jobs for widows</p>
                  <b class="d-block text-warning">AGRICULTURE</b>
                  <div class="clearfix text-secondary">
                    <b class="d-block float-start">$100 Raised</b>
                    <b class="d-block float-end">25%</b>
                  </div>
                  <div class="warning-progress">
                    <div class="bar bg-warning pt-1" style="width:25%"></div>
                  </div>
                  <span class="btn-block text-pale text-xs">25 days left</span>
                  <b class="d-block text-secondary text-center"><i class="fa text-warning fa-stop-circle-o"></i> $10000
                    Goal</b>
                </div>
              </router-link>
            </div>
            <div class="col-5">
              <router-link to="/approve-donation" class="approval-item text-sm">
                <div class="img">
                  <img src="assets/images/donations/donation-4.jpg" class="w-100" alt="Donation">
                </div>
                <div class="w-100 p-2">
                  <p class="text-pale mb-2">Create 2000 jobs for widows</p>
                  <b class="d-block text-warning">AGRICULTURE</b>
                  <div class="clearfix text-secondary">
                    <b class="d-block float-start">$100 Raised</b>
                    <b class="d-block float-end">25%</b>
                  </div>
                  <div class="warning-progress">
                    <div class="bar bg-warning pt-1" style="width:25%"></div>
                  </div>
                  <span class="btn-block text-pale text-xs">25 days left</span>
                  <b class="d-block text-secondary text-center"><i class="fa text-warning fa-stop-circle-o"></i> $10000
                    Goal</b>
                </div>
              </router-link>
            </div>
            <div class="col-5">
              <router-link to="/approve-donation" class="approval-item text-sm">
                <div class="img">
                  <img src="assets/images/donations/donation-1.jpg" class="w-100" alt="Donation">
                </div>
                <div class="w-100 p-2">
                  <p class="text-pale mb-2">Create 2000 jobs for widows</p>
                  <b class="d-block text-warning">AGRICULTURE</b>
                  <div class="clearfix text-secondary">
                    <b class="d-block float-start">$100 Raised</b>
                    <b class="d-block float-end">25%</b>
                  </div>
                  <div class="warning-progress">
                    <div class="bar bg-warning pt-1" style="width:25%"></div>
                  </div>
                  <span class="btn-block text-pale text-xs">25 days left</span>
                  <b class="d-block text-secondary text-center"><i class="fa text-warning fa-stop-circle-o"></i> $10000
                    Goal</b>
                </div>
              </router-link>
            </div>
            <div class="col-5">
              <router-link to="/approve-donation" class="approval-item text-sm">
                <div class="img">
                  <img src="assets/images/donations/donation-1.jpg" class="w-100" alt="Donation">
                </div>
                <div class="w-100 p-2">
                  <p class="text-pale mb-2">Create 2000 jobs for widows</p>
                  <b class="d-block text-warning">AGRICULTURE</b>
                  <div class="clearfix text-secondary">
                    <b class="d-block float-start">$100 Raised</b>
                    <b class="d-block float-end">25%</b>
                  </div>
                  <div class="warning-progress">
                    <div class="bar bg-warning pt-1" style="width:25%"></div>
                  </div>
                  <span class="btn-block text-pale text-xs">25 days left</span>
                  <b class="d-block text-secondary text-center"><i class="fa text-warning fa-stop-circle-o"></i> $10000
                    Goal</b>
                </div>
              </router-link>
            </div>
            <div class="col-5">
              <router-link to="/approve-donation" class="approval-item text-sm">
                <div class="img">
                  <img src="assets/images/donations/donation-2.jpg" class="w-100" alt="Donation">
                </div>
                <div class="w-100 p-2">
                  <p class="text-pale mb-2">Create 2000 jobs for widows</p>
                  <b class="d-block text-warning">AGRICULTURE</b>
                  <div class="clearfix text-secondary">
                    <b class="d-block float-start">$100 Raised</b>
                    <b class="d-block float-end">25%</b>
                  </div>
                  <div class="warning-progress">
                    <div class="bar bg-warning pt-1" style="width:25%"></div>
                  </div>
                  <span class="btn-block text-pale text-xs">25 days left</span>
                  <b class="d-block text-secondary text-center"><i class="fa text-warning fa-stop-circle-o"></i> $10000
                    Goal</b>
                </div>
              </router-link>
            </div>
            <div class="col-5">
              <router-link to="/approve-donation" class="approval-item text-sm">
                <div class="img">
                  <img src="assets/images/donations/donation-3.jpg" class="w-100" alt="Donation">
                </div>
                <div class="w-100 p-2">
                  <p class="text-pale mb-2">Create 2000 jobs for widows</p>
                  <b class="d-block text-warning">AGRICULTURE</b>
                  <div class="clearfix text-secondary">
                    <b class="d-block float-start">$100 Raised</b>
                    <b class="d-block float-end">25%</b>
                  </div>
                  <div class="warning-progress">
                    <div class="bar bg-warning pt-1" style="width:25%"></div>
                  </div>
                  <span class="btn-block text-pale text-xs">25 days left</span>
                  <b class="d-block text-secondary text-center"><i class="fa text-warning fa-stop-circle-o"></i> $10000
                    Goal</b>
                </div>
              </router-link>
            </div>
            <div class="col-5">
              <router-link to="/approve-donation" class="approval-item text-sm">
                <div class="img">
                  <img src="assets/images/donations/donation-4.jpg" class="w-100" alt="Donation">
                </div>
                <div class="w-100 p-2">
                  <p class="text-pale mb-2">Create 2000 jobs for widows</p>
                  <b class="d-block text-warning">AGRICULTURE</b>
                  <div class="clearfix text-secondary">
                    <b class="d-block float-start">$100 Raised</b>
                    <b class="d-block float-end">25%</b>
                  </div>
                  <div class="warning-progress">
                    <div class="bar bg-warning pt-1" style="width:25%"></div>
                  </div>
                  <span class="btn-block text-pale text-xs">25 days left</span>
                  <b class="d-block text-secondary text-center"><i class="fa text-warning fa-stop-circle-o"></i> $10000
                    Goal</b>
                </div>
              </router-link>
            </div>
            <div class="col-5">
              <router-link to="/approve-donation" class="approval-item text-sm">
                <div class="img">
                  <img src="assets/images/donations/donation-1.jpg" class="w-100" alt="Donation">
                </div>
                <div class="w-100 p-2">
                  <p class="text-pale mb-2">Create 2000 jobs for widows</p>
                  <b class="d-block text-warning">AGRICULTURE</b>
                  <div class="clearfix text-secondary">
                    <b class="d-block float-start">$100 Raised</b>
                    <b class="d-block float-end">25%</b>
                  </div>
                  <div class="warning-progress">
                    <div class="bar bg-warning pt-1" style="width:25%"></div>
                  </div>
                  <span class="btn-block text-pale text-xs">25 days left</span>
                  <b class="d-block text-secondary text-center"><i class="fa text-warning fa-stop-circle-o"></i> $10000
                    Goal</b>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import sidebar from '../components/sidebar.vue'
//import VueApexCharts from 'vue-apexcharts'

export default {
  data() {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  },
  components: {
    navbar,
    sidebar
  }
}
</script>

<style scoped>
body {

  background-color: #fff !important;
}

.admin-body {
  background-color: #fff !important;
  height: 100vh;
  overflow: auto;
}

.section-tab .nav-link {
  font-size: 20px;
  font-weight: bold;
  color: #777;
  padding: 5px 5px;
  margin-right: 15px;
}

.section-tab .nav-link.active {
  color: #009688;
}



/* PENDING DONATIONS */
.approval-item {
  display: block;
  background-color: #FFF;
  border-radius: 0 0 30px 30px;
  text-decoration: none;
  margin-bottom: 10px;
  box-shadow: 0 0 10px #ddd;
}

.approval-item .img {
  height: 120px;
  overflow: hidden;
}

.warning-progress {
  background-color: #fcdbc6;
  overflow: hidden;
  width: 100%;
  border-radius: 15px;
}
</style>