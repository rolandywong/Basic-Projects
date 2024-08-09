import requests
api = '2fc379760e931f5c10ea2a19072a071d' #key from openweathermap.org

#gets user input for the city they want to look up
user_request = input("Enter a city: ") 

#requests information from openweathermap.org based on user input
weather_request = requests.get(f"https://api.openweathermap.org/data/2.5/weather?q={user_request}&units=imperial&APPID={api}")

#verifies that requests are going through - should return 200 if true
#print(weather_request.status_code)
#returns all the information of the requested city in json format
#print(weather_request.json())

#error handling to verify the requested city exists
if weather_request.json()['cod'] == '404':
    print("No City Found")
else:
    #assigns the requested information to specific variables
    weather = weather_request.json()['weather'][0]['main']
    temperature = round(weather_request.json()['main']['temp'])

    #returns the requested information
    print(f"The weather in {user_request} is: {weather}")
    print(f"The temperature in {user_request} is: {temperature}ºF")
