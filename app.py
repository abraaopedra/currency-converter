from flask import Flask, render_template
from flask_cors import CORS, cross_origin

CURRENCIES = ['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD']  # Top 10 most traded currencies

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html', currencies=CURRENCIES)

if __name__ == '__main__':
    app.run(debug=True)
