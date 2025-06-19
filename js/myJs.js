const textConfig = {
  text1: "He luu em!",
  text2: "Anh có điều này muốn nói với em.",
  text3: "❤️❤️❤️❤️Anh yêu em❤️❤️❤️❤️",
  text4: "Em có thể đồng ý trở thành người yêu anh được không?🥰",
  text5: "Anh mơ àà???",
  text6: "Em yêu anh quá trời <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button position
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    // if (screen.width <= 600) {
    //   var x = Math.random() * 300;
    //   var y = Math.random() * 500;
    // } else {
    //   var x = Math.random() * 500;
    //   var y = Math.random() * 500;
    // }
    var x = Math.random() * (window.innerWidth - 100); // trừ kích thước nút
    var y = Math.random() * (window.innerHeight - 100);

    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });


  // // change to heart page
  // document.getElementById("yes").addEventListener("click", function () {
  // //window.location.href = "Heart.html";
  // // Swal.fire({
  // // title: "Yêu quá đi mất 💖",
  // // text: "Đi đến nơi ngọt ngào hơn nha~",
  // // icon: "success",
  // // showConfirmButton: false,
  // // timer: 2000
  // // }).then(() => {
  // // window.location.href = "Heart.html";
  // // });
  // // Hiện thần Cupid
  // const cupid = document.getElementById("cupid");
  // const arrow = document.getElementById("arrow");
  
  // cupid.style.opacity = "1";
  // // cupid.style.left = "50px";
  // // cupid.style.bottom = "50px";

  // // Đợi một chút rồi bắn tên
  // setTimeout(() => {
  //   arrow.style.opacity = "1";
  //   arrow.style.left = "100vw"; // mũi tên bay ngang qua màn hình
  // }, 800);

  // // Chuyển trang sau khi tên bay xong
  // setTimeout(() => {
  //   window.location.href = "Heart.html";
  // }, 4300);
  // });

  document.getElementById("yes").addEventListener("click", function () {
  const cupid = document.getElementById("cupid");
  const arrow = document.getElementById("arrow");
  const frame = document.getElementById("heartFrame");
  const wrapper = document.querySelector(".wrapper");
  //const overlay = document.getElementById("fadeOverlay");

  // Hiện thần Cupid
  cupid.style.opacity = "1";

  // Sau 0.8s mũi tên bay
  setTimeout(() => {
    arrow.style.opacity = "1";
    arrow.style.left = "100vw";
  }, 800);

  // Sau 4.3s: hiện heart.html + ẩn Cupid
  setTimeout(() => {
    frame.src = "Heart.html";
    frame.style.display = "block";
    wrapper.style.display = "none";

    // 👉 Ẩn Cupid tại đây (ngay khi chuyển sang heart)
    cupid.style.opacity = "0";

    // Sau 60s chuyển tiếp sang QR.html
    setTimeout(() => {
      //overlay.style.opacity = "1";
      console.log("60s passed. Changing to QR.html...");

      setTimeout(() => {
        frame.src = "QR.html";
        console.log("Frame changed to QR.html");
      }, 1000); // hiệu ứng overlay
    }, 6000);

  }, 4300);
});



  
  //play music
  document.addEventListener("click", function playOnce() {
  const audio = document.getElementById("bgm");
  if (audio) audio.play();
  document.removeEventListener("click", playOnce);
});
});
