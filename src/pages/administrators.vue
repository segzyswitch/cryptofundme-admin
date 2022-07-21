<template>
  <!-- NAVBAR -->
  <navbar :page_name="page_name" />

  <div class="container-fluid admin-body">
    <div class="row">
      <div class="col-sm-2 p-0">
        <!-- SIDEBAR -->
        <sidebar :page_name="page_name" />
      </div>

      <div class="col-sm-10">
        <div class="w-100 main-page">
          <h3 class="mb-4">{{ page_name }}</h3>

          <div class="row">
            <div class="col-sm-4 previledge">
              <div class="previledge-card">
                <div class="d-flex justify-content-between">
                  <div class="p-1">
                    <span>3 ACCOUNTS</span>
                  </div>
                  <div class="p-1">
                    <div class="d-flex mb-3 previledge-img">
                      <img :src="base + 'imgs/asset-3.png'" alt="">
                      <img :src="base + 'imgs/asset-3.png'" alt="">
                      <img :src="base + 'imgs/asset-3.png'" alt="">
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-row previledge-status">
                  <div class="p-1">Super Admin <img :src="base + 'imgs/super-admin.png'" alt=""></div>
                </div>
              </div>
            </div>

            <div class="col-sm-4 previledge">
              <div class="previledge-card">
                <div class="d-flex justify-content-between">
                  <div class="p-1">
                    <span>3 ACCOUNTS</span>
                  </div>
                  <div class="p-1">
                    <div class="d-flex mb-3 previledge-img">
                      <img :src="base + 'imgs/asset-3.png'" alt="">
                      <img :src="base + 'imgs/asset-3.png'" alt="">
                      <img :src="base + 'imgs/asset-3.png'" alt="">
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-row previledge-status">
                  <div class="p-1">Chief Moderator <img :src="base + 'imgs/chief-mode.png'" alt=""></div>
                </div>
              </div>
            </div>

            <div class="col-sm-4 previledge">
              <div class="previledge-card">
                <div class="d-flex justify-content-between">
                  <div class="p-1">
                    <span>3 ACCOUNTS</span>
                  </div>
                  <div class="p-1">
                    <div class="d-flex mb-3 previledge-img">
                      <img :src="base + 'imgs/asset-3.png'" alt="">
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-row previledge-status">
                  <div class="p-1">Moderator <img :src="base + 'imgs/moderator.png'" alt=""></div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12 " style="padding:5px!important;">
              <div class="admin-account">
                <div class="d-flex">
                  <div class="p-2 admin-text">
                    Administrators’ accounts
                  </div>
                  <div class="p-2 admin-text-count">
                    All (8)
                  </div>
                </div>
                <div class="d-flex">
                  <div class="p-2">
                    Company’s administrator accounts and their associated roles
                  </div>
                </div>


                <div class="table-responsive">
                  <div class="d-flex">
                    <div :class="hover1" @click="select_hover1">
                      Super Admin (3)
                    </div>
                    <div :class="hover2" @click="select_hover2">
                      Chief Moderator (4)
                    </div>
                    <div :class="hover3" @click="select_hover3">
                      Moderator (1)

                    </div>
                  </div>
                  <table class="table" v-if="admin == true">
                    <thead>
                      <tr>
                        <th>Account </th>
                        <th>Email Address </th>
                        <th>Role </th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex tbl-img">
                            <div class="p-1">
                              <img :src="base + 'imgs/asset-3.png'" alt="">
                            </div>
                            <div class="p-1">
                              Mitchell Williamson<br>
                              <span>$taff ID#01223</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="flex tbl-img">
                            <div class="p-1">
                              Mitchellwilliamson@cryptofundme.org
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              <img :src="base + 'imgs/super-admin.png'" alt="">
                            </div>
                            <div class="p-1">
                              <span class="fa fa-envelope-o"></span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              <b>RESET LOGIN</b>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              Remove
                            </div>
                            <div class="p-1">
                              <span class="fa fa-pencil"></span>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="d-flex tbl-img">
                            <div class="p-1">
                              <img :src="base + 'imgs/asset-3.png'" alt="">
                            </div>
                            <div class="p-1">
                              Mitchell Williamson<br>
                              <span>$taff ID#01223</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="flex tbl-img">
                            <div class="p-1">
                              Mitchellwilliamson@cryptofundme.org
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              <img :src="base + 'imgs/super-admin.png'" alt="">
                            </div>
                            <div class="p-1">
                              <span class="fa fa-envelope-o"></span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              <b>RESET LOGIN</b>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              Remove
                            </div>
                            <div class="p-1">
                              <span class="fa fa-pencil"></span>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="d-flex tbl-img">
                            <div class="p-1">
                              <img :src="base + 'imgs/asset-3.png'" alt="">
                            </div>
                            <div class="p-1">
                              Mitchell Williamson<br>
                              <span>$taff ID#01223</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="flex tbl-img">
                            <div class="p-1">
                              Mitchellwilliamson@cryptofundme.org
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              <img :src="base + 'imgs/super-admin.png'" alt="">
                            </div>
                            <div class="p-1">
                              <span class="fa fa-envelope-o"></span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              <b>RESET LOGIN</b>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              Remove
                            </div>
                            <div class="p-1">
                              <span class="fa fa-pencil"></span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="5">
                          <div class="d-flex  add-role">
                            <div class="p-1">
                              <a href="#"  @click="add_Admin">Add a Super Admin > </a>
                            </div>
                            <div class="p-1" v-if="is_AddAdmin == true">
                              <input type="text" class="form_search" placeholder="Add by Name, Staff ID or Email">
                            </div>
                            <div class="p-1" v-if="is_AddAdmin == true">
                              <button class="form_search" >Add Super
                                Admin</button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table class="table" v-if="chief_moderator == true">
                    <thead>
                      <tr>
                        <th>Account </th>
                        <th>Email Address </th>
                        <th>Role </th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex tbl-img">
                            <div class="p-1">
                              <img :src="base + 'imgs/asset-3.png'" alt="">
                            </div>
                            <div class="p-1">
                              Mitchell Williamson<br>
                              <span>$taff ID#01223</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="flex tbl-img">
                            <div class="p-1">
                              Mitchellwilliamson@cryptofundme.org
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              <img :src="base + 'imgs/chief-mode.png'" alt="">
                            </div>
                            <div class="p-1">
                              <span class="fa fa-envelope-o"></span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              <b>RESET LOGIN</b>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              Remove
                            </div>
                            <div class="p-1">
                              <span class="fa fa-pencil"></span>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="d-flex tbl-img">
                            <div class="p-1">
                              <img :src="base + 'imgs/asset-3.png'" alt="">
                            </div>
                            <div class="p-1">
                              Mitchell Williamson<br>
                              <span>$taff ID#01223</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="flex tbl-img">
                            <div class="p-1">
                              Mitchellwilliamson@cryptofundme.org
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              <img :src="base + 'imgs/chief-mode.png'" alt="">
                            </div>
                            <div class="p-1">
                              <span class="fa fa-envelope-o"></span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              <b>RESET LOGIN</b>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              Remove
                            </div>
                            <div class="p-1">
                              <span class="fa fa-pencil"></span>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="d-flex tbl-img">
                            <div class="p-1">
                              <img :src="base + 'imgs/asset-3.png'" alt="">
                            </div>
                            <div class="p-1">
                              Mitchell Williamson<br>
                              <span>$taff ID#01223</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="flex tbl-img">
                            <div class="p-1">
                              Mitchellwilliamson@cryptofundme.org
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              <img :src="base + 'imgs/chief-mode.png'" alt="">
                            </div>
                            <div class="p-1">
                              <span class="fa fa-envelope-o"></span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              <b>RESET LOGIN</b>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              Remove
                            </div>
                            <div class="p-1">
                              <span class="fa fa-pencil"></span>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="d-flex tbl-img">
                            <div class="p-1">
                              <img :src="base + 'imgs/asset-3.png'" alt="">
                            </div>
                            <div class="p-1">
                              Mitchell Williamson<br>
                              <span>$taff ID#01223</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="flex tbl-img">
                            <div class="p-1">
                              Mitchellwilliamson@cryptofundme.org
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              <img :src="base + 'imgs/chief-mode.png'" alt="">
                            </div>
                            <div class="p-1">
                              <span class="fa fa-envelope-o"></span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              <b>RESET LOGIN</b>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              Remove
                            </div>
                            <div class="p-1">
                              <span class="fa fa-pencil"></span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="5">
                          <div class="d-flex  add-role">
                            <div class="p-1">
                              <a href="">Add Chief Moderator > </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table class="table" v-if="moderator == true">
                    <thead>
                      <tr>
                        <th>Account </th>
                        <th>Email Address </th>
                        <th>Role </th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex tbl-img">
                            <div class="p-1">
                              <img :src="base + 'imgs/asset-3.png'" alt="">
                            </div>
                            <div class="p-1">
                              Mitchell Williamson<br>
                              <span>$taff ID#01223</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="flex tbl-img">
                            <div class="p-1">
                              Mitchellwilliamson@cryptofundme.org
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              <img :src="base + 'imgs/moderator.png'" alt="">
                            </div>
                            <div class="p-1">
                              <span class="fa fa-envelope-o"></span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              <b>RESET LOGIN</b>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex role_flex">
                            <div class="p-1">
                              Remove
                            </div>
                            <div class="p-1">
                              <span class="fa fa-pencil"></span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="5">
                          <div class="d-flex  add-role">
                            <div class="p-1">
                              <a href="">Add a Moderator > </a>
                            </div>
                          </div>
                        </td>
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
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import sidebar from '../components/sidebar.vue'

export default {
  data() {
    return {
      page_name: "Administrators",
      base: process.env.BASE_URL,
      hover1: "p-2 me-3 admin-text-count",
      hover2: "p-2 me-3 admin-text-count-hover",
      hover3: "p-2 me-3 admin-text-count-hover",
      admin: true,
      chief_moderator: false,
      moderator: false,
      is_AddAdmin: false
    }
  },
  components: {
    navbar,
    sidebar
  },
  methods: {
    select_hover1() {
      if (this.hover1 == "p-2 me-3 admin-text-count-hover") {
        this.hover1 = "p-2 me-3 admin-text-count"
        this.hover2 = "p-2 me-3 admin-text-count-hover"
        this.hover3 = "p-2 me-3 admin-text-count-hover"
      }

      this.admin = true
      this.chief_moderator = false
      this.moderator = false
    },
    select_hover2() {
      if (this.hover2 == "p-2 me-3 admin-text-count-hover") {
        this.hover2 = "p-2 me-3 admin-text-count"
        this.hover1 = "p-2 me-3 admin-text-count-hover"
        this.hover3 = "p-2 me-3 admin-text-count-hover"
      }
      this.admin = false
      this.chief_moderator = true
      this.moderator = false
    },
    select_hover3() {
      if (this.hover3 == "p-2 me-3 admin-text-count-hover") {
        this.hover3 = "p-2 me-3 admin-text-count"
        this.hover1 = "p-2 me-3 admin-text-count-hover"
        this.hover2 = "p-2 me-3 admin-text-count-hover"
      }
      this.admin = false
      this.chief_moderator = false
      this.moderator = true
    },
    add_Admin() {
        
      if (this.is_AddAdmin == false) {
        this.is_AddAdmin = true;
      }else{
        this.is_AddAdmin = false;

      }
      
    }
  },
  mounted() {
    document.body.style.backgroundColor = "white"
  },
  created() {
    document.body.style.backgroundColor = "white"
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

.previledge {
  padding: 5px !important;
}

.previledge-card {
  border: 2px solid rgb(230, 223, 223);
  border-radius: 5px;
  width: 100% !important;
  padding: 10px;
  height: 120px !important;
}

.previledge-card span {
  font-size: 14px;
}

.previledge-img img {
  width: 35px;
  border-radius: 50%;
  margin-right: 2px;
}

.previledge-status .p-1 {
  font-size: 25px !important;
  font-weight: bold !important;
  margin-top: -30px;
}

.previledge-status img {
  width: 30px !important;
}

.main-page {
  width: 98% !important;
}

.admin-account {
  border: 2px solid rgb(230, 223, 223);
  border-radius: 5px;
  width: 100% !important;
  padding: 40px 10px !important;
}

.admin-text {
  font-size: 20px !important;
  font-weight: bold !important;
}

.admin-text-count {

  font-size: 20px !important;
  font-weight: bold !important;
  color: #009688 !important;
  cursor: pointer;
}

.admin-text-count-hover {
  font-size: 20px !important;
  font-weight: bold !important;
  color: #000000 !important;
  cursor: pointer;
}

.tbl-img img {
  width: 40px !important;
  border-radius: 50px !important;
}

.tbl-img {
  font-size: 15px;
  font-weight: 500;
}

.tbl-img span {
  margin-top: -9px;
  font-size: 12px;
}

.role_flex img {
  width: 30px;
  margin-right: 10px;
}

.role_flex .fa {
  font-size: 20px;
}

.add-role a {
  text-decoration: none;
  font-weight: bold;
  display: block;
  padding-top: 10px !important;
  padding-bottom: 5px!important;

}

.add-role button,
.add-role button:hover {
  width: 200px;
  height: 50px;
  border: none;
  background-color: #009688 !important;
  color: #f6f8f9 !important;
  outline: none;
  padding: 5px 30px;

}


.form_search,
.form_search:focus,
.form_search:hover {
  width: 290px;
  height: 50px;
  border: none;
  background-color: #f6f8f9 !important;
  outline: none;
  padding: 5px 30px;
}

table,table thead,table tr,table th,table td{
  border: none!important;
}
</style>