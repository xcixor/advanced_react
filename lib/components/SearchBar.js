import React from 'react';
import debounce from 'lodash.debounce';


class SearchBar extends React.Component{
  state = {
    searchTerm: '',
  };

  doSearch = debounce(() => {
    this.props.doSearch(this.state.searchTerm);
  }, 600);

  handleSearch = (event)=> {
    this.setState({ searchTerm: event.target.value}, ()=> {
      this.doSearch();
    });
  }
  render() {
    return (
      <input className="search-input"
        type="search"
        placeholder="Search"
        onChange={this.handleSearch}
        value={this.state.searchTerm}
      />
    );
  }
}

export default SearchBar;