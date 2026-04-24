newTrial("practice1",
    newText("leadIn", "<i>Ecco un esempio:</i>")
        .center()
        .css("font-size", "20px")
        .css('font-family', 'Helvetica, sans-serif')
        .print()
    ,
    newText("spacer0", "<br><br>").print()
    ,
    newText("Context", "Chiara, Luca e Marta sono fuori da un cinema con alcuni amici. Vicino all'ingresso notano Paolo che parla con qualcuno. Paolo indossa una camicia blu.")
        .center()
        .css("font-size", "20px")
        .css('font-family', 'Helvetica, sans-serif')
        .print()
    ,
    newText("spacer1", "<br><br>").print()
    ,
    newText("LeadIn", "Chiara dice a Luca:")
        .center()
        .css("font-size", "20px")
        .css('font-family', 'Helvetica, sans-serif')
        .print()
    ,
    newText("spacer2", "<br><br>").print()
    ,
    newText("Target", "\"Paolo indossa una camicia blu.\"")
        .center()
        .css("font-size", "20px")
        .css('font-family', 'Helvetica, sans-serif')
        .css("color", "red")
        .print()
    ,
    newText("spacer3", "<br><br>").print()
    ,
    newText("question", "<b>Quanto ritieni accettabile questa affermazione?</b>")
        .center()
        .css("font-size", "20px")
        .css('font-family', 'Helvetica, sans-serif')
        .print()
    ,
    newText("spacer3", "<br><br>").print()
    ,
    newScale("slider", 100)
        .slider()
        .center()
        .before(
            newText("left", "assolutamente&nbsp;<br> inaccettabile&nbsp;")
                .css("margin-right", "20px")
                .css('font-family', 'Helvetica, sans-serif')
                )
        .after(
            newText("right", "&nbsp;assolutamente <br>&nbsp;accettabile")
                .css("margin-left", "20px")
                .css('font-family', 'Helvetica, sans-serif')
                )
        .log()
        .print()
    ,
    newText("errorMove", "Sposta il cursore.")
        .center()
        .css("color", "red")
        .css("margin-top", "15px")
        .css('font-family', 'Helvetica, sans-serif')
        .hidden()
        .print()
    ,
    newText("feedback", "In questo caso, <b>sì</b> l'affermazione è corretta, poiché Paolo indossa effettivamente una camicia blu.")
        .center()
        .css("color", "red")
        .css("margin-top", "18px")
        .css('font-family', 'Helvetica, sans-serif')
        .hidden()
        .print()
    ,

    // Function to check slider state + value
    newFunction("checkResponse", () => {
        const scale = PennController.Elements.getScale("slider");
        const choices = scale._element.choices;

        // Case 1: slider not moved
        if (choices.length === 0) {
            PennController.Elements.getText("errorMove").visible()._runPromises();
            return false;
        }

        const value = choices[choices.length - 1][1];

        // Case 2: incorrect answer (<50)
        if (value < 50) {
            PennController.Elements.getText("feedback").visible()._runPromises();
            return false;
        }

        // Case 3: correct
        return true;
    })
    ,

    // Hide messages when slider is moved again
    getScale("slider").callback(
        getText("errorMove").hidden(),
        getText("feedback").hidden()
    )
    ,

    newButton("Next")
        .center()
        .print()
        .wait(
            getFunction("checkResponse").test.is(true)
        )
);

newTrial("practice2",
        newText("leadIn", "<i>Ecco un altro esempio:</i>")
        .center()
        .css("font-size", "20px")
        .css('font-family', 'Helvetica, sans-serif')
        .print()
    ,
    newText("spacer0", "<br><br>").print()
    ,
    newText("Context", "Andrea, Sara e Marco sono seduti su una panchina al parco con alcuni amici. Sul sentiero lì vicino notano Giulia che passa. Giulia indossa un cappotto rosso.")
        .center()
        .css("font-size", "20px")
        .css('font-family', 'Helvetica, sans-serif')
        .print()
    ,
    newText("spacer1", "<br><br>").print()
    ,
    newText("LeadIn", "Andrea dice a Sara:")
        .center()
        .css("font-size", "20px")
        .css('font-family', 'Helvetica, sans-serif')
        .print()
    ,
    newText("spacer2", "<br><br>").print()
    ,
    newText("Target", "\"Giulia indossa un cappotto verde.\"")
        .center()
        .css("font-size", "20px")
        .css('font-family', 'Helvetica, sans-serif')
        .css("color", "red")
        .print()
    ,
    newText("spacer3", "<br><br>").print()
    ,
    newText("question", "<b>Quanto ritieni accettabile questa affermazione?</b>")
        .center()
        .css("font-size", "20px")
        .css('font-family', 'Helvetica, sans-serif')
        .print()
    ,
    newText("spacer3", "<br><br>").print()
    ,
    newScale("slider", 100)
        .slider()
        .center()
        .before(
            newText("left", "assolutamente&nbsp;<br> inaccettabile&nbsp;")
                .css("margin-right", "20px")
                .css('font-family', 'Helvetica, sans-serif')
                )
        .after(
            newText("right", "&nbsp;assolutamente <br>&nbsp;accettabile")
                .css("margin-left", "20px")
                .css('font-family', 'Helvetica, sans-serif')
                )
        .log()
        .print()
    ,
    newText("errorMove", "Sposta il cursore.")
        .center()
        .css("color", "red")
        .css("margin-top", "15px")
        .css('font-family', 'Helvetica, sans-serif')
        .hidden()
        .print()
    ,
    newText("feedback", "In questo caso, la frase è <b>inaccettabile</b>, poiché Giulia non indossa un cappotto verde.")
        .center()
        .css("color", "red")
        .css("margin-top", "18px")
        .css('font-family', 'Helvetica, sans-serif')
        .hidden()
        .print()
    ,

    // Function to check slider state + value
    newFunction("checkResponse", () => {
        const scale = PennController.Elements.getScale("slider");
        const choices = scale._element.choices;

        // Case 1: slider not moved
        if (choices.length === 0) {
            PennController.Elements.getText("errorMove").visible()._runPromises();
            return false;
        }

        const value = choices[choices.length - 1][1];

        // Case 2: incorrect answer (>50)
        if (value > 50) {
            PennController.Elements.getText("feedback").visible()._runPromises();
            return false;
        }

        // Case 3: correct
        return true;
    })
    ,

    // Hide messages when slider is moved again
    getScale("slider").callback(
        getText("errorMove").hidden(),
        getText("feedback").hidden()
    )
    ,

    newButton("Next")
        .center()
        .print()
        .wait(
            getFunction("checkResponse").test.is(true)
        )
);