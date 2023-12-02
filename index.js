import express from 'express';
import { LocationWeatherInfo } from 'location-weather-info';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

const apiKey = 'c143a0179deec5064ed72df015c30c1c';
const weather = new LocationWeatherInfo(apiKey);

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/weather', async (req, res) => {
  try {
    const location = req.body.location;
    const data = await weather.getWeather(location);
    res.json(data);
  } catch (error) {
    res.status(500).send('Error occurred');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
