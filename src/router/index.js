import Vue from 'vue'
import Router from 'vue-router'
import '../../node_modules/vuetify/dist/vuetify.min.css'
import TrainingTemplate from '@/components/training-template'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TrainingTemplate',
      component: TrainingTemplate
    }
  ]
})
