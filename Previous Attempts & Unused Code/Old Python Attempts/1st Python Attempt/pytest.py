import pandas as pd
from pyodide.http import open_url

#table = 'TB_burden_age_sex_2024-06-02.csv'
#df = pd.read_csv('TB_burden_age_sex_2024-06-02.csv') #df means dataframe (var name that is)





df = pd.read_csv(open_url("https://raw.githubusercontent.com/Biranavan-Sritharan/testcsvstuff/main/diabetes.csv"))

a = df['Age'].count()

diseaseIsPresentRowCount = df[df['Outcome'] == 1].shape[0]  #no. of ppl with diabetes



csv = Element('csv')
csv.write(df)


#df['Age']



#sv.write(b)

#print(df)