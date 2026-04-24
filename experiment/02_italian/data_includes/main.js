PennController.ResetPrefix(null);
DebugOff();

Sequence(
    "welcome",
    "consent",
    "intro",
    "instructions1",
    // "instructions2",
    
    "practice1",
    "practice2",

    "p1_intro",
    rshuffle("expletive_test"),
    
    "p2_intro",
    "instructions3",
    rshuffle("rating_task"),
    
    "p3_intro",
    "intro_leapq",
    "leap-q",
    
    "demo",
    "send",
    "prolific",
    "end");
    
    
Header(
    newVar("ParticipantName").global(),
    
    newVar("Group")
        .global()
        .set( GetURLParameter("group") )
    ,

    newTimer(250)
        .start()
        .wait()
);


newTrial( "welcome" ,
    newImage("spanish-labs.png")
        .size( 600,100 )
        .center()
        .print()
    ,
    newText("<br><br>")
        .center()
        .print() 
    ,
    newText("<b>BENVENUTI</b>")
        .css("font-size","60")
        .css('font-family', 'Helvetica, sans-serif')
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("<p>Il seguente esperimento è condotto dall'Universitat Pompeu Fabra.</p>")
        .css('font-family', 'Helvetica, sans-serif')
        .css("font-size","20")
        .css("text-align", "center")
        .center()
        .print()
    ,
    newButton("next", "continua")
        .center()
        .print()
        .wait()
    );
    


// End screen
PennController("end",
    newText("Grazie per la vostra partecipazione!<br><br>")
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .center()
        .print()
    ,
    newText("link",'<a href="https://app.prolific.com/submissions/complete?cc=C16D14XP">Clicca qui se non vieni reindirizzato automaticamente.</a><br><br>')
        .center()
        .print()
    ,
    newText("Oppure, inserisci questo codice di completamento: C16D14XP")
        .center()
        .print()
    ,
    newKey("end", " ")
        .wait()
).setOption("countsForProgressBar", false);

// Send results at the end of the experiment
PennController.SendResults("send");