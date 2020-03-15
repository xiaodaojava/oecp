(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b6ae59a"],{2017:function(e,n,t){"use strict";var o=t("b12d"),i=t.n(o);i.a},"2d839":function(e,n,t){},"5ce2":function(e,n,t){"use strict";var o=t("2d839"),i=t.n(o);i.a},"9ed6":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[t("div",{staticClass:"title-container"},[t("h3",{staticClass:"title"},[e._v("oecp-账号登录")])]),e._v(" "),t("el-form-item",{attrs:{prop:"username"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),t("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(n){e.$set(e.loginForm,"username",n)},expression:"loginForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),t("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handleLogin(n)}},model:{value:e.loginForm.password,callback:function(n){e.$set(e.loginForm,"password",n)},expression:"loginForm.password"}}),e._v(" "),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),t("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(n){return n.preventDefault(),e.handleLogin(n)}}},[e._v("登录")]),e._v(" "),t("div",{staticClass:"tips"},[t("span",{staticStyle:{"margin-right":"20px"}},[e._v("username: admin")]),e._v(" "),t("span",[e._v(" password: any")])]),e._v(" "),t("el-button",{staticClass:"thirdparty-button",attrs:{type:"primary"},on:{click:function(n){e.showDialog=!0}}},[e._v("\n        第三方登录\n      ")])],1),e._v(" "),t("el-dialog",{attrs:{title:"第三方登录",visible:e.showDialog},on:{"update:visible":function(n){e.showDialog=n}}},[t("social-sign")],1)],1)},i=[],s=t("61f7");t("b775");var a=t("bc3a"),r=t.n(a),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"social-signup-container"},[t("div",{staticClass:"sign-btn",on:{click:function(n){return e.alipayHandleClick("alipay")}}},[t("span",{staticClass:"ali-svg-container"},[t("svg-icon",{staticClass:"icon",attrs:{"icon-class":"ali"}})],1),e._v("\n        支付宝登录\n  ")])])},l=[];function d(e,n,t,o){var i=void 0!==window.screenLeft?window.screenLeft:screen.left,s=void 0!==window.screenTop?window.screenTop:screen.top,a=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,r=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,c=a/2-t/2+i,l=r/2-o/2+s,d=window.open(e,n,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width="+t+", height="+o+", top="+l+", left="+c);window.focus&&d.focus()}var u={name:"SocialSignin",methods:{alipayHandleClick:function(e){this.$store.commit("SET_AUTH_TYPE",e);var n="2021001141609481",t=encodeURIComponent("https://oecp.lixiang.red/auth-redirect"),o="https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id="+n+"&scope= auth_user&redirect_uri="+t;d(o,e,750,600)},tencentHandleClick:function(e){alert("ok")}}},p=u,m=(t("5ce2"),t("2877")),h=Object(m["a"])(p,c,l,!1,null,"76fbbb26",null),w=h.exports,g={name:"Login",components:{SocialSign:w},data:function(){var e=function(e,n,t){Object(s["b"])(n)?t():t(new Error("Please enter the correct user name"))},n=function(e,n,t){n.length<6?t(new Error("The password can not be less than 6 digits")):t()};return{loginForm:{username:"admin",password:"111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:n}]},loading:!1,passwordType:"password",redirect:void 0,showDialog:!1}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(n){if(!n)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/"}),e.loading=!1})).catch((function(){e.loading=!1}))}))},testApi:function(){var e=this;r.a.post("/oecp/health.do",{}).then((function(n){e.$message.success("接口调用成功")})).catch((function(){e.$message.errer("------qaq")}))}}},f=g,v=(t("2017"),t("ea65"),Object(m["a"])(f,o,i,!1,null,"cba646b6",null));n["default"]=v.exports},b12d:function(e,n,t){},ea65:function(e,n,t){"use strict";var o=t("f217"),i=t.n(o);i.a},f217:function(e,n,t){}}]);