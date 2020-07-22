import React from 'react';
import './App.css';
import Tabs from './Tabs';
import Calender from "./Calender";
import Form from "./home";
import Order from "./orders";
import Select from 'react-select';
require('./styles.css');


const yogaClasses = [
  { label: "FLOW YOGA", value: 1 },
  { label: "STRENGTH YOGA", value: 2 },
  { label: "FLEXIBILITY YOGA", value: 3 },
  { label: "STRESS RELIEF YOGA", value: 4 },
  { label: "BEGINNER YOGA", value: 5 },
  { label: "SPECIAL GUEST EVENT", value: 6 },
];

function App() {
  return (
    <div className="App">
      <Tabs class="center">
      <div label="EN">
    <h1>YOGA STUDIO </h1>
      <Tabs class="center">
      <div label="Home">
        Welcome to our <em>studio.</em>
        <div><img src="https://images.unsplash.com/photo-1504005511787-4762d6f15ac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" /></div>
        Here are the <em>events </em> we offer!
      </div>
      <div label="Find">
        Choose a <em>Yoga Class! </em>
        All Classes are 5pm to 6pm EST.
        <div className="center"><br></br>
        <div className="center2"><Select options={ yogaClasses } /></div><br></br>
        <Calender  /><br></br>
        </div>
      </div>
      <div label="Book">
        Enter your <em>personal information. </em> 
        An email with your course will be sent upon confirmation. 
        <div className="center3"><Form /></div>
      </div>
      <div label="Help">Please call tech support at 123-456-7890. </div>
     </Tabs>
     </div>
     <div label="FR">
     <h1>STUDIO DE YOGA </h1>
      <Tabs class="center">
      <div label="Page d'accueil">
        Bienvenue dans notre <em>studio.</em>
        <div><img src="https://images.unsplash.com/photo-1504005511787-4762d6f15ac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" /></div>
        Voici les <em>événements </em> que nous proposons!
      </div>
      <div label="Trouver">
        Choisissez un cours de <em>Yoga! </em>
        Tous les cours ont lieu de 17 h 00 à 18 h 00 EST.
        <div className="center"><br></br>
        <div className="center2"><Select options={ yogaClasses } /></div><br></br>
        <Calender  /><br></br>
        </div>
      </div>
      <div label="Réserver">
        Entrez vos <em>informations personnelles. </em> 
        Un e-mail avec votre cours vous sera envoyé lors de la confirmation.
        <div className="center3"><Form /></div>
      </div>
      <div label="Aidez-moi">Veuillez appeler le support technique au 123-456-7890. </div>
     </Tabs>
     </div>
     </Tabs>
    </div>
    
  );
}

export default App;
