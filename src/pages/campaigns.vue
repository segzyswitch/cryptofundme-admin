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
          <h3 class="mb-4">Campaigns</h3>
          <div class="row">
            <div class="col-sm-5 btn-tabs">
              <button class="btn btn-sm text-sm active">Best performing</button>
              <button class="btn btn-sm text-sm">Worst performing</button>
              <button class="btn btn-sm text-sm">All Campaigns</button>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5">
              <div class="w-100 ps-2 pe-2 bg-white mb-3 campaigns">
                <h5 class="mb-3">Top performing Campaigns</h5>
                <div class="table-responsive">
                  <table class="table table-sm text-sm">
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>Campaigns</th>
                        <th>Country</th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- TABLE ROW -->
                      <tr>
                        <td><b>Medicine</b></td>
                        <td>
                          <div class="cleafix">
                            <div class="img-30 rounded-3">
                              <span class="d-block h-100 bg-danger"></span>
                            </div>
                            <div class="img-30-info">
                              <b>Adam Akindele</b>
                              <small class="d-block">Lorem ipsum lodor...</small>
                            </div>
                          </div>
                        </td>
                        <td><b>USA</b></td>
                      </tr>
                      <tr>
                        <td colspan="3">
                          <div class="clearfix mb-1">
                            <b class="text-xs float-start">$180,000 raised</b>
                            <b class="text-xs float-end">40%</b>
                          </div>
                          <div class="w-100 my-progress bg-success-light mb-1">
                            <div class="bar bg-success" style="width:40%"></div>
                          </div>
                          <div class="clearfix mb-3">
                            <span class="text-sm float-start"><i class="fa fa-clock-o"></i> <small class="text-pale">27
                                days left</small></span>
                            <b class="text-xs float-end"><span class="fa fa-stop-circle-o text-success"></span>
                              $1,200,000 Goal</b>
                          </div>
                        </td>
                      </tr>
                      <!-- TABLE ROW -->
                      <tr>
                        <td><b>Medicine</b></td>
                        <td>
                          <div class="cleafix">
                            <div class="img-30 rounded-3">
                              <span class="d-block h-100 bg-warning"></span>
                            </div>
                            <div class="img-30-info">
                              <b>Adam Akindele</b>
                              <small class="d-block">Lorem ipsum lodor...</small>
                            </div>
                          </div>
                        </td>
                        <td><b>USA</b></td>
                      </tr>
                      <tr>
                        <td colspan="3">
                          <div class="clearfix mb-1">
                            <b class="text-xs float-start">$180,000 raised</b>
                            <b class="text-xs float-end">40%</b>
                          </div>
                          <div class="w-100 my-progress bg-success-light mb-1">
                            <div class="bar bg-success" style="width:40%"></div>
                          </div>
                          <div class="clearfix mb-3">
                            <span class="text-sm float-start"><i class="fa fa-clock-o"></i> <small class="text-pale">27
                                days left</small></span>
                            <b class="text-xs float-end"><span class="fa fa-stop-circle-o text-success"></span>
                              $1,200,000 Goal</b>
                          </div>
                        </td>
                      </tr>
                      <!-- TABLE ROW -->
                      <tr>
                        <td><b>Medicine</b></td>
                        <td>
                          <div class="cleafix">
                            <div class="img-30 rounded-3">
                              <span class="d-block h-100 bg-danger"></span>
                            </div>
                            <div class="img-30-info">
                              <b>Adam Akindele</b>
                              <small class="d-block">Lorem ipsum lodor...</small>
                            </div>
                          </div>
                        </td>
                        <td><b>USA</b></td>
                      </tr>
                      <tr>
                        <td colspan="3">
                          <div class="clearfix mb-1">
                            <b class="text-xs float-start">$180,000 raised</b>
                            <b class="text-xs float-end">40%</b>
                          </div>
                          <div class="w-100 my-progress bg-success-light mb-1">
                            <div class="bar bg-success" style="width:40%"></div>
                          </div>
                          <div class="clearfix mb-3">
                            <span class="text-sm float-start"><i class="fa fa-clock-o"></i> <small class="text-pale">27
                                days left</small></span>
                            <b class="text-xs float-end"><span class="fa fa-stop-circle-o text-success"></span>
                              $1,200,000 Goal</b>
                          </div>
                        </td>
                      </tr>
                      <!-- TABLE ROW -->
                      <tr>
                        <td><b>Medicine</b></td>
                        <td>
                          <div class="cleafix">
                            <div class="img-30 rounded-3">
                              <span class="d-block h-100 bg-danger"></span>
                            </div>
                            <div class="img-30-info">
                              <b>Adam Akindele</b>
                              <small class="d-block">Lorem ipsum lodor...</small>
                            </div>
                          </div>
                        </td>
                        <td><b>USA</b></td>
                      </tr>
                      <tr>
                        <td colspan="3">
                          <div class="clearfix mb-1">
                            <b class="text-xs float-start">$180,000 raised</b>
                            <b class="text-xs float-end">40%</b>
                          </div>
                          <div class="w-100 my-progress bg-success-light mb-1">
                            <div class="bar bg-success" style="width:40%"></div>
                          </div>
                          <div class="clearfix mb-3">
                            <span class="text-sm float-start"><i class="fa fa-clock-o"></i> <small class="text-pale">27
                                days left</small></span>
                            <b class="text-xs float-end"><span class="fa fa-stop-circle-o text-success"></span>
                              $1,200,000 Goal</b>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="col-sm-5">
              <h5 class="mb-4">Top campaigns my category</h5>

              <div class="w-100">
                <div class="w-100 loaders">
                  <div class="loader-item">
                    <div class="loader-bar bg-orange" style="width:90%;"></div>
                    <div class="loader-text">100 Billion for Peter Obi</div>
                  </div>
                  <div class="loader-info">$930,345</div>
                </div>
                <div class="w-100 loaders">
                  <div class="loader-item">
                    <div class="loader-bar bg-success" style="width:80%;"></div>
                    <div class="loader-text">Black kids can code</div>
                  </div>
                  <div class="loader-info">$930,345</div>
                </div>
                <div class="w-100 loaders">
                  <div class="loader-item">
                    <div class="loader-bar bg-green" style="width:70%;"></div>
                    <div class="loader-text">BAT movement</div>
                  </div>
                  <div class="loader-info">$930,345</div>
                </div>
                <div class="w-100 loaders">
                  <div class="loader-item">
                    <div class="loader-bar bg-primary" style="width:60%;"></div>
                    <div class="loader-text">My dog has been hailing for</div>
                  </div>
                  <div class="loader-info">$930,345</div>
                </div>
                <div class="w-100 loaders">
                  <div class="loader-item">
                    <div class="loader-bar" style="width:50%;background-color:#1d5d57;"></div>
                    <div class="loader-text">My dog has been hailing for</div>
                  </div>
                  <div class="loader-info">$930,345</div>
                </div>
                <div class="w-100 loaders">
                  <div class="loader-item">
                    <div class="loader-bar" style="width:55%;background-color:#e82b65;"></div>
                    <div class="loader-text">My dog has been hailing for</div>
                  </div>
                  <div class="loader-info">$930,345</div>
                </div>
                <div class="w-100 loaders">
                  <div class="loader-item">
                    <div class="loader-bar" style="width:45%;background-color:#000000;"></div>
                    <div class="loader-text">My dog has been hailing for</div>
                  </div>
                  <div class="loader-info">$930,345</div>
                </div>
                <div class="w-100 loaders">
                  <div class="loader-item">
                    <div class="loader-bar" style="width:40%;background-color:#009688;"></div>
                    <div class="loader-text">My dog has been hailing for</div>
                  </div>
                  <div class="loader-info">$930,345</div>
                </div>
                <div class="w-100 loaders">
                  <div class="loader-item">
                    <div class="loader-bar" style="width:40%;background-color:#fbbd08;"></div>
                    <div class="loader-text">My dog has been hailing for</div>
                  </div>
                  <div class="loader-info">$930,345</div>
                </div>
                <div class="w-100 loaders">
                  <div class="loader-item">
                    <div class="loader-bar" style="width:40%;background-color:#1d5d57;"></div>
                    <div class="loader-text">My dog has been hailing for</div>
                  </div>
                  <div class="loader-info">$930,345</div>
                </div>
              </div>
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

/* BTN TABS */
.btn-tabs {
  display: flex;
  margin-bottom: 28px;
}

.btn-tabs .btn {
  display: block;
  padding: 5px 10px;
  margin: auto;
  background-color: #e8f2f2;
  color: #23a497;
  border-radius: 15px;
  font-weight: 500;
  border: 1px solid #23a497;
  font-size: 12px;
}

.btn-tabs .btn.active {
  color: #e8f2f2;
  background-color: #23a497;
}

.btn-tabs .btn:focus {
  box-shadow: 0 0 5px 1px #9ed3d3;
}


.loaders {
  overflow: auto;
}

.loader-item {
  border: 1px solid #ccc;
  height: 30px;
  position: relative;
  margin-bottom: 15px;
  width: 80%;
  float: left;
}

.loader-info {
  float: left;
  width: 20%;
  text-align: right;
  padding: 3px;
}

.loader-bar {
  height: 30px;
}

.loader-text {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  padding: 3px 10px;
  color: #fff;
  text-shadow: 0 0 5px #999;
}
</style>