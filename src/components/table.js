import React from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const TableData = ({ list, setList }) => {

    const deleteItem = (id) => {
        const updatedData = list.filter((list, index) => {
            return index !== id;
        })
        setList(updatedData)
    }



    return (
        <>

            <Table striped bordered hover >

                <thead >
                    <tr>
                        <th style={{ width: "15%" }}>Sl.No</th>
                        <th>TASK</th>

                    </tr>
                </thead>
                <tbody  >
                    {list.map((list, index) => {
                        return (
                            <tr>
                                <td >{index + 1}</td>
                                <td >{list}</td>
                                <td><Button onClick={() => deleteItem(index)} variant="danger">DELETE</Button></td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table >
        </>
    )
}




// class TableData extends React.Component {
//     render() {
//         return (
//             <>
// <Table striped bordered hover>
//     <thead>
//         <tr>
//             <th style={{ width: "15%" }}>Sl.No</th>
//             <th>TASK</th>
//         </tr>
//     </thead>
//     <tbody>

//         {this.props.list.map((list, index) => {
//             return (
//                 <tr>
//                     <td key={list.index}>{index + 1}</td>
//                     <td>{list}</td>
//                 </tr>
//             )
//         })}

//     </tbody>
// </Table >
//             </>
//         )
//     }
// }
export default TableData