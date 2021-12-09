import React, { useEffect, useContext } from "react";
import { uniqueId } from "lodash";
import { Link } from "react-router-dom";
import ArticleStory from "../ArticleStory";
import Spinner from "../spinner/spinner";
import NewsContext from "../../context/newsContext";
import styled from "styled-components";

const StoryContainer = styled.div`
  display: grid;
  padding: 50px;
  grid-template-columns: repeat(4, 1fr);
  justify-items:center;
  gap: 20px;
`;

const Text = styled.h3`
padding:1px;
margin:0;
`
const TopStories = () => {
  const newsContext = useContext(NewsContext);
  const { loading, getTopArticles, topStories } = newsContext;

  useEffect(() => {
    if (!loading) {
      getTopArticles("US");
    }
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Link to="/">Go Back</Link>
          <StoryContainer>
            {topStories?.articles &&
              topStories.articles.map((topStory) => (
                <ArticleStory
                  key={uniqueId() + "_" + Math.random()}
                  story={topStory}
                />
              ))}
              {!topStories?.totalResults && <Text>No Articles Found</Text>}
          </StoryContainer>
        </>
      )}
    </>
  );
};

export default TopStories;
