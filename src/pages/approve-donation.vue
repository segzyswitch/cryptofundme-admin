<template>
  <!-- NAVBAR -->
  <navbar />

  <div class="container-fluid admin-body">
    <div class="row">
      <div class="col-sm-2 p-0">
        <!-- SIDEBAR -->
        <sidebar />
      </div>

      <div class="col-sm-10 mb-3">
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

          <div class="row">
            <div class="col-sm-6 p-2">
              <div class="main-approval bg-white mb-3 w-100">
                <div class="img">
                  <div id="demo" class="carousel slide" data-bs-ride="carousel">
                    <!-- Indicators/dots -->
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    </div>
                    <!-- The slideshow/carousel -->
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="../../public/assets/images/donations/donation-2.jpg" class="d-block w-100">
                      </div>
                      <div class="carousel-item">
                        <img src="../../public/assets/images/donations/donation-3.jpg" class="d-block w-100">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="info col-sm-10 cleafix m-auto p-3">
                  <h6>The rural environment in Delhi needs help</h6>
                  <b class="d-block text-warning">Zamora001</b>
                  <small class="d-block text-warning mb-3">ENVIRONMENT</small>

                  <div class="warning-progress">
                    <div class="bar bg-warning pt-1" style="width:0%"></div>
                  </div>
                  <div class="clearfix text-sm text-center mb-3">
                    <small class="d-inline-block float-start text-pale" v-if="donationStart">21 days ago</small>
                    <b class="d-inline-block"><i class="fa fa-stop-circle-o text-warning"></i> $4000 Goal</b>
                    <small class="d-inline-block float-end text-pale" v-if="donationStart">3.7k donations</small>
                  </div>
                  <div class="w-100 text-center">
                    <button class="btn btn-round btn-red text-white m-2">Decline</button>
                    <button class="btn btn-round btn-green text-white m-2">Accept</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 p-2">
              <div class="w-100 d-none d-sm-block" style="min-height:50px">
              </div>
              <div class="w-100 bg-light p-3">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, quas porro.
                  Corporis sed labore ratione est, deleniti ab iure. Vel,
                  nemo nobis incidunt reiciendis rerum temporibus perferendis laboriosam? Saepe, dolorum?Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Rem, quas porro.
                  Corporis sed labore ratione est, deleniti ab iure. Vel,
                  nemo nobis incidunt reiciendis rerum temporibus perferendis laboriosam? Saepe, dolorum?Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Rem, quas porro.
                  Corporis sed labore ratione est, deleniti ab iure. Vel,
                  nemo nobis incidunt reiciendis rerum temporibus perferendis laboriosam? Saepe, dolorum?Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Rem, quas porro.
                  Corporis sed labore ratione est, deleniti ab iure. Vel,
                  nemo nobis incidunt reiciendis rerum temporibus perferendis laboriosam? Saepe, dolorum?Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Rem, quas porro.
                  Corporis sed labore ratione est, deleniti ab iure. Vel,
                  nemo nobis incidunt reiciendis rerum temporibus perferendis laboriosam? Saepe, dolorum?Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Rem, quas porro.
                  Corporis sed labore ratione est, deleniti ab iure. Vel,
                  nemo nobis incidunt reiciendis rerum temporibus perferendis laboriosam? Saepe, dolorum?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//const donationStart = false
import navbar from '../components/navbar.vue'
import sidebar from '../components/sidebar.vue'
export default {
  components: {
    navbar,
    sidebar
  },
  data() {
    return {
      donationStart: false
    }
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

.carousel-indicators button {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #000;
}

.main-approval {
  border-radius: 0 0 30% 30%;
  box-shadow: 0 15px 15px #ccc;
}

.warning-progress {
  background-color: #fbddc9;
}

.btn-red {
  background-color: #ef2a1a;
}

.btn-green {
  background-color: #1ec638;
}

.btn-round {
  border-radius: 30px;
  padding: 10px 20px;
}
</style>