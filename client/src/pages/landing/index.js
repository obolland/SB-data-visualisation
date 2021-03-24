import TableOfResults from '../../components/table';
import {Button, Container} from 'reactstrap'

const LandingPage = ({searchResult}) => {
  return (
  <Container className="pt-4">
    <Button className="mr-1">Get all Matches</Button>
    <Button className="mr-1">Get all Players</Button>
    <Button>Get all Teams</Button>
    <TableOfResults searchResult={searchResult}/>
  </Container>
  )
}

export default LandingPage