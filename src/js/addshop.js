require(['require.config'],()=>{
    require(['template','header'],(template)=>{
        class Addshop{
            constructor(){
               this.init();
              
            }
           init(){
               let cart=localStorage.getItem("cart");
               console.log(cart);
               cart=JSON.parse(cart);
               
               if(cart){
                //渲染列表
                
                this.render(cart);

            }else{
                //提示购物车为空
                alert('购物车为空')
            }
           } 
           render(cart){
            $("#list-container").html(template("cart-template",{cart}));
            

           }
          //全选
          Allcheck(){
              let _this=this;
              let allcheck= $("#allcheck");
              let input1=$(".input1");
              console.log(input1);
              allcheck.on("change",()=>{
              if(allcheck.prop("checked")){
                input1.prop("checked",ture)
              }
              })
          }
        }
    new Addshop();
    })
})
