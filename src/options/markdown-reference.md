# Markdown Reference

## What is Markdown?

Markdown is a lightweight markup language with plain text formatting syntax. It is designed so that it can be converted to HTML and many other formats using a tool by the same name. Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor. For more info, see [Wikipedia][1].

[1]: https://en.wikipedia.org/wiki/Markdown

<hr>

## Basics

To make text _italicized_, wrap the text between single astericks (\*) or single underscores (\_).

To make text **bold**, wrap the text between double astericks (\*\*) or double underscores (\_\_).

To make a new paragraph, insert a blank line between lines of text.

> To make text in block quote, add an angle bracket before the text.
>
> > You can also add multiple levels of block quotes with multiple leading angle brackets.

To distinguish code from the rest of your text, such as `React.createStore()`, wrap the code in between backticks (`).

To add a horizontal line, simply put 3 or more hypens, astericks, or underscores on their own line.

If you want, you may also use inline HTML to format text.

---

## Headings

There are a few ways to make headings in Markdown.

# H1

Three or more equal signs (===) underneath the H1 heading, or a single pound sign (#) before the heading.

## H2

Three or more hypens (---) underneath the H2 heading, or two pound signs (##) before the heading.

### H3

Three pound signs (###) before the H3 heading.

#### H4

Four pound signs (####) before the H4 heading.

##### H5

Five pound signs (#####) before the H5 heading.

###### H6

Six pound signs (######) before the H6 heading. Note that pound signs after the heading are ignored for all headings.

<hr>

## Links

To add links, use one of the following methods:

- Simply wrap the URL between angle brackets: <http://www.google.com>
- Inline links contain text between brackets, with the URL immediately following inline in between parentheses, like so: [Kyle's Portfolio](https://kyleyasumiishi.github.io/portfolio/)
- Reference-style links are similar to inline links, except they contains a reference in brackets following the text, like so: [Kyle's GitHub][2]
- Pretty links are pretty sweet. All you need to do is wrap the link text between brackets, and define the link's url anywhere else in the document. For more info, check out Marked's [Markdown Quick Reference].

[2]: https://github.com/kyleyasumiishi
[markdown quick reference]: https://marked.js.org/#/README.md#demo

<hr>

## Lists

To create an unordered list, you can use asterisks (\*), hyphens (-), and plus symbols (+), like so:

This project was built with several technologies, including:

- React

* Redux

- JavaScript

To create an ordered list, simply start the list with a number.

A few things I learned:

1.  Markdown
2.  Redux
3.  CSS Flex property
