import React, { useEffect, useState } from 'react';

import './App.css';


import Home from './components/pages/home/Home.js';
import Events from './components/pages/events/Events.js';
import Help from './components/pages/help/Help.js';
import Students from './components/pages/students/Students.js';
import Rankings from './components/pages/rankings/Rankings.js';
import Error from './components/pages/404/Error.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import firebase from './firebase';

function App() {

  const [dataset, setDataset] = useState([]);
  const [students, setStudents] = useState([]);
  const [studentNameID, setStudentNameID] = useState([]);
  

  const ref = firebase.firestore().collection("Events");

  const stu = firebase.firestore().collection("Students");

  function getDataStudents() {
    stu.onSnapshot((querySnapshot) => {
      const nameID = [];
      const nameArray = [];
      querySnapshot.forEach((doc) => {
        const p = doc.data();
        p.ID = doc.id;
        nameID.push(p);
        nameArray.push(p);
      });
      setStudents(nameArray);
    })
  }


  function getDataEvents() {
    ref.onSnapshot((querySnapshot) => {
      const Events = [];
      const items = [];
      querySnapshot.forEach((doc) => {
        Events.push(doc.id);
        items.push(doc.data());
      });
      setDataset(items[0].Name);
      //console.log(Events);
    })
  }

  


  useEffect(() => {
    getDataStudents();
    getDataEvents();
  }, []);


  return (


      <div className="App">

      <BrowserRouter>

            <Routes>
              <Route exact path='/' element={ <Home /> } />
              <Route exact path='/students' element={<Students studentList={students}/>} />
              <Route exact path='/events' element={<Events data={dataset}/> } />
              <Route exact path='/rankings' element={<Rankings />} />
              <Route exact path='/help' element={<Help />} />
              <Route path='*' element={<Error />} />
            </Routes>

      </BrowserRouter>
      </div>


  );
}

export default App;
