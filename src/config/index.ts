const env = process.env.NODE_ENV || 'production';

interface ConfigInterface {
  env: string;
  geo_api: {
    url: string;
    username: string;
  };
  open_weather_api: {
    url: string;
    api_key: string;
  };
}

const baseConfig: ConfigInterface = {
  env: 'development',
  geo_api: {
    url: 'http://api.geonames.org/searchJSON',
    username: 'mate.knon',
  },
  open_weather_api: {
    url: 'https://api.openweathermap.org/data/2.5/weather',
    api_key: '3917ba8d8823c27a76c34594775fad11',
  },
};

const prodConfig: ConfigInterface = {
  ...baseConfig,
};

const config: ConfigInterface = env === 'production' ? prodConfig : baseConfig;
export default config;
