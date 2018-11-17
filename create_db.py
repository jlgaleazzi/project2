import os
import pandas as pd 
import json
import sqlite3
import csv
from pathlib import Path
from sqlalchemy import create_engine

def add_file_to_db(file):
    # create table 
    cursor.execute('''CREATE TABLE IF NOT EXISTS reducedDeaths(id INTEGER PRIMARY KEY, month_of_death TEXT,\
    sex TEXT, age_recode_12 TEXT, marital_status TEXT, day_of_the_week_death TEXT, current_data_year TEXT,\
    manner_of_death TEXT, activity_code TEXT, race TEXT, hispanic_originrace_recode TEXT) WITHOUT ROWID''')
    db.commit()
    year = file.split('_')
    fPath = 'mortality/' +file 
    deaths_df = pd.read_csv(fPath, encoding="utf-8",low_memory=False)
    deaths_df["day_of_week_of_death"] = deaths_df["day_of_week_of_death"].astype(str)
    deaths_df["month_of_death"] = deaths_df["month_of_death"].astype(str)
    deaths_df["age_recode_12"] = deaths_df["age_recode_12"].astype(str)
    deaths_df["manner_of_death"] = deaths_df["manner_of_death"].astype(str)
    deaths_df["activity_code"] = deaths_df["activity_code"].astype(str)
    deaths_df["hispanic_originrace_recode"] = deaths_df["hispanic_originrace_recode"].astype(str)
    deaths_df["race"] = deaths_df["race"].astype(str)
    deaths_df["current_data_year"] = year[0]
    reduced_deaths_df = deaths_df[["month_of_death", "sex", "age_recode_12", "marital_status",
        "day_of_week_of_death", "current_data_year", "manner_of_death", "activity_code", 
        "race", "hispanic_originrace_recode"]]
    print(reduced_deaths_df.head(10))
    reduced_deaths_df.to_sql('reduced_deaths_df', db, if_exists="append",index=False)

sourceFilesDir = 'mortality'
p = Path(sourceFilesDir)

# create db connection
db = sqlite3.connect('data/deaths.db')
cursor = db.cursor()
engine = create_engine('sqlite://', echo=False)
for i in p.glob('*.csv'):
    add_file_to_db(i.name)
    

