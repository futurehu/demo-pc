<template>
  <div class="home">
    <el-row>
      <el-button>默认按钮</el-button>
    </el-row>
    	<div class="content w">
				<div class="login-area">
					<h3>登 录</h3>
					<div class="form-group">
						<div class="form-inline">
							<div class="input-wrap">
								<i class="icon iconfont icon-zhucedengluyonghuming"></i>
								<input class="input-item" v-model="params.username" type="text" placeholder="请输入用户名">
								<i v-show="params.username" @click="cancle('username')" class="icon-cancle el-icon-circle-close-outline"></i>
							</div>
						</div>
						<div class="form-inline">
							<div class="input-wrap">
								<i class="icon iconfont icon-Password"></i>
								<input class="input-item" @keyup.enter="submit()" v-model="params.password" type="password" placeholder="请输入密码">
								<i v-show="params.password" @click="cancle('password')" class="icon-cancle el-icon-circle-close-outline"></i>
							</div>
						</div>
						<div class="form-inline forget">
							<router-link to="/forgetPassword">忘记密码</router-link>
						</div>
						<div class="form-inline btn">
							<button class="submit-btn" @click="submit()" >{{btnText}}</button>
						</div>
						<div class="form-inline err-tip">
							<p v-show="errMsg"><i class="iconfont icon-cuowu1"></i> {{errMsg}}</p>
						</div>
					</div>
				</div>
			</div>
    <div class="test"></div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  
  components: {},
  	data() {
			return {
				params: {
					username: '',
					password: ''
				},
				errMsg: '',
				btnText: '登录',
				// testData: require('../../assets/zybanner3.jpg')
			}
		},
};
</script>
<style lang="less" scoped>
@import "../common/css/variable";
.test {
  width: 100px;
  height: 100px;
  background-color: @theme-color-light;
}
	.content {
				position: relative;
				.login-area {
					margin-left: auto;
					margin-right: 0;
					padding: 20px;
					box-sizing: border-box;
					width: 410px;
					background: #fff;
					h3 {
						text-align: center;
						font-size: 20px;
						margin-bottom: 30px;
					}
					.form-group {
						.form-inline {
							margin-bottom: 20px;
							.input-wrap {
								position: relative;
								.input-item {
									width: 100%;
									padding: 0 30px;
									height: 40px;
									line-height: 40px;
									box-sizing: border-box;
									outline: 0;
									border: 1px solid #dcdfe6;
									transition: border-color .2s;
									border-radius: 4px;
									&:focus {
										border-color: @theme-color;
									}
								}
								.icon {
									font-size: 20px;
									position: absolute;
									top: 50%;
									left: 6px;
									transform: translateY(-50%);
									color: #c3c6cd
								}
								.icon-cancle {
									position: absolute;
									top: 50%;
									right: 10px;
									font-size: 16px;
									transform: translateY(-50%);
									cursor: pointer;
								}
							}
							&.btn {
								margin-bottom: 6px;
							}
							.submit-btn {
								outline: none;
								border: 0;
								width: 100%;
								background: @theme-color;
								color: #fff;
								font-size: 18px;
								padding: 10px;
								cursor: pointer;
								border-radius: 4px;
								&:active {
									background: @theme-color-dark;
								}
							}
							&.err-tip {
								height: 22px;
								margin-bottom: 0;
								p {
									color: red;
								}
							}
							&.forget {
								text-align: right;
								a {
									color: #c3c3c3;
									&:hover {
										color: #ababab;
									}
								}
							}
						}
					}
				}
			}
</style>
