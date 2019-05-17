require(["require.config"] ,()=>{
  require(["url","jquery"],(url,$)=>{
    class Register{
        constructor(){
         this.usernameInput= $("#username");
         this.passwordInput= $("#password");
         this.btn=$("#btn");
         this.bindEnents();
        //  console.log(url)
        }
        bindEnents(){
        this.btn.on("click",()=>{
            //获取input的值,提交后台
            let username= this.usernameInput.val(),
                password= this.passwordInput.val();
            $.ajax({
                url:url.phpBaseUrl+"user/register.php",
                type:"post",
                dataType:"json",
                data:{username,password}, //解构赋值
                success:(data)=>{ 
                    //成功回调
                    if(data.res_code===1){
                        alert(data.res_message+",即将跳转登录页");
                        location.href="login.html";

                    }

                    
                }
            })
        })

        }
    }
    new Register();
  })
})