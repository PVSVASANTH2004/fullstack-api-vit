const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Helper function to check if a character is alphabetic
function isAlphabet(char) {
    return /^[a-zA-Z]$/.test(char);
}

// Helper function to check if a string is numeric
function isNumeric(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}

// Helper function to check if a string contains only alphabets
function isOnlyAlphabets(str) {
    return /^[a-zA-Z]+$/.test(str);
}

// Helper function to create alternating caps string
function createAlternatingCaps(alphabets) {
    // Concatenate all alphabets and convert to lowercase
    let allChars = '';
    alphabets.forEach(item => {
        if (typeof item === 'string') {
            allChars += item.toLowerCase();
        }
    });
    
    // Reverse the string
    const reversed = allChars.split('').reverse().join('');
    
    // Apply alternating caps (starting with lowercase)
    let result = '';
    for (let i = 0; i < reversed.length; i++) {
        if (i % 2 === 0) {
            result += reversed[i].toLowerCase();
        } else {
            result += reversed[i].toUpperCase();
        }
    }
    
    return result;
}

// POST endpoint for /bfhl
app.post('/bfhl', (req, res) => {
    try {
        // Check if request body exists
        if (!req.body) {
            return res.status(400).json({
                is_success: false,
                message: "Request body is required"
            });
        }
        
        const { data } = req.body;
        
        // Validate input
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                message: "Invalid input: 'data' should be an array"
            });
        }
        
        // Initialize arrays
        const oddNumbers = [];
        const evenNumbers = [];
        const alphabets = [];
        const specialCharacters = [];
        let sum = 0;
        
        // Process each element in the data array
        data.forEach(item => {
            const str = String(item);
            
            if (isNumeric(str)) {
                const num = parseInt(str);
                sum += num;
                
                if (num % 2 === 0) {
                    evenNumbers.push(str);
                } else {
                    oddNumbers.push(str);
                }
            } else if (isOnlyAlphabets(str)) {
                // If string contains only alphabets (single or multiple characters)
                alphabets.push(str.toUpperCase());
            } else {
                // Everything else is a special character
                specialCharacters.push(str);
            }
        });
        
        // Create concatenated string with alternating caps
        const concatString = createAlternatingCaps(alphabets);
        
        // Response object
        const response = {
            is_success: true,
            user_id: "aditya_ponukumati_29082025", // Format: full_name_ddmmyyyy
            email: "aditya.ponukumati2021@vitstudent.ac.in", // Your VIT email
            roll_number: "21BCE1234", // Your actual roll number
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialCharacters,
            sum: sum.toString(),
            concat_string: concatString
        };
        
        res.status(200).json(response);
        
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
            is_success: false,
            message: "Internal server error"
        });
    }
});

// GET endpoint for /bfhl (optional, for testing)
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Full Stack API is running!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 