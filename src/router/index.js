import Vue from 'vue'
import Router from 'vue-router'
import '../../node_modules/vuetify/dist/vuetify.min.css'
import TrainingTemplate from '@/components/training-template'
import VuePDFViewer from 'vue-instant-pdf-viewer'

Vue.use(Router)
Vue.component('vue-pdf-viewer', VuePDFViewer)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TrainingTemplate',
      component: TrainingTemplate
    }
  ]
})
