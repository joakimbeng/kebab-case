export default kebabCase;
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
declare function kebabCase(str: string, keepLeadingDash?: boolean): string;
declare namespace kebabCase {
    /**
     * Transforms a kebab-cased string back to the original string.
     *
     * @example
     * kebabCase.reverse("hello-world"); // "helloWorld"
     *
     * @param {string} str
     * @returns The original string, with the kebab-case transformation reversed
     */
    function reverse(str: string): string;
}
