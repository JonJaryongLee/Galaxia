<template>
    <div>
        <vs-button @click="active=!active"  vs-color="success"  vs-type="line" vs-icon="menu">menu</vs-button>
        <vs-sidebar parent="body" default-index="1" color="primary" class="sidebarx" spacer v-model="active">
            <div class="header-sidebar" slot="header">
                <vs-avatar size="70px" src="./src/assets/image/sample-avatar.jpg" />
                <h4>
          Jony
          <vs-button vs-color="primary" vs-icon="more_horiz" vs-type="flat"></vs-button>
        </h4>
            </div>
            <vs-sidebar-item index="1" icon="home">
                내 행성
            </vs-sidebar-item>
            <vs-sidebar-item index="2" icon="explore">
                둘러보기
            </vs-sidebar-item>
            <vs-sidebar-item index="3" icon="card_giftcard">
                상점
            </vs-sidebar-item>
            <vs-sidebar-item index="4" icon="nature_people">
                꾸미기
            </vs-sidebar-item>
            <vs-sidebar-item index="5" icon="flag">
                정복하기
            </vs-sidebar-item>
            <vs-sidebar-item index="6" icon="group">
                친구들
            </vs-sidebar-item>
            <vs-divider icon="person" position="left">
                User
            </vs-divider>
            <vs-sidebar-item index="7" icon="account_box">
                프로필 설정
            </vs-sidebar-item>

            <div class="footer-sidebar" slot="footer">
                <vs-button vs-icon="reply" vs-color="danger" vs-type="flat">log out</vs-button>
                <vs-button vs-icon="settings" vs-color="primary" vs-type="border"></vs-button>
            </div>
        </vs-sidebar>
    </div>
</template>

<script type="text/javascript">
	export default {
  data:()=>({
    active:false,
  })
}
</script>

<style scoped lang="stylus">
.header-sidebar
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 100%
  h4
    display flex
    align-items center
    justify-content center
    width 100%
    > button
      margin-left 10px
.footer-sidebar
  display flex
  align-items center
  justify-content space-between
  width 100%
  > button
      border 0px solid rgba(0,0,0,0) !important
      border-left 1px solid rgba(0,0,0,.07) !important
      border-radius 0px !important
</style>
<style scoped>

	
</style>