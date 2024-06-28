const KEBAB_REGEX = /\p{Lu}/gu;
const REVERSE_REGEX = /-\p{Ll}/gu;

/**
 * Transforms a string into kebab-case.
 *
 * @example
 * kebabCase("helloWorld"); // "hello-world"
 * kebabCase("HelloWorld"); // "-hello-world"
 * kebabCase("HelloWorld", false); // "hello-world"
 *
 * @param {string} str The string to transform
 * @param {boolean} keepLeadingDash Whether to keep the leading dash in case the string starts with an uppercase letter (default: true)
 * @returns The kebab-cased string
 */
const kebabCase = (str, keepLeadingDash = true) => {
	const result = str.replace(KEBAB_REGEX, (match) => `-${match.toLowerCase()}`);

	if (keepLeadingDash) {
		return result;
	}

	if (result.startsWith("-")) {
		return result.slice(1);
	}
};

/**
 * Transforms a kebab-cased string back to the original string.
 *
 * @example
 * kebabCase.reverse("hello-world"); // "helloWorld"
 *
 * @param {string} str
 * @returns The original string, with the kebab-case transformation reversed
 */
kebabCase.reverse = (str) => str.replace(REVERSE_REGEX, (match) => match.slice(1).toUpperCase());

export default kebabCase;
