<template>
  <div class="app-container documentation-container">
    <a class="document-btn" target='_blank' href="#">文档</a>
    <dropdown-menu style="float:left;margin-left:50px;" title='教程' :items='articleList'></dropdown-menu>
  </div>
</template>
<script>
import DropdownMenu from '@/components/Share/dropdownMenu'

export default {
  name: 'documentation',
  components: { DropdownMenu },
  data() {
    return {
      articleList: [

      ]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.documentation-container {
  margin: 50px;
  .document-btn {
    float: left;
    margin-left: 50px;
    vertical-align: middle;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    width: 200px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
