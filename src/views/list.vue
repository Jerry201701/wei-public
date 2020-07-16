<template>
   <div>
     <!-- <br>
    <x-header title="slot:overwrite-title">头部信息测试朱丹demo</x-header>
    <br> -->
    <!-- <group title="文章列表">
      <radio title="type" v-model="type" :options="['1', '2', '3', '4', '5']"></radio>
    </group> -->
    <!-- <panel header="文章标题" :footer="footer" :list="list" :type="type" @on-img-error="onImgError"></panel> -->
    <panel header="文章标题" :footer="footer" :list="list" :type="type" @on-click-item="showDetail"></panel>
  
    <!-- <group>
      <cell is-link title="Simple" link="/component/tabbar-simple"></cell>
      <cell is-link title="Switch icons" link="/component/tabbar-icon"></cell>
    </group> -->
    <tabbar>
      <tabbar-item>
        <img slot="icon" src="../assets/demo/icon_nav_button.png">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot >
        <img slot="icon" src="../assets/demo/icon_nav_msg.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="/list">
        <img slot="icon" src="../assets/demo/icon_nav_article.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/new">
        <img slot="icon" src="../assets/demo/icon_nav_cell.png">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell,Panel,Radio,XHeader  } from 'vux'


export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    Panel,
    Radio,
    XHeader 
  },
   methods: {
    // onImgError (item, $event) {
    //   console.log(item, $event)
    // }
    showDetail(item,$event){
        console.log('查看详情')
    },
    mounted() {
      // 添加返回事件监听
    let that = this;
    window.addEventListener("popstate", function(e) {
     console.log('back')
     // that.isShowTestDiv = false;
    }, false);
  }
  },
   data () {
    return {
      type: '5',
      list: [{
         src: 'http://somedomain.somdomain/x.jpg',
         fallbackSrc: 'http://localhost:8080/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/new',
        meta: {
          source: '来源信息',
          date: '2020-05-10',
          other: '其他信息'
        }
       },
       {
        src: 'http://localhost:8080/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '2020-05-10',
          other: '其他信息'
        }
      }],
      footer: {
       // title: this.$t('more'),
        title: '标题',
        url: 'http://vux.li'
      }
    }
  }
}
</script>
