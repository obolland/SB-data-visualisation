import { Table } from 'reactstrap';
import './table.styles.scss';

const ResultsTable = ({ tableData }) => {

  // const filteredStudents = (studentData) => {
  //   if (!studentData) return;
  //   return studentData.filter(student => 
  //     student.year_code >= sliderState.value[0] && student.year_code <= sliderState.value[1]
  //   )
  // }

  return (
    <Table striped bordered className="mt-4">
      { tableData &&
      <thead className="dark-head">
        <tr>
          <th>{Object.keys(tableData[0])[1]}</th>
          <th>{Object.keys(tableData[0])[2]}</th>
          <th>{Object.keys(tableData[0])[3]}</th>
          <th>{Object.keys(tableData[0])[4]}</th>
          <th>{Object.keys(tableData[0])[5]}</th>
        </tr>
      </thead>
      }
      
        
          { tableData && tableData.map(obj => {
            return (
              <tbody>
                <tr>
                <td>{Object.values(obj)[1]}</td>
                <td>{Object.values(obj)[2]}</td>
                <td>{Object.values(obj)[3]}</td>
                <td>{Object.values(obj)[4]}</td>
                <td>{Object.values(obj)[5]}</td>
                </tr>
              </tbody>
            )
          })
          }
    </Table>
  )
}

export default ResultsTable;