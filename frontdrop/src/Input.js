import './Input.css';

import React, { useState } from 'react';

const FormComponent = () => {
    const [textInput, setTextInput] = useState('');
    const [numberInput, setNumberInput] = useState(1);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const payload = {
            address: textInput,
            coins: numberInput
        };

        try {
            const response = await fetch('http://localhost:9000/airdrop', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
                // Reset the form fields
                setTextInput('');
                setNumberInput(1);
            } else {
                console.error('Error:', response.statusText);
                const errorData = await response.json();
                alert(errorData.message);
                // Reset the form fields
                setTextInput('');
                setNumberInput(1);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while processing your request.');
            // Reset the form fields
            setTextInput('');
            setNumberInput(1);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '20px' }}>
            <input 
                type="text" 
                value={textInput} 
                onChange={(e) => setTextInput(e.target.value)} 
                placeholder="Enter text" 
                style={{ width: '500px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <select 
                value={numberInput} 
                onChange={(e) => setNumberInput(Number(e.target.value))} 
                style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            >
                {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                ))}
            </select>
            <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', background: '#007bff', color: '#fff' }}>
                Submit
            </button>
        </form>
    );
};

export default FormComponent;
