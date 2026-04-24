Template(GetTable("words_eng.csv"),
    row => newTrial("rating_task",
    
    newVar("Group").set(row.Group).log(),// <- Log the 'Group' value
    newVar("Word").set(row.Word).log(),
    
    newText("word", "<b>" + row.Word + "<b>")
      .center()
      .css("font-size", "35px")
      .css('font-family', 'Helvetica, sans-serif')
      .print()
    ,
    newText("spacer1","<br><br>").print()
    ,
    newScale("likert_valence", 9)
      .center()
      .labelsPosition("top")
      .before(
                newText("left", "unhappy")
                    .css("margin-right", "20px")
                    .css('font-family', 'Helvetica, sans-serif')
                    )
            .after(
                newText("right", "happy")
                    .css("margin-left", "20px")
                    .css('font-family', 'Helvetica, sans-serif')
                    )
      .log()
      .print()
    ,
    newText("spacer1","<br><br>").print()
    ,
    newScale("likert_arousal", 9)
      .center()
      .labelsPosition("top")
      .before(
                newText("left", "calm")
                    .css("margin-right", "20px")
                    .css('font-family', 'Helvetica, sans-serif')
                    )
            .after(
                newText("right", "excited")
                    .css("margin-left", "20px")
                    .css('font-family', 'Helvetica, sans-serif')
                    )
      .log()
      .print()
    ,
    newText("error", "Please enter a rating.")
      .center()
      .settings.css("color", "red")
      .css('font-family', 'Helvetica, sans-serif')
      .settings.css("margin-top", "20px")
      .hidden()
      .print()
    ,
    newHtml("checkbox_html", `
      <label style="user-select:none; cursor:pointer; margin-top: 15px; display:inline-block;">
        <input type="checkbox" id="not_fit_checkbox" style="margin-right: 6px; vertical-align: middle;">
        I don't understand this word.
      </label>
    `)
      .center()
      .print()
    ,
    newButton("Next")
      .center()
      .print()
      .wait(
          getScale("likert_valence").test.selected()
            .and( getScale("likert_arousal").test.selected() )
            .failure( getText("error").visible() )
        )
    ,
    // Capture and log checkbox value explicitly
    newVar("notFit")
      .set(() => {
        const checkbox = document.getElementById("not_fit_checkbox");
        return checkbox && checkbox.checked ? "yes" : "no";
      })
      .log()
  )
);
