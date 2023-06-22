# Currency Converter Web Application

This is a simple currency converter web application built using Flask for the backend and HTML, CSS, and JavaScript for the frontend.

## Features

- Users can input an amount and select two currencies to convert between.
- Real-time exchange rates fetched from the ExchangeRate-API.
- Simple and intuitive user interface.

## How to Run

1. Clone this repository: `git clone https://github.com/abraaopedra/currency-converter.git`

2. Navigate to the project directory: `cd currency-converter`

3. Install all required Python packages: `pip install -r requirements.txt`

4. Set the environment variable for the ExchangeRate-API key:
   - On Windows, use: `setx EXCHANGE_RATE_API_KEY "your_api_key"`
   - On Linux/Mac, use: `export EXCHANGE_RATE_API_KEY=your_api_key`
   
   Replace `your_api_key` with your actual API key.

5. Run the application: `python app.py`

6. Open a web browser and navigate to `http://127.0.0.1:5000`

## Dependencies

- Flask
- flask_cors

## Contributing

Feel free to fork this repository and make improvements. Pull requests are welcome.
