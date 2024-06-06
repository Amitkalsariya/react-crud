
import './App.css';
import { useState } from 'react';
function App() {
  const [inputvalue, setinputvalue] = useState('')
  const [inputvalue1, setinputvalue1] = useState('')
  const [inputvalue2, setinputvalue2] = useState('')
  const [inputvalue3, setinputvalue3] = useState('')
  const [text, settext] = useState([])
  let addData = () => {
    let data = { inputvalue, inputvalue1, inputvalue2, inputvalue3 }
    settext([...text, data])
    setinputvalue('')
    setinputvalue1('');
    setinputvalue2('');
    setinputvalue3('');
  }
  let deleteData = (i) => {
    const amit = [...text]
    amit.splice(i, 1)
    settext(amit)

  }
  const updateData = (i,el) => {
    const data3={
      inputvalue,inputvalue1,inputvalue2,inputvalue3
    }
    const data2=[...text]
    data2[i]=data3

    settext(data3)
    setinputvalue('')
    setinputvalue1('');
    setinputvalue2('');
    setinputvalue3('');
    
  }


  return (
    <div className="App">
      <input type="text"
        value={inputvalue}
        onChange={(p) => setinputvalue(p.target.value)}
        placeholder='Name'/>

      <input type="text"
        value={inputvalue1}
        onChange={(p) => setinputvalue1(p.target.value)}
        placeholder='Subject-1' />

      <input type="text"
        value={inputvalue2}
        onChange={(p) => setinputvalue2(p.target.value)}
        placeholder='Subject-2' />

      <input type="text"
        value={inputvalue3}
        onChange={(p) => setinputvalue3(p.target.value)}
        placeholder='Subject-3' />

      <button onClick={addData}>click</button>
      <center>
        <table border={1} width='50%'>
          <tr>
            <th>Name</th>
            <th>Subject-1</th>
            <th>Subject-2</th>
            <th>Subject-3</th>
            <th>Total</th>
            <th>Per</th>
            <th>Max</th>
            <th>Min</th>
          </tr>


          {
            text.map((el, i) => {
              const a = parseInt(el.inputvalue1)
              const b = parseInt(el.inputvalue2)
              const c = parseInt(el.inputvalue3)
              const total = parseInt(a + b + c)
              const per = total / 3
              const max = Math.max(a, b, c)
              const min = Math.min(a, b, c)
              return (
                <tr key={i}>
                  <td>{el.inputvalue}</td>
                  <td>{el.inputvalue1}</td>
                  <td>{el.inputvalue2}</td>
                  <td>{el.inputvalue3}</td>
                  <td>{total}</td>
                  <td>{per}</td>
                  <td>{max}</td>
                  <td>{min}</td>
                  <td><button onClick={() => deleteData(i)}>Delete</button></td>
                  <td><button onClick={() => updateData(i,el)}>Update</button></td>
                </tr>

              )
            })
          }
        </table>
      </center>
    </div>
  );
}

export default App;
