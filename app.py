from flask import Flask,json,request
import logging

logging.basicConfig(level=logging.DEBUG)

app= Flask(name)

@app.route('/')
def index():
    return "<p>Hello, World</p>"
    