import pandas as pd

def pls():
    table = "TB_burden_age_sex_2024-06-02.csv"
    df = pd.read_csv(table) #df means dataframe (var name that is)
    return df
