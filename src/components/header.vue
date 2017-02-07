<template>
	<header class="bar bar-nav">
        <span class="icon icon-left pull-left open-panel" @click="goBack"></span>
        <router-link to="/Publish" v-text="publish" class="pull-right" style="line-height:45px"></router-link>
        <h1 class="title" v-text="pageTitle"></h1>
    </header>
</template>
<script>
	export default{
		props:{
			pageTitle:{type:String,default(){return'标题'}},
			publish:{type:String,default(){return''}}
		},
		methods:{
			goBack(){
				window.history.back();
			}
		}
	}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>