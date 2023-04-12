Name: Kodand Ram Movva
Nu ID: 002701533


This project is a weather forecasting application built using React,
which displays a 5-day weather forecast.
It also allows users to view hourly forecasts for each day by clicking on a particular day.
Additionally, the app has been integrated with React Router to enable routing.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

'gitignore' is a file that specifies files or directories that Git should ignore when you commit changes to a repository. 

It is a useful feature when working on a project that generates files that you don't want to include in your repository, such as temporary files, logs, or build artifacts.

The useState hook is used to manage state variables such as completeData, dailyData, cityName, and hasError. The useEffect hook is used to run side-effects such as fetching data from the API and updating the UI.

The changeText function is called when the user enters text into the TextField component, and updates the cityName state variable accordingly.

The refreshData function is called when the user clicks the "Get Weather Details" button, and fetches weather data from the OpenWeatherMap API for the specified city. If the city name is invalid (contains anything other than letters and spaces), an alert is displayed. Otherwise, the data is filtered to show only daily readings, and then stored in local storage for future use. The UI is then updated with the new data.

Finally, the component returns a UI that displays the weather data, including the city name, a text field for entering the city name, and a button for fetching weather data. The displayData function is called to display the weather data in the WeatherData component.