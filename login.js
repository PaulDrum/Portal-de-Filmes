var armazenamento = [];

function User(mail, password) {
    this.mail = mail;
    this.password = password;
    
}

function registrar() {
    var usermail = document.getElementById('email').value;
    if(usermail in localStorage){
        alert('Email já registrado');
        return;
    }

    var userpassword = document.getElementById('senha').value;
    var confpassword = document.getElementById('senhac').value;
    console.log(userpassword);
    if(confpassword != userpassword){
        alert('As senhas não coincidem!');
        return;
    };
    localStorage.setItem(usermail, email.value);
    localStorage.setItem(userpassword, senha.value)
    sessionStorage.setItem(usermail, 'ativo');
    armazenamento.push(new User(usermail, userpassword));
    alert(`Email ${email.value} cadastrado com sucesso.`);
    
    
};


function logar(){
    
    
    let user = document.getElementById('emaillogin').value;
    let pass = document.getElementById('passlogin').value;
    if(user in localStorage){
        if(pass in localStorage){
            window.location.href = "index.html";
            loga();
        }else{
            alert('Senha Incorreta !')
            return;
        };

    }else{
        alert('Usuário não cadastrado');
        return;
    };
    

};

function loga(){
    logado = true;
    return logado;
};