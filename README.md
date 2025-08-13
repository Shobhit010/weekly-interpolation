# Fill Missing Weekday Values

This project contains a JavaScript solution to **fill missing weekday values** in time-series data by **linear interpolation**.  
Given a set of `(date → value)` pairs, the program calculates totals for each day of the week (Mon–Sun). If some weekdays are missing, it fills them by interpolating between the nearest known values.

---

## 📂 Project Structure
```
weekdays-interpolation/
    │
    ├── solution.js # Main logic for filling missing weekday values
    ├── test.js # Unit tests for verifying correctness
    ├── package.json 
    └── README.md # Project documentation
```

---

## 🚀 Features
- Handles **any subset of weekdays**.
- **Linear interpolation** for missing days between known values.
- Supports **negative values** and **non-sequential input dates**.
- Skips invalid date entries.
- Includes **unit tests** with multiple scenarios.

---

## 📦 Installation
1. Clone the repository:
- git clone https://github.com/yourusername/weekdays-interpolation.git
- cd weekdays-interpolation
2. Ensure you have Node.js installed:
- node -v
- If not, download from Node.js official website.

## 🛠 Usage
- Place your date-value data into an object:
```
const data = {
    "2023-01-01": -5, // Sun
    "2023-01-02": 10, // Mon
    "2023-01-03": -3  // Tue
};
const solution = require("./solution");
console.log(solution(data));
```

- Run:
```
node yourscript.js
```

- Example output:
```
{
  "Mon": 10,
  "Tue": -3,
  "Wed": -3.4,
  "Thu": -3.8,
  "Fri": -4.2,
  "Sat": -4.6,
  "Sun": -5
}
```

## 🧪 Running Tests
The test.js file contains multiple test cases:
- node test.js

Expected output:
- Test 1 passed
- Test 2 passed
- Test 3 passed

## 📚 How It Works
- Initialization – Creates a map for all 7 weekdays with 0 values.

- Populate Known Values – Reads the input dates and assigns totals to the correct weekday.

- Interpolation – Detects missing weekdays and fills them with evenly spaced values between the nearest known days.

- Return – Outputs an object with all 7 weekdays filled.

## 📄 License
- This project is open-source and available under the MIT License.
