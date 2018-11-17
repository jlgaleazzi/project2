import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

##app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///data/deaths.db"
##db = SQLAlchemy(app)
##Base = automap_base()
##Base.prepare(db.engine, reflect=True)

##death_data = Base.classes.reducedDeaths



@app.route("/")
def index():
    return render_template("index.html")

@app.route("/diseases")
def diseases():
    return render_template('diseases.html')

@app.route('/years/<year>')
def years(year):
    return render_template('years.html')

@app.route('/months/<month>')
def months():
    return render_template('months.html')

if __name__ == "__main__":
    app.run()