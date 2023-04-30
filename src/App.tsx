import React from 'react';
import { Greet } from './components/Greet';
import './App.css';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
// import { Counter } from './components/state/Counter';
import { ThemeContextProvider } from './components/Context/ThemeContext';
import { Box } from './components/Context/Box';
import {User } from './components/Context/User'
import { UserContextProvider } from './components/Context/UserContext';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';

import {Counter} from './components/class/Counter'
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
// import { List } from './components/generics/List';

import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import { Text } from './components/polymorphic/Text';


function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }
  const NameList =[
    {
      first: "Bruce",
      last: "Wayne"
    },
    {
      first: "Clark",
      last: "Kent"
    },
    {
      first: "Princess",
      last: "Diana"
    }
  ]
  return (
    <div className="App">
      {/* <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name={"Andrei"} isLoggedIn={false}/> */}
      {/* <Button handleClick={(event, id)=> {console.log("Button clicked", event, id)}} />
      <Input value="" handleChange={(event) => console.log(event)} />   */}
      {/* <Container styles={{border: '1px solid black', padding: '1rem', display: 'block'}} /> */}

      {/* <Counter />  */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User /> 
      </UserContextProvider> */}
      {/* <MutableRef/> */}
      {/* <Counter message='The count value is ' /> */}

      {/* <Private isLoggedIn={true} component={Profile}/> */}
      {/* <List items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={(item)=> console.log(item)}     
      />
      <List items={[1,2,3]} onClick={(item)=>console.log(item)} /> */}
      {/* <List items={[
        {
          id: 1,
          first: "Bruce",
          last: "Wayne",
        },
        {
          id: 2,
          first: "Clark",
          last: "Kent",
        },
        {
          id: 3,
          first: "Princess",
          last: "Diana",
        }
      
      ]}
      onClick={(item)=>console.log(item)}
      /> */}
      {/* <RandomNumber value={10} isPositive/> */}
      {/* <Toast position="center-top" /> */}
      {/* <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
        Primary Button
      </CustomButton> */}
      <Text as="h1" size="lg">Heading</Text>
      <Text as="p" size="md">Paragraph</Text>
      <Text as="label" htmlFor='someId' size="sm" color="secondary">Label</Text>
    </div>
  );
}

export default App;
