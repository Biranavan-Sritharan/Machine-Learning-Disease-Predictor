import pandas as pd
from pyodide.http import open_url

df = pd.read_csv(open_url("https://raw.githubusercontent.com/Biranavan-Sritharan/testcsvstuff/main/diabetes.csv"))

def sub (*args, **kwargs):
    html = Element('output')
    html.write(f"{Element('name').value} is cool and so is this as well {Element('countries').value}")

    

    #csv = Element('csv')
    #csv.write(df)

#table = "TB_burden_age_sex_2024-06-02.csv"
#df = pd.read_csv(table) #df means dataframe (var name that is)

