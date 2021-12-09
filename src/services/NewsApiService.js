import axios from "axios";

// https://newsapi.org/v2/everything?q={searchParam}&apiKey={yourkey}
/*
apiKey - REQUIRED  
Your API key. Alternatively you can provide this via the X-Api-Key HTTP header.
q Keywords or phrases to search for in the article title and body.
Parameter name: api - key
*/
const axiosInstance = axios.create({
  baseURL: `https://newsapi.org/v2/`,
  timeout: 10000,
  headers: {
    "X-Api-Key": "2fd4106537fd4b07b27c640d50ad166b", // your API KEY
  },
});


/*
Resource: top-headlines
ParamKey: country - atleast One optional param should be provided
defaulted Supported Country US
*/
const NewsApiService = {
  async getLatestNews(paramKey ="us") {    
    const { data } = await axiosInstance.get(`top-headlines?country=${paramKey}`);
    return data;
  },

  async searchNews(searchText) {
    console.log("search news:", searchText)
    const { data } = await axiosInstance.get(
      `https://newsapi.org/v2/everything?q=${searchText}`
    );
    return data;
  },
};

export default NewsApiService;
