import {useState} from 'react'
import './App.css';

function App() {
  const [data,setData] = useState("");
  const calcBtns=[];
  [1,2,3,4,5,6,7,8,9,".","%"].forEach(item=>{
    calcBtns.push(
      <button onClick={
        e=>{
          setData(data + e.target.value)
        }
      }
      value={item}
      key={item}
      >
        {item}
      </button>
    )
  })
  return (
    <div className="wrapper">
     <div className="show-input">{data}</div>
     <div className="digits"> {calcBtns} </div>
     <div className='modifiers subgrid'>
       <button onClick={()=>setData(data.substr(0,data.length-1))}>clear</button>
       <button onClick={()=>setData('')}>AC</button>
     </div>
     <div className='operations subgrid'>
       <button onClick={(e)=>setData(data+e.target.value)} value='+'>+</button>
       <button onClick={(e)=>setData(data+e.target.value)} value='-'>-</button>
       <button onClick={(e)=>setData(data+e.target.value)} value='*'>*</button>
       <button onClick={(e)=>setData(data+e.target.value)} value='/'>/</button>
       <button onClick={e=>{
        setData(
          String(eval(data)).length>3 && String(eval(data)).includes('.')
          ? String(eval(data).toFixed(4))
          :String(eval(data))
        )
         }

       }
       value='='
       >
       =
       </button>

     </div>
    </div>
  );
  }
export default App;
