import { Table } from 'reactstrap';
import './table.styles.scss';

const ResultsTable = ({ studentData, sliderState }) => {

  // const filteredStudents = (studentData) => {
  //   if (!studentData) return;
  //   return studentData.filter(student => 
  //     student.year_code >= sliderState.value[0] && student.year_code <= sliderState.value[1]
  //   )
  // }

  return (
    <Table striped bordered className="mt-4">
      <thead className="dark-head">
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Personal Details</th>
          <th>Family / Emergancy Contacts</th>
          <th>SEN</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  )
}

export default ResultsTable;