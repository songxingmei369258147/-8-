require(['require.config'],()=>{
    require(['url','jquery','cookie'],(url,$)=>{
     class Login{
         constructor(){
            this.usernameInput= $("#username");
            this.passwordInput= $("#password");
            this.btn=$("#btn");
            this.days=$("#days");
            // console.log(this.days);
            this.bindEnents();
         }
         bindEnents(){
            this.btn.on("click",()=>{
                //获取input的值,提交后台
                let username= this.usernameInput.val(),
                    password= this.passwordInput.val();
                $.ajax({
                    url:url.phpBaseUrl+"user/login.php",
                    type:"post",
                    dataType:"json",
                    data:{username,password}, //解构赋值
                    success:(data)=>{ 
                        //成功回调
                        if(data.res_code===1){
                         this.loginsucc(username);
    
                        }   
                    }
                })
            })
    
            }
            loginsucc(username){
             //存cookie
             let expries = this.days.prop('checked')?{expries:10}:{};
                 expries=Object.assign({path:"/"},expries);
            $.cookie('username',username,expries);
             console.log(this.days);
            alert('登录成功，即将跳转首页');
            location.href="/";
            } 
     }
     new Login();
    })
})