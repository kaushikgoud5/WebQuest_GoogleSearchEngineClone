import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../context/ResultContextProvider";
import { Loading } from "./Loading";

const Results = (props) => {
  const { results, isLoading, getResults, searchTerm ,results_news,result_vedios} = useResultContext();

  const location = useLocation();
  useEffect(() => {
    if(location.pathname==="/news"){
      getResults(``,location.pathname);
    }
    else{
      getResults(`/search/image?q=${searchTerm}&gl=US&lr=lang_en&num=10&start=0`,location.pathname);
  }
    
  }, [searchTerm, location.pathname]);
  if (isLoading) return <Loading />;

  console.log(location.pathname);
  console.log(results);
  switch (location.pathname) {
    case "/web":
      return (
        <div className="container my-3 d-flex flex-wrap">
          {results?.items?.map(({ link, title }, index) => (
            <div
              key={index}
              className="col-xxl-6 col-lg-6 col-md-6 col-sm-12 my-3"
            >
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={`text-decoration-none`}
              >
                <p
                  className={`text-${
                    props.darkmode ? "light" : "dark"
                  } fs-6 fst-italic`}
                >
                  {link}  
                </p>
                <p className="text-primary fs-4">{title}</p>
              
             
              </a>
            </div>
          ))}
        </div>
      );
      break;
    case "/images":
      return (
        <div className="container my-3">
          <div className="row">
            {results?.items?.map(
              ({ originalImageUrl, title, contextLink }, index) => (
                <div key={index} className="col-md-3 mb-4">
                  <div className="card h-100">
                    <a
                      href={originalImageUrl}
                      target="_blank"
                      key={index}
                      rel="noreferrer"
                      className="d-block"
                    >
                      <img
                        src={originalImageUrl}
                        alt={title}
                        className="img-fluid"
                      />
                    </a>
                    <div className="card-body">
                      <p className="text-center mt-2 text-decoration-none text-dark">
                        {title}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      );
      break;
    case "/news":
      return (
        <div className="container my-3 d-flex flex-wrap">
          {results_news?.articles?.map(({ url, title }, index) => (
            <div
              key={index}
              className="col-xxl-6 col-lg-6 col-md-6 col-sm-12 my-3"
            >
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none "
              >
                <p className="text-secondary   fs-6 fst-italic ">
                  {url.length > 30 ? url.substring(0, 30) : url}
                </p>
                <p className="text-primary fs-4 ">{title}</p>
                <hr />
              </a>
            </div>
          ))}
        </div>
      );
      break;
    case "/vedios":
      return (
        <div className="container my-3">
        <div className="row">
          {result_vedios?.value?.map(
            (content, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className="card h-100">
                  {/* <img src={content.video.thumbnails[0].url} alt="" /> */}
                <ReactPlayer url={content.contentUrl}  controls width="355px" height="200px" />
                </div>
  
                </div>
            )
          )}
        </div>
      </div>
        
        );
      break;

    default:
      return "ERROR";
      break;
  }
};

export default Results;
