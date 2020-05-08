#Author: Simran Bhamra
#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd


# In[6]:


df = pd.read_excel('./Documents/DSUMajors.xlsx', header= None)


# In[7]:


df


# In[15]:


majors = df[0].to_list() 


# In[16]:


myList = []

for major in majors:
    major_dict = {'name':major}
    myList.append(major_dict)
myList


# In[17]:


outdict = {'majorInfo': myList}


# In[18]:


import json

print(json.dumps(outdict))


with open('majors.json', 'w', encoding='utf-8') as f:
    json.dump(outdict, f, ensure_ascii=False, indent=4)


# In[ ]:




