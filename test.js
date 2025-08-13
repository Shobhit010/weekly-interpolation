// test.js
const assert = require("assert");
const solution = require("./solution");

// Test 1: Basic Example
(() => {
    const input = {
        "2020-01-01": 4,  // Wed
        "2020-01-02": 4,  // Thu
        "2020-01-03": 6,  // Fri
        "2020-01-04": 8,  // Sat
        "2020-01-05": 2,  // Sun
        "2020-01-06": -6, // Mon
        "2020-01-07": 2,  // Tue
        "2020-01-08": -2  // Wed
    };
    const output = solution(input);
    assert.deepStrictEqual(output, {
        "Mon": -6,
        "Tue": 2,
        "Wed": 2,
        "Thu": 4,
        "Fri": 6,
        "Sat": 8,
        "Sun": 2
    });
    console.log("Test 1 passed");
})();

// Test 2: Missing Days (Thu & Fri)
(() => {
    const input = {
        "2020-01-01": 6,  // Wed
        "2020-01-04": 12, // Sat
        "2020-01-05": 14, // Sun
        "2020-01-06": 2,  // Mon
        "2020-01-07": 4   // Tue
    };
    const output = solution(input);
    assert.deepStrictEqual(output, {
        "Mon": 2,
        "Tue": 4,
        "Wed": 6,
        "Thu": 8,
        "Fri": 10,
        "Sat": 12,
        "Sun": 14
    });
    console.log("Test 2 passed");
})();

// Test 3: Handles negative values
(() => {
    const input = {
        "2023-01-01": -5, // Sun
        "2023-01-02": 10, // Mon
        "2023-01-03": -3, // Tue
    };
    const output = solution(input);
    assert.strictEqual(output.Mon, 10);
    assert.strictEqual(output.Tue, -3);
    assert.strictEqual(output.Sun, -5);
    console.log("Test 3 passed");
})();
