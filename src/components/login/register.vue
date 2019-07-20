<template>
	<div id="register">
		<header>
			<div class="back" @click="back()">
				<span>
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-Fill"></use>
					</svg>
				</span>
				手机注册
			</div>
		</header>

		<div class="registerBox">
			<ul>
				<li>
					<span class="address">中国大陆</span>
					<svg class="icon right" aria-hidden="true">
						<use xlink:href="#icon-xiangyou"></use>
					</svg>
				</li>
				<li class="phoneBor">
					<span class="phoneNum">+86</span>
					<input class="phoneInp" type="number" placeholder="请输入手机号码" v-model="number" @input="checkPhone(number)" @click=(getChange())>
				</li>
			</ul>
      <p class="getPoint"></p>
			<div class="message" id="numbtn" style="background: rgba(37, 129, 250, 0.2);" @click="getNum">
				获取手机验证码
			</div>
			<p>我同意<span>用户服务协议</span></p>
		</div>
	</div>
</template>

<script>
	export default{
    data(){
      return{
        number: ''
      }
    },
		methods:{
			back(){
				this.$router.go('-1')
			},
      checkPhone(num){
        if(num.length == ''){
          numbtn.style.background = 'rgba(37, 129, 250, 0.2)'
        }else{
          // var reg = /^[0-9a-zA-Z]{4,11}$/ || /^\w+@\w+(.\w+)+$/ || /^1\d{11}/;
          let reg = /^[0-9]{1,11}$/;
          if(!reg.test(num)){
            numbtn.style.background = 'rgba(37, 129, 250, 0.2)'
          }else{
            numbtn.style.background = '#2581FA'
          }
        }
      },
      getNum(){
        let reg = /^1\d{10}$/;
        if(!reg.test(this.number)){
          $('.getPoint').html('请输入有效的手机号码')
          $('.phoneInp').css({"color":"#ED424B","opacity":"1"});
          $('.phoneNum').css('color','#ED424B')
          $('.phoneBor').css('borderColor','#ED424B')
        }else{
          $('.getPoint').html('')
          $('.phoneInp').css({"color":"#2c3e50","opacity":"0.6"});
          $('.phoneNum').css('color','#2c3e50')
          $('.phoneBor').css('borderColor','#fff')
        }
      },
      getChange(){
        $('.getPoint').html('')
        $('.phoneInp').css({"color":"#2c3e50","opacity":"0.6"});
        $('.phoneNum').css('color','#2c3e50')
        $('.phoneBor').css('borderColor','#fff')
      }
		}
	}
</script>

<style>
	#register{
		padding-bottom: 26.15625rem;
		background: #fff;
	}
	ul li{
		list-style: none;
	}
	header{
		height: 2.75rem;
		border-bottom: 1px solid #EEE;
	}
	.back{
		height: 2.75rem;
		display: inline-block;
		padding-right: 0.2rem;
		cursor: pointer;
	}
	.back span{
		width: 2.75rem;
		height: 2.75rem;
		display: inline-block;
		vertical-align: middle;
		text-align: center;
		line-height: 2.75rem;
	}
	.registerBox{
		padding: 4.125rem 1.65625rem 0;
	}
	.registerBox ul li{
		min-height: 2.75rem;
		background: #F6F7F9;
		margin-bottom: 0.8125rem;
		border-radius: 4px;
		overflow: hidden;
		padding-left: 1.1rem;
		position: relative;
	}
	.address{
		width: 100%;
		line-height: 2.75rem;
	}
	.right{
		width: 0.875rem;
		position: absolute;
		right: 0.625rem;
		top: 0.75rem;
		color: #000;
	}
  .phoneBor{
    border: 1px solid;
    border-color: #fff;
  }
	.phoneNum{
		width: 3.875rem;
		display: inline-block;
		vertical-align: middle;
		line-height: 2.75rem;
	}
	.phoneInp{
		width: 75%;
		padding: 0.6875rem 0 0.6875rem 1.25rem;
		line-height: 1.375rem;
		background: none;
		outline: 0;
    border: 0;
		font-size: 1rem;
		opacity: 0.6;
		float: right;
	}
  .registerBox .getPoint{
    text-align: left;
    color: #ED424B;
  }
	.message{
		width: 100%;
		margin: 1.65625rem 0 0.6875rem;
		line-height: 2.75rem;
		border-radius: 100px;
		color: white;
		text-align: center;
	}
	.registerBox p{
		text-align: center;
	}
	.registerBox p span{
		color: #2581FA;
		cursor: pointer;
	}
</style>
