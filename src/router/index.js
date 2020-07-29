/* eslint-disable eol-last */
/* eslint-disable indent */
import Vue from 'vue'
import Router from 'vue-router'
import myName from '@/components/myName'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'myName',
        component: myName
    }]
})