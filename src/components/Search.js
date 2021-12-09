import React, { useState, useContext } from "react";
import NewsContext from "../context/newsContext";
import styled from "styled-components";
import { throttle } from "lodash";
import { useNavigate } from "react-router";

const SearchForm = styled.form`
  background: #461111;
  padding: 10px;
`;

const SearchBox = styled.div`
  display: flex;
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 100%;
  border: 0;
  height: 36px;
  padding: 0 10px;
  outline: 0;
`;

const SearchBtn = styled.button`
  background: #fff;
  border: 1px solid #000;
  height: 36px;
  padding: 10px;
  margin-right: 10px;
  border: 0;
  cursor: pointer;
  outline: 0;
`;

const Search = () => {
  const [text, setText] = useState("");
  const newsContext = useContext(NewsContext);
  const { searchArticles } = newsContext;
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.length){
      searchArticles(text);
      navigate(`/search/${text}`)
    }
  };


  const throttledFunc = throttle(handleSubmit, 100, { leading: true });

  return (
    <div>
      <SearchForm onSubmit={throttledFunc}>
        <SearchBox>
          <SearchInput
            id="email"
            name="email"
            type="search"
            placeholder="Search NEWS Articles.."
            value={text}
            onChange={(e)=>setText(e.target.value)}
          />
          <SearchBtn  onClick={throttledFunc}>Search</SearchBtn>
        </SearchBox>
      </SearchForm>
    </div>
  );
};

export default Search;
