PennController.ResetPrefix(null)

Sequence("welcome", randomize("experiment"), "final")


newTrial("welcome",
    defaultText
        .print()
    ,
    newText("<p>Bem-vindos!</p>")
    ,
    newText("<p>Neste experimento, voc&ecirc; vai ouvir uma frase e depois deve escolher a melhor op&ccedil;&atilde;o de interpreta&ccedil;&atilde;o para ela.</p>")
    ,
    newText("<p>Aperte <strong>A</strong> no teclado para a op&ccedil;&atilde;o da esquerda, ou <strong>L</strong> para a op&ccedil;&atilde;o da direita.</p>")
    ,
    newText("<p>Por favor, escreva se nome e aperte Start para iniciar.</p>")
    ,
    newTextInput("Nome")
    .css("font-size","1em")
        .print()
    ,
      newTextInput("Idade")
    .css("font-size","1em")
        .print()
        ,
         newVar("AGE")
        .global()
        .set( getTextInput("Idade") )
    ,
    newButton("Start")
    .css("font-size","1em")
        .print()
        .wait()
    ,
    newVar("ID")
        .global()
        .set( getTextInput("Nome") )
)
    .log( "ID" , getVar("ID") )
    .log( "AGE" , getVar("AGE") )

// This Template command generates as many trials as there are rows in myTable.csv
Template( "SoAdv_ibex.csv" ,
    // Row will iteratively point to every row in myTable.csv
    variable => newTrial( "experiment",
        newAudio(variable.Audiofile)
         .play()
         ,
        newImage("icone_alto_falante.png")
        //.print()
        ,
        newButton("Pr&oacute;ximo")
        .css("font-size","1em")
        //.print()
        .log()
        .wait()
        ,
     newCanvas(1200,600)
        .add(550 , 0 , getImage("icone_alto_falante.png") )
        .add(550 , 300 , getButton("Pr&oacute;ximo") )
        .print()
    ,
    newText("A",variable.OptionA)
    .css("font-size","1.4em")
    //.print
    ,
    newText("L",variable.OptionB)
    .css("font-size","1.4em")
    //.print   
    ,
     newCanvas(1600,700)
    .add(   0 , 100 , getText("A") )
    .add( 800 , 100 , getText("L") )
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
