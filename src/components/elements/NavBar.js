import React from "react";
import MenuItem from "./MenuItem";
import Resume from "../../resume.json";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false, scrolling: false };
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleMenuClick(e) {
    const currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if (window.scrollY === 0) {
      this.setState({ scrolling: false });
    }
    else if (window.scrollY !== 0) {
      this.setState({scrolling: true});
    }
  }

  render() {
    return (
      <nav className={this.state.scrolling ? "navbar is-transparent is-fixed-top" : "navbar is-transparent"}>
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item title is-unselectable my-name">
              {Resume.basics.name}
            </a>
            <span
              className="navbar-burger burger"
              onClick={this.handleMenuClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div
            className={
              "navbar-menu nav-menu " +
              (this.state.showMenu ? "is-active" : null)
            }
          >
            <div className="navbar-end" onClick={this.handleMenuClick}>
              <MenuItem text="About Me" href="#aboutMe" />
              <MenuItem text="Skills" href="#skills" />
              <MenuItem text="Experience" href="#experience" />
              <MenuItem text="Articles" href="#articles" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
