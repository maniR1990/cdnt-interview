import React, { useEffect, useContext } from "react";
import { uniqueId } from "lodash";
import ArticleStory from "../ArticleStory";
import Spinner from "../spinner/spinner";
import NewsContext from "../../context/newsContext";
import styled from "styled-components";

const StoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items:center;
  gap: 20px;
`;

const Text = styled.h3`
padding:1px;
margin:0;
`
const NewStories = () => {
  const newsContext = useContext(NewsContext);
  const { loading, searchArticles, articleStories } = newsContext;

  useEffect(() => {
    if (!loading) {
      searchArticles();
    }
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <StoryContainer>
          {articleStories?.articles &&
            articleStories.articles.map((article) => (
              <ArticleStory
                key={uniqueId() + "_" + Math.random()}
                story={article}
              ></ArticleStory>
            ))}
            {!articleStories?.totalResults && <Text>No Articles Found</Text>}
        </StoryContainer>
      )}
    </>
  );
};

export default NewStories;
