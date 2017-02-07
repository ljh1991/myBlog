<template>
	<nav class="bar bar-tab">
        <router-link v-bind:class="['tab-item','external',$route.path=='/' ?'active':'']" to="/Home" active-class="active">
            <span class="icon icon-home"></span>
            <span class="tab-label">首页</span>
        </router-link>
        <router-link class="tab-item external" to="/Article" active-class="active">
            <span class="icon icon-star"></span>
            <span class="tab-label">文章</span>
        </router-link>
        <router-link class="tab-item external" to="/Find" active-class="active">
            <span class="icon icon-search"></span>
            <span class="tab-label">发现</span>
        </router-link>
        <router-link class="tab-item external" to="/My" active-class="active">
            <span class="icon icon-settings"></span>
            <span class="tab-label">我的</span>
        </router-link>
    </nav>
</template>
<script>
	export default{
		
	}
</script>