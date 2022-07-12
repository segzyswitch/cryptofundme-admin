<template>
  <nav class="navbar navbar-expand-sm bg-white navbar-light fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand col-sm-2" to="/">
        <img src="assets/logo.jpeg" alt="">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <form class="d-flex">
          <div class="input-group nav-search">
            <label for="navSearch" class="input-group-text"><i class="fa fa-search"></i></label>
            <input id="navSearch" type="text" class="form-control" placeholder="Search">
          </div>
        </form>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a class="nav-link text-green profile-icon" href="#" data-bs-toggle="dropdown"><i class="fa fa-user-o"></i></a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item text-danger" href="#">Logout</a></li>
            </ul>
          </li>
        </ul>
        <div class="col-sm-2"></div>
      </div>
    </div>
  </nav>

  <!-- Offcanvas Sidebar -->
  <div class="offcanvas offcanvas-start" id="collapsibleNavbar">
    <div class="offcanvas-header p-0 pe-3">
      <nav class="navbar navbar-expand-sm bg-white navbar-light">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/" data-bs-dismiss="offcanvas">
            <img src="assets/logo.jpeg" alt="">
          </router-link>
        </div>
      </nav>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
        <form class="d-block mb-4">
          <div class="input-group nav-search">
            <label for="navSearch" class="input-group-text"><i class="fa fa-search"></i></label>
            <input id="navSearch" type="text" class="form-control" placeholder="Search">
          </div>
        </form>
      <div class="sidebar-link">
        <router-link class="btn" data-bs-dismiss="offcanvas" to="/">Dashboard</router-link>
        <router-link class="btn" data-bs-dismiss="offcanvas" to="/campaigns">Campaigns</router-link>
        <router-link class="btn" data-bs-dismiss="offcanvas" to="/donations">Donations</router-link>
        <router-link class="btn" data-bs-dismiss="offcanvas" to="/pending-approval">Pending approval(10)</router-link>
        <a class="btn" data-bs-dismiss="offcanvas" to="#">Profile</a>
        <a class="btn" data-bs-dismiss="offcanvas" to="#">Settings</a>
        <a class="btn text-danger" data-bs-dismiss="offcanvas" to="#">Logout</a>
      </div>
    </div>
  </div>
</template>