import AllPosts from "./pages/AllPosts"
import SinglePost from "./pages/SinglePost"
import Form from "./pages/Form"

import  { useState, useEffect } from "react";

import { Route, Routes } from "react-router-dom"

const apiURL = 'http://localhost:8000'

function App() {

  const h1 = {
    textAlign: "center",
    margin: "10px",
  };

  const [posts, setPosts] = useState([])

  const getBlog = async () => {
    const response = await fetch(apiURL + '/blog/')
    const data = await response.json()
    console.log(data)
    setPosts(data)
  }

  const handleFormSubmission = async (data, type) => {
    if(type === 'new') {
      const response = await fetch(`${apiURL}/blog/`, {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      getBlog()
    } else {
      const response = await fetch(`${apiURL}/blog/${data.id}/`, {
        method: 'put',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data) 
      })
      getBlog()
    }
  }

  const deleteBlog = async (id) => {
    const response = await fetch(`${apiURL}/blog/${id}/`,
    {
      method: 'delete'
    })
    getBlog()
  }

  useEffect(() => {
    getBlog()
  })

  return (
    <div className="App">
      <h1 style={h1}>Blog App</h1>
     <Routes>
      <Route
        exact
        path="/"
        element={<AllPosts posts={posts} deleteBlog={deleteBlog} />}
      />
      <Route
        exact
        path="/post/:id"
        element={<SinglePost posts={posts} />}
      />
      <Route
        exact
        path="/new"
        element={<Form posts={posts} handleSubmit={handleFormSubmission} buttonLabel='Add Blog' 
        formType='new' />}
      />
      <Route
        exact
        path="/edit/:id"
        element={<Form posts={posts} handleSubmit={handleFormSubmission} 
        buttonLabel='Edit Blog' formType='edit' />}
      />
     </Routes>
    </div>
  );
}

export default App;
