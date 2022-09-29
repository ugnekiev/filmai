import { useState, useEffect } from "react";
import Movies from "../../Contexts/Movies";
import Create from "./Create";
import axios from 'axios';
// import List from "./List";
// import Edit from "./Edit";

function Main() {

    const [lastUpdate, setLastUpdate] = useState(Date.now);
    const [createData, setCreateData] = useState(null);
    const [movies, setMovies] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [modalData, setModalData] = useState(null);
    const [editData, setEditData] = useState(null);

    const [cats, setCats] = useState(null);

  //READ for SELECT
  useEffect(() => {
    //nuskaitau is supplier's duomenis; suppliers perduodu i consumeriu provideri, ir juos pasiimu CREAT'e.jsx
  axios.get('http://localhost:3003/server/cats')
  .then(res => {
    setCats(res.data);
  })
  }, []);

//CREATE
  useEffect(() => {
  if(null === createData) {
    return;
  }
  console.log(createData)
  axios.post('http://localhost:3003/server/movies', createData)
        .then(res => {
          setLastUpdate(Date.now());
    }
    );
},[createData])

//DELETE
useEffect(() => {
  if(null === deleteData) {
    return;
  }
  axios.delete('http://localhost:3003/server/movies/'+ deleteData.id)
        .then(res => {
          setLastUpdate(Date.now());
    }
    );
},[deleteData])

//EDIT
useEffect(() => {
  if(null === editData) {
    return;
  }
  axios.put('http://localhost:3003/server/movies/'+ editData.id, editData)
        .then(res => {
          setLastUpdate(Date.now());
    }
    );
},[editData])




  return (
    <Movies.Provider value={{
        setCreateData,
        movies,
        cats,
        setDeleteData,
        modalData, 
        setModalData,
        setEditData

    }}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create />
          </div>
          <div className="col-8">
            {/* <List /> */}
          </div>
        </div>
      </div>
      {/* <Edit /> */}
    </Movies.Provider>
  );
}
export default Main;
