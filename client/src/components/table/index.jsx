import { Table } from 'reactstrap';
import { useHistory } from "react-router-dom";
import './table.styles.scss';

const ResultsTable = ({ tableData }) => {
  let history = useHistory();

  //create url based on what has been clicked (match, team, player)
  const handleRowClick = (id, key) => {
    const _key = key.toString().charAt(0)
    if (_key === 'm'){
      history.push(`/match/${id}`);
    }
    if (_key === 'p'){
      history.push(`/player/${id}`);
    }
    if (_key === 't'){
      history.push(`/team/${id}`);
    }    
  }

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
          <tbody key={Object.values(obj)[0]}>
            <tr 
              onClick={()=> handleRowClick(Object.values(obj)[0], Object.keys(obj)[0])}
              className='clickable'
            >
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