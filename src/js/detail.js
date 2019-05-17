require(['require.config'],()=>{
    require(['url','template','header','footer',"zoom","fly"],(url,template,header)=>{
        class Detail{
            constructor(){
            console.log(111);//检查页面是否乐意运行
            this.init();
            console.log($);
            this.addshop();
            }
            init(){
                //从url取到id,携带id请求详情数据，渲染详情页
                 console.log(location);
                 let id=Number(location.search.slice(4));
                    this.id=id; 
                 $.get(url.rapBaseUrl+"detail/get",{id}, res=>{
                   if(res.res_code===1){
                       let{data}=res.res_body;
                       data = {...data,id};
                       //把当前数据存下来
                       this.data=data;
                       this.render(data);
                   }
                   
                 })
            }
            render(data){
                // console.log(data);
                //渲染页面。
                $("#detail").html(template("detail-template",{data}));
                this.zoom();
                
            }
            addshop(){
              //事件委托
              $("#detail").on('click','#add-cart', e =>{
              //完成抛物线加购物车动画
              $(`<img src='${this.data.image[0]}' style='width:30px;height:30px;'>`).fly({
               start:{
                 left:e.clientX,
                 top:e.clientY
               },
               end:{
                left:$("#gwc").offset().left,
                left:$("#gwc").offset().top
               },
               onEnd:function(){
                 //抛物线销毁
                 $(this).destroy();
                 //调header里面calcCartNum方法
                 header.calcCartNum();
               }
              });


               let cart=localStorage.getItem('cart');
               console.log(cart);
              
               if(cart){
                cart=JSON.parse(cart);
                 //有数据。判断有没有当前商品，
                // console.log(cart);
                let index=-1;
               if( cart.some((shop,i)=>{
                 //只要找到满足条件的就不会继续了。所以inex的值就等于满足条件的索引

                 index=i;
                 return shop.id===this.data.id;
                })){
                  //有这条数据，num++；
                 cart[index].num++;
                }else{
                  cart.push({...this.data,num:1})
                }
               }else{
                 //购物车为空
                 //第一次加入购物车的时候，只买一个
                 cart=[{...this.data,num:1}];
               }
               //重新存
               localStorage.setItem('cart',JSON.stringify(cart));
              })
             
            }
            //放大镜功能
            zoom(){
              $(".Bjimg").elevateZoom({
                  gallery:"gal1",
                  cursor:"pointer",
                  galleryActiveClass:"active",
                  borderColor:"#888"
              });
            }
            
        }
        new Detail();
    })
})