const expressAsyncHandler = require("express-async-handler");
const { openai } = require("../config/openAi");

exports.runCompletion = expressAsyncHandler(async (text) => {
	const completion = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: text,
		max_tokens: 150,
		temperature: 1,
		top_p: 1,
		n: 1,
		stream: false,
		logprobs: null,
	});
	return completion.data.choices[0].text;
});
