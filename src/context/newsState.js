import React, { useReducer } from 'react';
import NewsContext from './newsContext';
import NewsReducer from './newsReducer';
import NewsApiService from '../services/NewsApiService'
import { SET_LOADING, SEARCH_ARTICLES, TOP_STORIES } from './types';


const NewsState = (props) => {
    const initialState = {
        loading: false,
        article: {},
        articleStories: [],
        topstory: {},
        topStories: [],
    };

    const [state, dispatch] = useReducer(NewsReducer, initialState);

    const setLoading = (loading) => {
        dispatch({
            type: SET_LOADING,
            payload: loading,
        });
    };

   

    const getTopArticles = async (countryCode) => {
        try {
            setLoading(true);
            const data = await NewsApiService.getLatestNews(countryCode);
            console.log('top results', data);
            dispatch({ type: TOP_STORIES, payload: data });
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const searchArticles = async (searchText) => {
        try {
            setLoading(true);
            const data = await NewsApiService.searchNews(searchText);
            console.log('search results', data);
            dispatch({ type: SEARCH_ARTICLES, payload: data });
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <NewsContext.Provider value={{ ...state, searchArticles, getTopArticles }}>
            {props.children}
        </NewsContext.Provider>
    );
};

export default NewsState;