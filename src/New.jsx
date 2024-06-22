import React, { useState } from 'react'

const New = () => {
    const [name, setName] = useState("")
    const [sub1, setSub1] = useState("")
    const [sub2, setSub2] = useState("")
    const [sub3, setSub3] = useState("")
    const [data, setData] = useState([])
    const [id, setId] = useState(null)
    const addData = (e) => {
        e.preventDefault()
        if (id !== null) {
            let copydata = [...data]
            copydata[id] = { name, sub1, sub2, sub3 }
            setData(copydata)
            setId(null)
        }
        else {
            setData([...data, { name, sub1, sub2, sub3 }])

        }
        setName("")
        setSub1("")
        setSub2("")
        setSub3("")
    }
    const deleteData = (i) => {
        let copy = [...data]
        copy.splice(i, 1)
        setData(copy)
    }
    const updateData = (el, i) => {
        setName(el.name)
        setSub1(el.sub1)
        setSub2(el.sub2)
        setSub3(el.sub3)
        setId(i)
    }
    const dataTotal = (el) => {
        const a = parseInt(el.sub1)
        const b = parseInt(el.sub2)
        const c = parseInt(el.sub3)
        const total = a + b + c
        return total
    }
    const dataPer = (el) => {
        const a = parseInt(el.sub1)
        const b = parseInt(el.sub2)
        const c = parseInt(el.sub3)
        const per = parseInt(a + b + c) / 3
        return per
    }
    const dataMax = (el) => {
        const a = parseInt(el.sub1)
        const b = parseInt(el.sub2)
        const c = parseInt(el.sub3)
        const max = Math.max(a, b, c)
        return max
    }
    const dataMin = (el) => {
        const a = parseInt(el.sub1)
        const b = parseInt(el.sub2)
        const c = parseInt(el.sub3)
        const min = Math.min(a, b, c)
        return min
    }

    return (
        <div>
            <form onSubmit={addData}>
                <input type="text" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <input type="text" value={sub1} placeholder='Subject-1' onChange={(e) => setSub1(e.target.value)} />
                <input type="text" value={sub2} placeholder='Subject-2' onChange={(e) => setSub2(e.target.value)} />
                <input type="text" value={sub3} placeholder='Subject-3' onChange={(e) => setSub3(e.target.value)} />
                <input type="Submit" />
                <table border={1}>
                    <tr>

                        <th>Name</th>
                        <th>Sub1</th>
                        <th>Sub2</th>
                        <th>Sub3</th>
                        <th>Total</th>
                        <th>Percent</th>
                        <th>Max</th>
                        <th>Min</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                    {
                        data.map((el, i) => (
                            <tr key={i}>
                                <td>{el.name}</td>
                                <td>{el.sub1}</td>
                                <td>{el.sub2}</td>
                                <td>{el.sub3}</td>
                                <td>{dataTotal(el)}</td>
                                <td>{dataPer(el)}</td>
                                <td>{dataMax(el)}</td>
                                <td>{dataMin(el)}</td>
                                <td><button onClick={() => deleteData(i)}>Delete</button></td>
                                <td><button onClick={() => updateData(el, i)}>Edit</button></td>

                            </tr>

                        ))
                    }
                </table>
            </form>
        </div>
    )
}


export default New
