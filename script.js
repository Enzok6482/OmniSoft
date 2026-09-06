// ==========================================
// OMNISOFT 2.0
// SCRIPT PRINCIPAL
// ==========================================


// Área onde as ferramentas aparecem
const area = document.getElementById("areaFerramenta");


// ==========================================
// ABRIR FERRAMENTAS
// ==========================================

function abrirFerramenta(nome) {

    // --------------------------
    // CALCULADORA
    // --------------------------

    if (nome === "calculadora") {

        area.innerHTML = `
            <h2>🧮 Calculadora</h2>

            <div class="calculadora">

                <input
                    type="text"
                    id="visorCalculadora"
                    placeholder="0"
                    readonly
                >

                <div class="botoes-calculadora">

                    <button onclick="limparCalculadora()">C</button>

                    <button onclick="apagarCalculadora()">⌫</button>

                    <button onclick="adicionarCalculadora('(')">(</button>

                    <button onclick="adicionarCalculadora(')')">)</button>


                    <button onclick="adicionarCalculadora('7')">7</button>

                    <button onclick="adicionarCalculadora('8')">8</button>

                    <button onclick="adicionarCalculadora('9')">9</button>

                    <button onclick="adicionarCalculadora('/')">÷</button>


                    <button onclick="adicionarCalculadora('4')">4</button>

                    <button onclick="adicionarCalculadora('5')">5</button>

                    <button onclick="adicionarCalculadora('6')">6</button>

                    <button onclick="adicionarCalculadora('*')">×</button>


                    <button onclick="adicionarCalculadora('1')">1</button>

                    <button onclick="adicionarCalculadora('2')">2</button>

                    <button onclick="adicionarCalculadora('3')">3</button>

                    <button onclick="adicionarCalculadora('-')">−</button>


                    <button onclick="adicionarCalculadora('0')">0</button>

                    <button onclick="adicionarCalculadora('.')">.</button>

                    <button onclick="calcular()">=</button>

                    <button onclick="adicionarCalculadora('+')">+</button>

                </div>

            </div>
        `;
    }


    // --------------------------
    // ANOTAÇÕES
    // --------------------------

    else if (nome === "anotacoes") {

        area.innerHTML = `
            <h2>📝 Anotações</h2>

            <div class="notas">

                <input
                    type="text"
                    id="tituloNota"
                    placeholder="Título da anotação"
                >

                <textarea
                    id="textoNota"
                    placeholder="Escreva sua anotação..."
                ></textarea>

                <button onclick="salvarNota()">
                    💾 Salvar anotação
                </button>

                <div id="listaNotas"></div>

            </div>
        `;

        carregarNotas();
    }


    // --------------------------
    // CALENDÁRIO
    // --------------------------

    else if (nome === "calendario") {

        area.innerHTML = `
            <h2>📅 Calendário</h2>

            <div class="eventos-calendario">

                <input
                    type="text"
                    id="nomeEvento"
                    placeholder="Nome do evento"
                >

                <input
                    type="date"
                    id="dataEvento"
                >

                <button onclick="adicionarEvento()">
                    ➕ Adicionar evento
                </button>

                <div id="listaEventos"></div>

            </div>
        `;

        carregarEventos();
    }


    // --------------------------
    // DESIGN
    // --------------------------

    else if (nome === "design") {

        area.innerHTML = `
            <h2>🎨 OmniDesign</h2>

            <div class="design-editor">

                <label>Imagem de fundo</label>

                <input
                    type="file"
                    id="designImagem"
                    accept="image/*"
                >


                <div class="design-controles">

                    <div>

                        <label>Texto</label>

                        <input
                            type="text"
                            id="designTexto"
                            placeholder="Digite seu texto..."
                        >

                    </div>


                    <div>

                        <label>Tamanho do texto</label>

                        <input
                            type="number"
                            id="designTamanho"
                            value="40"
                            min="10"
                            max="150"
                        >

                    </div>


                    <div>

                        <label>Cor do texto</label>

                        <input
                            type="color"
                            id="designCor"
                            value="#ffffff"
                        >

                    </div>


                    <div>

                        <label>Cor do fundo</label>

                        <input
                            type="color"
                            id="designFundo"
                            value="#000000"
                        >

                    </div>

                </div>


                <div
                    id="designArea"
                    class="design-area"
                >

                    <span id="designTextoPreview">

                        Seu texto aparecerá aqui

                    </span>

                </div>

            </div>
        `;


        configurarDesign();
    }


    // --------------------------
    // MÚSICA
    // --------------------------

    else if (nome === "musica") {

        area.innerHTML = `
            <h2>🎵 OmniMusic</h2>

            <div class="musica">

                <p>
                    Escolha uma música do seu computador.
                </p>

                <br>

                <input
                    type="file"
                    id="arquivoMusica"
                    accept="audio/*"
                >

                <p id="nomeMusica">
                    Nenhuma música selecionada
                </p>

                <audio
                    id="playerMusica"
                    controls
                ></audio>

            </div>
        `;

        configurarMusica();
    }


    // --------------------------
    // JOGOS
    // --------------------------

else if (nome === "jogos") {

    window.open(
        "https://poki.com/",
        "_blank"
    );
}


    // Rolar até a ferramenta
    area.scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================
// CALCULADORA
// ==========================================

function adicionarCalculadora(valor) {

    const visor =
        document.getElementById(
            "visorCalculadora"
        );

    if (!visor) return;

    visor.value += valor;
}


function limparCalculadora() {

    const visor =
        document.getElementById(
            "visorCalculadora"
        );

    if (!visor) return;

    visor.value = "";
}


function apagarCalculadora() {

    const visor =
        document.getElementById(
            "visorCalculadora"
        );

    if (!visor) return;

    visor.value =
        visor.value.slice(0, -1);
}


function calcular() {

    const visor =
        document.getElementById(
            "visorCalculadora"
        );

    if (!visor) return;

    try {

        // Permite apenas números
        // e operadores matemáticos
        if (
            !/^[0-9+\-*/().\s]+$/.test(
                visor.value
            )
        ) {

            throw new Error();
        }


        visor.value =
            Function(
                `"use strict"; return (${visor.value})`
            )();

    }

    catch {

        visor.value =
            "Erro";
    }
}


// ==========================================
// TECLADO DA CALCULADORA
// ==========================================

document.addEventListener(
    "keydown",
    function(event) {

        const visor =
            document.getElementById(
                "visorCalculadora"
            );


        // Só funciona
        // quando a calculadora estiver aberta
        if (!visor) return;


        const tecla =
            event.key;


        // Números
        if (
            /^[0-9]$/.test(tecla)
        ) {

            adicionarCalculadora(tecla);

        }


        // Operadores
        else if (
            [
                "+",
                "-",
                "*",
                "/",
                ".",
                "(",
                ")"
            ].includes(tecla)
        ) {

            adicionarCalculadora(tecla);

        }


        // Enter
        else if (
            tecla === "Enter"
        ) {

            event.preventDefault();

            calcular();

        }


        // Backspace
        else if (
            tecla === "Backspace"
        ) {

            apagarCalculadora();

        }


        // Delete
        else if (
            tecla === "Delete"
        ) {

            limparCalculadora();

        }

    }
);
// ==========================================
// SISTEMA DE ANOTAÇÕES
// ==========================================


// Salvar uma anotação
function salvarNota() {

    const titulo =
        document
            .getElementById("tituloNota")
            .value
            .trim();

    const texto =
        document
            .getElementById("textoNota")
            .value
            .trim();


    // Verifica se escreveu algo
    if (titulo === "" && texto === "") {

        alert(
            "Escreva alguma coisa antes de salvar!"
        );

        return;
    }


    // Pega as notas antigas
    let notas =
        JSON.parse(
            localStorage.getItem(
                "omniNotas"
            )
        ) || [];


    // Adiciona nova nota
    notas.push({
        titulo: titulo || "Sem título",
        texto: texto
    });


    // Salva no navegador
    localStorage.setItem(
        "omniNotas",
        JSON.stringify(notas)
    );


    // Limpa os campos
    document.getElementById(
        "tituloNota"
    ).value = "";

    document.getElementById(
        "textoNota"
    ).value = "";


    // Atualiza a lista
    carregarNotas();
}


// ==========================================
// CARREGAR ANOTAÇÕES
// ==========================================

function carregarNotas() {

    const lista =
        document.getElementById(
            "listaNotas"
        );


    if (!lista) return;


    let notas =
        JSON.parse(
            localStorage.getItem(
                "omniNotas"
            )
        ) || [];


    lista.innerHTML = "";


    // Se não existem notas
    if (notas.length === 0) {

        lista.innerHTML = `
            <p>
                Você ainda não tem anotações.
            </p>
        `;

        return;
    }


    // Cria as notas
    notas.forEach(
        function(nota, indice) {

            const div =
                document.createElement("div");

            div.className =
                "nota";


            div.innerHTML = `

                <h3>
                    ${escaparTexto(
                        nota.titulo
                    )}
                </h3>

                <p>
                    ${escaparTexto(
                        nota.texto
                    )}
                </p>

                <button
                    onclick="excluirNota(${indice})"
                >
                    🗑 Excluir
                </button>

            `;


            lista.appendChild(div);

        }
    );
}


// ==========================================
// EXCLUIR ANOTAÇÃO
// ==========================================

function excluirNota(indice) {

    let notas =
        JSON.parse(
            localStorage.getItem(
                "omniNotas"
            )
        ) || [];


    notas.splice(
        indice,
        1
    );


    localStorage.setItem(
        "omniNotas",
        JSON.stringify(notas)
    );


    carregarNotas();
}


// ==========================================
// SISTEMA DE CALENDÁRIO
// ==========================================


// Adicionar evento
function adicionarEvento() {

    const nome =
        document
            .getElementById("nomeEvento")
            .value
            .trim();

    const data =
        document
            .getElementById("dataEvento")
            .value;


    // Verifica os campos
    if (nome === "" || data === "") {

        alert(
            "Digite o nome e escolha uma data!"
        );

        return;
    }


    let eventos =
        JSON.parse(
            localStorage.getItem(
                "omniEventos"
            )
        ) || [];


    eventos.push({
        nome: nome,
        data: data
    });


    // Organiza pela data
    eventos.sort(
        function(a, b) {

            return new Date(a.data)
                -
                new Date(b.data);

        }
    );


    localStorage.setItem(
        "omniEventos",
        JSON.stringify(eventos)
    );


    // Limpa o nome
    document.getElementById(
        "nomeEvento"
    ).value = "";


    carregarEventos();
}


// ==========================================
// CARREGAR EVENTOS
// ==========================================

function carregarEventos() {

    const lista =
        document.getElementById(
            "listaEventos"
        );


    if (!lista) return;


    let eventos =
        JSON.parse(
            localStorage.getItem(
                "omniEventos"
            )
        ) || [];


    lista.innerHTML = "";


    // Nenhum evento
    if (eventos.length === 0) {

        lista.innerHTML = `
            <p>
                Nenhum evento adicionado ainda.
            </p>
        `;

        return;
    }


    eventos.forEach(
        function(evento, indice) {

            const div =
                document.createElement("div");

            div.className =
                "evento";


            // Formata a data
            const partes =
                evento.data.split("-");


            const dataFormatada =
                partes[2]
                +
                "/"
                +
                partes[1]
                +
                "/"
                +
                partes[0];


            div.innerHTML = `

                <div>

                    <strong>
                        ${escaparTexto(
                            evento.nome
                        )}
                    </strong>

                    <br>

                    📅 ${dataFormatada}

                </div>


                <button
                    onclick="excluirEvento(${indice})"
                >
                    🗑
                </button>

            `;


            lista.appendChild(div);

        }
    );
}


// ==========================================
// EXCLUIR EVENTO
// ==========================================

function excluirEvento(indice) {

    let eventos =
        JSON.parse(
            localStorage.getItem(
                "omniEventos"
            )
        ) || [];


    eventos.splice(
        indice,
        1
    );


    localStorage.setItem(
        "omniEventos",
        JSON.stringify(eventos)
    );


    carregarEventos();
}


// ==========================================
// PROTEGER TEXTOS
// ==========================================

// Evita que textos das notas ou eventos
// sejam interpretados como código HTML.

function escaparTexto(texto) {

    const div =
        document.createElement("div");

    div.textContent =
        texto;

    return div.innerHTML;
}


// ==========================================
// OMNIDESIGN
// ==========================================

function configurarDesign() {

    const imagem =
        document.getElementById(
            "designImagem"
        );

    const texto =
        document.getElementById(
            "designTexto"
        );

    const tamanho =
        document.getElementById(
            "designTamanho"
        );

    const cor =
        document.getElementById(
            "designCor"
        );

    const fundo =
        document.getElementById(
            "designFundo"
        );

    const preview =
        document.getElementById(
            "designTextoPreview"
        );

    const designArea =
        document.getElementById(
            "designArea"
        );


    // Texto
    texto.addEventListener(
        "input",
        function() {

            preview.textContent =
                texto.value
                ||
                "Seu texto aparecerá aqui";

        }
    );


    // Tamanho do texto
    tamanho.addEventListener(
        "input",
        function() {

            preview.style.fontSize =
                tamanho.value
                +
                "px";

        }
    );


    // Cor do texto
    cor.addEventListener(
        "input",
        function() {

            preview.style.color =
                cor.value;

        }
    );


    // Cor do fundo
    fundo.addEventListener(
        "input",
        function() {

            designArea.style.backgroundColor =
                fundo.value;

        }
    );


    // Imagem de fundo
    imagem.addEventListener(
        "change",
        function() {

            const arquivo =
                imagem.files[0];


            if (!arquivo) {

                return;

            }


            const leitor =
                new FileReader();


            leitor.onload =
                function(evento) {

                    designArea.style.backgroundImage =
                        `url("${evento.target.result}")`;

                    designArea.style.backgroundSize =
                        "cover";

                    designArea.style.backgroundPosition =
                        "center";

                    designArea.style.backgroundRepeat =
                        "no-repeat";

                };


            leitor.readAsDataURL(
                arquivo
            );

        }
    );
}
// ==========================================
// OMNIMUSIC
// ==========================================

function configurarMusica() {

    const arquivoMusica =
        document.getElementById(
            "arquivoMusica"
        );

    const player =
        document.getElementById(
            "playerMusica"
        );

    const nomeMusica =
        document.getElementById(
            "nomeMusica"
        );


    arquivoMusica.addEventListener(
        "change",
        function() {

            const arquivo =
                arquivoMusica.files[0];


            // Se nenhum arquivo foi escolhido
            if (!arquivo) {

                return;

            }


            // Cria uma URL temporária
            // para tocar a música
            const musicaURL =
                URL.createObjectURL(
                    arquivo
                );


            // Coloca a música no player
            player.src =
                musicaURL;


            // Mostra o nome da música
            nomeMusica.textContent =
                "🎵 "
                +
                arquivo.name;


            // Carrega a música
            player.load();


            // Tenta começar a tocar
            player.play()
                .catch(
                    function() {

                        // Alguns navegadores
                        // exigem clicar no player
                        // antes de tocar.
                    }
                );

        }
    );
}


// ==========================================
// MENU DE JOGOS
// ==========================================

function abrirMenuJogos() {

    area.innerHTML = `
        <h2>🎮 OmniGames</h2>

        <p>
            Escolha um jogo para jogar!
        </p>


        <div class="menu-jogos">


            <!-- NÚMERO SECRETO -->

            <div class="jogo-card">

                <h3>
                    🔢 Número Secreto
                </h3>

                <p>
                    Tente descobrir o número
                    escolhido pelo computador.
                </p>

                <button
                    onclick="abrirNumeroSecreto()"
                >
                    Jogar
                </button>

            </div>



            <!-- PEDRA PAPEL TESOURA -->

            <div class="jogo-card">

                <h3>
                    ✊ Pedra, Papel e Tesoura
                </h3>

                <p>
                    Escolha uma opção e tente
                    vencer o computador.
                </p>

                <button
                    onclick="abrirPPT()"
                >
                    Jogar
                </button>

            </div>



            <!-- CAÇA-PALAVRAS -->

            <div class="jogo-card">

                <h3>
                    🔤 Caça-Palavras
                </h3>

                <p>
                    Encontre as palavras escondidas.
                </p>

                <button
                    onclick="abrirCacaPalavras()"
                >
                    Jogar
                </button>

            </div>



            <!-- CRUZADINHA -->

            <div class="jogo-card">

                <h3>
                    🧩 Cruzadinha
                </h3>

                <p>
                    Responda às dicas e complete
                    as palavras.
                </p>

                <button
                    onclick="abrirCruzadinha()"
                >
                    Jogar
                </button>

            </div>


        </div>
    `;


    area.scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================
// NÚMERO SECRETO
// ==========================================


// Variável que guarda o número secreto
let numeroSecreto;


// Função para abrir o jogo
function abrirNumeroSecreto() {


    // Escolhe um número entre 1 e 100
    numeroSecreto =
        Math.floor(
            Math.random() * 100
        )
        +
        1;


    area.innerHTML = `
        <h2>
            🔢 Número Secreto
        </h2>

        <p>
            Eu escolhi um número entre
            <strong>1 e 100</strong>.
        </p>

        <div class="numero-secreto">

            <input
                type="number"
                id="palpiteNumero"
                min="1"
                max="100"
                placeholder="Digite seu palpite"
            >

            <button
                class="botao-verificar"
                onclick="verificarNumero()"
            >
                Verificar
            </button>


            <div
                id="resultadoNumero"
                class="resultado-jogo"
            >
            </div>


            <button
                class="botao-voltar"
                onclick="abrirMenuJogos()"
            >
                ← Voltar aos jogos
            </button>

        </div>
    `;


    // Permite apertar Enter
    const campo =
        document.getElementById(
            "palpiteNumero"
        );


    campo.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                verificarNumero();

            }

        }
    );
}


// ==========================================
// VERIFICAR NÚMERO
// ==========================================

function verificarNumero() {

    const campo =
        document.getElementById(
            "palpiteNumero"
        );

    const resultado =
        document.getElementById(
            "resultadoNumero"
        );


    const palpite =
        Number(
            campo.value
        );


    // Verifica se é um número válido
    if (
        !palpite
        ||
        palpite < 1
        ||
        palpite > 100
    ) {

        resultado.textContent =
            "Digite um número entre 1 e 100!";

        return;
    }


    // Acertou
    if (
        palpite === numeroSecreto
    ) {

        resultado.textContent =
            "🎉 Parabéns! Você acertou!";

    }


    // Número maior
    else if (
        palpite > numeroSecreto
    ) {

        resultado.textContent =
            "📉 O número secreto é menor!";

    }


    // Número menor
    else {

        resultado.textContent =
            "📈 O número secreto é maior!";

    }


    // Limpa o campo
    campo.value =
        "";


    // Coloca o cursor novamente
    campo.focus();
}
// ==========================================
// PEDRA, PAPEL E TESOURA
// ==========================================

function abrirPPT() {

    area.innerHTML = `
        <h2>✊ Pedra, Papel e Tesoura</h2>

        <p>
            Escolha uma opção!
        </p>

        <div class="ppt-botoes">

            <button onclick="jogarPPT('pedra')">
                🪨 Pedra
            </button>

            <button onclick="jogarPPT('papel')">
                📄 Papel
            </button>

            <button onclick="jogarPPT('tesoura')">
                ✂️ Tesoura
            </button>

        </div>

        <div
            id="resultadoPPT"
            class="resultado-jogo"
        >
        </div>

        <button
            class="botao-voltar"
            onclick="abrirMenuJogos()"
        >
            ← Voltar aos jogos
        </button>
    `;
}


function jogarPPT(escolhaJogador) {

    const escolhas = [
        "pedra",
        "papel",
        "tesoura"
    ];


    const escolhaComputador =
        escolhas[
            Math.floor(
                Math.random()
                *
                escolhas.length
            )
        ];


    const resultado =
        document.getElementById(
            "resultadoPPT"
        );


    // Empate
    if (
        escolhaJogador
        ===
        escolhaComputador
    ) {

        resultado.textContent =
            `🤝 Empate! Os dois escolheram ${escolhaJogador}.`;

        return;
    }


    // Jogador venceu
    if (
        (
            escolhaJogador === "pedra"
            &&
            escolhaComputador === "tesoura"
        )

        ||

        (
            escolhaJogador === "papel"
            &&
            escolhaComputador === "pedra"
        )

        ||

        (
            escolhaJogador === "tesoura"
            &&
            escolhaComputador === "papel"
        )
    ) {

        resultado.textContent =
            `🎉 Você venceu! O computador escolheu ${escolhaComputador}.`;

    }


    // Computador venceu
    else {

        resultado.textContent =
            `😅 Você perdeu! O computador escolheu ${escolhaComputador}.`;

    }
}


// ==========================================
// CAÇA-PALAVRAS
// ==========================================

function abrirCacaPalavras() {

    const letras = [

        ["O", "M", "N", "I", "S", "O", "F", "T", "A", "B"],

        ["C", "A", "L", "C", "U", "L", "O", "P", "Q", "R"],

        ["J", "O", "G", "O", "S", "X", "Y", "Z", "T", "U"],

        ["M", "U", "S", "I", "C", "A", "A", "B", "C", "D"],

        ["D", "E", "S", "I", "G", "N", "E", "F", "G", "H"],

        ["N", "O", "T", "A", "S", "I", "J", "K", "L", "M"],

        ["C", "A", "L", "E", "N", "D", "A", "R", "I", "O"],

        ["P", "L", "A", "Y", "E", "R", "A", "B", "C", "D"],

        ["T", "E", "C", "N", "O", "L", "O", "G", "I", "A"],

        ["C", "O", "M", "P", "U", "T", "A", "D", "O", "R"]

    ];


    let html = `

        <h2>
            🔤 Caça-Palavras
        </h2>

        <p>
            Encontre as palavras escondidas!
        </p>


        <div class="caca-palavras">

            <div
                class="grade-caca-palavras"
            >
    `;


    letras.forEach(
        function(linha, linhaIndex) {

            linha.forEach(
                function(letra, colunaIndex) {

                    html += `

                        <div
                            class="letra-caca"
                            data-linha="${linhaIndex}"
                            data-coluna="${colunaIndex}"
                            onclick="selecionarLetraCaca(this)"
                        >
                            ${letra}
                        </div>

                    `;

                }
            );

        }
    );


    html += `

            </div>


            <div class="palavras-caca">

                <strong>
                    Palavras para encontrar:
                </strong>

                <br>

                OMNISOFT • CALCULO • JOGOS • MUSICA
                <br>
                DESIGN • NOTAS • CALENDARIO

            </div>


            <button
                class="botao-voltar"
                onclick="abrirMenuJogos()"
            >
                ← Voltar aos jogos
            </button>

        </div>
    `;


    area.innerHTML =
        html;
}


// ==========================================
// SELECIONAR LETRAS DO CAÇA-PALAVRAS
// ==========================================

function selecionarLetraCaca(elemento) {

    elemento.classList.toggle(
        "selecionada"
    );
}
// ==========================================
// CRUZADINHA
// ==========================================

function abrirCruzadinha() {

    area.innerHTML = `
        <h2>🧩 Cruzadinha</h2>

        <p>
            Complete as palavras usando as dicas!
        </p>


        <div class="cruzadinha">

            <div class="dicas-cruzadinha">

                <h3>
                    💡 Dicas
                </h3>

                <ol>

                    <li>
                        Dispositivo usado para acessar
                        a internet e programas.
                        (COMPUTADOR)
                    </li>

                    <li>
                        Programa usado para fazer contas.
                        (CALCULADORA)
                    </li>

                    <li>
                        Lugar onde você escreve ideias.
                        (NOTAS)
                    </li>

                </ol>

            </div>


            <div
                class="grade-cruzadinha"
                id="gradeCruzadinha"
            >
            </div>


            <button
                class="botao-verificar"
                onclick="verificarCruzadinha()"
            >
                Verificar respostas
            </button>


            <div
                id="resultadoCruzadinha"
                class="resultado-jogo"
            >
            </div>


            <button
                class="botao-voltar"
                onclick="abrirMenuJogos()"
            >
                ← Voltar aos jogos
            </button>

        </div>
    `;


    const grade =
        document.getElementById(
            "gradeCruzadinha"
        );


    // Palavras da cruzadinha
    const palavras = [

        "COMPUTADOR",

        "CALCULADORA",

        "NOTAS"

    ];


    // Cria os campos para cada palavra
    palavras.forEach(
        function(palavra, indice) {

            palavra.split("")
                .forEach(
                    function(letra, letraIndex) {

                        const input =
                            document.createElement(
                                "input"
                            );


                        input.type =
                            "text";

                        input.maxLength =
                            "1";

                        input.className =
                            "letra-cruzadinha";


                        input.dataset.palavra =
                            indice;

                        input.dataset.letra =
                            letraIndex;


                        // Passa automaticamente
                        // para o próximo campo
                        input.addEventListener(
                            "input",
                            function() {

                                this.value =
                                    this.value.toUpperCase();


                                if (
                                    this.value
                                ) {

                                    const proximo =
                                        grade.querySelector(
                                            `[data-palavra="${indice}"][data-letra="${letraIndex + 1}"]`
                                        );


                                    if (
                                        proximo
                                    ) {

                                        proximo.focus();

                                    }

                                }

                            }
                        );


                        grade.appendChild(
                            input
                        );

                    }
                );


            // Adiciona quebra de linha
            if (
                indice <
                palavras.length - 1
            ) {

                const quebra =
                    document.createElement(
                        "div"
                    );


                quebra.style.gridColumn =
                    "1 / -1";


                grade.appendChild(
                    quebra
                );

            }

        }
    );
}


// ==========================================
// VERIFICAR CRUZADINHA
// ==========================================

function verificarCruzadinha() {

    const palavras = [

        "COMPUTADOR",

        "CALCULADORA",

        "NOTAS"

    ];


    let todasCertas =
        true;


    palavras.forEach(
        function(palavra, indice) {

            let resposta =
                "";


            for (
                let i = 0;
                i < palavra.length;
                i++
            ) {

                const campo =
                    document.querySelector(
                        `[data-palavra="${indice}"][data-letra="${i}"]`
                    );


                if (
                    campo
                ) {

                    resposta +=
                        campo.value
                        .toUpperCase();

                }

            }


            if (
                resposta !== palavra
            ) {

                todasCertas =
                    false;

            }

        }
    );


    const resultado =
        document.getElementById(
            "resultadoCruzadinha"
        );


    if (
        todasCertas
    ) {

        resultado.textContent =
            "🎉 Parabéns! Você completou a cruzadinha!";

    }

    else {

        resultado.textContent =
            "❌ Ainda existem respostas erradas ou incompletas. Tente novamente!";

    }
}


// ==========================================
// PESQUISA EM DESENVOLVIMENTO
// ==========================================

const botaoPesquisa =
    document.getElementById(
        "botaoPesquisa"
    );


const barraPesquisa =
    document.getElementById(
        "barraPesquisa"
    );


// Quando clicar no botão
botaoPesquisa.addEventListener(
    "click",
    function() {

        alert(
            "🚧 A pesquisa do OmniSoft ainda está em desenvolvimento!"
        );

    }
);


// Quando apertar Enter
barraPesquisa.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter"
        ) {

            event.preventDefault();


            alert(
                "🚧 A pesquisa do OmniSoft ainda está em desenvolvimento!"
            );

        }

    }
);