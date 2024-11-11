#%%
import pandas as pd
df = pd.read_excel('./list.xlsx')
df.to_json('./list.json',orient='records')