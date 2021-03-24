function checkApi() {

    fetch ('https://opentdb.com/api.php?amount=10')

    .then(function(response) {
        return response.json()
        .then(function(triviaData) {
            console.log(triviaData)

            //var for question
            
            var questionOne = (triviaData.results[0].question)
            console.log(questionOne)

            //var for answer

            var answerOne = (triviaData.results[0].correct_answer)
            console.log(answerOne)

            //var for difficulty

            var difficultyOne = (triviaData.results[0].difficulty)
            console.log(difficultyOne)

            //var for category

            var categoryOne = (triviaData.results[0].category)
            console.log(categoryOne)

            //var for type, i.e. multiple or boolean

            var typeOne = (triviaData.results[0].type)
            console.log(typeOne)

            //var for incorrect answers, one result for T/F, 3 results for multiple choice

            var incAnsOne = (triviaData.results[0].incorrect_answers)
            console.log(incAnsOne)

            /*
            or it could be done as 

            var incAnsOneA = (triviaData.results[0].incorrect_answers[0])
            console.log(incAnsOne)

            var incAnsOneB = (triviaData.results[0].incorrect_answers[1])
            console.log(incAnsOne)

            var incAnsOneC = (triviaData.results[0].incorrect_answers[2])
            console.log(incAnsOne)

            */
        }
    )}
    )


        fetch ('https://api.giphy.com/v1/gifs/search?q=happy&rating=g&api_key=yhspGREo8A4hP2vDCFvpE5d93COdKp5R')

        .then(function(response) {
            return response.json()
            .then(function(happyGif) {
                console.log(happyGif)

                //var to make a happy gif, should iterate to the next 'happy' gif in the array afterwards can test by repeating the variable, it does work

                let i = 0;
                var happyGifOne = (happyGif.data[i].images.original.url)
                console.log(happyGifOne)
                i++;
            })
        })


        fetch ('https://api.giphy.com/v1/gifs/search?q=sad&rating=g&api_key=yhspGREo8A4hP2vDCFvpE5d93COdKp5R')

        .then(function(response) {
            return response.json()
            .then(function(sadGif) {
                console.log(sadGif)

                //var to make a sad gif, should iterate to the next 'sad' gif in the array afterwards can test by repeating the variable, it does work

                let i = 0;
                var sadGifOne = (sadGif.data[i].images.original.url)
                console.log(sadGifOne)
                i++;
            })
        })

        fetch ('https://api.giphy.com/v1/gifs/search?q=celebration&rating=g&api_key=yhspGREo8A4hP2vDCFvpE5d93COdKp5R')

        .then(function(response) {
            return response.json()
            .then(function(celebrateGif) {
                console.log(celebrateGif)

                //var to make a celebrating gif, does not iterate, intended for high score screen
                var celebrateGifOne = (celebrateGif.data[0].images.original.url)
                console.log(celebrateGifOne)
            })
        })
}
