<template>
	<div class="wrap">
        <my-header :page-title="pageTitle"></my-header>
        <!-- 这里是页面内容区 -->
        <div class="content">
			<div class="list-block">
			    <ul>
			      <!-- Text inputs -->
			      <li>
			        <div class="item-content">
			          <div class="item-media"><i class="icon icon-form-name"></i></div>
			          <div class="item-inner">
			            <div class="item-title label">姓名</div>
			            <div class="item-input">
			              <input type="text" placeholder="Your name">
			            </div>
			          </div>
			        </div>
			      </li>
			      <li class="align-top">
			        <div class="item-content">
			          <div class="item-media"><i class="icon icon-form-comment"></i></div>
			          <div class="item-inner">
			            <div class="item-title label">文本域</div>
			            <div class="item-input">
			              <textarea></textarea>
			            </div>
			          </div>
			        </div>
			      </li>
			    </ul>
        	</div>
    	</div>
</template>
<script>
	import Header from '../components/header'
	export default{
		data(){
			return{
				pageTitle:'发布',
			}
		},
		components:{
			'myHeader':Header,
		}
	}
</script>