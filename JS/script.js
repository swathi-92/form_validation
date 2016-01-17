
x = document.createElement("span");
y = document.createElement("span");
z=document.createElement("span");
function fnNameValidate() {
    var oname = document.getElementById("name").value;
    NameID1 = document.getElementById("nameID");
    var nameptrn =  /^[a-zA-Z]+$/;
    NameID1.appendChild(x);
    if (oname.match(nameptrn)) {
        x.setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
        NameID1.setAttribute("class", " col-xs-10 row  has-success has-feedback");
    } else {
        NameID1.setAttribute("class", " col-xs-10 row  has-error has-feedback");
        x.setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
    }
}

function fnPasswordValidate() {
    var opwd = document.getElementById("pwd").value;
    pwdID1 = document.getElementById("pwdId");
    var pwdptrn = /^[a-zA-Z]+$/;
    pwdID1.appendChild(y);
    if (opwd.match(pwdptrn)) {
        y.setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
        pwdID1.setAttribute("class", " col-xs-10 row  has-success has-feedback");
    } else {
        pwdID1.setAttribute("class", " col-xs-10 row  has-error has-feedback");
        y.setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
    }
}

function fnAmountValidate() {
    var oamt = document.getElementById("text").value;
    amtID1 = document.getElementById("amtID");
    var amtptrn = "[A-Z a-z]";
    amtID1.appendChild(z);
    if (oamt.match(amtptrn)) {
        z.setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
        amtID1.setAttribute("class", "input-group   has-success has-feedback");
    } else {
        amtID1.setAttribute("class", "input-group has-error has-feedback");
        z.setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
    }
}
function fnGetValidation() {
    var ox = document.getElementById("name").value;
    var oy = document.getElementById("text").value;
    var oz = document.getElementById("pwd").value;
    localStorage.setItem('uname',ox);
    localStorage.setItem('pswd',oy);
    localStorage.setItem('amnt', oz);

}