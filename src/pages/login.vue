<template>
    <nav class="navbar navbar-expand-sm bg-white navbar-light fixed-top">
        <div class="container-fluid">
            <router-link class="navbar-brand col-sm-2" to="/">
                <!-- <img src="assets/logo.jpeg" alt=""> -->
                <div class="d-flex">
                    <div class="p-2">
                        <img :src="base + 'logo.png'" alt="">
                    </div>
                    <div class="p-2 logo_title">
                        <span class="t1">Cryptofundme</span>
                        <span class="t2"><br>Decentralized Giving</span>
                    </div>
                </div>
            </router-link>
        </div>
    </nav>


    <div class="container-fluid bg-white" style="padding-top:200px; height:100vh;">
        <div class="row">
            <div class="col-sm-5 col-12 ms-auto">
                <h3>Log in to Cryptofundme Admin
                </h3>
                <fieldset class="border p-3 mb-3">
                    <legend class="float-none w-auto">Email</legend>
                    <div class="input-group">
                        <!-- <span class="input-group-text">$</span> -->
                        <input type="email" class="form-control" placeholder="Enter your Email">
                    </div>
                </fieldset>

                <fieldset class="border p-3 mb-3">
                    <legend class="float-none w-auto">Password</legend>
                    <div class="input-group">
                        <!-- <span class="input-group-text">$</span> -->
                        <input type="password" class="form-control" placeholder="Enter your Password">
                    </div>
                </fieldset>
                <button class="login_btn">Login</button>
            </div>
            <div class="col-sm-5 col-12 me-auto">
                <img :src="base+'imgs/login.jpg'" class="img-fluid" alt="">
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            base: process.env.BASE_URL,
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
@import url(../../public/assets/css/navbar.css);

fieldset .form-control:hover,
fieldset .form-control:focus {
    box-shadow: none !important;
    border: none !important;
    background-color: transparent !important;
}

fieldset {
    height: 50px;
}

.fieldset {
    height: auto !important;
}

fieldset .input-group-text,
fieldset .form-control,
fieldset .form-select {
    box-shadow: none !important;
    border: none !important;
    background-color: transparent !important;
    height: 40px;
    margin-top: -30px;
}

fieldset textarea {
    box-shadow: none !important;
    border: none !important;
    background-color: transparent !important;
    height: 300px !important;
}

fieldset .input-group-text {
    padding: 0px !important;
}

fieldset .form-control,
fieldset .form-select {
    padding: 5px !important;
}

.social_net img {
    width: 18px;
    height: 18px;
    margin-top: -5px;
}


/* .form-check-input:checked[type="radio"] {
    background: red !important;
    border: 1px solid green!important;
} */

.form-check-input:checked,
.form-check-input:after {
    background-color: #009688;
    border: 2px solid #009688;
}

.personal_info {
    margin-top: 50px;
}

legend {
    font-size: 15px;
    font-weight: bold;
}


.login_btn {
    background-color: #009688;
    color: #fff !important;
    padding: 10px 100px;
    text-align: center !important;
    text-decoration: none;
    border: 1px solid #009688;
}
</style>