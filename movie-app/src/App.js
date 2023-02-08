import { useSelector } from "react-redux";
const  App = () => {

  const user = useSelector((state)=> state.user);
  console.log(user,'user')
  return (
    <div className="App">
     App 
    </div>
  );
}

export default App;
