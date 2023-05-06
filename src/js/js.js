window.onload = function() {
<<<<<<< HEAD
    let username, password;

    const users = {
        User1: {
            Name: "Hazhir Ghafoori",
            Password: "12345",
            Role: "ADMIN",
        },
        User2: {
            Name: "Reza Alizade",
            Password: "54321",
            Role: "USER",
        },
    }


    document.getElementById("signup").onclick = function() {
        username = document.getElementById("username").value;
        password = document.getElementById("password").value;
        password = String(password);

        if (password == '') {
            document.getElementById("enterPassword").innerHTML = 'لطفا پسورد را وارد نمایید!';
        }


        console.log("Your User Name is: " + username + " Your password is: " + password);
        console.log("ok");




    }

}
=======
    let tipOfVideo, selectTipOfVideo;
    tipOfVideo = "tip2";
    let select = document.getElementById("selectTipOfVideo");

    let mainBox = document.getElementById("mainBox");
    let divTip12 = document.getElementById("videoTip1-2Box");
    let divLive = document.getElementById("videoLive");
    let talentNamee,
        productLinke,
        transferLinke,
        magnetLinke,
        isPorFroshe,
        isSellerOrdere,
        copyButtone;

    talentNamee = document.getElementById("talentName");
    productLinke = document.getElementById("productLink");
    transferLinke = document.getElementById("transferLink");
    magnetLinke = document.getElementById("magnetLink");
    isPorFroshe = document.getElementById("selectIsPorFrosh");
    isSellerOrdere = document.getElementById("selectOrderSeller");
    selectIsPorFrosh = document.getElementById("selectIsPorFrosh");
    selectOrderSeller = document.getElementById("selectOrderSeller");
    copyButtone = document.getElementById("copyButton");



    mainBox.style.display = "none";
    document.getElementById("selectTipOfVideo").addEventListener("change", function() {
        var style = this.value == 1 ? "none" : "block";
        document.getElementById("mainBox").style.display = style;
    });

    select.addEventListener("change", function handleChange(event) {
        if (event.target.value === "tip3") {
            divTip12.style.display = "none";
            divLive.style.display = "block";
        } else {
            divTip12.style.display = "block";
            divLive.style.display = "none";
        }
    });


    copyButtone.onclick = function() {

        talentNamee = document.getElementById("talentName").value;
        productLinke = document.getElementById("productLink").value;
        transferLinke = document.getElementById("transferLink").value;
        magnetLinke = document.getElementById("magnetLink").value;

        isPorFroshe = isPorFroshe.options[isPorFroshe.selectedIndex].text;
        isSellerOrdere = isSellerOrdere.options[isSellerOrdere.selectedIndex].text;



        console.log(talentNamee + productLinke + transferLinke + magnetLinke + isPorFroshe + isSellerOrdere);
        var msg = "📍نام تلنت: " + talentNamee + "<br>📍تیپ ویدیو: تیپ 1" + "<br>📍اسم کالا(ها) در سایت:" + productLinke + "<br>📍شناسه کالا(ها): " + productLinke + "<br>📍لینک ترنسفر: " + transferLinke + "<br>📍لینک مگنت: " + magnetLinke + "<br>📍آیا کالا(ها)ی این ویدیو رو از لیست‌ کالاهای پرفروش انتخاب کرده‌اید؟ " + isPorFroshe + "<br>📍آیا این ویدیو سفارش برند/سلر بوده است؟ " + isSellerOrdere;
        document.getElementById('finalText').innerHTML = msg;


    }






    select.addEventListener("change", () => {
        tipOfVideo = select.options[select.selectedIndex].value;
        if (tipOfVideo == "tip1") {
            console.log("tip is 1");




        } else if (tipOfVideo == "tip2") {
            console.log("tip is 2");




        } else if (tipOfVideo == "tip3") {
            console.log("tip is 3");
        }
    });







};
>>>>>>> origin
