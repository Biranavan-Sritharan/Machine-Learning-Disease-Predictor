import pandas as pd
from pyodide.http import open_url

def sub(*args,**kwargs):
    result = Element('output')
    result.write(f"{Element('age').value} is your age")



df = pd.read_csv(open_url("https:/raw.githubusercontent.com/Biranavan-Sritharan/Disease-Prediction-Webpage/main/diabetes.csv")) #switch to acc repository

a = df['Age'].count()

diseaseIsPresentRowCount = df[df['Outcome'] == 1].shape[0]  #no. of ppl with diabetes


a = df['Age'].count()
diseaseIsPresentRowCount = df[df['Outcome'] == 1].shape[0]  #no. of ppl with diabetes

print(df)

#csv = Element('csv')
#csv.write("ab")

'''
age input 50

from table
where age == 50
but it is like group by 50 - 55
or input 67 so 65-70 group by

OR just inout age and if not there then 0?
also add limit like 1-150 or so...
'''