const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

async function testAPI() {
    console.log('Testing API endpoints...\n');

    // Test Example A
    console.log('=== Example A ===');
    const exampleA = {
        data: ["a", "1", "334", "4", "R", "$"]
    };
    
    try {
        const responseA = await axios.post(`${BASE_URL}/bfhl`, exampleA);
        console.log('Request:', JSON.stringify(exampleA, null, 2));
        console.log('Response:', JSON.stringify(responseA.data, null, 2));
        console.log('Status:', responseA.status);
    } catch (error) {
        console.error('Error in Example A:', error.response?.data || error.message);
    }

    console.log('\n=== Example B ===');
    const exampleB = {
        data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
    };
    
    try {
        const responseB = await axios.post(`${BASE_URL}/bfhl`, exampleB);
        console.log('Request:', JSON.stringify(exampleB, null, 2));
        console.log('Response:', JSON.stringify(responseB.data, null, 2));
        console.log('Status:', responseB.status);
    } catch (error) {
        console.error('Error in Example B:', error.response?.data || error.message);
    }

    console.log('\n=== Example C ===');
    const exampleC = {
        data: ["A", "ABcD", "DOE"]
    };
    
    try {
        const responseC = await axios.post(`${BASE_URL}/bfhl`, exampleC);
        console.log('Request:', JSON.stringify(exampleC, null, 2));
        console.log('Response:', JSON.stringify(responseC.data, null, 2));
        console.log('Status:', responseC.status);
    } catch (error) {
        console.error('Error in Example C:', error.response?.data || error.message);
    }
}

// Run the test
testAPI().catch(console.error); 