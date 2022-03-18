import './App.css';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}






/* function LoadCountries(){

  const [countries, setCountries] = useState([]);

  useEffect( () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  }, []);
  let sum = 0;

  return (
    <div>
      <h1>Visiting every World in the world.</h1>
      <h3>Available Countries: {countries.length}</h3>
      {
        countries.map(country => <Country key={sum += 1} name={country.name.common}></Country>)
      }
    </div>
  );
}

function Country(props){
  return(
    <div>
      <h2>Name: {props.name}</h2>
    </div>
  )
} */





// Module 45 code 

/* function LoadUsers() {
  const [users, setUsers] = useState([]);
  console.log(users, typeof users)
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1>Load User</h1>
      <hr />
      {
        users.map(user => <User name={user.name} key={user.id} email={user.email}></User>)
      }
    </div>
  );
}
function User(props) {
  return (
    <div style={{border:'2px solid red', margin: '20px', borderRadius: '20px'}}>
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  );
}

function Count() {

  const [count, setCount] = useState(10);
  const increaseCount = () => setCount(count + 1);
  
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increaseCount}>increase</button>
      <button onClick={()=> setCount(count - 1)}>Decrise</button>
    </div>
  );
} */

export default App;
