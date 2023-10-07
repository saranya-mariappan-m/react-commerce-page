import { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

function shoppingMenu() {

  const [isOpen, setOpen] = useState(false);

  isOpen = {
    dropdownOpen: false
  };
  const toggle = () => {
    setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  const onMouseEnter = () => {
    this.setState({ dropdownOpen: true });
  }

  const onMouseLeave = () => {
    this.setState({ dropdownOpen: false });
  }
  return (
    <>

      <Dropdown
        className="d-inline-block"
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
        isOpen={dropdownOpen}
        toggle={toggle}
      >
        <DropdownToggle caret>Dropdown1</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Submenu 1</DropdownItem>
          <DropdownItem>Submenu 1.1</DropdownItem>
        </DropdownMenu>
        &nbsp;&nbsp;&nbsp;
        <DropdownToggle caret>Dropdown2</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Submenu 2</DropdownItem>
          <DropdownItem>Submenu 2.1</DropdownItem>
          <DropdownItem>Submenu 2.2</DropdownItem>
        </DropdownMenu>
        &nbsp;&nbsp;&nbsp;
        <br /><br />
        <DropdownToggle caret>Dropdown3</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Submenu 3</DropdownItem>
          <DropdownItem>Submenu 3.1</DropdownItem>
          <DropdownItem>Submenu 3.2</DropdownItem>
          <DropdownItem>Submenu 3.3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default shoppingMenu;