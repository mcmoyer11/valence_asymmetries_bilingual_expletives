newTrial("consent",

    newHtml("consent_form", "consent.html")
        .cssContainer({"width":"720px"})
        .checkboxWarning("Consent is required to proceed.")
        .print()
    ,

    // This text will be used as a global inline warning (initially hidden)
    newText("warning", "Consent is required to proceed.")
        .color("red")
        .center()
        .print()
        .remove()
    ,

    newButton("Next", "Next")
        .center()
        .print()
        .wait(
            getHtml("consent_form").test.complete()
                .failure(
                    getHtml("consent_form").warn(),   // shows red text near each unchecked box
                    getText("warning").print()        // or just this line if you only want one message
                )
        )
)
.setOption("hideProgressBar", true);
