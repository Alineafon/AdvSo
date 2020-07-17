//Início do Script

//Inativa os prefixos do IBEX (sem esse comando os códigos não funcionarão)
PennController.ResetPrefix(null);
PennController.DebugOff();

//Sequência de telas do experimento
Sequence ("welcome", "tela2", "treino", "tela3" , randomize("experiment"), SendResults(), "final");

//Nova tela - Tela inicial do participante
newTrial("welcome",
//Define que todo o texto será impresso na tela e que o tamanho da fonte será "1.2em"
    defaultText
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Bem-vindos!</p>")
    ,
    newText("<p>Neste experimento, você vai ouvir uma frase e depois deve escolher a melhor op&ccedil;&atilde;o de interpreta&ccedil;&atilde;o para ela.</p>")
    ,
    newText("<p>Por favor, escreva seu NOME COMPLETO na caixa abaixo.</p>")
    ,
//Cria uma caixa de texto nomedada "Nome" para receber o nome do participante
    newTextInput("Nome")
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Por favor, escreva seu E-MAIL na caixa abaixo.</p>")
    ,
    newTextInput("Email")
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Escreva sua IDADE na caixa abaixo.</p>")
        .css("font-size","1.2em")
        .print()
    ,
    newTextInput("Idade")
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Agora selecione sua ESCOLARIDADE na caixa abaixo e aperte &quot;Iniciar&quot; para come&ccedil;ar!</p>")
        .css("font-size","1.2em")
        .print()
    ,
//Cria uma caixa com seletores nomeada "Escolaridade" para que o participante selecione sua escolaridade
    newDropDown("Escolaridade", "Selecione sua escolaridade")
        .add("M&eacute;dio completo", "Superior em curso", "Superior completo", "P&oacute;s-gradua&ccedil;&atilde;o")
        .css("font-size","1.2em")
        .print()
        .log() //Envia para o arquivo "results" a opção selecionada pelo participante 
    ,
//Cria um novo botão nomeado "Iniciar"
    newButton("Iniciar")
        .css("font-size","1.2em")
        .print()
        .wait()
    ,
//Cria uma nova variável chamada "ID" que recebe o conteúdo da caixa de texto "Nome"
    newVar("ID")
        .global()
        .set( getTextInput("Nome") )
    ,
    newVar("EMAIL")
        .global()
        .set( getTextInput("Email") )
    ,
    newVar("AGE")
        .global()
        .set( getTextInput("Idade") )
    
)

//Envia para o arquivo "results" o conteúdo da variável "ID"
.log( "ID" , getVar("ID") )
.log( "EMAIL" , getVar("EMAIL") )
.log( "AGE" , getVar("AGE") )
 
//Nova tela - Tela de instruções do treino
newTrial("tela2",
    defaultText
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Vamos realizar um pequeno treino para voc&ecirc; se familiarizar com o experimento.</p>")
    ,
    newText("<p>INSTRU&Ccedil;&Otilde;ES:</p>")
    ,
    newText("<p>Ou&ccedil;a a frase com aten&ccedil;&atilde;o e depois clique no bot&atilde;o &quot;Pr&oacute;ximo&quot; para ver as duas op&ccedil;&otilde;es de interpreta&ccedil;&atilde;o: <strong>A</strong> e <strong>B</strong>.</p>")
    ,
    newText("<p>Clique em cima da op&ccedil;&atilde;o que voc&ecirc; acha que &eacute; a melhor, de acordo com a frase que voc&ecirc; ouviu.</p>")
    ,
    newText("<p>Se poss&iacute;vel, utilize fones de ouvido para realizar o experimento.</p>")
    ,
    newText("<p>Aperte &quot;Iniciar&quot; para come&ccedil;ar.</p>")
    ,
    //Cria um novo botão nomeado "Iniciar" e envia para o arquivo "results" a informação de quando ele é pressionado
    newButton("Iniciar")
        .css("font-size","1.2em")
        .print()
        .center()
        .log()
        .wait()
)

//Indica o uso da tabela "treino_SoAdv2.csv"
Template("treino_SoAdv2.csv",
// "variable" vai automaticamente apontar para cada linha da tabela "treino_SoAdv2.csv"
    variable => newTrial( "treino",
    //"variable" aponta para todas as linhas da coluna "AudioTreino" da tabela "treino_SoAdv2" e toca o audio referente a elas
        newAudio("AudioTreino", variable.AudioTreino)
            .play()
        ,
        //Exibe na tela a imagem "alto_falante_icone.png"
        newImage("alto_falante_icone.png")
            .size( 90 , 90 )
            .print()
       
        ,
        //Cria um botão nomeado "Próximo", envia para o arquivo "results" a informação de quando ele foi pressionado e remove ele da tela
        newButton("Pr&oacute;ximo")
            .css("font-size","1.2em")
            .print()
            .center()
            .log()
            .wait()
            .remove()
        ,
        //Remove a imagem "alto_falante_icone.png" 
        getImage("alto_falante_icone.png")
            .remove()
        ,
        //Cria um novo texto nomeado "A" e "variable" aponta para todas as linhas da coluna "TreinoA" e imprime o texto presente nelas 
        newText("A",variable.TreinoA)
            .css("font-size","1.2em")
            //Não há necessidade do uso do comando "print()" nesse caso pois o texto será impresso posteriormente na tela
        ,
        newText("B",variable.TreinoB)
            .css("font-size","1.2em")
        ,
        //Cria um canvas (uma caixa) e coloca os textos "A" e "B" um ao lado do outro
        newCanvas( 1400 , 700 )
            .add( 50 , 100 , getText("A") )
            .add( 750 , 100 , getText("B") )
            .print() //Agora, dentro do canvas, é que os textos "A" e "B" serão impressos na tela
        ,
        //Possibilita a seleção dos textos "A" e "B" através do mouse ou das teclas "A" e "B". Também envia para o arquivo "result" qual texto foi selecionado
        newSelector()
            .add( getText("A") , getText("B") )
            .keys("A","B")
            .log()
            .wait()
    )
         
    //Envia para o arquivo "results" o conteúdo da coluna "Group" 
    .log("Group", variable.Group)
    .log("Item", variable.item)
);

//Nova Tela - Tela de instruções do experimento
newTrial("tela3", 
    defaultText
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Agora que voc&ecirc j&aacute; praticou, vamos iniciar o experimento!</p>")
    ,
    newText("<p>A tarefa irá durar em torno de 10 minutos, certifique-se de que você está em um lugar tranquilo e silencioso para que não haja interrupções.</p>")
    ,
    newText("<p>Clique em &quot;Iniciar&quot; quando estiver pronto para come&ccedil;ar.</p>")
    ,
    newButton("Iniciar")
        .css("font-size","1.2em")
        .print()
        .center()
        .log()
        .wait()
    )
        
//Indica o uso da tabela "SoAdv_ibex.csv"    
Template("SoAdv_ibexD.csv",
    variable => newTrial( "experiment",
        newAudio("Audiofile", variable.Audiofile)
             .play()
        ,
        newImage("alto_falante_icone.png")
            .size( 90 , 90 )
            .print()
       
        //Faz com que o botão nomeado "Próximo só apareça após a execução completa do áudio
      
        ,
        newButton("Pr&oacute;ximo")
            .css("font-size","1.2em")
            .print()
            .center()
            .log()
            .wait()
            .remove()
        ,
        getImage("alto_falante_icone.png")
            .remove()
        ,
        newText("A",variable.OptionA)
            .css("font-size","1.2em")
        ,
        newText("B",variable.OptionB)
            .css("font-size","1.2em") 
        ,
        newCanvas( 1400 , 700 )
            .add(   50 , 100 , getText("A") )
            .add( 750 , 100 , getText("B") )
            .print()
        ,
        newSelector()
            .add( getText("A") , getText("B") )
            .keys("A","B")
            .log()
            .wait()
    ) 
         
    .log("Group", variable.Group)
    .log("Item", variable.item)
    .log("RespostaEsperada", variable.RespostaEsperada)      
);

//Nova Tela - Tela final    
newTrial( "final" ,
    newText("<p> O experimento foi conclu&iacute;do. Obrigada pela participa&ccedil;&atilde;o!</p>")
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p> Voc&ecirc; receber&aacute; um e-mail com a sua declara&ccedil;&atilde;o de participa&ccedil;&atilde;o.</p>")
        .css("font-size","1.2em")
        .print()
        .wait()
 )

//Ajeita a barra de pogresso para que ela fique completa
.setOption("countsForProgressBar",false);
//Fim do Script

