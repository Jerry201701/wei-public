import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Index from '@/views/index'
import New from '@/views/Article/New'
import Test from '@/views/test'
import List from '@/views/list'


Vue.use(Router)

Router.prototype.goBack = function (val) {
 
  store.commit('SET_DIRECTION', val);
  if(store.state.direction == 'tip'){
   
    window.history.go(-1);
  }else{
    setTimeout(()=>{window.history.go(-1)},50);
  }
}

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: "首页"
        }
    },
    {
      path:'/new',
      name:'New',
      component:New,
      meta: {
        title: "新闻内容"
        }
    },
    {
      path:'/test',
      name:'Test',
      component:Test,
    },
    {
      path:'/list',
      name:'List',
      component:List,
      meta: {
        title: "新闻列表"
        }
    }
  ]
})

router.afterEach((to, from,next) => {
  if(store.state.direction !== 'tip')
    store.commit('SET_DIRECTION', 'tip');
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
  document.title = to.meta.title
  }
  next();
  })

export default router;
