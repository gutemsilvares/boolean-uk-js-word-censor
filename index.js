const char = "*";
const banned = ["nice", "is", "stupid", "potato"];
const sentence =
	"Lorem, ipsum dolor sit amet, is consectetur adipisicing elit, stupid ut aliquip ex ea commodo consequat. stupid, Duis aute irure dolor in reprehenderi, potato in voluptate velit esse cillum dolore, potato eu fugiat nulla pariatur";

const censor = (sentence) =>
	sentence
		.split(" ")
		.reduce(
			(acc, word) =>
				acc + " " + (banned.includes(word) ? char.repeat(word.length) : word),
			""
		);

const censored = censor(sentence).trim();

console.log(censored);
