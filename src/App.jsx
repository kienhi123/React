import { useState } from 'react'
import logo from './logo.svg'
import './App.css'


const ShowInfor = (props)=>{
  return <div>Show: {props.name}</div>
}
function App() {
  const [count,setCount] = useState(0); 
  const [color,setColor] = useState("red");
  const [myStatus,setMystatus] = useState(false);
  const [products,setProducts] = useState([
    { id:1 , name:"A" },
    { id:2 , name:"B" }, 
    { id:1 , name:"C" },
    { id:2 , name:"D" }, 
  ])
  const removeItem = (id)=>{
    const newProducts = products.filter(item=>item.id !==id);
    setProducts(newProducts)
  }

 return <div> 
      Number:{count}  <br/>
      String :<div>Content</div>  <br/>
      Boolean : {myStatus ? "Đã kết hôn":"Chưa kết hôn"}   <br/>
     
      <button onClick={()=>setCount(count+1)}>changeCount</button>
      <button onClick={()=>setMystatus(!myStatus)}>Toggled Status</button>

      { myStatus && <div>
        Arr: {products.map(item => <div>{item.name} 
          <button onClick={() => removeItem(item.id) }>Delete</button></div>)}
      </div>}
      <hr />
 </div>
}
export default App
