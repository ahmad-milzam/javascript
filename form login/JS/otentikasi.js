function Login(){
	var pseudo = document.login.pseudo.value;
	var username = pseudo.toLowerCase();
	var password = document.login.password.value;
	password=password.toLowerCase();
	if (pseudo=="ahmad2017" && password=="integrity") {
		location.replace("Home/page home.html")
	    alert("Username dan password benar!\nSilahkan klik tombol OK, untuk lanjut ke page berikutnya");
	} else { 
	    alert("wrong username / password"); 
	}
}