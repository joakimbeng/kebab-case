import { test } from "node:test";
import assert from "node:assert";
import kebabCase from "./index.js";

test("string with uppercased letters", () => {
	assert.strictEqual(kebabCase("helloWorld"), "hello-world");
	assert.strictEqual(kebabCase("hello World!"), "hello -world!");
});

test("string without uppercased letters", () => {
	assert.strictEqual(kebabCase("hello world"), "hello world");
	assert.strictEqual(kebabCase("-- hello world --"), "-- hello world --");
});

test("string with leading uppercased letters", () => {
	assert.strictEqual(kebabCase("WebkitTransform"), "-webkit-transform");
	assert.strictEqual(kebabCase("Mr. Kebab"), "-mr. -kebab");
});

test("string with leading uppercased letters when ditching the leading slash", () => {
	assert.strictEqual(kebabCase("WebkitTransform", false), "webkit-transform");
	assert.strictEqual(kebabCase("Mr. Kebab", false), "mr. -kebab");
});

test("string without leading uppercased letters when ditching the leading slash", () => {
	assert.strictEqual(kebabCase("webkitTransform", false), "webkit-transform");
	assert.strictEqual(kebabCase("mr. Kebab", false), "mr. -kebab");
});

test("string with international uppercased letters", () => {
	assert.strictEqual(kebabCase("ølÜberÅh"), "øl-über-åh");
	assert.strictEqual(kebabCase("Érnest"), "-érnest");
});

test("the reverse", () => {
	const str = "Hallå, Mr. Kebab Überstein! How you doin'?-";
	assert.strictEqual(kebabCase.reverse(kebabCase(str)), str);
});
