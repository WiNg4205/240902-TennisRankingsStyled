from bs4 import BeautifulSoup
from selenium import webdriver
import json


DATA_FILE = 'rankings.js'

driver = webdriver.Chrome()
url = 'https://www.atptour.com/en/rankings/singles?rankRange=0-5000&region=all'
driver.get(url)
driver.implicitly_wait(0.5)
html_content = driver.page_source
soup = BeautifulSoup(html_content, 'html.parser')
table_data = soup.find_all('tbody')[1]

rank_list = [elem.get_text() for elem in table_data.find_all(class_='rank bold heavy tiny-cell')]
name_list = [elem.get_text().strip() for elem in table_data.find_all(class_='name')]
age_list = [elem.get_text() for elem in table_data.find_all(class_='age')]
points_list = [elem.get_text().strip() for elem in table_data.find_all(class_='points center bold extrabold small-cell')]
country_list = [elem['href'][-3:].upper() for elem in table_data.find_all('use')]
week = soup.find('option', value='Current Week').text.strip()

ranking_data = []
for i in range(len(rank_list)):
    ranking_data.append({
        'rank': rank_list[i],
        'name': name_list[i],
        'age': age_list[i],
        'points': points_list[i],
        'country': country_list[i]
    })
    
data = {
    'week': week,
    'data': ranking_data
}

js_content = f"""
const rankingData = {json.dumps(data, indent=2)}
export default rankingData
"""

with open(DATA_FILE, 'w') as file:
    file.write(js_content)
