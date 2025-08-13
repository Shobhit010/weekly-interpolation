function solution(data) {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    // Map to store sums
    const dayTotals = {};
    const known = {};
    days.forEach(day => {
        dayTotals[day] = 0;
        known[day] = false;
    });

    // Fill known values
    for (const [dateStr, value] of Object.entries(data)) {
        const date = new Date(dateStr);
        if (isNaN(date)) continue;
        let dayIndex = date.getDay();
        dayIndex = dayIndex === 0 ? 6 : dayIndex - 1; // Mon=0
        dayTotals[days[dayIndex]] += value;
        known[days[dayIndex]] = true;
    }

    // Interpolate missing values
    let i = 0;
    while (i < days.length) {
        if (!known[days[i]]) {
            // Start of gap
            let startIndex = (i - 1 + 7) % 7;
            let startValue = dayTotals[days[startIndex]];

            // Find end of gap
            let endIndex = i;
            while (!known[days[endIndex]]) {
                endIndex = (endIndex + 1) % 7;
            }
            let endValue = dayTotals[days[endIndex]];

            // Gap length
            let gapSize = (endIndex - startIndex + 7) % 7;
            for (let step = 1; step < gapSize; step++) {
                const idx = (startIndex + step) % 7;
                dayTotals[days[idx]] = startValue + (step * (endValue - startValue)) / gapSize;
                known[days[idx]] = true;
            }
            i = endIndex; // jump to end
        }
        i++;
    }

    return dayTotals;
}

module.exports = solution;
