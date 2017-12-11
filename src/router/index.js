import Vue from 'vue'
import Router from 'vue-router'
import Content from '../components/content/Content'
import CinemaList from '../components/content/CinemaList'
import MovieList from '../components/content/MovieList'
import Login from '../components/Login/Login'
import MeituanLogin from '../components/Login/MeituanLogin'
import PhoneLogin from '../components/Login/PhoneLogin'
import MoviesDetails from '../components/MoviesDetails/MoviesDetails'
import showCinemaDet from '../components/showCinemaDet/showCinemaDet'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content,
      children: [
        {
          path: '/',
          name: 'MovieList',
          component: MovieList
        },
        {
          path: '/cinemaList',
          name: 'CinemaList',
          component: CinemaList
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      children: [
        {
          path: '/login',
          name: 'MeituanLogin',
          component: MeituanLogin
        },
        {
          path: '/login/phonelogin',
          name: 'PhoneLogin',
          component: PhoneLogin
        }
      ]
    },
    {
      path: '/moviesdetails/:id',
      name: 'MoviesDetails',
      component: MoviesDetails
    },
    {
      path: '/showcinemadet/:id',
      name: 'showCinemaDet',
      component: showCinemaDet
    }
  ]
})
