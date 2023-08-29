function verificarInputs() {
    // Vamos verificar se os inputs estao colecionando os dados corretamente.
    let tutor = document.getElementById("input-Tutor").value;
    let nomePet = document.getElementById("input-Pet").value;
    let especie = document.getElementById("input-Especie").value;
    let foto = document.getElementById("input-Foto").value;
    let data = document.getElementById("input-Data").value;

    //console para ver se está funcionando
    console.log(tutor);
    console.log(nomePet);
    console.log(especie);
    console.log(foto);
    console.log(data);

    // verificacao se os inputs estao vazios.
    if (tutor == "" || nomePet == "" || especie == "" || foto == "" || data == "") {
        console.log("Os inputs estao vazios.");
        envieMsg('Preencha todos os campos', 'erro');

        return true;
    } else {
        // console.log("Os inputs estao preenchidos.");
        envieMsg('Cadastrado com sucesso', 'sucesso');
        return false;
    }
}

function envieMsg(msg, tipo) {
    //Essa funcao vai colocar uma msg que vem pelo parametro na tela do computador

    let msgDiv = document.getElementById("containerLista");
    msgDiv.innerHTML = '';

    let msgParaTela = `
        <p class='${tipo}'>${msg}</p>
    `

    msgDiv.innerHTML = msgParaTela;
}

class CadastroPet {
    constructor(tutor, nomePet, especie, foto, data) {
        this.tutor = tutor;
        this.nomePet = nomePet;
        this.Especie = especie;
        this.Foto = foto;
        this.Data = data;
        this.idade = this.getAge(data);
    }
    getAge(data) {
        const newDate = new Date(data);
        const yearDate = newDate.getFullYear();

        const todayDate = new Date();
        const nowDate = todayDate.getFullYear();

        const age = nowDate - yearDate;
        return age
    }
}

function registroPets() {

    const tutor = document.getElementById("input-Tutor").value;
    const nomePet = document.getElementById("input-Pet").value;
    const especie = document.getElementById("input-Especie").value;
    const foto = document.getElementById("input-Foto").value;
    const data = document.getElementById("input-Data").value;

    const cadastroPet = new CadastroPet(tutor, nomePet, especie, foto, data);

    console.log(cadastroPet);
    bibliotecaPets.add(cadastroPet);

    //Exibir usando minha funcao de render
}

class ListaPets {
    constructor() {
        this.listaPets = [];
    }
    add(parametro) {
        if (verificarInputs()) {
            envieMsg("Preencha todos os campos", "erro");
        } else if(!isURLValida(parametro.Foto)) {
            envieMsg("URL inválido")
        }
        else {
            this.listaPets.push(parametro);
            limparInputs();
            envieMsg("Cadastrado com sucesso", "sucesso")
            // console.log(this.listaPets);
        }
    }
}

const bibliotecaPets = new ListaPets();

function limparInputs() {
    //console.log("Usei limparInputs");

    //Pego o valor dela, e defino como vazio.
    document.getElementById("input-Tutor").value = '';
    document.getElementById("input-Pet").value = '';
    document.getElementById("input-Especie").value = '';
    document.getElementById("input-Foto").value = '';
    document.getElementById("input-Data").value = '';
}

function renderizarConteudo() {
    let content = '';
    let array = bibliotecaPets.listaPets;

    array.forEach(pet => {
        content += `
        <div class='containerLista'>
            <h2>Tutor: ${pet.tutor}</h2>
            <p>Nome do Pet: ${pet.nomePet}</p>
            <p>Espécie: ${pet.Especie}</p>
            <p>Data: ${dateinPTBR(pet.Data)}</p>
            <p>Idade do pet: ${pet.idade}</p>
            <img src="${pet.Foto}" alt="${pet.nomePet}">
        </div>
        `
    });
    document.getElementById('containerLista').innerHTML = content;
}

function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}

function dateinPTBR(data) {
    console.log(data);
    let dateArray = data.split("-");
    let datePTBR = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
    return datePTBR;
}

function showList() {
    document.getElementById("box-container").classList.remove("hidden");
    document.getElementById("div2").classList.add("hidden");
}

function showForm() {
    renderizarConteudo();

    document.getElementById("box-container").classList.add("hidden");
    document.getElementById("div2").classList.remove("hidden");
}