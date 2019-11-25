import React from 'react'
import Navbar, {Navitem, Dropdown, DropdownItem, SearchBtn} from './components/BetterNavbar.js';

/**
 * CONTENT OF APP COMPONENT
 */
export default () => {
    return(
        <Navbar title="Mango Airlines">
            <Navitem text="yes" link="eog" />
            <Navitem text="sdf" link="eog" />
            <Dropdown title="Menu">
                <DropdownItem title="tetwe" link="gjergjioer"></DropdownItem>
            </Dropdown>
            <SearchBtn></SearchBtn>
        </Navbar>
    )
};

export const Welcome = ({...props}) => {
    return <>
          <h1> Hello, {props.name} </h1>
          <h1> {props.title}</h1>
          </>
  }
{/* <Welcome name="session 2127219783" title="jksdjlkds" />,    */}