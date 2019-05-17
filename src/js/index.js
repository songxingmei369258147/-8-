require(['require.config'], () => {
    require(["url","template",'swiper','header','footer',],(url,template,Swiper) => {
        class index{
            constructor(){
            this.getType();
            this.getList2();
            this.getList3();
            this.getList4();
            this.banner();
            }
        banner(){
        //首页的轮播图
        var mySwiper = new Swiper ('.swiper-container', {
            autoplay:true,
            loop: true, // 循环模式选项
            pagination:{
                el: '.swiper-pagination',
                clickable :true
              },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }

          })        
        }
            getType(){
             //请求ajax数据
           $.get(url.rapBaseUrl+"index/type", data =>{
              if(data.res_code===1){
                  //渲染数据到页面
                  let list1=(data.res_body.list);
                    //  console.log(list1)
                    $("#list1").html(template("list1-template",{list1}))
                    }
                })
            }
            getList2(){
                $.get(url.rapBaseUrl+"list2/type", data =>{
                    console.log(data);
                    if(data.res_code===1){
                       
                        let list2 =data.res_body.list;
                        console.log(list2);
                        $("#list2").html(template("list2-template",{list2}))
                    }
                })
            }
            getList3(){
                $.get(url.rapBaseUrl+"list3/type",data=>{
                    if(data.res_code===1){
                     let list3= data.res_body.list;
                     $("#list3").html(template("list3-template",{list3}))
                    }
                })
            }
           getList4(){
               $.get(url.rapBaseUrl+"list4/type",data=>{
                //    console.log(data);
                   if(data.res_code===1){
                       let list4 = data.res_body.list;
                       console.log(list4);
                       $("#list4").html(template("list4-template",{list4}))
                   }
               })
           }

        }
        new index();
    })
})