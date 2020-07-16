<template>
    <div>
        <h1>新闻列表</h1>

         <weui-article>
      <h1>大标题</h1>
      <section>
        <h2 class="title">章标题</h2>
        <section>
          <h3>1.1 节标题</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute</p>
        </section>
        <section>
          <h3>1.2 节标题</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
      </section>
    </weui-article>
        
        <!-- <group>
        <x-textarea title="title" v-model="value"></x-textarea>
        </group> -->
    </div>
</template>

<script>
import { XTextarea,XButton,Group } from 'vux'
import {Article} from 'vue-weui'
export default {
components: {
    XTextarea,
    XButton,
    Group,
    'weui-article': Article
  },
   data() {
    return {
      title:'重大事件',
      value:'aaaaa水水水水水水水水水水水'

    }
}
}
</script>
<style lang="scss" scoped>

</style>