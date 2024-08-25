# 21BCE2075_bajaj_finserv

Full Stack App
Overview
This full stack application processes JSON data arrays through a REST API and provides specific responses based on the data. The app consists of a backend developed with Flask and a frontend built with React.

Main Tasks
Backend:

Handle POST Requests: The Flask server accepts JSON arrays and processes them based on user-defined response types.
Process Data: Separates numbers and alphabets from the input array and identifies the highest lowercase alphabet if requested.
Return Responses: Provides responses based on the selected options (Numbers, Alphabets, Highest lowercase alphabet).
Frontend:

Input Field: A text area for entering JSON data.
Dropdown Menu: A multi-select dropdown allows users to choose the types of responses they want.
Submit Button: Sends the JSON data to the backend and receives the processed response.
Response Display: Shows the response from the backend based on selected options.
Installation
Backend
Clone the repository:

bash
Copy code
git clone <repository-url>
cd <repository-directory>
Create a virtual environment and install dependencies:

bash
Copy code
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
Run the Flask server:

bash
Copy code
python app.py
Frontend
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start the React development server:

bash
Copy code
npm start
Usage
Open the frontend application in your browser (http://localhost:3000).
Enter a JSON array in the text area.
Select the types of responses you want from the dropdown menu.
Click "Submit" to send the data to the backend.
View the processed response displayed on the page.
API Endpoint
POST /process

Request Body: JSON array.
Query Parameters:
response_type: Array of response types (Numbers, Alphabets, Highest lowercase alphabet).
Response: JSON object with the requested data.
Example
Request:

json
Copy code
POST /process?response_type=Numbers&response_type=Alphabets
Content-Type: application/json

[1, "a", "b", 2, "C", 3, "d"]
Response:

json
Copy code
{
  "Numbers": [1, 2, 3],
  "Alphabets": ["a", "b", "C", "d"]
}
