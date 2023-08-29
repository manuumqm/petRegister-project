function verificarInputs() {
    // Vamos verificar se os inputs estao colecionando os dados corretamente.
    let tutor = document.getElementById("input-Tutor").value;
    let nomePet = document.getElementById("input-Pet").value;
    let Especie = document.getElementById("input-Especie").value;
    let Foto = document.getElementById("input-Foto").value;
    let Data = document.getElementById("input-Data").value;

    // console para ver se está funcionando
    console.log(tutor);
    console.log(nomePet);
    console.log(Especie);
    console.log(Foto);
    console.log(Data);

    
    // verificacao se os inputs estao vazios.
    if (tutor == "" || nomePet == "" || Especie == "" || Foto == "" || Data == "") {
        //Verificar se o if esta funcionando
        //console.log("Os inputs estao vazios.");
        envieMensagem('Preencha todos os campos', 'erro');
        return true;
    } else {
       // console.log("Os inputs estao preenchidos.");
        envieMensagem('Cadastrado com sucesso', 'sucesso');
        return false;
    }
}

function envieMsg(msg, tipo) {
    //Essa funcao vai colocar uma msg que vem pelo parametro na tela do computador

    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = '';

    let msgParaTela = `
        <p class='${tipo}'>${msg}</p>
    `

    msgDiv.innerHTML = msgParaTela;


    setTimeout(function () {
        msgDiv.innerHTML = '';
    }, 3000)
}

class CadastroPet {
    constructor(tutor, nomePet, Especie, Foto) {
        this.tutor = tutor;
        this.nomePet = nomePet;
        this.Especie = Especie;
        this.Foto = Foto;
    }
}