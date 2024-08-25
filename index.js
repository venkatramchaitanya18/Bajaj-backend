const express = require('express');
const app = express();

app.use(express.json());

// POST route for /bfhl
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;

        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Invalid input data" });
        }

        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => isNaN(item));
        const lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase() && char.match(/[a-z]/));
        const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

        // Build the response
        const response = {
            is_success: true,
            user_id: "venkat_ram_chaitanya_25081999", // Replace with your actual full_name and DOB
            email: "your_college_email@domain.com", // Replace with your college email
            roll_number: "Your_Roll_Number", // Replace with your roll number
            numbers: numbers,
            alphabets: alphabets,
            highest_lowercase_alphabet: highestLowercaseAlphabet
        };

        res.json(response);
    } catch (error) {
        res.status(500).json({ is_success: false, message: "An error occurred" });
    }
});

// GET route for /bfhl
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
