<template>
    <div>
        <h1>这是首页</h1>
         <!-- <x-button @click.native="showButton('top')" type="primary">Top</x-button> -->
         <x-button link='/new'  type="primary">跳转</x-button>
         <x-button link='/test'  type="primary">test</x-button>
         <x-button link='/list'  type="primary">list</x-button>
    </div>
</template>

<script>
import { XButton } from 'vux'
export default {
    components: {
    XButton
  },
 methods: {
     addGoods: function(){
      console.log('添加商品')
       this.$router.push({  //核心语句
        path:'/Manage/Good',   //跳转的路径
        query:{           //路由传参时push和query搭配使用 ，作用时传递参数
          id:378899, 
        }
      })
  },
  showButton:function(top){
      console.log('按钮')


  }
 }
}
</script>
<style lang="scss" scoped>

</style>