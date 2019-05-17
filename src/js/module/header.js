

define(['url','jquery','cookie'], (url,$) => {
  function Header () {
    this.container = $("#header-container");
    this.load().then(()=>{
      this.search();
      this.islogin();
      this.calcCartNum();
    });

  }

  // Object.assign(Header.prototype, {

  // });

  // 对象合并
  $.extend(Header.prototype, {
    // ES6对象增强写法
    load () {
    return  new Promise(resolve=>{
            this.container.load('/html/module/header.html',()=>{
            resolve();
  
        }); // 选择加载文件中的某一部分
      })
      // header.html加载到container里
      //要写绝对路径，因为今后有很多地方都要这个   后面还可以加选择器，表示只是某一部分加载
     

      
    },
   search(){
   //搜索框功能
   //首先要找到这个input框
    $("#serrch").on('keyup',function(){
      let keyword=$(this).val();
      //请求jsonp接口；
      //带上关键字
      $.getJSONP("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=?&wd="+leyword,)
      console.log(data);
    })
   },

  islogin(){
    this.atlogin=$("#atlogin");
    this.welogin=$("#welogin");
    console.log(this.atlogin, this.welogin);
    let username= $.cookie("username");
       console.log(username);
    if(username){
      this.atlogin.hide();
      this.welogin.show();
    }

  },
  calcCartNum(){
    let cart=localStorage.getItem('cart');
    let num=0;
    if(cart){
     //计算总量
     cart=JSON.parse(cart);
     //num放的是总数量
     num = cart.reduce((n,shop)=>{
      n+=shop.num;
      return n;
     },0);
    }
    $("#gwc").html(num);
  }

  })
  return new Header();
});