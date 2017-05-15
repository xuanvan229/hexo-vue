
var widthscreen;
var intension = document.getElementsByClassName("intension");
intension[0].style.display="block";
var categories = document.getElementsByClassName("categories");
var title_categories=document.getElementsByClassName("title-categories");
title_categories[0].className="title-categories active-icon";

var click_categories=(num)=>{
  var i;
    for(i=0;i<intension.length;i++){
      intension[i].style.display="none";
      title_categories[i].className="title-categories simple-icon";
    }
    intension[num].style.display="block";
    title_categories[num].className="title-categories active-icon";
}

window.onscroll = doThisStuffOnScroll;

function doThisStuffOnScroll() {
    var header=document.getElementsByClassName("header");
    var slider_mother=document.getElementsByClassName("slider-mother");
    var body=document.getElementsByClassName("body");
    var footer_banner_item=document.getElementsByClassName("footer_banner_item");
    var item_center=document.getElementsByClassName("item_center");
    var sliderbutton =()=>{
      if(document.body.clientWidth<768){
        footer_banner_item[0].style.marginLeft="0px";
        footer_banner_item[1].style.marginLeft="0px";
        footer_banner_item[2].style.marginLeft="0px";
      }
    	if(document.body.clientWidth<1590&&document.body.clientWidth>768){
          footer_banner_item[1].style.marginLeft=document.body.clientWidth*0.62/3+"px";
          footer_banner_item[2].style.marginLeft=document.body.clientWidth*0.62*2/3+"px";
    	}
    	  if(document.body.clientWidth>1590){
    	footer_banner_item[1].style.marginLeft="330px";
    	footer_banner_item[2].style.marginLeft="660px";
    }
    }
    var heightwindow=window.innerHeight;
    var heightheader=header[0].clientHeight;
    var heightslide=slider_mother[0].clientHeight;
    var heightbody=body[0].clientHeight;
    if(heightwindow+window.scrollY>=heightheader+heightslide+heightbody){
      sliderbutton();
    }



}

	var ul_right_white=document.getElementsByClassName("ul_right_white");
	var right_white=document.getElementsByClassName("right_white");
	var scroll_list_son=document.getElementsByClassName("scroll_list_son");

var SetHeightScrollList=()=>{
	var height_Scrolllistson=right_white[0].clientHeight+right_white[1].clientHeight+right_white[2].clientHeight;
	console.log(right_white[0].clientHeight);
	 console.log(right_white[1].clientHeight);
	 console.log(right_white[2].clientHeight);

	scroll_list_son[0].style.height=height_Scrolllistson+"px";
}
setTimeout(SetHeightScrollList,100);

var setHeightWhenNoDeleteLi=()=>{
	var height_Scrolllistson=right_white[1].clientHeight+right_white[2].clientHeight+right_white[3].clientHeight;
          console.log(right_white[0].clientHeight);
           console.log(right_white[1].clientHeight);
           console.log(right_white[2].clientHeight);

          scroll_list_son[0].style.height=height_Scrolllistson+"px";

}

var Push_Scroll_To_Top=()=>{
	var get_Height_first_li=right_white[0].clientHeight;
	ul_right_white[0].style.transition="all 1s";
	ul_right_white[0].style.marginTop=-get_Height_first_li+"px";
	setHeightWhenNoDeleteLi();
	var create_new_li=document.createElement("li");
	var tam_li=right_white[0].innerHTML;
	create_new_li.innerHTML=tam_li;
	create_new_li.className="right_white";
	var delete_and_addli=()=>{
	ul_right_white[0].removeChild(right_white[0]);
	 ul_right_white[0].appendChild(create_new_li);
	ul_right_white[0].style.transition="none";
	ul_right_white[0].style.marginTop="0px";
}
	setTimeout(delete_and_addli,1000);
	setTimeout(SetHeightScrollList,1000);
}


var Push_Scroll_To_Bot=()=>{
	var create_new_li=document.createElement("li");
	var length=right_white.length-1;
        var tam_li=right_white[length].innerHTML;
        create_new_li.innerHTML=tam_li;
        create_new_li.className="right_white";
	ul_right_white[0].removeChild(right_white[length]);
	ul_right_white[0].insertBefore(create_new_li,ul_right_white[0].firstChild);
	SetHeightScrollList();
	var get_Height_first_li=right_white[0].clientHeight;
	 ul_right_white[0].style.transition="none";
	ul_right_white[0].style.marginTop=-get_Height_first_li+"px";
	var Push_to_bot=()=>{
	ul_right_white[0].style.transition="all 1s";
	ul_right_white[0].style.marginTop="0px";
}
	setTimeout(Push_to_bot,50);
	ul_right_white[0].style.transition="none";
	SetHeightScrollList();
}
var check; // tạo biến check để kiểm tra khi nào có sự thay đổi của screen thì sẽ reset lại css
var onlyone=()=>{
  //documnet của 3 thẻ li image slider
  var x=document.getElementsByClassName("myslider");
  //centerbox bao bọc 3 box list
  var centerbox=document.getElementsByClassName("center-box");
  //box list
  var boxlist=document.getElementsByClassName("box-list");
  check=document.body.clientWidth;
  //set margin cho từng slide
  if(document.body.clientWidth<1590){
      x[0].style.marginLeft=document.body.clientWidth+"px";
  }
  else{
    x[0].style.marginLeft="1590px";
  }
}
  // hàm kiểm tra khi thay đổi screen
var checkwidth=()=>{
  if(document.body.clientWidth!=check)
  {
    onlyone();
    sliderbox();
  }
}

onlyone();
  //cho hàm chạy liên tục
setInterval(checkwidth,1);
setInterval(doThisStuffOnScroll,1);
  // hàm ready để khởi tạo các giá trị cho website
var ready=()=>{
      var x=document.getElementsByClassName("myslider");
            // set background cho từng slider
            x[0].style.backgroundImage="url(/image/slider/img1.jpg)";
            x[1].style.backgroundImage="url(/image/slider/img2.jpg)";
            x[2].style.backgroundImage="url(/image/slider/img3.jpg)";
      var slideul=document.getElementById("slider-ul");//slider ul bao bọc cái myslider
      var sliderfather=document.getElementsByClassName("slider-father");//slider father bao học các thành phần
      var controlslider=document.getElementsByClassName("control-slider");//thằng ul bọc mấy thằng con slider-control
      var slidercontrol=document.getElementsByClassName("slider-control");//3 thanh slider-control
      var topborder=document.getElementsByClassName("top-border");//
      var sliderbar=document.getElementById("slider-bar");//thanh control-slider chay khi chạy slide
      var showbar=document.getElementsByClassName("show-bar");//showbar chứa các show-bar-list
      var centerbox=document.getElementsByClassName("center-box");//bao bọc 3 boxlist
      var boxlist=document.getElementsByClassName("box-list");//box-list
      var main_box=document.getElementsByClassName("main-post");
      var blog_post=document.getElementsByClassName("blog-post");
      var catelogry=document.getElementsByClassName("catelogry");
      var body=document.getElementsByClassName("body");
      var footer_banner_item=document.getElementsByClassName("footer_banner_item");
      var footer_box=document.getElementsByClassName("footer_box");
      var footer=document.getElementsByClassName("footer");
      var footer_box_container=document.getElementsByClassName("footer_box_container");
      var ul_right_white=document.getElementsByClassName("ul_right_white");
      var right_white=document.getElementsByClassName("right_white");
            widthscreen=document.body.clientWidth;
      var H=document.body.clientWidth/1590;
      //kiểm tra nếu screen dưới 768px
      if(document.body.clientWidth<768){
        slideul.style.height=H*670+"px"; //set height cho slider-ul
        slideul.style.width=document.body.clientWidth*3+"px";//set width bằng 3 lần
        controlslider[0].style.width=document.body.clientWidth*0.62+"px";//set width bao bọc 3 thanh control-slider
        controlslider[0].style.top=H*670*0.67+"px";//set top theo tỉ lệ 67%
        sliderbar.style.width=document.body.clientWidth*0.62/3+"px";//set width thanh chạy theo tỉ lệ 0.62/3
        showbar[0].style.top=H*0.3*670+"px";//set top của thanh show-bar
        showbar[0].style.width=document.body.clientWidth*0.62+"px";//set width của thanh showbar bằng 62%
        centerbox[0].style.marginTop="10px";//set margin top cho khỏi đè lên cái thanh control-slider
        centerbox[0].style.top=H*0.7*670+"px";//set top cho center-box
        centerbox[0].style.width=document.body.clientWidth*0.62+"px";//set width cho center-box
        if(main_box.className=="main-post"){
          main_box[0].style.maxWidth=document.body.clientWidth*0.62*2/3+"px";
        }
        catelogry[0].style.maxWidth=document.body.clientWidth+"px";
        footer_box_container[0].style.maxWidth=document.body.clientWidth*0.62+"px";
        var i;
        for(i=0;i<x.length;i++){
          x[i].style.width=document.body.clientWidth+"px";//set width cho từng slide
        }
        for(i=0;i<x.length;i++){
          x[i].style.height=H*670+"px";//set height cho từng slide
        }
        for(i=0;i<footer_banner_item.length;i++){
          footer_banner_item[i].style.maxWidth=document.body.clientWidth*0.62+"px";
        }
        for(i=0;i<slidercontrol.length;i++){
          slidercontrol[i].style.width=document.body.clientWidth*0.62/3+"px";//set width cho từng slider control
          topborder[i].style.width=document.body.clientWidth*0.62/3+"px"//set width cho top-border
        }
        for(i=0;i<boxlist.length;i++){
          boxlist[i].style.width=document.body.clientWidth*0.62+"px";//set width cho box list
          boxlist[i].style.height="175px";//set height cho box list
          boxlist[i].style.float="none";//set float
          boxlist[i].style.left="0px";//set left để chống trôi
        }
        for(i=0;i<blog_post.length;i++){
          blog_post[i].style.maxWidth=document.body.clientWidth*0.62+"px";
        }
        for(i=0;i<footer_box.length;i++){
          footer_box[i].style.maxWidth=document.body.clientWidth*0.62+"px";
        }
        boxlist[0].style.marginTop="0px";//set margin cho từng phần tử của box list
        boxlist[1].style.marginTop="175px";
        boxlist[2].style.marginTop="350px";
        footer_banner_item[0].style.marginTop="0px";
        footer_banner_item[1].style.marginTop="84px";
        footer_banner_item[2].style.marginTop="168px";

        sliderfather[0].style.width=document.body.clientWidth+"px";//set width cho slider-father
        sliderfather[0].style.height=((H*670)+525)+"px";//set height cho slider-father bằng slider + 3 thanh box-center
      }
  else if(document.body.clientWidth<1590&&document.body.clientWidth>768){
            slideul.style.heigt=H*670+"px";//set width height cho sliderul
            slideul.style.width=document.body.clientWidth*3+"px";
            controlslider[0].style.width=document.body.clientWidth*0.62+"px";//set width cho thanh controlslider
            controlslider[0].style.top=H*670*0.67+"px";
            sliderbar.style.width=document.body.clientWidth*0.62/3+"px";//set width cho thanh slider-bar
            showbar[0].style.top=H*0.3*670+"px";//set top cho tieu de cua slider
            showbar[0].style.width=document.body.clientWidth*0.62+"px";//set width cho tieu de
            centerbox[0].style.top=H*0.7*670+"px";//set top cho center box
            centerbox[0].style.width=document.body.clientWidth*0.62+"px";//set width cho center box
            body[0].style.maxWidth=document.body.clientWidth*0.62+"px";
            if(main_box.className=="main-post"){
              main_box[0].style.maxWidth=document.body.clientWidth*0.62*2/3+"px";
            }
            footer_box_container[0].style.maxWidth=document.body.clientWidth*0.62+"px";

            var i;
            for(i=0;i<x.length;i++){
              x[i].style.width=document.body.clientWidth+"px";//set width cho slider
            }
            for(i=0;i<x.length;i++){
              x[i].style.height=H*670+"px";//set height cho slider
            }
            for(i=0;i<slidercontrol.length;i++){//set width cho slider control va top-border
              slidercontrol[i].style.width=document.body.clientWidth*0.62/3+"px";
              topborder[i].style.width=document.body.clientWidth*0.62/3+"px"
            }
            for(i=0;i<boxlist.length;i++){//set width cho box list
              boxlist[i].style.width=document.body.clientWidth*0.62/3+"px";
              boxlist[i].style.height=H*0.3*670+"px";
            }
            for(i=0;i<footer_banner_item.length;i++){
              footer_banner_item[i].style.maxWidth=document.body.clientWidth*0.62/3+"px";
            }
            for(i=0;i<blog_post.length;i++){
              blog_post[i].style.maxWidth=document.body.clientWidth*0.62/3+"px";
            }
            footer[0].style.maxWidth=document.body.clientWidth*0.62+"px";
            for(i=0;i<footer_box.length;i++){
              footer_box[i].style.maxWidth=document.body.clientWidth*0.62/3+"px";
            }
            catelogry[0].style.maxWidth=document.body.clientWidth*0.62/3+"px";
            sliderfather[0].style.width=document.body.clientWidth+"px";
            sliderfather[0].style.height=H*670+"px";
            boxlist[0].style.marginTop="0px";//set margin top cho box list
            boxlist[1].style.marginTop="0px";
            boxlist[2].style.marginTop="0px";
            footer_banner_item[0].style.marginTop="0px";
            footer_banner_item[1].style.marginTop="0px";
            footer_banner_item[2].style.marginTop="0px";
  }
  else {
            slideul.style.heigt=H*670+"px";
            slideul.style.width=1590*3+"px";
            controlslider[0].style.width="990px";
            controlslider[0].style.top="450px";
            sliderbar.style.width="330px";
            showbar[0].style.top="200px";
            showbar[0].style.width="990px";
            catelogry[0].style.maxWidth="330px";
            footer[0].style.maxWidth="990px";
            var i;
            for(i=0;i<x.length;i++){
              x[i].style.width="1590px";
              x[i].style.height="670px";

            }
            footer_box_container[0].style.maxWidth="990px";

            if(main_box.className=="main-post"){
              main_box[0].style.maxWidth="660px";
            }
            body[0].style.maxWidth="990px";
            for(i=0;i<slidercontrol.length;i++){
              slidercontrol[i].style.width="330px";
              topborder[i].style.width="330px";
            }
            for(i=0;i<boxlist.length;i++){
              boxlist[i].style.width="330px";
              boxlist[i].style.height="195px";
            }
            for(i=0;i<blog_post.length;i++){
              blog_post[i].style.maxWidth="330px";
            }
            for(i=0;i<footer_banner_item.length;i++){
              footer_banner_item[i].style.maxWidth="330px";
            }
            for(i=0;i<footer_box.length;i++){
              footer_box[i].style.maxWidth="330px";
            }
            sliderfather[0].style.width="1590px";
            sliderfather[0].style.height="670px";
            boxlist[0].style.marginTop="0px";
            boxlist[1].style.marginTop="0px";
            boxlist[2].style.marginTop="0px";
            centerbox[0].style.top="475px";
            centerbox[0].style.width="990px";
            footer_banner_item[0].style.marginTop="0px";
            footer_banner_item[1].style.marginTop="0px";
            footer_banner_item[2].style.marginTop="0px";
          }
          var slideul=document.getElementById("slider-ul");

          slideul.style.heigt=H*670+"px";



}

setInterval(ready,1);

var index=1;
var slide=(m)=>{
  var x=document.getElementsByClassName("myslider");//slider
  var sliderbar=document.getElementById("slider-bar");//bao bọc 3 tiêu đề của slider
  var showbarlist=document.getElementsByClassName("show-bar-list");// 3 tiêu để của từng slider
  if(widthscreen<1590){//khi screen <1590px
    if(index==4){
      index=1; // nếu index tăng lên 4 thì cho về giá trị ban đầu
    }
    if(m==1){//load slider khi nhấn vào control-slider
      console.log("m="+m)
      x[1].style.marginLeft="0px"//load slider 2
      x[0].style.marginLeft="0px"//ban đầu slide đầu tiên margin bằng  document.body.clientWidth nên kéo về 0
      sliderbar.style.marginLeft=document.body.clientWidth*0.62/3+"px";//margin thanh slider-bar
      showbarlist[0].style.display="none";
      showbarlist[1].style.display="block";//set ẩn hiện các tiêu đề cho slider
      showbarlist[2].style.display="none";

    }
    else if (m==2) {
      console.log("m="+m)
      x[0].style.marginLeft="0px"
      x[1].style.marginLeft=-widthscreen+"px"//load slider 3
      sliderbar.style.marginLeft=document.body.clientWidth*0.62*2/3+"px";
      showbarlist[0].style.display="none";
      showbarlist[1].style.display="none";
      showbarlist[2].style.display="block";//set ẩn hiện các tiêu đề cho slider


    }
    else if (m==3) {
      console.log("m="+m)
      x[0].style.marginLeft=widthscreen+"px";//đưa về ban đầu, load slider 1
      x[1].style.marginLeft="0";
      sliderbar.style.marginLeft="0px";
      showbarlist[0].style.display="block";//set ẩn hiện các tiêu đề cho slider
      showbarlist[1].style.display="none";
      showbarlist[2].style.display="none";
    }
    else{ // slider tự động load khi không bị tác động
    if(index==1){
      x[0].style.marginLeft="0px"//load slider 2
      sliderbar.style.marginLeft=document.body.clientWidth*0.62/3+"px";
      showbarlist[0].style.display="none";
      showbarlist[1].style.display="block";//set ẩn hiện các tiêu đề cho slider
      showbarlist[2].style.display="none";
    }
    else if(index==2){
      x[1].style.marginLeft=-widthscreen+"px" //load slider 3
      sliderbar.style.marginLeft=document.body.clientWidth*0.62*2/3+"px";
      showbarlist[0].style.display="none";
      showbarlist[1].style.display="none";
      showbarlist[2].style.display="block";//set ẩn hiện các tiêu đề cho slider
    }
    else if(index==3){
      x[0].style.marginLeft=widthscreen+"px";//load slider 1
      x[1].style.marginLeft="0";
      sliderbar.style.marginLeft="0px";
      showbarlist[0].style.display="block";//set ẩn hiện các tiêu đề cho slider
      showbarlist[1].style.display="none";
      showbarlist[2].style.display="none";

    }
  }
    index=index+1;
  }
  else {
    if(index==4){
      index=1;
    }
    if(m==1){//load slider khi nhấn vào control-slider
      x[0].style.marginLeft="0px";//load slider 2
      x[1].style.marginLeft="0px"
      sliderbar.style.marginLeft="330px";
      showbarlist[0].style.display="none";
      showbarlist[1].style.display="block";//set ẩn hiện các tiêu đề cho slider
      showbarlist[2].style.display="none";
    }
    else if (m==2) {
      x[0].style.marginLeft="0px"//load slider 3
      x[1].style.marginLeft="-1590px"
      sliderbar.style.marginLeft="660px";
      showbarlist[0].style.display="none";
      showbarlist[1].style.display="none";
      showbarlist[2].style.display="block";//set ẩn hiện các tiêu đề cho slider

    }
    else if (m==3) {
      x[0].style.marginLeft="1590px";//load slider 1
      x[1].style.marginLeft="0";
      sliderbar.style.marginLeft="0px";
      showbarlist[0].style.display="block";//set ẩn hiện các tiêu đề cho slider
      showbarlist[1].style.display="none";
      showbarlist[2].style.display="none";
    }
    else {// slider tự động load khi không bị tác động
    if(index==1){
      x[0].style.marginLeft="0px";//load slider 2
      sliderbar.style.marginLeft="330px";
      showbarlist[0].style.display="none";
      showbarlist[1].style.display="block";//set ẩn hiện các tiêu đề cho slider
      showbarlist[2].style.display="none";

    }
    else if(index==2){
      x[1].style.marginLeft="-1590px"//load slider 3
      sliderbar.style.marginLeft="660px";
      showbarlist[0].style.display="none";
      showbarlist[1].style.display="none";
      showbarlist[2].style.display="block";//set ẩn hiện các tiêu đề cho slider
    }
    else if(index==3){
      x[0].style.marginLeft="1590px";//load slider 1
      x[1].style.marginLeft="0";
      sliderbar.style.marginLeft="0px";
      showbarlist[0].style.display="block";//set ẩn hiện các tiêu đề cho slider
      showbarlist[1].style.display="none";
      showbarlist[2].style.display="none";

    }
  }
    index=index+1;
  }
}
setTimeout(slide,1000);

setInterval(slide,3000);


function sliderbox(){
  var box=document.getElementsByClassName("box-list");
  var centerbox=document.getElementsByClassName("center-box");//bao bọc 3 boxlist
  if(document.body.clientWidth<768){
    box[0].style.marginLeft="0px";
    box[0].style.transition="all 1s";
    box[1].style.marginLeft="0px";
    box[1].style.transition="all 1.5s";
    box[2].style.marginLeft="0px"
    box[2].style.transition="all 2s";
  }
  else if(document.body.clientWidth>1590){
    console.log("xxx");
    centerbox[0].style.top="475px";
    box[1].style.left="330px";
    box[1].style.transition="all 1s";
    box[2].style.left="660px";
    box[2].style.transition="all 2s";
  }
  else if(document.body.clientWidth<1590||document.body.clientWidth>768){
  box[1].style.left=document.body.clientWidth*0.62/3+"px";
  box[1].style.transition="all 1s";
  box[2].style.left=document.body.clientWidth*0.62*2/3+"px";
  box[2].style.transition="all 2s";
}


}
setTimeout(sliderbox,500);




// function ẩn hiện menu mobile
var push=()=>{
  var control=document.getElementById("control-menu");
  var main=document.getElementsByClassName("main");
  var barleft=document.getElementsByClassName("bar-left");
  if(control.className=="control-bar"){
    barleft[0].style.left="0px";
    barleft[0].style.transition="all 1s";
    main[0].style.left="200px";
    main[0].style.transition="all 1s";
    control.className="control-bar true";
  }
  else{
    control.className="control-bar";
    barleft[0].style.left="-200px";
    barleft[0].style.transition="all 1s";
    main[0].style.left="0px";
    main[0].style.transition="all 1s";
  }
}

// function ẩn hiện menu con
var loadmenu=(n)=>{
  var sonul=document.getElementsByClassName("mobile-son-ul");
  var mainnav=document.getElementsByClassName("mobile-main-nav");

  mainnav[0].style.left="200px";
  mainnav[0].style.transition="all 1s";
  sonul[n].style.display="block";

}

// function trờ lại menu cha
var back=(n)=>{
  var sonul=document.getElementsByClassName("mobile-son-ul");
  var mainnav=document.getElementsByClassName("mobile-main-nav");
  var displaynone=(n)=>{
    sonul[n].style.display="none";
  }
  mainnav[0].style.left="0px";
  mainnav[0].style.transition="all 1s";
  setTimeout(function() {displaynone(n)},1000);
}

// FUNCTION vao menu con cua con
var pushul=(n)=>{
  var sonsonul=document.getElementsByClassName("mobile-last-menu");
  var mainnav=document.getElementsByClassName("mobile-main-nav");

  mainnav[0].style.left="400px";
  mainnav[0].style.transition="all 1s";
  sonsonul[n].style.display="block";

}

var backul=(n)=>{
  var sonsonul=document.getElementsByClassName("mobile-last-menu");
  var mainnav=document.getElementsByClassName("mobile-main-nav");
  var displaynone=(n)=>{
    sonsonul[n].style.display="none";
  }
  mainnav[0].style.left="200px";
  mainnav[0].style.transition="all 1s";
  setTimeout(function() {displaynone(n)},1000);

}
