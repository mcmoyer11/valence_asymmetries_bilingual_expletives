Template(
    GetTable("eng_test.csv").setGroupColumn("Group"),
    row => newTrial("expletive_test",
        newText("Background", row.Background + " " + row.Context)
            .center()
            .css("font-size", "20px")
            .css('font-family', 'Helvetica, sans-serif')
            .print()
        ,
        newText("break1", "<br><br>")
            .center()
            .print()
        ,
        newText("LeadIn", row.LeadIn)
            .center()
            .css("font-size", "20px")
            .css('font-family', 'Helvetica, sans-serif')
            .print()
        ,
        newText("break3", "<br><br>")
            .center()
            .print()
        ,
        newText("Target", "\"" + row.Target + "\"")
            .center()
            .css("font-size", "24px")
            .css('font-family', 'Helvetica, sans-serif')
            .css("color", "red")
            .print()
        ,
        newText("break4", "<br><br>")
            .center()
            .print()
        ,
        newText("Judgement", "<b>" + row.Question + "</b>")
            .center()
            .css("font-size", "20px")
            .css('font-family', 'Helvetica, sans-serif')
            .print()
        ,
        newText("spacer2", "<br><br><br>")
            .print()
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
        newText("error", "Please move the slider.")
            .center()
            .css("color", "red")
            .css("margin-top", "10px")
            .css('font-family', 'Helvetica, sans-serif')
            .hidden()
            .print()
        ,
        newButton("Next")
            .center()
            .print()
            .wait(
                getScale("slider").test.selected()
                    .failure(getText("error").visible())
            )

    )
    .log( "Number" , row.Number )
    .log( "Name" , row.Name )
    .log( "Target" , row.Target )
    .log( "Group", getVar("Group"))
    .log( "LexicalType" , row.LexicalType )
    .log( "TrialType" , row.TrialType )
    .log( "Valence" , row.Valence )
    .log( "ContextCondition", row.ContextCondition)

);