import Vue from 'vue'
import Router from 'vue-router'
import message from '@/components/tabbar/message'
import application from '@/components/tabbar/application'
import my from '@/components/tabbar/my'
import toDo from '@/components/tabbar/toDo'
import workbench from '@/components/tabbar/workbench'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/application',
      name: 'application',
      component: application
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/toDo',
      name: 'toDo',
      component: toDo
    },
    {
      path: '/workbench',
      name: 'workbench',
      component: workbench
    }
  ]
})
