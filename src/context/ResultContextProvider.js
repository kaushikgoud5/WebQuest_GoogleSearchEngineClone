import React, { createContext, useState, useContext } from "react";

const ResultContext = createContext();
const baseURL = "https://google-search-json.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [results_news, setResultsNews] = useState([]);
  const [result_vedios, setResultsVedios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type, category) => {
    setIsLoading(true);
   
    const options = {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_IW,
        'X-RapidAPI-Host': 'google-search-json.p.rapidapi.com'
      }
    };
    if (category === "/news") {
      console.log("news");
       const newsURL = `https://newsapi.org/v2/everything?q=${searchTerm}&from=2023-09-24&sortBy=publishedAt&apiKey=524937c31a014b829bbc7720ea6e6cfd `; //
      const response_news = await fetch(newsURL);
      const jsonData = await response_news.json();
      console.log(jsonData)
      setResultsNews(jsonData);
    }

    else if (category === "/web" || category === "/images") {
      const response = await fetch(`${baseURL}${type}`, options);
      const result = await response.json();
      setResults(result);
    }
    else if(category==="/vedios"){
      
       const Vedios_url =` https://bing-video-search1.p.rapidapi.com/videos/search/?q=${searchTerm?searchTerm:'virat'}&count=25`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_VD,
          'X-RapidAPI-Host': 'bing-video-search1.p.rapidapi.com'
        }
      };
      const response = await fetch(Vedios_url, options);
	    const result = await response.json();
      console.log(result)
      setResultsVedios(result);
    }

    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{
        getResults,
        isLoading,
        searchTerm,
        results,
        setSearchTerm,
        results_news,
        result_vedios
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};
export const useResultContext = () => useContext(ResultContext);
