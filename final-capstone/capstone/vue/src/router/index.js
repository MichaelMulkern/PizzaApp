import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Register from '../views/Register.vue'
import store from '../store/index'
import MenuView from '../views/MenuView.vue'
import EmployeeView from '../views/EmployeeView.vue'
import Checkout from '../views/Checkout.vue'
import EditCrust from '../views/EditCrustView.vue'
import EditSauce from '../views/EditSauceView.vue'
import EditSize from '../views/EditSizeView.vue'
import EditToppings from '../views/EditToppingsView.vue'
import EditSpecialties from '../views/EditSpecialtyPizzaView.vue'

Vue.use(Router)

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/employee_page',
      name: 'employee-view',
      component: EmployeeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/place_order',
      name: 'menu-view',
      component: MenuView
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/edit_crust",
      name: "edit-crust",
      component: EditCrust,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/edit_sauce",
      name: "edit-sauce",
      component: EditSauce,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/edit_size",
      name: "edit-size",
      component: EditSize,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/edit_toppings",
      name: "edit-toppings",
      component: EditToppings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/edit_specialties",
      name: "edit-specialties",
      component: EditSpecialties,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.state.token === '') {
    next("/login");
  } else {
    // Else let them go to their next destination
    next();
  }
});

export default router;
