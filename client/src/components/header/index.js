import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from 'reactstrap';

const Header = ({ handleSubmit, handleChange, formData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">AnalyticsUI</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/about/">About</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <form onSubmit={handleSubmit}>
              <InputGroup className="mb-2">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Search</InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="date of match, team or player..."
                  name='search'
                  type='text'
                  onChange={handleChange}
                  value={formData.search}
                  label='email'
                  id='search'
                  required
                  style={{width: 300}}
                />
                <Button type="submit" color="primary" className="ml-2 mr-2">GO</Button>
              </InputGroup>
            </form>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;