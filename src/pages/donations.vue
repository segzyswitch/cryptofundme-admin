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
            <div class="col-sm-4 p-2">
              <h3 class="mb-4">Donations</h3>
              <div class="w-100 ps-3 pe-3 bg-white mb-1">
                <!-- STATISTICS CONTAINER -->
                <div class="w-100 scroller">
                  <apexchart width="100%" type="bar" :options="options" :series="series"></apexchart>
                </div>
              </div>

              <div class="w-100 p-1">
                <div class="row">
                  <div class="col-sm-6 p-2">
                    <div class="w-100 text-center p-2" style="background-color:#e8f7b2;">
                      <small style="font-size:12px;">Total Campaigns</small>
                      <h4>127,377</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 p-2">
              <div class="w-100 d-none d-sm-block" style="height:60px;"></div>
              <div class="w-100 pt-2 ps-2 pe-2 bg-white mb-3 campaigns">
                <h6 class="mb-3">Top performing Campaigns</h6>
                <div class="table-responsive">
                  <table class="table table-sm text-sm">
                    <thead>
                      <tr>
                        <th>Amount</th>
                        <th>Campaigns</th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- TABLE ROW -->
                      <tr>
                        <td class="pb-3">
                          <b class="d-block text-success"><img src="assets/images/coin-icon.png" width="15"> Medicine</b>
                          <b class="b-block text-danger">$908.72</b>
                        </td>
                        <td class="pb-3">
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
                      </tr>
                      <!-- TABLE ROW -->
                      <tr>
                        <td class="pb-3">
                          <b class="d-block text-success"><img src="assets/images/coin-icon.png" width="15"> Medicine</b>
                          <b class="b-block text-danger">$908.72</b>
                        </td>
                        <td class="pb-3">
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
                      </tr>
                      <!-- TABLE ROW -->
                      <tr>
                        <td class="pb-3">
                          <b class="d-block text-success"><img src="assets/images/coin-icon.png" width="15"> Medicine</b>
                          <b class="b-block text-danger">$908.72</b>
                        </td>
                        <td class="pb-3">
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
                      </tr>
                      <!-- TABLE ROW -->
                      <tr>
                        <td class="pb-3">
                          <b class="d-block text-success"><img src="assets/images/coin-icon.png" width="15"> Medicine</b>
                          <b class="b-block text-danger">$908.72</b>
                        </td>
                        <td class="pb-3">
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
                      </tr>
                      <!-- TABLE ROW -->
                      <tr>
                        <td class="pb-3">
                          <b class="d-block text-success"><img src="assets/images/coin-icon.png" width="15"> Medicine</b>
                          <b class="b-block text-danger">$908.72</b>
                        </td>
                        <td class="pb-3">
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
                      </tr>
                      <!-- TABLE ROW -->
                      <tr>
                        <td class="pb-3">
                          <b class="d-block text-success"><img src="assets/images/coin-icon.png" width="15"> Medicine</b>
                          <b class="b-block text-danger">$908.72</b>
                        </td>
                        <td class="pb-3">
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
                      </tr>
                      <!-- TABLE ROW -->
                      <tr>
                        <td class="pb-3">
                          <b class="d-block text-success"><img src="assets/images/coin-icon.png" width="15"> Medicine</b>
                          <b class="b-block text-danger">$908.72</b>
                        </td>
                        <td class="pb-3">
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
                      </tr>
                      <!-- TABLE ROW -->
                      <tr>
                        <td class="pb-3">
                          <b class="d-block text-success"><img src="assets/images/coin-icon.png" width="15"> Medicine</b>
                          <b class="b-block text-danger">$908.72</b>
                        </td>
                        <td class="pb-3">
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
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="col-sm-4 p-2">
              <div class="w-100 d-none d-sm-block" style="height:60px;"></div>
              <div class="w-100 p-2 bg-black text-light donations">
                <h6 class="mb-3 text-sm">Recent donations</h6>
                <table class="table table-sm text-sm text-light">
                  <thead>
                    <tr>
                      <th>Campaign</th>
                      <th>Donation</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="pt-3">
                        <div class="clearfix">
                          <div class="img-30 rounded-3">
                            <span class="h-100 d-block bg-danger"></span>
                          </div>
                          <div class="img-30-info">
                            <b class="d-block">Adam Akorede</b>
                            <small>Lorem ipsum lodor...</small>
                          </div>
                        </div>
                      </td>
                      <td class="pt-3"><p class="m-0"><i class="fa fa-stop-circle-o text-secondary"></i> <span class="text-success">0.24</span></p></td>
                      <td class="pt-3"><small>2 mins</small></td>
                    </tr>
                    <tr>
                      <td class="pt-3">
                        <div class="clearfix">
                          <div class="img-30 rounded-3">
                            <span class="h-100 d-block bg-danger"></span>
                          </div>
                          <div class="img-30-info">
                            <b class="d-block">Adam Akorede</b>
                            <small>Lorem ipsum lodor...</small>
                          </div>
                        </div>
                      </td>
                      <td class="pt-3"><p class="m-0"><i class="fa fa-stop-circle-o text-secondary"></i> <span class="text-success">0.24</span></p></td>
                      <td class="pt-3"><small>2 mins</small></td>
                    </tr>
                    <tr>
                      <td class="pt-3">
                        <div class="clearfix">
                          <div class="img-30 rounded-3">
                            <span class="h-100 d-block bg-danger"></span>
                          </div>
                          <div class="img-30-info">
                            <b class="d-block">Adam Akorede</b>
                            <small>Lorem ipsum lodor...</small>
                          </div>
                        </div>
                      </td>
                      <td class="pt-3"><p class="m-0"><i class="fa fa-stop-circle-o text-secondary"></i> <span class="text-success">0.24</span></p></td>
                      <td class="pt-3"><small>2 mins</small></td>
                    </tr>
                    <tr>
                      <td class="pt-3">
                        <div class="clearfix">
                          <div class="img-30 rounded-3">
                            <span class="h-100 d-block bg-danger"></span>
                          </div>
                          <div class="img-30-info">
                            <b class="d-block">Adam Akorede</b>
                            <small>Lorem ipsum lodor...</small>
                          </div>
                        </div>
                      </td>
                      <td class="pt-3"><p class="m-0"><i class="fa fa-stop-circle-o text-secondary"></i> <span class="text-success">0.24</span></p></td>
                      <td class="pt-3"><small>2 mins</small></td>
                    </tr>
                    <tr>
                      <td class="pt-3">
                        <div class="clearfix">
                          <div class="img-30 rounded-3">
                            <span class="h-100 d-block bg-danger"></span>
                          </div>
                          <div class="img-30-info">
                            <b class="d-block">Adam Akorede</b>
                            <small>Lorem ipsum lodor...</small>
                          </div>
                        </div>
                      </td>
                      <td class="pt-3"><p class="m-0"><i class="fa fa-stop-circle-o text-secondary"></i> <span class="text-success">0.24</span></p></td>
                      <td class="pt-3"><small>2 mins</small></td>
                    </tr>
                  </tbody>
                </table>
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