newTrial("intro",

    newText("There are three sections to the experiment:")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .print()
    ,
    newText("<br><br>")
        .center()
        .print() 
    ,
    newText("<b>Part 1: Judging the stories.</b> There are 48 short statements which you will need to judge.")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .print()
    ,
    newText("<br><br>")
        .center()
        .print() 
    ,
    newText("<b>Part 2: Rating the words.</b> There are 26 words that you will be asked to rate and judge on two dimensions. You will also be asked to complete a comprehension check.")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .print()
    ,
    newText("<br><br>")
        .center()
        .print() 
    ,
    newText("<b>Part 3: Language Experience.</b> There is a short questionnaire which asks you a range of questions about your knowledge of both English and Italian and things like the country you are living in so that we can understand how you use your languages better.")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .print()
    ,
    newText("<br><br>")
        .center()
        .print() 
    ,
    newButton("continue")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "12pt")
        .print()
        .wait()
    );

newTrial("instructions1",

    newText("PART 1")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "25pt")
        .print()
    ,
    newText("<br><br>")
        .center()
        .print() 
    ,

    newText("In this task, you will read a series of short scenarios involving fictional people. Each scenario includes some background information and a statement made by one of the characters. Some items contain rude or offensive language for research purposes.")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .print()
    ,
    newText("<br><br>")
        .center()
        .print() 
    ,
    newText("Your task is to judge how acceptable the speaker’s statement is in that situation. There are no right or wrong answers. We are interested in your immediate judgment. Please read each scenario carefully and focus on whether the utterance fits the context.")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .print()
    ,
    newText("<br><br>")
        .center()
        .print() 
    ,
    newText("The response should be based on your own feelings. For example, a statement can be offensive or impolite and still seem acceptable in that context. Likewise, a statement can seem unacceptable if it does not fit the situation. Judge based on whether the speaker’s statement fits the situation you have just read.")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .print()
    ,
    newText("<br><br>")
        .center()
        .print() 
    ,
    newText("There are no right or wrong answers. Please answer based on your first impression.")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .print()
    ,
    newText("<br><br>")
        .center()
        .print() 
    ,
    newText("Before starting, let's practice with the slider briefly.")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .print()
    ,
    newText("<br><br>")
        .center()
        .print() 
    ,
    newButton("continue")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "12pt")
        .print()
        .wait()
    );
    
 
 
newTrial("p1_intro",

    newText("Great! Now you're ready for the first part of the experiment.")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .print()
    ,  
    newText("<br><br>")
        .center()
        .print() 
    ,
    newButton("continue")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "12pt")
        .print()
        .wait()
    );    

//  Mid experiment break 
newTrial("p2_intro",

    newText("Great! Now you're ready for the second part of the experiment.")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .print()
    ,  
    newText("<br><br>")
        .center()
        .print() 
    ,
    newButton("continue")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "12pt")
        .print()
        .wait()
    );    
    
newTrial("instructions3",
    newText("PART 2")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "25pt")
        .print()
    ,
    newText("<br><br>")
        .center()
        .print() 
    ,
    newText("You will use a scale to rate how you felt while reading each word. There will be 26 words.")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .print()
    ,
    newText("<br><br>")
        .center()
        .print() 
    ,
    newText("There are two scales. Both scales range from 1 to 9. Instructions appear below.")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .print()
    ,
    newText("<br><br>")
        .center()
        .print() 
    ,
    newText("Think about how you feel when you read the below word. The scale ranges from unhappy (1) to happy (9). When you feel completely happy you should indicate this by choosing rating (9). You can indicate feeling completely unhappy by selecting (1).")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .print()
    ,
    newText("<br><br>")
        .center()
        .print() 
    ,
    newText("Think about how you feel when you read the below word. The scales range from calm (1) to excited (9). Choose (9) if you feel stimulated, excited, frenzied, jittery, wide-awake, or aroused. On the other end of the scale, chose (1) if you feel controlled, relaxed, calm, sluggish, dull, sleepy, or unaroused.")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .print()
    ,
    newText("<br><br>")
        .center()
        .print() 
    ,
    newText("If you feel completely neutral, neither happy nor sad [or not excited nor at all calm], select the middle of the scale (rating 5).")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .print()
    ,
    newText("<br><br>")
        .center()
        .print() 
    ,
    newText("For example, the word 'love' might make you feel happy, so you should rate it towards the higher end (9). In contrast, the word 'hate' might make you feel unhappy, so you should rate it towards the lower end (1).")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .print()
    ,
    newText("<br><br>")
        .center()
        .print() 
    ,
    newText("For another word, like 'pen' might make you feel pretty calm so you should rate it towards the lower end (1) of the second scale; while the word 'crash' might make you feel excited so you should rate that towards the higer end (9).")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .print()
    ,
    newText("<br><br>")
        .center()
        .print() 
    ,
    
    newButton("continue")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "12pt")
        .print()
        .wait()
    );  
    

newTrial("p3intro",

    newText("Great! Now you're ready for the third part of the experiment.")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .print()
    ,  
    newText("<br><br>")
        .center()
        .print() 
    ,
    newButton("continue")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "12pt")
        .print()
        .wait()
    );
    
    
newTrial("intro_leapq",
    newText("PART 3")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "25pt")
        .print()
    ,
    newText("<br><br>")
        .center()
        .print() 
    ,
    newText("Please answer this a short questionnaire which asks you a range of questions about your knowledge of both English and Italian and things like the country you are living in so that we can understand how you use your languages better.")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "16pt")
        .print()
    ,  
    newText("<br><br>")
        .center()
        .print() 
    ,
    newButton("continue")
        .center()
        .css('font-family', 'Arial, Helvetica, sans-serif')
        .css("font-size", "12pt")
        .print()
        .wait()
    );    
    