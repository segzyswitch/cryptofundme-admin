import { createRouter, createWebHistory } from "vue-router";

const routes = [{
        path: "/",
        name: "Home",
        component: () =>
            import ( /* webpackChunkName: "Home" */ "./pages/home.vue")
    },
    
    {
        path: "/login",
        name: "Login",
        component: () =>
            import ( /* webpackChunkName: "Campaigns" */ "./pages/login.vue")
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import ( /* webpackChunkName: "Campaigns" */ "./pages/register.vue")
    },
    {
        path: "/administrators",
        name: "Administrator",
        component: () =>
            import ( /* webpackChunkName: "Campaigns" */ "./pages/administrators.vue")
    },
    {
        path: "/campaigns",
        name: "Campaigns",
        component: () =>
            import ( /* webpackChunkName: "Campaigns" */ "./pages/campaigns.vue")
    },
    {
        path: "/donations",
        name: "Donations",
        component: () =>
            import ( /* webpackChunkName: "Donations" */ "./pages/donations.vue")
    },
    {
        path: "/pending-approval",
        name: "pendingApproval",
        component: () =>
            import ( /* webpackChunkName: "pendingApproval" */ "./pages/pending-approval.vue")
    },
    {
        path: "/approve-donation",
        name: "approveDonation",
        component: () =>
            import ( /* webpackChunkName: "approveDonation" */ "./pages/approve-donation.vue")
    }
]

const router = new createRouter({
    history: createWebHistory(),
    linkExactActiveClass: "active",
    routes,
    scrollBehavior() {
        // always scroll to top
        return { top: 0 }
    }
})

export default router;
