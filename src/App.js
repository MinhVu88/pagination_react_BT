import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import {Posts} from './components/Posts';
import { Pagination } from './components/Pagination';

function App() {
  const[posts, setPosts] = useState([]);

  const[loading, setLoading] = useState(false);

  const[currentPage, setCurrentPage] = useState(1);

  const[postsPerPage, setPostsPerPage] = useState(10);

  // Note: don't use 'async' in front of useEffect()
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

      setPosts(response.data);

      setLoading(false);
    };

    fetchPosts();
  }, []);

  console.log(posts);

  // array.slice(): https://www.freecodecamp.org/news/lets-clear-up-the-confusion-around-the-slice-splice-split-methods-in-javascript-8ba3266c29ae/
  const lastPostIndex = currentPage * postsPerPage; // page #1: 10 | page #2: 20 | page #3: 30

  const firstPostIndex = lastPostIndex - postsPerPage; // page #1: 0 | page #2: 10 | page#3: 20

  const postIndicesPerPageArray = posts.slice(firstPostIndex, lastPostIndex); // page #1: 0 - 9 | page #2: 10 - 19 | page #3: 20 - 29

  console.log(postIndicesPerPageArray);

  const changePage = page => setCurrentPage(page);

  return (
    <div className="container mt-5">
      <h1 className='text-primary mb-3'>Simple Frontend Pagination in React</h1>
      <Posts posts={postIndicesPerPageArray} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} turnPage={changePage}/>
    </div>
  );
};

export default App;
