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
			              <input type="text" placeholder="Your name" v-model="user.userName">
			            </div>
			          </div>
			        </div>
			      </li>
			      <li>
			        <div class="item-content">
			          <div class="item-media"><i class="icon icon-form-password"></i></div>
			          <div class="item-inner">
			            <div class="item-title label">密码</div>
			            <div class="item-input">
			              <input type="password" placeholder="Password" v-model="user.password">
			            </div>
			          </div>
			        </div>
			      </li>
			      <li>
			        <div class="item-content">
			          <div class="item-media"><i class="icon icon-form-password"></i></div>
			          <div class="item-inner">
			            <div class="item-title label">重复密码</div>
			            <div class="item-input">
			              <input type="password" placeholder="Password" v-model="user.psdRepeat">
			            </div>
			          </div>
			        </div>
			      </li>     
			    </ul>
			    <p class="info">{{info}}</p>
			</div>
			<div class="content-block">
			    <div class="row">
			      <div class="col-50"><a href="javascript:void(0)" class="button button-big button-fill button-danger">取消</a></div>
			      <div class="col-50"><a href="javascript:void(0)" class="button button-big button-fill button-success" @click="signUp">提交</a></div>
			    </div>
			</div>
        </div>
    </div>
</template>
<script>
	import Header from '../components/header'
	export default{
		data(){
			return{
				info:'',
				pageTitle:'注册',
				user:{
					userName:'',
					password:'',
					psdRepeat:''
				}
			}
		},
		methods:{
			signUp(){
				let _this=this
				this.$http.post('/api/setup', {name: this.user.userName, pwd: this.user.password})
				.then(()=> {
		          this.info = '创建成功, 即将跳转到登陆...'
		          setTimeout(()=>_this.$router.push('/Login'), 3000)
		        }, ()=>this.info = '创建失败')
			}
		},
		components:{
			'myHeader':Header,
		}
	}
</script>