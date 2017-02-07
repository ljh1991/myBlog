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
			    </ul>
			    <p class="info">{{info}}</p>
			</div>
			<div class="content-block">
			      <div><a href="javascript:void(0)" class="button button-big button-fill button-success" @click="login">登录</a></div>
			</div>
        </div>
    </div>
</template>
<script>
	import Header from '../components/header'
	export default{
		data(){
			return{
				pageTitle:'登录',
				info:'',
				user:{
					userName:'',
					password:'',
				}
			}
		},
		methods:{
			login(){
				let _this=this
				this.$http.post('/api/login', {name: this.user.userName, pwd: this.user.password})
				.then((res)=> {
					console.log(res)
					if(res.body.state == 1){
			          this.info = '登录成功, 即将跳转...'
			          setTimeout(()=>_this.$router.push('/My'), 2000)
			        }else{
			        	this.info = res.body.msg
			        }
		        })
			}
		},
		components:{
			'myHeader':Header,
		}
	}
</script>