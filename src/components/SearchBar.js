import React from "react";
import './search-bar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";



class SearchBar extends React.Component {
  
  onInputChange(e){
this.props.inputChange(e);
  }

  onFormSubmit(e){
   e.preventDefault();
   this.props.formSubmitted();
   
   
  }
  render() {
    const location = this.props.location;
    
   
    return (
    <div className="search-bar">
      <form className="search-form"onSubmit={(e) => this.onFormSubmit(e)}>
       
       <button className="search-form__btn"type="submit"><FontAwesomeIcon icon={faSearch} color="white" /></button>
       <input 
       id="search" 
       name="search"  
       value = {location}
       className="search-form__input"
       onChange={e => this.onInputChange(e)}
      
       ></input>
     </form>
     
    </div>
        
     
      
      
    );
  }
}
export default SearchBar;
