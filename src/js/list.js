

//列表页的业务逻辑
require(['require.config'],()=>{
    require(['url','template','header','footer'],(url,template)=>{
        class list{
            constructor(){
                this.getData();
               
            }
            //请求列表页的数据
            getData(){
                //发送ajax请求数据
            
                $.ajax({
                    url:url.rapBaseUrl+"list/get",
                    type:"get",
                    dataType:"json",
                    success:data=>{
                        if(data.res_code===1);
                       let list=(data.res_body.list);
                    //    console.log(shopdata)
                        $("#list").html(template("list-template",{list}))
                    }
                    
                })
                
           
            }
        }
        new list();
    })
})