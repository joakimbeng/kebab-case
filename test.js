"use strict";
const { test } = require("zora");
const kebabCase = require("./");

test("string with uppercased letters", (t) => {
	t.equal(kebabCase("helloWorld"), "hello-world");
	t.equal(kebabCase("hello World!"), "hello -world!");
});

test("string without uppercased letters", (t) => {
	t.equal(kebabCase("hello world"), "hello world");
	t.equal(kebabCase("-- hello world --"), "-- hello world --");
});

test("string with leading uppercased letters", (t) => {
	t.equal(kebabCase("WebkitTransform"), "-webkit-transform");
	t.equal(kebabCase("Mr. Kebab"), "-mr. -kebab");
});

test("string with international uppercased letters", (t) => {
	t.equal(kebabCase("ølÜberÅh"), "øl-über-åh");
	t.equal(kebabCase("Érnest"), "-érnest");
});

test("the reverse", (t) => {
	const str = "Hallå, Mr. Kebab Überstein! How you doin'?-";
	t.equal(kebabCase.reverse(kebabCase(str)), str);
});

test("string with leading dash", (t) => {
	const str = "KebabCase";
	t.equal(kebabCase(str, false), "kebab-case");
})

test("string reverse without leading dash", (t) => {
	const str = "-kebab-case";
	t.equal(reverse(str), "KebabCase");
})