var posts=["2024/11/10/Arp欺骗/","2024/11/10/Off-By-One/","2024/11/10/ORW沙箱逃逸/","2024/11/10/Use-after-free/","2024/11/10/NOP Sled空中操作雪橇（代码滑梯）/","2024/11/10/栈迁移/","2024/11/10/不同Shellcode/","2024/11/10/静态编译/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };