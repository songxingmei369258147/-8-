define(['jquery'], $ => {
    function footer () {
      this.container = $("#footer-container");
      this.load();
  
    }
  
    // Object.assign(Header.prototype, {
  
    // });
  
    // 对象合并
    $.extend(footer.prototype, {
      // ES6对象增强写法
      load () {
        // header.html加载到container里
        this.container.load('/html/module/footer.html'); // 选择加载文件中的某一部分
        
      }
    })
    return new footer();
  });