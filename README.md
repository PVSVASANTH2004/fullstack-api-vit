# Full Stack API - VIT Assignment

A REST API that processes arrays and categorizes elements into different types (numbers, alphabets, special characters) with specific formatting requirements.

## Features

- **POST /bfhl** - Main endpoint that processes data arrays
- **GET /bfhl** - Returns operation_code: 1
- **GET /** - Health check endpoint

## API Endpoints

### POST /bfhl
Processes an array of data and returns categorized results.

**Request Body:**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "aditya_ponukumati_29082025",
  "email": "aditya.ponukumati2021@vitstudent.ac.in",
  "roll_number": "21BCE1234",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Logic Implementation

1. **Numbers**: Categorized as odd or even, sum calculated
2. **Alphabets**: Converted to uppercase (handles multi-character strings)
3. **Special Characters**: Everything that's not numeric or alphabetic
4. **Concatenation**: All alphabets concatenated, reversed, with alternating caps

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Test the API:
```bash
node test.js
```

## Deployment

### Option 1: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`

### Option 2: Railway
1. Connect your GitHub repository
2. Railway will auto-deploy

### Option 3: Render
1. Connect your GitHub repository
2. Set build command: `npm install`
3. Set start command: `npm start`

## Environment Variables

- `PORT` - Server port (default: 3000)

## Testing

Run the test script to verify all examples work correctly:
```bash
node test.js
```

## Examples

### Example A
Input: `["a", "1", "334", "4", "R", "$"]`
Expected: `{"odd_numbers": ["1"], "even_numbers": ["334", "4"], "alphabets": ["A", "R"], "special_characters": ["$"], "sum": "339", "concat_string": "Ra"}`

### Example B
Input: `["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]`
Expected: `{"odd_numbers": ["5"], "even_numbers": ["2", "4", "92"], "alphabets": ["A", "Y", "B"], "special_characters": ["&", "-", "*"], "sum": "103", "concat_string": "ByA"}`

### Example C
Input: `["A", "ABcD", "DOE"]`
Expected: `{"odd_numbers": [], "even_numbers": [], "alphabets": ["A", "ABCD", "DOE"], "special_characters": [], "sum": "0", "concat_string": "EoDdCbAa"}` 