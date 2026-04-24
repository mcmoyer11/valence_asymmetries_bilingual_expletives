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
    newText("<b>WELCOME</b>")
        .css("font-size","60")
        .css('font-family', 'Helvetica, sans-serif')
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("<p>The following experiment is conducted by the Universitat Pompeu Fabra.</p>")
        .css('font-family', 'Helvetica, sans-serif')
        .css("font-size","20")
        .css("text-align", "center")
        .center()
        .print()
    ,
    newButton("next", "Continue")
        .center()
        .print()
        .wait()
    );
    


// End screen
PennController("end",
    newText("Thank you for your participation!<br><br>")
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .center()
        .print()
    ,
    newText("link",'<a href="https://app.prolific.com/submissions/complete?cc=C16D14XP">Click here if you do not automatically redirect.</a><br><br>')
        .center()
        .print()
    ,
    newText("Or, enter this completion code: C16D14XP")
        .center()
        .print()
    ,
    newKey("end", " ")
        .wait()
).setOption("countsForProgressBar", false);

// Send results at the end of the experiment
PennController.SendResults("send");