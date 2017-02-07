<template>
	<div class="wrap">
        <my-header :page-title="pageTitle"></my-header>
        <my-footer></my-footer>
        <!-- 这里是页面内容区 -->
        <div class="content">
            <div class="content-block">Home page</div>
        </div>
    </div>
</template>
<script>
import Header from '../components/header'
import Footer from '../components/footer'
export default{
	data(){
		return{
			pageTitle:'首页'
		}
	},
	methods:{
		
	},
	components:{
		'myHeader':Header,
		'myFooter':Footer
	}
}
</script>