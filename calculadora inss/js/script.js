
AlterarAno(); // chama funcao para exibir  o botao da tabela inss selecionada 


//  **** INICIO EVENTOS ****
    // botao calcular
    var btn_calcular = document.getElementById("btn-calcular");
    //btn_calcular.addEventListener("click", function () { calcular(); }, false);
    btn_calcular.addEventListener("click", calcular);

    //select ano
    var select_ano = document.getElementById("tabela");
    //select_ano.addEventListener("input", function(){ AlterarAno() });
    select_ano.addEventListener("input", AlterarAno);

    // input base
    var input_base = document.getElementById("base");
    //input_base.addEventListener("keypress", (event) => {return verificaTecla(event) });


    // botao tabela 2022
    var btn_2022 = document.getElementById("btn-tab-2022");
    btn_2022.addEventListener("click", cliqueTab2022);

    //botao tabela 2023
    var btn_2023 = document.getElementById("btn-tab-2023");
    btn_2023.addEventListener("click", cliqueTab2023);

    // botao limpar
    var btn_limpar = document.getElementById("btn-limpar");
    btn_limpar.addEventListener("click", function(){limpaValores(); input_base.value = "";});

//  **** FIM EVENTOS ****


// deixar com duas casas decimais sem arredondar
function casasDecimais(num, precisao) {
    var casas = Math.pow(10, precisao);
    return Math.floor(num * casas) / casas;
};


//pressionar tecla no input base
function verificaTecla(event) {

    // limpa valores na tela
    limpaValores();

    // se teclar Enter, clica no botao calcular
    if (event.charCode == 13) {
        document.getElementById("btn-calcular").click();
    }


    // verifica se tecla digitada é numero ou ponto ou virgula e retorna tecla caso verdadeiro   
    var strBase = document.getElementById("base").value;
    if (event.charCode >= 48 && event.charCode <= 57) { // se tecla for numero
        return true;
    } else if ((event.charCode == 44) && strBase.indexOf(",") == -1 && strBase != "") {  // se tecla for virgula  e ainda nao existir virgula e se campo não estiver branco.  Para não permitir digitar dois pontos no valor e nem virgula antes de existir numero digitado
        return true;
    } else {
        return false;
    }

}


// alterar texto btn tabela 2022
function cliqueTab2022() {
    if (document.getElementById("btn-tab-2022").innerHTML == "Ver tabela INSS 2022") {
        document.getElementById("btn-tab-2022").innerHTML = "Ocultar tabela INSS 2022";
    } else if (document.getElementById("btn-tab-2022").innerHTML == "Ocultar tabela INSS 2022") {
        document.getElementById("btn-tab-2022").innerHTML = "Ver tabela INSS 2022";
    }
}

// algerar texto btn tabela 2023
function cliqueTab2023() {    
    if (document.getElementById("btn-tab-2023").innerHTML == "Ver tabela INSS 2023") {
        document.getElementById("btn-tab-2023").innerHTML = "Ocultar tabela INSS 2023";
    } else if (document.getElementById("btn-tab-2023").innerHTML == "Ocultar tabela INSS 2023") {
        document.getElementById("btn-tab-2023").innerHTML = "Ver tabela INSS 2023";
    }
}



// limpar valores da tela
function limpaValores() {
    
    document.getElementById("resultado").innerHTML = "&nbsp;";
    document.getElementById("base1").innerHTML = "";
    document.getElementById("base2").innerHTML = "";
    document.getElementById("base3").innerHTML = "";
    document.getElementById("base4").innerHTML = "";

    document.getElementById("valor1").innerHTML = "";
    document.getElementById("valor2").innerHTML = "";
    document.getElementById("valor3").innerHTML = "";
    document.getElementById("valor4").innerHTML = "";

    //oculta faixas detalhadas
    document.getElementById("fx1").className = "d-none";
    document.getElementById("fx2").className = "d-none";
    document.getElementById("fx3").className = "d-none";
    document.getElementById("fx4").className = "d-none";
    document.getElementById("fxt").className = "d-none";

    //limpa div #msg
    document.getElementById("msg").innerHTML = "&nbsp;";
}



// exibe/oculta botoes ano / chamada no evento onChange do select Ano
function AlterarAno() {

    if (document.getElementById("tabela").value == 2022) {

        // se tiver exibindo tabela, clica no botao para ocultar 
        if (document.getElementById("btn-tab-2023").innerHTML == "Ocultar tabela INSS 2023") {
            document.getElementById("btn-tab-2023").click();
        }

        document.getElementById("btn-tab-2022").style.display = "inline"; //exibir botao tabela 2022
        document.getElementById("btn-tab-2023").style.display = "none";   // ocultar botao tabela 2023               

    }

    if (document.getElementById("tabela").value == 2023) {

        // se tiver exibindo tabela, clica no borao para ocultar 
        if (document.getElementById("btn-tab-2022").innerHTML == "Ocultar tabela INSS 2022") {
            document.getElementById("btn-tab-2022").click();
        }

        document.getElementById("btn-tab-2022").style.display = "none";    // ocultar botao tabela 2022
        document.getElementById("btn-tab-2023").style.display = "inline";  // exibir botao tabela 2023               

    }

    //  limpar calculo da tela
    limpaValores();
    document.getElementById("base").value = null;


}

// funcao que realiza o calculo inss / chamada no evento onClick do botao calcular
function calcular() {

    limpaValores();  //limpar resultados

    // verificar se foi digitado valor
    var strBase = document.getElementById("base").value;
    if (strBase.trim() == "" || strBase.trim() == ",") {
        document.getElementById("msg").innerHTML = "Informe o valor base";
        document.getElementById("base").value = null;
        exit;
    } else {
        document.getElementById("msg").innerHTML = "&nbsp;";
    }

    // substituir , por .
    strBase = strBase.replace(",", ".");

    var base = parseFloat(strBase.trim()); // receber valor base convertido em float    


    // inicializa variaveis
    var num_faixas = 0;

    var base_faixa1 = 0;
    var base_faixa2 = 0;
    var base_faixa3 = 0;
    var base_faixa4 = 0;

    var valor_faixa1 = 0;
    var valor_faixa2 = 0;
    var valor_faixa3 = 0;
    var valor_faixa4 = 0;

    var resultado = 0;


    // identificar o ano da tabela
    var anoInss = document.getElementById("tabela").value; //recebe ano inss


    if (anoInss == 2022) {

        // verificar numero de faixas 
        if (base <= 1212) {
            var num_faixas = 1;
        } else if (base <= 2427.35) {
            var num_faixas = 2;
        } else if (base <= 3641.03) {
            var num_faixas = 3;
        } else {
            var num_faixas = 4;
        }


        // fazer calculo de acordo com o número de faixas
        if (num_faixas == 1) {
            base_faixa1 = base;

            valor_faixa1 = base_faixa1 * 0.075;

            //exibir faixas do detalhamento
            document.getElementById("fx1").className = "";
            document.getElementById("fxt").className = "";

        }

        if (num_faixas == 2) {
            base_faixa1 = 1212;
            base_faixa2 = base - 1212;

            valor_faixa1 = base_faixa1 * 0.075;
            valor_faixa2 = base_faixa2 * 0.09;


            //exibir faixas do detalhamento
            document.getElementById("fx1").className = "";
            document.getElementById("fx2").className = "";
            document.getElementById("fxt").className = "";
        }

        if (num_faixas == 3) {
            base_faixa1 = 1212;
            base_faixa2 = 1215.35;
            base_faixa3 = base - 2427.35;

            valor_faixa1 = base_faixa1 * 0.075;
            valor_faixa2 = base_faixa2 * 0.09;
            valor_faixa3 = base_faixa3 * 0.12;


            //exibir faixas do detalhamento
            document.getElementById("fx1").className = "";
            document.getElementById("fx2").className = "";
            document.getElementById("fx3").className = "";
            document.getElementById("fxt").className = "";

        }

        if (num_faixas == 4) {

            //verifica teto
            if (base > 7087.22) {
                base = 7087.22;
            }

            base_faixa1 = 1212;
            base_faixa2 = 1215.35;
            base_faixa3 = 1213.68;
            base_faixa4 = base - 3641.04;

            valor_faixa1 = base_faixa1 * 0.075;
            valor_faixa2 = base_faixa2 * 0.09;
            valor_faixa3 = base_faixa3 * 0.12;
            valor_faixa4 = base_faixa4 * 0.14;


            //exibir faixas do detalhamento
            document.getElementById("fx1").className = "";
            document.getElementById("fx2").className = "";
            document.getElementById("fx3").className = "";
            document.getElementById("fx4").className = "";
            document.getElementById("fxt").className = "";

        }


        // deixar com duas casas sem arredondamento
        valor_faixa1 = casasDecimais(valor_faixa1, 2);
        valor_faixa2 = casasDecimais(valor_faixa2, 2);
        valor_faixa3 = casasDecimais(valor_faixa3, 2);
        valor_faixa4 = casasDecimais(valor_faixa4, 2);


        // somar valores faixas na var resultado
        resultado = valor_faixa1 + valor_faixa2 + valor_faixa3 + valor_faixa4;

        //mostrar valores
        document.getElementById("resultado").innerHTML = "R$ " + resultado.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

        document.getElementById("base1").innerHTML = base_faixa1.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        document.getElementById("base2").innerHTML = base_faixa2.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        document.getElementById("base3").innerHTML = base_faixa3.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        document.getElementById("base4").innerHTML = base_faixa4.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

        document.getElementById("valor1").innerHTML = valor_faixa1.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        document.getElementById("valor2").innerHTML = valor_faixa2.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        document.getElementById("valor3").innerHTML = valor_faixa3.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        document.getElementById("valor4").innerHTML = valor_faixa4.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

        document.getElementById("total-base").innerHTML = base.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        document.getElementById("total-resultado").innerHTML = resultado.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

       



    } else if (anoInss == 2023) {

        // tabela INSS
        var ini_faixa1 = 0.01;
        var fim_faixa1 = 1302.00;

        var ini_faixa2 = 1302.01;
        var fim_faixa2 = 2571.29;

        var ini_faixa3 = 2571.30;
        var fim_faixa3 = 3856.94;

        var ini_faixa4 = 3856.95;
        var fim_faixa4 = 7507.49;


        // verificar numero de faixas 
        if (base <= fim_faixa1) {
            var num_faixas = 1;
        } else if (base <= fim_faixa2) {
            var num_faixas = 2;
        } else if (base <= fim_faixa3) {
            var num_faixas = 3;
        } else {
            var num_faixas = 4;
        }


        // fazer calculo de acordo com o número de faixas
        if (num_faixas == 1) {
            base_faixa1 = base;

            valor_faixa1 = base_faixa1 * 0.075;

            //variaveis detalhe base faixa     
            var detalheBase1 = base_faixa1.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');


            // se base menor que minimo, faixa residual, senao, não é residual
            if (base < fim_faixa1) {
                var faixa1Residual = "Sim";
            } else {
                var faixa1Residual = "Não";
            }


            //exibir faixas do detalhamento
            document.getElementById("fx1").className = "";
            document.getElementById("fxt").className = "";

        }

        if (num_faixas == 2) {
            base_faixa1 = fim_faixa1;
            base_faixa2 = base - fim_faixa1;

            valor_faixa1 = base_faixa1 * 0.075;
            valor_faixa2 = base_faixa2 * 0.09;

            //variaveis detalhe base faixa
            var detalheBase1 = fim_faixa1.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').toString();
            var detalheBase2 = base.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').toString() + " - " + fim_faixa1.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').toString() + " = " + base_faixa2.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
            var faixa1Residual = "Não";
            var faixa2Residual = "Sim";



            //exibir faixas do detalhamento
            document.getElementById("fx1").className = "";
            document.getElementById("fx2").className = "";
            document.getElementById("fxt").className = "";
        }

        if (num_faixas == 3) {
            base_faixa1 = fim_faixa1;
            base_faixa2 = fim_faixa2 - fim_faixa1;
            base_faixa3 = base - fim_faixa2;

            valor_faixa1 = base_faixa1 * 0.075;
            valor_faixa2 = base_faixa2 * 0.09;
            valor_faixa3 = base_faixa3 * 0.12;


            //variaveis detalhe base faixa
            var detalheBase1 = fim_faixa1.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
            var detalheBase2 = fim_faixa2.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').toString() + " - " + fim_faixa1.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').toString() + " = " + base_faixa2.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
            var detalheBase3 = base.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').toString() + " - " + fim_faixa2.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').toString() + " = " + base_faixa3.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
            var faixa1Residual = "Não";
            var faixa2Residual = "Não";
            var faixa3Residual = "Sim";


            //exibir faixas do detalhamento
            document.getElementById("fx1").className = "";
            document.getElementById("fx2").className = "";
            document.getElementById("fx3").className = "";
            document.getElementById("fxt").className = "";

        }

        if (num_faixas == 4) {

            //verifica teto
            if (base > 7507.49) {
                base = 7507.49;
            }

            base_faixa1 = fim_faixa1;
            base_faixa2 = fim_faixa2 - fim_faixa1;
            base_faixa3 = fim_faixa3 - fim_faixa2;
            base_faixa4 = base - ini_faixa4;

            valor_faixa1 = base_faixa1 * 0.075;
            valor_faixa2 = base_faixa2 * 0.09;
            valor_faixa3 = base_faixa3 * 0.12;
            valor_faixa4 = base_faixa4 * 0.14;


            //variaveis detalhe base faixa
            var detalheBase1 = fim_faixa1.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
            var detalheBase2 = fim_faixa2.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').toString() + " - " + fim_faixa1.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').toString() + " = " + base_faixa2.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').toString();
            var detalheBase3 = fim_faixa3.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').toString() + " - " + fim_faixa2.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').toString() + " = " + base_faixa3.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
            var detalheBase4 = base.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').toString() + " - " + ini_faixa4.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').toString() + " = " + base_faixa4.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
            var faixa1Residual = "Não";
            var faixa2Residual = "Não";
            var faixa3Residual = "Não";
            if (parseFloat(document.getElementById("base").value) > fim_faixa4) {
                var faixa4Residual = "Não";
            } else {
                var faixa4Residual = "Sim";
            }



            //exibir faixas do detalhamento
            document.getElementById("fx1").className = "";
            document.getElementById("fx2").className = "";
            document.getElementById("fx3").className = "";
            document.getElementById("fx4").className = "";
            document.getElementById("fxt").className = "";

        }


        // deixar com duas casas sem arredondamento
        valor_faixa1 = casasDecimais(valor_faixa1, 2);
        valor_faixa2 = casasDecimais(valor_faixa2, 2);
        valor_faixa3 = casasDecimais(valor_faixa3, 2);
        valor_faixa4 = casasDecimais(valor_faixa4, 2);

        // somar valores faixas na var resultado
        resultado = valor_faixa1 + valor_faixa2 + valor_faixa3 + valor_faixa4;


        //mostrar valores
        document.getElementById("resultado").innerHTML = "R$ " + resultado.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

        document.getElementById("residual1").innerHTML = faixa1Residual;
        document.getElementById("residual2").innerHTML = faixa2Residual;
        document.getElementById("residual3").innerHTML = faixa3Residual;
        document.getElementById("residual4").innerHTML = faixa4Residual;

        document.getElementById("base1").innerHTML = detalheBase1;
        document.getElementById("base2").innerHTML = detalheBase2;
        document.getElementById("base3").innerHTML = detalheBase3;
        document.getElementById("base4").innerHTML = detalheBase4;

        document.getElementById("valor1").innerHTML = valor_faixa1.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        document.getElementById("valor2").innerHTML = valor_faixa2.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        document.getElementById("valor3").innerHTML = valor_faixa3.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        document.getElementById("valor4").innerHTML = valor_faixa4.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

        document.getElementById("total-base").innerHTML = base.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        document.getElementById("total-resultado").innerHTML = resultado.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

        
    }

}




