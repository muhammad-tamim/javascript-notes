## 9. Quantifiers

Quantifiers specify **how many times** a character or group should appear.

| Quantifier | Meaning         |
| ---------- | --------------- |
| *          | 0 or more       |
| +          | 1 or more       |
| ?          | 0 or 1          |
| {n}        | Exactly n       |
| {n,}       | At least n      |
| {n,m}      | Between n and m |

Examples:

```js
/a*/.test("");      // true
/a+/.test("aaa");  // true
/a{2}/.test("aa"); // true
```

---

## 10. Anchors


| Anchor | Meaning         |
| ------ | --------------- |
| ^      | Start of string |
| $      | End of string   |

```js
/^hello/.test("hello world"); // true
/world$/.test("hello world"); // true
```

---

## 11. Groups `( )`


```js
/(ab)+/.test("abab"); // true
```

Capturing groups:

```js
const result = "2025-12-31".match(/(\d{4})-(\d{2})-(\d{2})/);
// ["2025-12-31", "2025", "12", "31"]
```

---

## 12. Alternation `|`

Acts like logical OR.

```js
/(cat|dog)/.test("dog"); // true
```

---

## 13. Escaping Characters


```js
/\./.test("."); // true
/\+/.test("+"); // true
```

---

## 14. Lookaheads


### Positive Lookahead

```js
/(?=.*\d)/.test("abc1"); // true
```

### Negative Lookahead

```js
/(?!.*\d)/.test("abc"); // true
```

---

## 15. Practical Validation Examples

### Email Validation

```js
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

### Phone Number (Bangladesh ‑ 11 digits)

```js
/^01\d{9}$/
```

### Strong Password

```js
/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
```

---

## 16. Common RegEx Mistakes

* Forgetting global flag `g`
* Over‑complicated patterns
* Using RegEx when simple string methods work

---

## 17. When to Use RegEx

Use RegEx when:

* Pattern matching is required
* Validation rules are complex
* Data extraction is needed

Avoid RegEx when:

* `includes()`, `startsWith()`, or `endsWith()` is enough

---

## 18. Summary

Regular Expressions are a **powerful but sharp tool**. Learn them step by step, practice regularly, and always prioritize readability.

---

**End of Documentation**