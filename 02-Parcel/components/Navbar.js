import React from 'react';

export const Navitem = ({...props}) => {
    return (
        <li className="nav-item">
            <a href={props.link} 
            className="nav-link" >
            {props.text}
            </a>
        </li>
    )
}

export const Dropdown = ({...props}) => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">Action 1</a>
                <a className="dropdown-item" href="#">Action 2</a>
            </div>
        </li>
    );
}

export const SearchBtn = (props) => {
    return (
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search"/ >
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    );
}

{/* export default function Navbar({...props}) {
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <Navitem text="about" link="/about/"></Navitem>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                        <a className="dropdown-item" href="#">Action 1</a>
                        <a className="dropdown-item" href="#">Action 2</a>
                    </div>
                </li>
            </ul>
            
        </div>
    </nav>
    </>
  );
} */}