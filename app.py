from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('jarroabacaxi')
def jarroabacaxi():
    return render_template('jarroabacaxi.html')

@app.route('copostanley')
def copostanley():
    return render_template('copostanley.html')

@app.route ('copoamericano')
def copoamericano():
    return render_template('copoamericano.html')

@app.route ('coporequeijao')
def coporequeijao():
    return render_template('coporequeijao.html')

@app.route ('garrafamole')
def garrafamole():
    return render_template('garrafamole.html')

@app.route ('sobre')
def sobre():
    return render_template('sobre.html')

if __name__ == "__main__":
    app.run(debug=True)