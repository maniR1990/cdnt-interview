import React from "react";
import styled from "styled-components";
import noImage from "./../assests/no-image.png";

const Card = styled.div`
  width: var(--cardWidth);
  max-height: var(--cardHeight);
  margin: var(--cardMargin);
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  margin: 4px;
  width: 290px;
  height: 200px;
  border-radius: 8px;
`;

const Title = styled.h3`
  padding: 1px;
  margin: 0;
  color: #00adb5;
  font-size: 16px;
`;

const Content = styled.div`
  padding: 8px;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  p {
    margin-top: 10px;
    font-size: 14px;
    color: #393e46d6;
  }
`;

const ArticleStory = ({ story }) => {
  return (
    <>
      {story ? (
        <Card>
          <Image
            src={story.urlToImage ? story.urlToImage : noImage}
            alt={story.urlToImage ? story.title : "No Image"}
          />
          <Content>
            <a style={{ textDecoration: "none" }} href={story.url}>
              <Title>{story.title}</Title>
            </a>

            <p>{story.description}</p>
          </Content>
        </Card>
      ) : (
        <Title>No stories Available</Title>
      )}
    </>
  );
};

export default ArticleStory;
