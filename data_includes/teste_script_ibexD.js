PennController.ResetPrefix(null);

Sequence ("welcome", "tela2", "treino", "tela3" , randomize("experiment"), "final");

newTrial("welcome",
    defaultText
    .css("font-size","1.2em")
    .print()
    ,
    newText("<p>Bem-vindos!</p>")
    ,
    newText("<p>Neste experimento, voc&ecirc; vai ouvir uma frase e depois deve escolher a melhor op&ccedil;&atilde;o de interpreta&ccedil;&atilde;o para ela.</p>")
    ,
    
    newText("<p>Por favor, escreva seu NOME COMPLETO na caixa abaixo.</p>")
    ,
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
    newText("<p>Agora selecione sua ESCOLARIDADE na caixa abaixo e aperte &quot;Start&quot; para come&ccedil;ar!</p>")
    .css("font-size","1.2em")
    .print()
    ,
    
    newDropDown("Escolaridade", "Selecione sua escolaridade")
        .add("M&eacute;dio completo", "Superior em curso", "Superior completo", "P&oacute;s-gradua&ccedil;&atilde;o")
        .css("font-size","1.2em")
        .print()
        .log()
    ,
    
    newButton("Start")
    .css("font-size","1.2em")
        .print()
        .wait()
    ,
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
    .log( "ID" , getVar("ID") )
    .log( "EMAIL" , getVar("EMAIL") )
    .log( "AGE" , getVar("AGE") )
 
 newTrial("tela2",
 defaultText
    .css("font-size","1.2em")
    .print()
    ,
     newText("<p>Vamos realizar um pequeno treino para voc&ecirc; se familiarizar com o experimento</p>")
        ,
        newText("<p>INSTRU&Ccedil;&Otilde;ES:</p>")
        ,
        newText("<p>Ou&ccedil;a a frase com aten&ccedil;&atilde;o e depois clique no bot&atilde;o &quot;Pr&oacute;ximo&quot; para ver as duas op&ccedil;&otilde;es de interpreta&ccedil;&atilde;o <strong>A</strong> e <strong>B</strong>.</p>")
        ,
        newText("<p>Clique em cima da op&ccedil;&atilde;o que voc&ecirc; acha que &eacute; a melhor de acordo com a frase que voc&ecirc; ouviu.</p>")
        ,
        newText("<p>Aperte &quot;Iniciar&quot; para come&ccedil;ar</p>")
        ,
         newButton("Iniciar")
            .css("font-size","1.2em")
            .print()
            .center()
            .log()
            .wait()
    )
        
Template( "treino_SoAdv2.csv",
    // Row will iteratively point to every row in myTable.csv
    variable => newTrial( "treino",
        
        newAudio(variable.AudioTreino)
            .play()
        ,
        newImage("alto_falante_icone.png")
            .size(90, 90)
            .print()
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
        newText("A",variable.TreinoA)
            .css("font-size","1.2em")
            //.print
        ,
        newText("B",variable.TreinoB)
            .css("font-size","1.2em")
            //.print   
        ,
        newCanvas(1400,700)
            .add(   50 , 100 , getText("A") )
            .add( 750 , 100 , getText("B") )
            .print()
        ,

        //newKey("AL")
        newSelector()
            .add( getText("A") , getText("B") )
            .keys(          "A"    ,          "B"   )
            .log()
            .wait()
    )
    .log("Group", variable.Group)
    .log("Item", variable.item)
);

newTrial("tela3", 
defaultText
    .css("font-size","1.2em")
    .print()
    ,
       newText("<p>Agora que voc&ecirc j&aacute; praticou vamos iniciar o experimento </p>")
        ,
        newText("<p>Clique em &quot;Iniciar&quot; quando estiver pronto para come&ccedil;ar</p> ")
        ,
        newButton("Iniciar")
            .css("font-size","1.2em")
            .print()
            .center()
            .log()
            .wait()
    )
        
    
Template( "SoAdv_ibexD.csv",
    // Row will iteratively point to every row in myTable.csv
    variable => newTrial( "experiment",
    
        newAudio(variable.Audiofile)
         .play()
        ,
    newImage("alto_falante_icone.png")
        .size(90, 90)
        .print()
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
    //.print
    ,
    newText("B",variable.OptionB)
    .css("font-size","1.2em")
    //.print   
    ,
     newCanvas(1400,700)
      .add(   50 , 100 , getText("A") )
        .add( 750 , 100 , getText("B") )
        .print()
    ,

    //newKey("AL")
    newSelector()
    .add( getText("A") , getText("B") )
    .keys(          "A"    ,          "B"   )
    .log()
     .wait()
    )
    .log("Group", variable.Group)
    .log("Item", variable.item)
    .log("RespostaEsperada", variable.RespostaEsperada)
    );
    
newTrial( "final" ,
    newText("<p> Obrigada pela participa&ccedil;&atilde;o!</p>")
    .css("font-size","1.2em")
        .print()
    ,
    newText("<p> Aperte &quot;Salvar&quot; para gravar suas respostas!</p>")
    .css("font-size","1.2em")
        .print()
    ,
    newButton("Salvar")
    .css("font-size","1.2em")
        .print()
        .wait()
 );
