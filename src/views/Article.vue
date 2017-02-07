<template>
	<div class="wrap">
        <my-header :page-title="pageTitle" :publish="publish"></my-header>
        <my-footer></my-footer>
        <!-- 这里是页面内容区 -->
        <div class="content">
			<div class="card">
			    <div class="card-header">标题</div>
			    <div class="card-content">
			      <div class="card-content-inner">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
			    </div>
			    <div class="card-footer">日期</div>
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
				pageTitle:'文章',
				publish:'发布'
			}
		},
		components:{
			'myHeader':Header,
			'myFooter':Footer
		}
	}
</script>