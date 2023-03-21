import './App.css';

import { useEffect, useState } from 'react';

function App() {
  const products = [
    {name:'Laptop', price: 153000},
    {name: 'Phone', price: 93000},
    {name: 'Watch', price:33000},
    {name: 'Table', price:5000}
  ]
  return (
    // <div className="App">
    //   {products.map(product => <Product name={product.name} price={product.price}></Product>)}
      
    //  {/* <Product name="Laptop" price="94000"></Product>
    //  <Product name="Phone" price="24000"></Product>
    //  <Product name="Watch" price="2400"></Product>
    //  <Product name="Tablet" price="31000"></Product> */}
    // </div>

    <div className="App">

      {/* <Counter> </Counter> */}
      <ExternalUsers> </ExternalUsers>
      
    </div>
  );
}


function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json()).then(data => setUsers(data))

    
  }, [])
   
  return(
    <div className="">
      <h2 className="">External Users</h2>
      <p className="">{users.length}</p>

      {
        // users.map(user =>  <li>{user.name}</li>)
        users.map(user =>  <User name={user.name} email={user.email}></User>)

      }
    </div>
  )
}


function User(props){
  return(
    <div className="" style={{border: '2px solid #592698'}}>
      <h3>Name:{props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

// function Product(props){
//   return(
// <div className="product">
//   <h3 className="">Name: {props.name} </h3>
//   <p className="">Price: {props.price}</p>
// </div>


//   )
// }

function Counter(){
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  // const increaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  // const abc = useState(30);
  // console.log(abc);
  
  return(

    <div className="">
      <h1 className="">Count: {count} </h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>

  )
}
export default App;
