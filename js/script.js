

AlterarAno(); // chama funcao para exibir  o botao da tabela inss selecionada 


//clique no botao calcular
function calcular() {

    document.getElementById("resultado").innerHTML = "";  //limpar resultado

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
    strBase = strBase.replace(",",".");      

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
        document.getElementById("resultado").innerHTML = "R$ " + resultado.toFixed(2);

        document.getElementById("base1").innerHTML = base_faixa1.toFixed(2);
        document.getElementById("base2").innerHTML = base_faixa2.toFixed(2);
        document.getElementById("base3").innerHTML = base_faixa3.toFixed(2);
        document.getElementById("base4").innerHTML = base_faixa4.toFixed(2);

        document.getElementById("valor1").innerHTML = valor_faixa1.toFixed(2);
        document.getElementById("valor2").innerHTML = valor_faixa2.toFixed(2);
        document.getElementById("valor3").innerHTML = valor_faixa3.toFixed(2);
        document.getElementById("valor4").innerHTML = valor_faixa4.toFixed(2);

        document.getElementById("total-base").innerHTML = base.toFixed(2);
        document.getElementById("total-resultado").innerHTML = resultado.toFixed(2);

       // substituir ponto por virgula nos retornos
        substituir();
    


    } else if (anoInss == 2023) {
        
        // verificar numero de faixas 
        if (base <= 1302) {
            var num_faixas = 1;
        } else if (base <= 2571.29) {
            var num_faixas = 2;
        } else if (base <= 3856.94) {
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
            base_faixa1 = 1302;
            base_faixa2 = base - 1302;

            valor_faixa1 = base_faixa1 * 0.075;
            valor_faixa2 = base_faixa2 * 0.09;


            //exibir faixas do detalhamento
            document.getElementById("fx1").className = "";
            document.getElementById("fx2").className = "";
            document.getElementById("fxt").className = "";
        }

        if (num_faixas == 3) {
            base_faixa1 = 1302;
            base_faixa2 = 1269.29;
            base_faixa3 = base - 2571.29;

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
            if (base > 7507.49) {
                base = 7507.49;
            }

            base_faixa1 = 1302;
            base_faixa2 = 1269.29;
            base_faixa3 = 1285.65;
            base_faixa4 = base - 3856.95;

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
        document.getElementById("resultado").innerHTML = "R$ " + resultado.toFixed(2);

        document.getElementById("base1").innerHTML = base_faixa1.toFixed(2);
        document.getElementById("base2").innerHTML = base_faixa2.toFixed(2);
        document.getElementById("base3").innerHTML = base_faixa3.toFixed(2);
        document.getElementById("base4").innerHTML = base_faixa4.toFixed(2);

        document.getElementById("valor1").innerHTML = valor_faixa1.toFixed(2);
        document.getElementById("valor2").innerHTML = valor_faixa2.toFixed(2);
        document.getElementById("valor3").innerHTML = valor_faixa3.toFixed(2);
        document.getElementById("valor4").innerHTML = valor_faixa4.toFixed(2);

        document.getElementById("total-base").innerHTML = base.toFixed(2);
        document.getElementById("total-resultado").innerHTML = resultado.toFixed(2);

        // substituir ponto por virgula nos retornos
        substituir();

    }


}




// deixar com duas casas decimais sem arredondar
function casasDecimais(num, precisao) {
    var casas = Math.pow(10, precisao);
    return Math.floor(num * casas) / casas;
};


//pressionar tecla no input base
function teclaBase(event) {    

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
    } else if ((event.charCode == 44) && strBase.indexOf(",") == -1) {  // se tecla for virgula  e ainda nao existir virgula. Para não permitir digitar dois pontos no valor
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



// exibe/oculta botoes ano
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


// substituir ponto por virgula nos retornos
function substituir() {

    document.getElementById("base1").innerHTML = document.getElementById("base1").innerHTML.replace(".", ",");

    document.getElementById("base2").innerHTML = document.getElementById("base2").innerHTML.replace(".", ",");

    document.getElementById("base3").innerHTML = document.getElementById("base3").innerHTML.replace(".", ",");

    document.getElementById("base4").innerHTML = document.getElementById("base4").innerHTML.replace(".", ",");

    document.getElementById("total-base").innerHTML = document.getElementById("total-base").innerHTML.replace(".", ",");

    
    document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML.replace(".",",");

    document.getElementById("valor1").innerHTML = document.getElementById("valor1").innerHTML.replace(".", ",");

    document.getElementById("valor2").innerHTML = document.getElementById("valor2").innerHTML.replace(".", ",");

    document.getElementById("valor3").innerHTML = document.getElementById("valor3").innerHTML.replace(".", ",");

    document.getElementById("valor4").innerHTML = document.getElementById("valor4").innerHTML.replace(".", ",");

    document.getElementById("total-resultado").innerHTML = document.getElementById("total-resultado").innerHTML.replace(".", ",");
    
}