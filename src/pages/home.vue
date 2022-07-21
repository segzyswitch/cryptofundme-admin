<template>
  <!-- NAVBAR -->
  <navbar :page_name="page_name" />

  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2 p-0">
        <!-- SIDEBAR -->
        <sidebar :page_name="page_name" />
      </div>

      <div class="col-sm-10">
        <div class="w-100 main-page">
          <h3 class="mb-4">{{ page_name }}</h3>

          <div class="row">
            <div class="col-sm-4 chart-card">
              <div class="chart_total">
                <div class="d-flex">
                  <div class="p-2">
                    <p style="font-size:20px; color:gray;">Total Campaigns</p>
                    <h4>25,679</h4>
                    <p><strong><span class="text-danger">1.3% </span>
                        <span class="fa fa-long-arrow-down text-danger"></span>
                      </strong>
                      <span style="font-size:18px; color:gray;"> than last month</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div class="col-sm-4 chart-card">
              <div class="chart_total">
                <div class="d-flex">
                  <div class="p-2">
                    <p style="font-size:22px; color:gray;">Total Campaigns</p>
                    <h4>25,679</h4>
                    <p><strong><span class="text-danger">1.3% </span>
                        <span class="fa fa-long-arrow-down text-danger"></span>
                      </strong>
                      <span style="font-size:18px; color:gray;"> than last month</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div class="col-sm-4 chart-card">
              <div class="chart_total">
                <div class="d-flex">
                  <div class="p-2">
                    <p style="font-size:22px; color:gray;">Total Campaigns</p>
                    <h4>25,679</h4>
                    <p><strong><span class="text-danger">1.3% </span>
                        <span class="fa fa-long-arrow-down text-danger"></span>
                      </strong>
                      <span style="font-size:18px; color:gray;"> than last month</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div class="col-sm-4 chart-card">
              <div class="chart_total">
                <div class="d-flex">
                  <div class="p-2">
                    <p style="font-size:22px; color:gray;">Total Campaigns</p>
                    <h4>25,679</h4>
                    <p><strong><span class="text-danger">1.3% </span>
                        <span class="fa fa-long-arrow-down text-danger"></span>
                      </strong>
                      <span style="font-size:18px; color:gray;"> than last month</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div class="col-sm-4 chart-card">
              <div class="chart_total">
                <div class="d-flex">
                  <div class="p-2">
                    <p style="font-size:22px; color:gray;">Total Campaigns</p>
                    <h4>25,679</h4>
                    <p><strong><span class="text-danger">1.3% </span>
                        <span class="fa fa-long-arrow-down text-danger"></span>
                      </strong>
                      <span style="font-size:18px; color:gray;"> than last month</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div class="col-sm-12">

              <total_cam_donationVue></total_cam_donationVue>
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
import total_cam_donationVue from '../components/charts/total_cam_donation.vue'

export default {
  data() {
    return {
      /* options: {
        chart: {
          id: 'vuechart-example',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }

      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }], */
      page_name: "Dashboard"
    }
  },
  components: {
    navbar,
    sidebar,
    total_cam_donationVue
  },

}
</script>
<style scoped>
.chart_total {
  border: 0.2px solid rgb(245, 243, 243);
  border-radius: 5px;
  width: 100% !important;
  overflow: auto;
  background-color: white;
}
.chart-card{
  padding: 5px;
}
</style>