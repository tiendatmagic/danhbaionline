var coin = 0;
var money = 10000;
var card1 = 0;
var card2 = 0;
var card3 = 0;
var card7 = 0;
var card8 = 0;
var card4 = 0;
var card5 = 0;
var card6 = 0;
var card9 = 0;
var card10 = 0;
var pl1 = 0;
var pl2 = 0;
var ca1 = 0;
var ca2 = 0;
var ca3 = 0;
var ca7 = 0;
var ca8 = 0;
var ca4 = 0;
var ca5 = 0;
var ca6 = 0;
var ca9 = 0;
var ca10 = 0;
var rt = 0;
var rtm = 0;
var ll1 = 0;
var ll2 = 0;
var xd1 = 0;
var xd2 = 0;
var dc = 0;
var selectgame = 0;
var krtt;
var liengg;
var li1 = 0;
var li2 = 0;
var arrlieng1 = [];
var arrlieng2 = [];
var lp1;
var lp2;
var mruong = 1;
var ruongrd = 0;
var cruongrd = 0;
var bc1 = 0;
var bc2 = 0;
var bc3 = 0;
var arrbc = [];
var bca1 = 0;
var bca2 = 0;
var bca3 = 0;
var bca4 = 0;
var bca5 = 0;
var bca6 = 0;
var dcc = 0;
var dcbc = 0;
var dcbc1 = 0;
var dcbc2 = 0;
var dcbc3 = 0;
var dcbc4 = 0;
var dcbc5 = 0;
var dcbc6 = 0;
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function setCookie(hihihi, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000000));
	//	d.setTime(d.getTime() + (exdays * 48 * 60 * 60 * 1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = hihihi + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(hihihi) {
	var name = hihihi + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie() {
	var fmoney = getCookie("fmoney");
	if (fmoney != "") {
		money = Number(fmoney);
	} else {
		if (fmoney != null) {
			setCookie("fmoney", fmoney, 30);
		}
	}

	var fmruong = getCookie("fmruong");
	if (fmruong != "") {
		mruong = Number(fmruong);
	} else {
		if (fmruong != null) {
			setCookie("fmruong", fmruong, 30);
		}
	}
}
document.getElementsByClassName("start")[0].addEventListener("click", function () {
	document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
	document.getElementById("login").style.display = 'none';
	document.getElementById("mgame").style.display = 'block';
});

function mg() {
	document.getElementById("mg").style.display = 'none';
	document.getElementById("selectmoney").style.display = 'flex';
	document.getElementsByClassName("info")[0].innerText = "Vui lòng đặt cược";
}
document.getElementsByClassName("mg-3cay")[0].addEventListener("click", function () {
	mg();
	selectgame = 1;
});
document.getElementsByClassName("mg-xidach")[0].addEventListener("click", function () {
	mg();
	selectgame = 2;
});
document.getElementsByClassName("mg-lieng")[0].addEventListener("click", function () {
	mg();
	selectgame = 3;
});

document.getElementsByClassName("mg-baucua")[0].addEventListener("click", function () {
	document.getElementById("mg").style.display = 'none';
	document.getElementsByClassName("g-main")[0].style.display = 'block';

	document.getElementsByClassName("round-game")[0].style.display = 'none';
	baucua();


});
document.getElementsByClassName("mg-ruong")[0].addEventListener("click", function () {
	document.getElementById("mg").style.display = 'none';
	document.getElementsByClassName("g-main")[0].style.display = 'block';
	document.getElementById("ruongmayman").style.display = 'flex';
	document.getElementsByClassName("round-game")[0].style.display = 'none';
	ruongrd = Math.ceil(Math.random() * 5);
	cruongrd = 0;

});



document.getElementsByClassName("ruong1")[0].addEventListener("click", function () {
	if (mruong === 1) {
		cruongrd = 1;
		checkruong();
	}
	else {
		alert("Hết số lần mở rương");
	}
});


document.getElementsByClassName("ruong2")[0].addEventListener("click", function () {
	if (mruong === 1) {
		cruongrd = 2;
		checkruong();
	}
	else {
		alert("Hết số lần mở rương");
	}
});


document.getElementsByClassName("ruong3")[0].addEventListener("click", function () {

	if (mruong === 1) {
		cruongrd = 3;
		checkruong();
	}
	else {
		alert("Hết số lần mở rương");
	}
});


document.getElementsByClassName("ruong4")[0].addEventListener("click", function () {

	if (mruong === 1) {
		cruongrd = 4;
		checkruong();
	}
	else {
		alert("Hết số lần mở rương");
	}
});


document.getElementsByClassName("ruong5")[0].addEventListener("click", function () {
	if (mruong === 1) {
		cruongrd = 5;
		checkruong();
	}
	else {
		alert("Hết số lần mở rương");
	}
});

function checkruong() {
	if (cruongrd === ruongrd) {
		alert("Đúng rồi");
		var fmoney = getCookie("fmoney");
		money += 1000;
		fmoney = money;

		if (fmoney != null) {
			setCookie("fmoney", fmoney, 30);

		}
		document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
	}
	else {
		alert("Không đúng");
	}

	var fmruong = getCookie("fmruong");
	mruong = 0;
	fmruong = mruong;

	if (fmruong != null) {
		setCookie("fmruong", fmruong, 30);

	}
}

document.getElementsByClassName("bdmain")[0].addEventListener("click", phatbai);
document.getElementsByClassName("m-500")[0].addEventListener("click", function () {
	setup();
	dc = 500;
});
document.getElementsByClassName("m-1000")[0].addEventListener("click", function () {
	setup();
	dc = 1000;
});
document.getElementsByClassName("m-2000")[0].addEventListener("click", function () {
	setup();
	dc = 2000;
});
document.getElementsByClassName("m-3000")[0].addEventListener("click", function () {
	setup();
	dc = 3000;
});
document.getElementsByClassName("m-5000")[0].addEventListener("click", function () {
	setup();
	dc = 5000;
});

//
document.getElementsByClassName("dc-500")[0].addEventListener("click", function () {
	
	dcc = 1;
});
document.getElementsByClassName("dc-1000")[0].addEventListener("click", function () {
	dcbc += 1000;
	dcc = 2;
});
document.getElementsByClassName("dc-2000")[0].addEventListener("click", function () {
	dcbc += 2000;
	dcc = 3;
});
document.getElementsByClassName("dc-3000")[0].addEventListener("click", function () {
	dcbc += 3000;
	dcc = 4;
});
document.getElementsByClassName("dc-5000")[0].addEventListener("click", function () {
	
	dcc = 5;
});
//
document.getElementsByClassName("bc")[0].addEventListener("click", function () {

	bca1 = 1;
	if (dcc === 1) {
		dcbc += 500;
		var fmoney = getCookie("fmoney");

		money -= dcbc;
	
		fmoney = money;
		if (fmoney != null) {
			setCookie("fmoney", fmoney, 30);
		}
		document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
	}

	if (dcc === 5) {
		dcbc += 5000;
		var fmoney = getCookie("fmoney");

		money -= dcbc;
	
		fmoney = money;
		if (fmoney != null) {
			setCookie("fmoney", fmoney, 30);
		}
		document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
	}


	//dcbc = 0;
	//dcc +=1;

});
document.getElementsByClassName("bc")[1].addEventListener("click", function () {

	bca2 = 1;

	var fmoney = getCookie("fmoney");

	money -= dcbc;
	fmoney = money;
	if (fmoney != null) {
		setCookie("fmoney", fmoney, 30);
	}
	document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
	//dcbc = 0;

});
document.getElementsByClassName("bc")[2].addEventListener("click", function () {

	bca3 = 1;

	var fmoney = getCookie("fmoney");

	money -= dcbc;
	fmoney = money;
	if (fmoney != null) {
		setCookie("fmoney", fmoney, 30);
	}
	document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
	//	dcbc = 0;

});
document.getElementsByClassName("bc")[3].addEventListener("click", function () {

	bca4 = 1;

	var fmoney = getCookie("fmoney");

	money -= dcbc;
	fmoney = money;
	if (fmoney != null) {
		setCookie("fmoney", fmoney, 30);
	}
	document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
	//dcbc = 0;

});
document.getElementsByClassName("bc")[4].addEventListener("click", function () {

	bca5 = 1;

	var fmoney = getCookie("fmoney");

	money -= dcbc;
	fmoney = money;
	if (fmoney != null) {
		setCookie("fmoney", fmoney, 30);
	}
	document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
	//dcbc = 0;

});
document.getElementsByClassName("bc")[5].addEventListener("click", function () {

	bca6 = 1;

	var fmoney = getCookie("fmoney");

	money -= dcbc;
	fmoney = money;
	if (fmoney != null) {
		setCookie("fmoney", fmoney, 30);
	}
	document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
	//	dcbc = 0;

});



function checkbc() {

	if (bca1 === 1 && bc1 === 1 || bca1 === 1 && bc2 === 1 || bca1 === 1 && bc3 === 1) {
		var fmoney = getCookie("fmoney");
		money += dcbc * 2;
		fmoney = money;
		if (fmoney != null) {
			setCookie("fmoney", fmoney, 30);

		}
		document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
	}

	if (bca2 === 1 && bc1 === 2 || bca2 === 1 && bc2 === 2 || bca2 === 1 && bc3 === 2) {
		var fmoney = getCookie("fmoney");
		money += dcbc * 2;
		fmoney = money;
		if (fmoney != null) {
			setCookie("fmoney", fmoney, 30);

		}
		document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
	}

	if (bca3 === 1 && bc1 === 3 || bca3 === 1 && bc2 === 3 || bca3 === 1 && bc3 === 3) {
		var fmoney = getCookie("fmoney");
		money += dcbc * 2;
		fmoney = money;
		if (fmoney != null) {
			setCookie("fmoney", fmoney, 30);

		}
		document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
	}

	if (bca4 === 1 && bc1 === 4 || bca4 === 1 && bc2 === 4 || bca4 === 1 && bc3 === 4) {
		var fmoney = getCookie("fmoney");
		money += dcbc * 2;
		fmoney = money;
		if (fmoney != null) {
			setCookie("fmoney", fmoney, 30);

		}
		document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
	}

	if (bca5 === 1 && bc1 === 5 || bca5 === 1 && bc2 === 5 || bca5 === 1 && bc3 === 5) {
		var fmoney = getCookie("fmoney");
		money += dcbc * 2;
		fmoney = money;
		if (fmoney != null) {
			setCookie("fmoney", fmoney, 30);

		}
		document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
	}
	if (bca6 === 1 && bc1 === 6 || bca6 === 1 && bc2 === 6 || bca6 === 1 && bc3 === 6) {
		var fmoney = getCookie("fmoney");
		money += dcbc * 2;
		fmoney = money;
		if (fmoney != null) {
			setCookie("fmoney", fmoney, 30);

		}
		document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
	}
	dcbc = 0;
	alert("OK");

}

function baucua() {
	bc1 = Math.ceil(Math.random() * 6);
	bc2 = Math.ceil(Math.random() * 6);
	bc3 = Math.ceil(Math.random() * 6);

	document.getElementsByClassName("bc1")[0].innerText = bc1;
	document.getElementsByClassName("bc2")[0].innerText = bc2;
	document.getElementsByClassName("bc3")[0].innerText = bc3;
	arrbc = [bc1, bc2, bc3];
	arrbc.sort(function (a, b) {
		return a - b;
	});

	setTimeout(checkbc, 10000);
}


function setup() {
	if (selectgame === 1) {
		document.getElementsByClassName("namegame")[0].innerText = "Game ba cây";
		document.getElementById("selectmoney").style.display = 'none';
		document.getElementsByClassName("g-main")[0].style.display = 'block';
	} else if (selectgame === 2) {
		document.getElementsByClassName("namegame")[0].innerText = "Game xì dách";
		document.getElementById("selectmoney").style.display = 'none';
		document.getElementsByClassName("g-main")[0].style.display = 'block';
	} else if (selectgame === 3) {
		document.getElementsByClassName("namegame")[0].innerText = "Game liêng";
		document.getElementById("selectmoney").style.display = 'none';
		document.getElementsByClassName("g-main")[0].style.display = 'block';
	}
	document.getElementsByClassName("info")[0].style.display = 'none';
}

function phatbai() {
	li1 = 0;
	li2 = 0;
	document.getElementsByClassName("bdmain")[0].style.display = 'none';
	document.getElementsByClassName("statusp1")[0].innerText = "";
	document.getElementsByClassName("statusp2")[0].innerText = "";
	document.getElementsByClassName("status")[0].style.display = 'none';
	document.getElementsByClassName("status")[1].style.display = 'none';
	var fmoney = getCookie("fmoney");
	money -= dc;
	fmoney = money;
	if (fmoney != null) {
		setCookie("fmoney", fmoney, 30);
	}
	document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
	card1 = Math.ceil(Math.random() * 52);
	card2 = Math.ceil(Math.random() * 52);
	card3 = Math.ceil(Math.random() * 52);
	card7 = Math.ceil(Math.random() * 52);
	card8 = Math.ceil(Math.random() * 52);
	card4 = Math.ceil(Math.random() * 52);
	card5 = Math.ceil(Math.random() * 52);
	card6 = Math.ceil(Math.random() * 52);
	card9 = Math.ceil(Math.random() * 52);
	card10 = Math.ceil(Math.random() * 52);
	if (selectgame === 1) {
		document.getElementsByClassName("card")[0].style.display = "inline-block";
		document.getElementsByClassName("card")[1].style.display = "inline-block";
		document.getElementsByClassName("card")[2].style.display = "inline-block";
		document.getElementsByClassName("card")[5].style.display = "inline-block";
		document.getElementsByClassName("card")[6].style.display = "inline-block";
		document.getElementsByClassName("card")[7].style.display = "inline-block";
		ccard1();
		document.getElementsByClassName("card1")[0].setAttribute("src", "./img/b2fv.gif");
		document.getElementsByClassName("card1")[0].addEventListener("click", ccard1);
		ccard2();
		document.getElementsByClassName("card2")[0].setAttribute("src", "./img/b2fv.gif");
		document.getElementsByClassName("card2")[0].addEventListener("click", ccard2);
		ccard3();
		document.getElementsByClassName("card3")[0].setAttribute("src", "./img/b2fv.gif");
		document.getElementsByClassName("card3")[0].addEventListener("click", ccard3);
		ccard4();
		document.getElementsByClassName("card4")[0].setAttribute("src", "./img/b2fv.gif");
		ccard5();
		document.getElementsByClassName("card5")[0].setAttribute("src", "./img/b2fv.gif");
		ccard6();
		document.getElementsByClassName("card6")[0].setAttribute("src", "./img/b2fv.gif");
		setTimeout(check, 5000);
	} else if (selectgame === 2) {
		rt = 0;
		rtm = 0;
		xd1 = 0;
		xd2 = 0;
		clearTimeout(krtt);
		document.getElementsByClassName("xd")[0].style.display = "inline";
		document.getElementsByClassName("xd")[1].style.display = "inline";
		document.getElementsByClassName("xd")[2].style.display = "inline";
		document.getElementsByClassName("xd")[3].style.display = "none";
		document.getElementsByClassName("card")[0].style.display = "inline-block";
		document.getElementsByClassName("card")[1].style.display = "inline-block";
		document.getElementsByClassName("card")[5].style.display = "inline-block";
		document.getElementsByClassName("card")[6].style.display = "inline-block";
		document.getElementsByClassName("card")[2].style.display = "none";
		document.getElementsByClassName("card")[3].style.display = "none";
		document.getElementsByClassName("card")[4].style.display = "none";
		document.getElementsByClassName("card")[7].style.display = "none";
		document.getElementsByClassName("card")[8].style.display = "none";
		document.getElementsByClassName("card")[9].style.display = "none";
		ccard1();
		document.getElementsByClassName("card1")[0].setAttribute("src", "./img/b2fv.gif");
		document.getElementsByClassName("card1")[0].addEventListener("click", ccard1);
		ccard2();
		document.getElementsByClassName("card2")[0].setAttribute("src", "./img/b2fv.gif");
		document.getElementsByClassName("card2")[0].addEventListener("click", ccard2);
		ccard3();
		document.getElementsByClassName("card3")[0].setAttribute("src", "./img/b2fv.gif");
		document.getElementsByClassName("card3")[0].addEventListener("click", ccard3);
		ccard7();
		document.getElementsByClassName("card7")[0].setAttribute("src", "./img/b2fv.gif");
		document.getElementsByClassName("card7")[0].addEventListener("click", ccard7);
		ccard8();
		document.getElementsByClassName("card8")[0].setAttribute("src", "./img/b2fv.gif");
		document.getElementsByClassName("card8")[0].addEventListener("click", ccard8);
		ccard4();
		document.getElementsByClassName("card4")[0].setAttribute("src", "./img/b2fv.gif");
		ccard5();
		document.getElementsByClassName("card5")[0].setAttribute("src", "./img/b2fv.gif");
		ccard6();
		document.getElementsByClassName("card6")[0].setAttribute("src", "./img/b2fv.gif");
		ccard9();
		document.getElementsByClassName("card9")[0].setAttribute("src", "./img/b2fv.gif");
		ccard10();
		document.getElementsByClassName("card10")[0].setAttribute("src", "./img/b2fv.gif");
		krtt = setTimeout(krt, 10000);
	} else if (selectgame === 3) {
		arrlieng1 = [];
		arrlieng2 = [];
		ca7 = 0;
		ca8 = 0;
		ca9 = 0;
		ca10 = 0;
		clearTimeout(liengg);
		document.getElementsByClassName("xd")[3].style.display = "inline";
		document.getElementsByClassName("card")[0].style.display = "inline-block";
		document.getElementsByClassName("card")[1].style.display = "inline-block";
		document.getElementsByClassName("card")[2].style.display = "inline-block";
		document.getElementsByClassName("card")[5].style.display = "inline-block";
		document.getElementsByClassName("card")[6].style.display = "inline-block";
		document.getElementsByClassName("card")[7].style.display = "inline-block";
		document.getElementsByClassName("card")[3].style.display = "none";
		document.getElementsByClassName("card")[4].style.display = "none";
		document.getElementsByClassName("card")[8].style.display = "none";
		document.getElementsByClassName("card")[9].style.display = "none";
		ccard1();
		document.getElementsByClassName("card1")[0].setAttribute("src", "./img/b2fv.gif");
		document.getElementsByClassName("card1")[0].addEventListener("click", ccard1);
		ccard2();
		document.getElementsByClassName("card2")[0].setAttribute("src", "./img/b2fv.gif");
		document.getElementsByClassName("card2")[0].addEventListener("click", ccard2);
		ccard3();
		document.getElementsByClassName("card3")[0].setAttribute("src", "./img/b2fv.gif");
		document.getElementsByClassName("card3")[0].addEventListener("click", ccard3);
		ccard4();
		document.getElementsByClassName("card4")[0].setAttribute("src", "./img/b2fv.gif");
		ccard5();
		document.getElementsByClassName("card5")[0].setAttribute("src", "./img/b2fv.gif");
		ccard6();
		document.getElementsByClassName("card6")[0].setAttribute("src", "./img/b2fv.gif");
		liengg = setTimeout(lieng, 10000);
	}


}
document.getElementsByClassName("xb")[0].addEventListener("click", xb);

function xb() {
	ccard1();
	ccard2();
	ccard3();
	ccard7();
	ccard8();
}
document.getElementsByClassName("rt")[0].addEventListener("click", function () {
	rt += 1;
	rtt();
});
document.getElementsByClassName("krt")[0].addEventListener("click", krt);
document.getElementsByClassName("lieng")[0].addEventListener("click", lieng);

function lieng() {
	clearTimeout(liengg);
	document.getElementsByClassName("lieng")[0].style.display = 'none';
	if (li1 === 0) {
		if (ca1 >= 10) {
			ca1 = 10;
		}
		if (ca2 >= 10) {
			ca2 = 10;
		}
		if (ca3 >= 10) {
			ca3 = 10;
		}
	}
	if (li2 === 0) {
		if (ca4 >= 10) {
			ca4 = 10;
		}
		if (ca5 >= 10) {
			ca5 = 10;
		}
		if (ca6 >= 10) {
			ca6 = 10;
		}
	}
	arrlieng1.push(ca1, ca2, ca3);
	lp1 = arrlieng1.sort(function (a, b) {
		return a - b;
	});
	arrlieng2.push(ca4, ca5, ca6);
	lp2 = arrlieng2.sort(function (a, b) {
		return a - b;
	});
	if (lp1[0] == 1 && lp1[1] == 1 && lp1[2] == 1 || lp1[0] == 2 && lp1[1] == 2 && lp1[2] == 2 || lp1[0] == 3 && lp1[1] == 3 && lp1[2] == 3 || lp1[0] == 4 && lp1[1] == 4 && lp1[2] == 4 || lp1[0] == 5 && lp1[1] == 5 && lp1[2] == 5 || lp1[0] == 6 && lp1[1] == 6 && lp1[2] == 6 || lp1[0] == 7 && lp1[1] == 7 && lp1[2] == 7 || lp1[0] == 8 && lp1[1] == 8 && lp1[2] == 8 || lp1[0] == 9 && lp1[1] == 9 && lp1[2] == 9 || lp1[0] == 10 && lp1[1] == 10 && lp1[2] == 10 || lp1[0] == 11 && lp1[1] == 11 && lp1[2] == 11 || lp1[0] == 12 && lp1[1] == 12 && lp1[2] == 12 || lp1[0] == 13 && lp1[1] == 13 && lp1[2] == 13) {
		li1 = 3;
	}
	if (lp1[0] == 1 && lp1[1] == 2 && lp1[2] == 3 || lp1[0] == 2 && lp1[1] == 3 && lp1[2] == 4 || lp1[0] == 3 && lp1[1] == 4 && lp1[2] == 5 || lp1[0] == 4 && lp1[1] == 5 && lp1[2] == 6 || lp1[0] == 5 && lp1[1] == 6 && lp1[2] == 7 || lp1[0] == 6 && lp1[1] == 7 && lp1[2] == 8 || lp1[0] == 7 && lp1[1] == 8 && lp1[2] == 9 || lp1[0] == 8 && lp1[1] == 9 && lp1[2] == 10 || lp1[0] == 9 && lp1[1] == 10 && lp1[2] == 11 || lp1[0] == 10 && lp1[1] == 11 && lp1[2] == 12 || lp1[0] == 11 && lp1[1] == 12 && lp1[2] == 13 || lp1[0] == 1 && lp1[1] == 12 && lp1[2] == 13) {
		li1 = 2;
	}
	if (lp1[0] == 11 && lp1[1] == 11 && lp1[2] == 12 || lp1[0] == 11 && lp1[1] == 11 && lp1[2] == 13 || lp1[0] == 11 && lp1[1] == 12 && lp1[2] == 12 || lp1[0] == 11 && lp1[1] == 13 && lp1[2] == 13 || lp1[0] == 12 && lp1[1] == 12 && lp1[2] == 13) {
		li1 = 1;
	} else if (li1 === 0) {
		li1 = 0;
	}
	if (lp2[0] == 1 && lp2[1] == 1 && lp2[2] == 1 || lp2[0] == 2 && lp2[1] == 2 && lp2[2] == 2 || lp2[0] == 3 && lp2[1] == 3 && lp2[2] == 3 || lp2[0] == 4 && lp2[1] == 4 && lp2[2] == 4 || lp2[0] == 5 && lp2[1] == 5 && lp2[2] == 5 || lp2[0] == 6 && lp2[1] == 6 && lp2[2] == 6 || lp2[0] == 7 && lp2[1] == 7 && lp2[2] == 7 || lp2[0] == 8 && lp2[1] == 8 && lp2[2] == 8 || lp2[0] == 9 && lp2[1] == 9 && lp2[2] == 9 || lp2[0] == 10 && lp2[1] == 10 && lp2[2] == 10 || lp2[0] == 11 && lp2[1] == 11 && lp2[2] == 11 || lp2[0] == 12 && lp2[1] == 12 && lp2[2] == 12 || lp2[0] == 13 && lp2[1] == 13 && lp2[2] == 13) {
		li2 = 3;
	}
	if (lp2[0] == 1 && lp2[1] == 2 && lp2[2] == 3 || lp2[0] == 2 && lp2[1] == 3 && lp2[2] == 4 || lp2[0] == 3 && lp2[1] == 4 && lp2[2] == 5 || lp2[0] == 4 && lp2[1] == 5 && lp2[2] == 6 || lp2[0] == 5 && lp2[1] == 6 && lp2[2] == 7 || lp2[0] == 6 && lp2[1] == 7 && lp2[2] == 8 || lp2[0] == 7 && lp2[1] == 8 && lp2[2] == 9 || lp2[0] == 8 && lp2[1] == 9 && lp2[2] == 10 || lp2[0] == 9 && lp2[1] == 10 && lp2[2] == 11 || lp2[0] == 10 && lp2[1] == 11 && lp2[2] == 12 || lp2[0] == 11 && lp2[1] == 12 && lp2[2] == 13 || lp2[0] == 1 && lp2[1] == 12 && lp2[2] == 13) {
		li2 = 2;
	}
	if (lp2[0] == 11 && lp2[1] == 11 && lp2[2] == 12 || lp2[0] == 11 && lp2[1] == 11 && lp2[2] == 13 || lp2[0] == 11 && lp2[1] == 12 && lp2[2] == 12 || lp2[0] == 11 && lp2[1] == 13 && lp2[2] == 13 || lp2[0] == 12 && lp2[1] == 12 && lp2[2] == 13) {
		li2 = 1;
	} else if (li2 === 0) {
		li2 = 0;
	}
	setTimeout(check, 5000);
}

function krt() {
	document.getElementsByClassName("xd")[0].style.display = "none";
	document.getElementsByClassName("xd")[1].style.display = "none";
	document.getElementsByClassName("xd")[2].style.display = "none";
	clearTimeout(krtt);
	if (rt === 0) {
		ca3 = 0;
		ca7 = 0;
		ca8 = 0;
	}
	if (rt === 1) {
		ca7 = 0;
		ca8 = 0;
	} else if (rt === 2) {
		ca8 = 0;
	} else if (rt === 3) { }
	rttm();
}

function rtt() {
	if (rt > 3) {
		rt = 3;
	}
	if (rt === 1) {
		document.getElementsByClassName("card")[2].style.display = "inline-block";
	} else if (rt === 2) {
		document.getElementsByClassName("card")[3].style.display = "inline-block";
	} else if (rt === 3) {
		document.getElementsByClassName("card")[4].style.display = "inline-block";
	}
}

function rttm() {
	if (ca1 >= 10) {
		ca1 = 10;
	}
	if (ca2 >= 10) {
		ca2 = 10;
	}
	if (ca3 >= 10) {
		ca3 = 10;
	}
	if (ca7 >= 10) {
		ca7 = 10;
	}
	if (ca8 >= 10) {
		ca8 = 10;
	}
	if (ca4 >= 10) {
		ca4 = 10;
	}
	if (ca5 >= 10) {
		ca5 = 10;
	}
	if (ca6 >= 10) {
		ca6 = 10;
	}
	if (ca9 >= 10) {
		ca9 = 10;
	}
	if (ca10 >= 10) {
		ca10 = 10;
	}
	if (ca1 === 1 && ca2 === 10 && rt === 0 || ca1 === 10 && ca2 === 1 && rt === 0) {
		xd1 = 2;
	}
	if (ca1 === 1 && ca2 === 1) {
		xd1 = 3;
	}
	if (rt === 3) {
		if (ca1 + ca2 + ca3 + ca7 + ca8 <= 21) {
			xd1 = 1;
		}
	}
	if (ca4 === 1 && ca5 === 10 || ca4 === 10 && ca5 === 1) {
		xd2 = 2;
	}
	if (ca4 === 1 && ca5 === 1) {
		xd2 = 3;
	}
	if (rtm === 3) {
		if (ca4 + ca5 + ca6 + ca9 + ca10 <= 21) {
			xd2 = 1;
		}
	} {
		if (ca4 + ca5 < 16 && xd2 > 0) {
			rtm = 0;
			rttmm();
		}
		if (ca4 + ca5 < 16 && xd2 === 0) {
			rtm = 1;
			rttmm();
		} else {
			ca6 = 0;
			ca9 = 0;
			ca10 = 0;
		}
	}
	setTimeout(check, 5000);
}

function rttmm() {
	if (rtm === 0) {
		ca6 = 0;
		ca9 = 0;
		ca10 = 0;
	} else if (rtm === 1) {
		document.getElementsByClassName("card")[7].style.display = "inline-block";
		if (ca4 + ca5 + ca6 < 16 || ca4 + ca5 + ca6 + ca9 < 21) {
			rtm = 2;
			rttmm();
		} else {
			rtm = 1;
			ca9 = 0;
			ca10 = 0;
		}
	} else if (rtm === 2) {
		document.getElementsByClassName("card")[8].style.display = "inline-block";
		if (ca4 + ca5 + ca6 + ca9 < 16 || ca4 + ca5 + ca6 + ca9 + ca10 < 21) {
			rtm = 3;
			rttmm();
		} else {
			rtm = 2;
			ca10 = 0;
		}
	} else if (rtm === 3) {
		document.getElementsByClassName("card")[9].style.display = "inline-block";
		if (ca4 + ca5 + ca6 + ca9 + ca10 < 16) { } else {
			rtm = 3;
		}
		if (ca4 + ca5 + ca6 + ca9 + ca10 <= 21) {
			xd2 = 1;
		}
	}
	if (rtm > 3) {
		rtm = 3;
	}
}

function check() {
	if (ca1 >= 10) {
		ca1 = 10;
	}
	if (ca2 >= 10) {
		ca2 = 10;
	}
	if (ca3 >= 10) {
		ca3 = 10;
	}
	if (ca4 >= 10) {
		ca4 = 10;
	}
	if (ca5 >= 10) {
		ca5 = 10;
	}
	if (ca6 >= 10) {
		ca6 = 10;
	}
	if (ca7 >= 10) {
		ca7 = 10;
	}
	if (ca8 >= 10) {
		ca8 = 10;
	}
	if (ca9 >= 10) {
		ca9 = 10;
	}
	if (ca10 >= 10) {
		ca10 = 10;
	}
	pl1 = ca1 + ca2 + ca3 + ca7 + ca8;
	pl2 = ca4 + ca5 + ca6 + ca9 + ca10;
	if (selectgame === 1) {
		if (ca1 == 10 && ca2 == 10 && ca3 == 10) {
			ll1 = 30;
			pll2 = String(pl2);
			ll2 = pll2.substr(pll2.length - 1);
			document.getElementsByClassName("statusp1")[0].innerText = "Ba tiên";
			document.getElementsByClassName("statusp2")[0].innerText = ll2 + " điểm";
		}
		if (ca4 == 10 && ca5 == 10 && ca6 == 10) {
			ll2 = 30;
			pll1 = String(pl1);
			ll1 = pll1.substr(pll1.length - 1);
			document.getElementsByClassName("statusp1")[0].innerText = ll1 + " điểm";
			document.getElementsByClassName("statusp2")[0].innerText = "Ba tiên";
		}

		if (ca1 == 10 && ca2 == 10 && ca3 == 10 && ca4 == 10 && ca5 == 10 && ca6 == 10) {
			ll2 = 30;
			pll1 = String(pl1);
			pll2 = String(pl2);
			ll1 = 30;
			document.getElementsByClassName("statusp1")[0].innerText = "Ba tiên";
			document.getElementsByClassName("statusp2")[0].innerText = "Ba tiên";
			alert("huề");
		}

		if (pl1 != 30 && pl2 != 30) {
			pll1 = String(pl1);
			pll2 = String(pl2);
			ll1 = pll1.substr(pll1.length - 1);
			ll2 = pll2.substr(pll2.length - 1);
			document.getElementsByClassName("statusp1")[0].innerText = ll1 + " điểm";
			document.getElementsByClassName("statusp2")[0].innerText = ll2 + " điểm";
		}
		ccard1();
		ccard2();
		ccard3();
		ccard4();
		ccard5();
		ccard6();
	} else if (selectgame === 2) {
		pll1 = String(pl1);
		pll2 = String(pl2);
		ll1 = pll1.substr(pll1.length - 2);
		ll2 = pll2.substr(pll2.length - 2);
		document.getElementsByClassName("statusp1")[0].innerText = ll1 + " điểm";
		document.getElementsByClassName("statusp2")[0].innerText = ll2 + " điểm";
		ccard1();
		ccard2();
		ccard3();
		ccard4();
		ccard5();
		ccard6();
		ccard7();
		ccard8();
		ccard9();
		ccard10();
	} else if (selectgame === 3) {
		pll1 = String(pl1);
		pll2 = String(pl2);
		ll1 = pll1.substr(pll1.length - 1);
		ll2 = pll2.substr(pll2.length - 1);
		ccard1();
		ccard2();
		ccard3();
		ccard4();
		ccard5();
		ccard6();
		ccard7();
		ccard8();
		ccard9();
		ccard10();
	}
	checkcard();
	setTimeout(function () {
		document.getElementsByClassName("bdmain")[0].style.display = 'block';
	}, 3000);
}

function checkcard() {
	if (selectgame === 1) {
		if (ll1 > ll2) {
			var fmoney = getCookie("fmoney");
			money += dc * 2;
			fmoney = money;
			if (fmoney != null) {
				setCookie("fmoney", fmoney, 30);
				document.getElementsByClassName("statusp1")[0].innerText = ll1 + " điểm";
				document.getElementsByClassName("statusp2")[0].innerText = ll2 + " điểm";
			}
			document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
			document.getElementsByClassName("status")[0].style.display = 'block';
			document.getElementsByClassName("status")[0].src = "./win.png";
			document.getElementsByClassName("status")[1].style.display = 'block';
			document.getElementsByClassName("status")[1].src = "./lose.png";
		} else if (ll1 === ll2) {
			var fmoney = getCookie("fmoney");
			money += dc;
			fmoney = money;
			if (fmoney != null) {
				setCookie("fmoney", fmoney, 30);
				document.getElementsByClassName("statusp1")[0].innerText = ll1 + " điểm";
				document.getElementsByClassName("statusp2")[0].innerText = ll2 + " điểm";
			}
			document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
		} else {
			document.getElementsByClassName("status")[0].style.display = 'block';
			document.getElementsByClassName("status")[0].src = "./lose.png";
			document.getElementsByClassName("status")[1].style.display = 'block';
			document.getElementsByClassName("status")[1].src = "./win.png";
		}
	} else if (selectgame === 2) {
		if (xd1 === 0 && xd2 === 0) {
			if (ll1 === ll2 && ll1 > 21 && ll2 > 21 || ll1 === ll2 && ll1 < 22 && ll2 < 22) {
				var fmoney = getCookie("fmoney");
				money += dc;
				fmoney = money;
				if (fmoney != null) {
					setCookie("fmoney", fmoney, 30);
					document.getElementsByClassName("statusp1")[0].innerText = ll1 + " điểm";
					document.getElementsByClassName("statusp2")[0].innerText = ll2 + " điểm";
				}
				document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
			} else if (ll1 !== ll2 && ll1 > 21 && ll2 > 21 || ll1 !== ll2 && ll1 < 16 && ll2 > 21) {
				var fmoney = getCookie("fmoney");
				money += dc;
				fmoney = money;
				if (fmoney != null) {
					setCookie("fmoney", fmoney, 30);
					document.getElementsByClassName("statusp1")[0].innerText = ll1 + " điểm";
					document.getElementsByClassName("statusp2")[0].innerText = ll2 + " điểm";
				}
				document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
			} else if (ll1 !== ll2 && ll1 < 22 && ll2 > 21 && ll1 > 15 || ll1 !== ll2 && ll1 < 22 && ll2 < 22 && ll1 > ll2 && ll1 > 15) {
				var fmoney = getCookie("fmoney");
				money += dc * 2;
				fmoney = money;
				if (fmoney != null) {
					setCookie("fmoney", fmoney, 30);
					document.getElementsByClassName("statusp1")[0].innerText = ll1 + " điểm";
					document.getElementsByClassName("statusp2")[0].innerText = ll2 + " điểm";
				}
				document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
				document.getElementsByClassName("status")[0].style.display = 'block';
				document.getElementsByClassName("status")[0].src = "./win.png";
				document.getElementsByClassName("status")[1].style.display = 'block';
				document.getElementsByClassName("status")[1].src = "./lose.png";

			} else if (ll1 !== ll2 && ll1 > 21 && ll2 < 22 || ll1 !== ll2 && ll1 < 16 && ll2 < 22 || ll1 != ll2 && ll1 < 22 && ll2 < 22 && ll1 > 15 && ll1 < ll2) {

				document.getElementsByClassName("status")[0].style.display = 'block';
				document.getElementsByClassName("status")[0].src = "./lose.png";
				document.getElementsByClassName("status")[1].style.display = 'block';
				document.getElementsByClassName("status")[1].src = "./win.png";

			}
		} else if (xd1 === 1 && xd2 === 1 || xd1 === 2 && xd2 === 2 || xd1 === 3 && xd2 === 3) {
			var fmoney = getCookie("fmoney");
			money += dc;
			fmoney = money;
			if (fmoney != null) {
				setCookie("fmoney", fmoney, 30);
			}
			checkxd();
			document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
		} else if (xd1 > xd2) {
			var fmoney = getCookie("fmoney");
			money += dc * 2;
			fmoney = money;
			if (fmoney != null) {
				setCookie("fmoney", fmoney, 30);
				document.getElementsByClassName("statusp2")[0].innerText = ll2 + " điểm";
			}
			checkxd();
			document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
			document.getElementsByClassName("status")[0].style.display = 'block';
			document.getElementsByClassName("status")[0].src = "./win.png";
			document.getElementsByClassName("status")[1].style.display = 'block';
			document.getElementsByClassName("status")[1].src = "./lose.png";
		} else if (xd1 < xd2) {
			checkxd();
			document.getElementsByClassName("status")[0].style.display = 'block';
			document.getElementsByClassName("status")[0].src = "./lose.png";
			document.getElementsByClassName("status")[1].style.display = 'block';
			document.getElementsByClassName("status")[1].src = "./win.png";
		}
	} else if (selectgame === 3) {
		if (li1 > li2) {
			var fmoney = getCookie("fmoney");
			money += dc * 2;
			fmoney = money;
			if (fmoney != null) {
				setCookie("fmoney", fmoney, 30);
				document.getElementsByClassName("statusp2")[0].innerText = ll2 + " điểm";
			}
			checkxd();
			document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
			document.getElementsByClassName("status")[0].style.display = 'block';
			document.getElementsByClassName("status")[0].src = "./win.png";
			document.getElementsByClassName("status")[1].style.display = 'block';
			document.getElementsByClassName("status")[1].src = "./lose.png";
		} else if (li1 < li2) {
			checkxd();
			document.getElementsByClassName("statusp1")[0].innerText = ll1 + " điểm";
			document.getElementsByClassName("status")[0].style.display = 'block';
			document.getElementsByClassName("status")[0].src = "./lose.png";
			document.getElementsByClassName("status")[1].style.display = 'block';
			document.getElementsByClassName("status")[1].src = "./win.png";
		} else if (li1 === li2 && li1 !== 0 && li2 !== 0) {
			var fmoney = getCookie("fmoney");
			money += dc;
			fmoney = money;
			if (fmoney != null) {
				setCookie("fmoney", fmoney, 30);
			}
			checkxd();
			document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
		}
		if (li1 === 0 && li2 === 0) {
			pll1 = String(lp1.reduce(reducer));
			pll2 = String(lp2.reduce(reducer));
			ll1 = pll1.substr(pll1.length - 1);
			ll2 = pll2.substr(pll2.length - 1);
			document.getElementsByClassName("statusp1")[0].innerText = ll1 + " điểm";
			document.getElementsByClassName("statusp2")[0].innerText = ll2 + " điểm";
			if (ll1 > ll2) {
				var fmoney = getCookie("fmoney");
				money += dc * 2;
				fmoney = money;
				if (fmoney != null) {
					setCookie("fmoney", fmoney, 30);
					document.getElementsByClassName("statusp2")[0].innerText = ll2 + " điểm";
				}
				checkxd();
				document.getElementsByClassName("statusp1")[0].innerText = ll1 + " điểm";
				document.getElementsByClassName("statusp2")[0].innerText = ll2 + " điểm";
				document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
				document.getElementsByClassName("status")[0].style.display = 'block';
				document.getElementsByClassName("status")[0].src = "./win.png";
				document.getElementsByClassName("status")[1].style.display = 'block';
				document.getElementsByClassName("status")[1].src = "./lose.png";
			} else if (ll1 < ll2) {
				checkxd();
				document.getElementsByClassName("statusp1")[0].innerText = ll1 + " điểm";
				document.getElementsByClassName("statusp2")[0].innerText = ll2 + " điểm";
				document.getElementsByClassName("status")[0].style.display = 'block';
				document.getElementsByClassName("status")[0].src = "./lose.png";
				document.getElementsByClassName("status")[1].style.display = 'block';
				document.getElementsByClassName("status")[1].src = "./win.png";
			} else if (ll1 === ll2) {
				var fmoney = getCookie("fmoney");
				money += dc;
				fmoney = money;
				if (fmoney != null) {
					setCookie("fmoney", fmoney, 30);
				}
				checkxd();
				document.getElementsByClassName("statusp1")[0].innerText = ll1 + " điểm";
				document.getElementsByClassName("statusp2")[0].innerText = ll2 + " điểm";
				document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
			}
		}
	}
}

function checkxd() {
	if (selectgame == 2) {
		if (xd1 === 1) {
			document.getElementsByClassName("statusp1")[0].innerText = "Bạn ngũ linh";
		}
		if (xd1 === 2) {
			document.getElementsByClassName("statusp1")[0].innerText = "Bạn xì dách";
		}
		if (xd1 === 3) {
			document.getElementsByClassName("statusp1")[0].innerText = "Bạn xì bàng";
		}
		if (xd2 === 1) {
			document.getElementsByClassName("statusp2")[0].innerText = "AI ngũ linh";
		}
		if (xd2 === 2) {
			document.getElementsByClassName("statusp2")[0].innerText = "AI xì dách";
		}
		if (xd2 === 3) {
			document.getElementsByClassName("statusp2")[0].innerText = "AI xì bàng";
		}
	} else if (selectgame == 3) {
		if (li1 === 1) {
			document.getElementsByClassName("statusp1")[0].innerText = "Bạn Ảnh";
		}
		if (li1 === 2) {
			document.getElementsByClassName("statusp1")[0].innerText = "Bạn Liêng";
		}
		if (li1 === 3) {
			document.getElementsByClassName("statusp1")[0].innerText = "Bạn Sáp";
		}
		if (li2 === 1) {
			document.getElementsByClassName("statusp2")[0].innerText = "AI Ảnh";
		}
		if (li2 === 2) {
			document.getElementsByClassName("statusp2")[0].innerText = "AI Liêng";
		}
		if (li2 === 3) {
			document.getElementsByClassName("statusp2")[0].innerText = "AI Sáp";
		}
	}
}