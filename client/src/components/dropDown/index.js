import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropFilter = ({playerNames}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  console.log(playerNames)
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} size="lg" toggle={toggle}>
      <DropdownToggle caret>
        Filter by Player
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Select Player</DropdownItem>
        { playerNames.map(name => 
          <DropdownItem key={name}>{name}</DropdownItem>
        )
        }
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropFilter;