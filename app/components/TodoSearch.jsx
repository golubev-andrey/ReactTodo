const React = require('react');

const TodoSearch = React.createClass({
  handleSearch: function() {
    let showCompleted = this.refs.showCompleted.checked;
    let searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },

  render: function() {
    return(
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="search todos" onChange={this.handleSearch}></input>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
            Show Completed todos
          </label>
        </div>
      </div>
    )
  }
});

module.exports = TodoSearch;