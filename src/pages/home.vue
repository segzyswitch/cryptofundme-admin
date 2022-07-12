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
          <h3 class="mb-4">Dashboard</h3>

          <div class="row">
            <div class="col-sm-4 p-2">
              <div class="w-100 ps-3 pe-3 bg-white mb-3">
                <div class="w-100" style="height:200px;"></div>
                <div class="row">
                  <div class="col-sm-4 p-2">
                    <div class="w-100 bg-orange text-center text-light">
                      <small style="font-size:12px;">Total Campaigns</small>
                      <h4>127,377</h4>
                    </div>
                  </div>
                  <div class="col-sm-4 p-2">
                    <div class="w-100 bg-green text-center text-light">
                      <small style="font-size:12px;">Total Donations</small>
                      <h4>5,201</h4>
                    </div>
                  </div>
                  <div class="col-sm-4 p-2">
                    <div class="w-100 bg-primary text-center text-light">
                      <small style="font-size:12px;">Total Withdrawal</small>
                      <h4>547</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 p-2">
              <div class="w-100 pt-2 ps-2 pe-2 bg-white mb-3 campaigns">
                <h6 class="mb-3">Top performing Campaigns</h6>
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
                            <span class="text-sm float-start"><i class="fa fa-clock-o"></i> <small class="text-pale">27 days left</small></span>
                            <b class="text-xs float-end"><span class="fa fa-stop-circle-o text-success"></span> $1,200,000 Goal</b>
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
                            <span class="text-sm float-start"><i class="fa fa-clock-o"></i> <small class="text-pale">27 days left</small></span>
                            <b class="text-xs float-end"><span class="fa fa-stop-circle-o text-success"></span> $1,200,000 Goal</b>
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
                            <span class="text-sm float-start"><i class="fa fa-clock-o"></i> <small class="text-pale">27 days left</small></span>
                            <b class="text-xs float-end"><span class="fa fa-stop-circle-o text-success"></span> $1,200,000 Goal</b>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="col-sm-4 p-2">
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
              <div class="cleafix mt-3">
                <div class="col-sm-6 p-0 float-end">
                  <div class="w-100 p-3 bg-success-light">
                    <h6 class="text-sm">Top Donor Countries</h6>
                    <b class="d-block">Switzerland</b>
                    <b class="d-block">Russia</b>
                    <b class="d-block">Brazil</b>
                    <b class="d-block">Indonesia</b>
                    <b class="d-block"><img src="../../public/assets/images/India-icon.jpg" width="15" alt="India"> India</b>
                    <b class="d-block"><img src="../../public/assets/images/Nigeria-icon.png" width="15" alt="Nigeria"> Nigeria</b>
                    <b class="d-block"><img src="../../public/assets/images/USA-icon.png" width="15" alt="USA"> USA</b>
                  </div>
                </div>
              </div>
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