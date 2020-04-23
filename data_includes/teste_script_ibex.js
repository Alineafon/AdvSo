PennController.ResetPrefix(null)

Sequence("welcome", randomize("training"), "teste", randomize("experiment"), "final")


newTrial("welcome",
    defaultText
        .print()
   ,
    newText("<p>Bem-vindos!</p>")
    ,
    newText("<p>Neste experimento, voc&ecirc; vai ouvir uma frase e depois deve escolher a melhor op&ccedil;&atilde;o de interpreta&ccedil;&atilde;o para ela.</p>")
    ,
    newText("<p> Sua tarefa &eacute;: ou&ccedil;a a frase e depois clique no bot&atilde;o &quot;Pr&oacute;ximo&quot;.</p>")
    ,
    newText("<p>Escolha uma das op&ccedil;&otilde;es de interpreta&ccedil;&atilde;o, apertando: </p>")
    ,
    newText("a tecla <strong>A</strong> para a op&ccedil;&atilde;o da esquerda, ou a tecla <strong>L</strong> para a op&ccedil;&atilde;o da direita.</p>")
    ,
    newText("<p>Por favor, escreva se NOME na caixa abaixo.</p>")
    ,
    newTextInput("Nome")
    .css("font-size","1em")
        .print()
    ,
    newText("<p>Escreva sua IDADE na caixa abaixo,</p>")
    .print()
    ,
    newTextInput("Idade")
    .css("font-size","1em")
        .print()
        ,
    newText("<p>Agora, escreva sua ESCOLARIDADE na caixa abaixo, e clique em &quot;Start&quot; para come&ccedil;ar.</p>")
    .print()
    ,
    newTextInput("Escolaridade")
    .css("font-size","1em")
        .print()
  
    ,
    newButton("Start")
    .css("font-size","1em")
        .print()
        .wait()
    ,
    newVar("ID")
        .global()
        .set( getTextInput("Nome"))
    ,
         newVar("AGE")
        .global()
        .set( getTextInput("Idade") )
    ,
         newVar("SCHOOL")
        .global()
        .set( getTextInput("Escolaridade") )
)
    .log( "ID" , getVar("ID") )
    .log( "AGE" , getVar("AGE") )
    .log( "SCHOOL" , getVar("SCHOOL") )

Template( "treino_SoAdv_ibex.csv" ,
    // Row will iteratively point to every row in myTable.csv
    variable => newTrial( "training",
        newAudio(variable.Audiofile)
         .play()
        ,
    newImage("alto_falante_icone.png")
    .size(90, 90)
    .print()
 ,
    newButton("Pr&oacute;ximo")
    .css("font-size","1em")
    .center()
    .print()
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
    newText("L",variable.OptionB)
    .css("font-size","1.2em")
    //.print   
    ,
     newCanvas(1400,700)
    .add(   50 , 100 , getText("A") )
    .add( 750 , 100 , getText("L") )
    .print()
    ,

    //newKey("AL")
    newSelector()
    .add( getText("A") , getText("L") )
    .keys(          "A"    ,          "L"   )
    .log()
    .wait() 
     
    ))
    newTrial("teste",
    
    newText("<p>Agora que voc&ecirc; j&aacute; praticou, vamos come&ccedil;!</p>")
    .print()
    ,
    newButton("Start")
    .css("font-size","1em")
        .print()
        .wait()
        )

// This Template command generates as many trials as there are rows in myTable.csv
Template( "SoAdv_ibex.csv" ,
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
    .css("font-size","1em")
    .center()
    .print()
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
    newText("L",variable.OptionB)
    .css("font-size","1.2em")
    //.print   
    ,
     newCanvas(1400,700)
    .add(50 , 100 , getText("A") )
    .add(750 , 100 , getText("L") )
    .print()
    ,

    //newKey("AL")
    newSelector()
    .add( getText("A") , getText("L") )
    .keys(          "A"    ,          "L"   )
    .log()
    .wait() 
     
    ))
    

newTrial( "final" ,
    newText("<p> Obrigada pela participa&ccedil;&atilde;o!</p>")
        .print()
    ,
     newText("<p> Aperte o bot&atilde;o &quot;Salvar&quot; para gravar suas respostas</p>")
        .print()
    ,
    newButton("SALVAR")
    .css("font-size","1em")
        .print()
        .wait()
 )
