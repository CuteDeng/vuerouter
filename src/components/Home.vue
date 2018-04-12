<template>
	<div>
		<p>this is Home</p>
		<ul>
			<li><router-link to="/login">登录</router-link></li>
			<li><router-link to="/reg">注册</router-link></li>
		</ul>
		<router-view></router-view>	
	</div>
</template>