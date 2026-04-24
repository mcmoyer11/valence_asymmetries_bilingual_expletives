newTrial("demo",

    newHtml("bg_form", "demo.html")
        .checkboxWarning("Please answer this question.")
        .radioWarning("Please select an option.")
        .inputWarning("Please answer this question.")
        .log()          // <-- this logs all input values from the form
        .print()
    ,

    newText("globalWarning", "Please answer all required questions to proceed.")
        .color("red")
        .center()
        .print()
        .remove()
    ,

    newButton("Next", "Next")
        .center()
        .print()
        .wait(
            getHtml("bg_form").test.complete()
                .failure(
                    getHtml("bg_form").warn(),
                    getText("globalWarning").print()
                )
        )
)
.setOption("hideProgressBar", true);
