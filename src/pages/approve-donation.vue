<template>
<!-- NAVBAR -->
  <navbar />

  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2 p-0">
        <!-- SIDEBAR -->
        <sidebar />
      </div>

      <div class="col-sm-10">
        <div class="w-100 main-page">
          <div class="row">
            <div class="col-sm-6 p-2">
              <h3 class="mb-4 text-orange">Pending approvals</h3>
              <div class="main-approval bg-white mb-3 w-100">
                <div class="img">
                  <img src="assets/images/donations/donation-1.jpg" class="w-100" alt="">
                </div>
                <div class="info w-100 p-3">
                  <h6>The rural environment in Delhi needs help</h6>
                  <b class="d-block text-warning mt-3 mb-3">ENVIRONMENT</b>

                  <div class="clearfix mb-2">
                    <b class="float-end d-block">40%</b>
                  </div>
                  <div class="warning-progress">
                    <div class="bar bg-warning pt-1" style="width:10%"></div>
                  </div>
                  <div class="clearfix text-sm">
                    <b class="float-end d-block"><i class="fa fa-stop-circle-o text-warning"></i> $4000 Goal</b>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 p-2">
              <div class="w-100 d-none d-sm-block" style="min-height:50px">
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, quas porro.
                Corporis sed labore ratione est, deleniti ab iure. Vel, 
                nemo nobis incidunt reiciendis rerum temporibus perferendis laboriosam? Saepe, dolorum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, quas porro.
                Corporis sed labore ratione est, deleniti ab iure. Vel, 
                nemo nobis incidunt reiciendis rerum temporibus perferendis laboriosam? Saepe, dolorum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, quas porro.
                Corporis sed labore ratione est, deleniti ab iure. Vel, 
                nemo nobis incidunt reiciendis rerum temporibus perferendis laboriosam? Saepe, dolorum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, quas porro.
                Corporis sed labore ratione est, deleniti ab iure. Vel, 
                nemo nobis incidunt reiciendis rerum temporibus perferendis laboriosam? Saepe, dolorum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, quas porro.
                Corporis sed labore ratione est, deleniti ab iure. Vel, 
                nemo nobis incidunt reiciendis rerum temporibus perferendis laboriosam? Saepe, dolorum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, quas porro.
                Corporis sed labore ratione est, deleniti ab iure. Vel, 
                nemo nobis incidunt reiciendis rerum temporibus perferendis laboriosam? Saepe, dolorum?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import navbar from '../components/navbar.vue'
import sidebar from '../components/sidebar.vue'
</script>