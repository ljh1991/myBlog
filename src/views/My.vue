<template>
	<div class="wrap">
        <my-header :page-title="pageTitle"></my-header>
        <my-footer></my-footer>
        <!-- 这里是页面内容区 -->
        <div class="content">
            <div class="content-block">
			   <p><router-link to="/SignUp" class="button button-big button-fill button-danger">注册</router-link></p>
			   <p><router-link to="/Login" class="button button-big button-fill">登录</router-link></p>
			</div>
        </div>
    </div>
</template>
<script>
	import Header from '../components/header'
	import Footer from '../components/footer'
	export default{
		data(){
			return{
				pageTitle: '我的'
			}
		},
		components:{
			'myHeader':Header,
			'myFooter':Footer
		}
	}
</script>