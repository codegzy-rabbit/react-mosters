import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { className, onChange, placeholder } = this.props;
    return (
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
}

export default SearchBox;
