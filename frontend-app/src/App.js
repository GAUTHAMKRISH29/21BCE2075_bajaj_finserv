import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import axios from 'axios';

function App() {
  const [jsonInput, setJsonInput] = useState('');
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleInputChange = (e) => {
    setJsonInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const parsedInput = JSON.parse(jsonInput);
      const payload = { data: parsedInput.data };
      const { data } = await axios.post('https://backend-linked.onrender.com/bfhl', payload);
      setResponse(data);
    } catch (error) {
      alert('Invalid JSON or API request failed');
    }
  };

  const handleSelectChange = (e) => {
    const options = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedOptions(options);
  };

  const renderResponse = () => {
    if (!response) return null;
    const { numbers, alphabets, highest_lowercase_alphabet } = response;
    return (
      <div>
        {selectedOptions.includes('Alphabets') && (
          <p>Alphabets: {alphabets.join(', ')}</p>
        )}
        {selectedOptions.includes('Numbers') && (
          <p>Numbers: {numbers.join(', ')}</p>
        )}
        {selectedOptions.includes('Highest lowercase alphabet') && (
          <p>Highest Lowercase Alphabet: {highest_lowercase_alphabet.join(', ')}</p>
        )}
      </div>
    );
  };

  return (
    <div className="App">
      <h1>JSON Input</h1>
      <textarea
        rows="5"
        cols="50"
        value={jsonInput}
        onChange={handleInputChange}
        placeholder='Enter JSON here (e.g., {"data": ["A", "C", "z"]})'
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>

      {response && (
        <div>
          <h2>Select Response Options</h2>
          <select multiple={true} onChange={handleSelectChange}>
            <option value="Alphabets">Alphabets</option>
            <option value="Numbers">Numbers</option>
            <option value="Highest lowercase alphabet">Highest lowercase alphabet</option>
          </select>
        </div>
      )}

      <div>
        {renderResponse()}
      </div>
    </div>
  );
}

export default App;
