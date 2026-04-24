newTrial("practice1",
    newText("leadIn", "<i>Here is an example:</i>")
        .center()
        .css("font-size", "20px")
        .css('font-family', 'Helvetica, sans-serif')
        .print()
    ,
    newText("spacer0", "<br><br>").print()
    ,
    newText("Context", "Chiara, Luca and Marta are standing outside a cinema with some friends. Near the entrance they notice Paolo talking to someone. Paolo is wearing a blue shirt.")
        .center()
        .css("font-size", "20px")
        .css('font-family', 'Helvetica, sans-serif')
        .print()
    ,
    newText("spacer1", "<br><br>").print()
    ,
    newText("LeadIn", "Chiara says to Luca:")
        .center()
        .css("font-size", "20px")
        .css('font-family', 'Helvetica, sans-serif')
        .print()
    ,
    newText("spacer2", "<br><br>").print()
    ,
    newText("Target", "\"Paolo is wearing a blue shirt.\"")
        .center()
        .css("font-size", "20px")
        .css('font-family', 'Helvetica, sans-serif')
        .css("color", "red")
        .print()
    ,
    newText("spacer3", "<br><br>").print()
    ,
    newText("question", "<b>How acceptable do you consider the statement in red?</b>")
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
            newText("left", "completely&nbsp;<br> unacceptable&nbsp;")
                .css("margin-right", "20px")
                .css('font-family', 'Helvetica, sans-serif')
                )
        .after(
            newText("right", "&nbsp;completely <br>&nbsp;acceptable")
                .css("margin-left", "20px")
                .css('font-family', 'Helvetica, sans-serif')
                )
        .log()
        .print()
    ,
    newText("errorMove", "Please move the slider.")
        .center()
        .css("color", "red")
        .css("margin-top", "15px")
        .css('font-family', 'Helvetica, sans-serif')
        .hidden()
        .print()
    ,
    newText("feedback", "In this case, <b>yes</b> the statement is acceptable since Paolo is indeed wearing a blue shirt.")
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
        newText("leadIn", "<i>Here is another example:</i>")
        .center()
        .css("font-size", "20px")
        .css('font-family', 'Helvetica, sans-serif')
        .print()
    ,
    newText("spacer0", "<br><br>").print()
    ,
    newText("Context", "Andrea, Sara and Marco are sitting on a bench in the park with some friends. On the path nearby they notice Giulia walking by. Giulia is wearing a red coat.")
        .center()
        .css("font-size", "20px")
        .css('font-family', 'Helvetica, sans-serif')
        .print()
    ,
    newText("spacer1", "<br><br>").print()
    ,
    newText("LeadIn", "Andrea says to Sara:")
        .center()
        .css("font-size", "20px")
        .css('font-family', 'Helvetica, sans-serif')
        .print()
    ,
    newText("spacer2", "<br><br>").print()
    ,
    newText("Target", "\"Giulia is wearing a green coat.\"")
        .center()
        .css("font-size", "20px")
        .css('font-family', 'Helvetica, sans-serif')
        .css("color", "red")
        .print()
    ,
    newText("spacer3", "<br><br>").print()
    ,
    newText("question", "<b>How acceptable do you consider the statement in red?</b>")
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
            newText("left", "completely&nbsp;<br> unacceptable&nbsp;")
                .css("margin-right", "20px")
                .css('font-family', 'Helvetica, sans-serif')
                )
        .after(
            newText("right", "&nbsp;completely <br>&nbsp;acceptable")
                .css("margin-left", "20px")
                .css('font-family', 'Helvetica, sans-serif')
                )
        .log()
        .print()
    ,
    newText("errorMove", "Please move the slider.")
        .center()
        .css("color", "red")
        .css("margin-top", "15px")
        .css('font-family', 'Helvetica, sans-serif')
        .hidden()
        .print()
    ,
    newText("feedback", "In this case, the sentence is <b>unacceptable</b>, since Giulia is not wearing a green coat.")
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