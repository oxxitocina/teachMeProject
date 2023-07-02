async function getQuestions(topic) {
    const responseInfo = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        "Authorization": "Bearer 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",
      },
      body: JSON.stringify({
          "model": "gpt-3.5-turbo",
          "messages": [{"role": "user", "content": `Write to me about ${topic} using headlines and number and a dot. Write exactly 5 subtopics. Each subtopic must contain at least 200 words. Do not repeat. Subtopics must always end with ':::'. For example:

          1. Anatomy of white sharks:::
          They have powerful fins. They swim fast
          
          2. The life of white sharks:::
          They live in the ocean and do not know fear. They are afraid to turn over`}],
          "temperature": 0.7
      })
    })

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          "Authorization": "Bearer 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",
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": `Write me a quiz of ten questions with four possible answers about ${topic} with different answers. also specify the correct answer for each. The question should always start with a number and a dot. Example:
            1. What is the main selling point of Romanovsky Products' sandwiches?\na) They are made with only the freshest ingredients and are always packed with flavor\nb) They are the cheapest sandwiches on the market\nc) They are pre-made and ready to go\nd) None of the above\n\nCorrect answer: a) They are made with only the freshest ingredients and are always packed with flavor"`}],
            "temperature": 0.7
        })
      })

    const resultInfo = await responseInfo.json();
    const result = await response.json();
    console.log(resultInfo.choices[0].message)
    return {...result.choices[0].message, info: resultInfo.choices[0].message?.content}
}

export {
    getQuestions
}