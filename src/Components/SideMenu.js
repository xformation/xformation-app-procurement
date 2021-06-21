import React, { Component } from 'react';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import navigation from './_nav';
import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { emailData } from './../PostLogin/Email/emaildata';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

class SideMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true,
      activeTab: 0,
      openedSubMenus: []
    }
  }

  handleDrawerOpenClose = () => {
    const { isOpen, } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };

  componentDidMount() {
    const { history } = this.props;
    this.historyListener = history.listen((location) => {
      this.changeActiveTabColor(location);
    });
    this.changeActiveTabColor(this.props.location);
  }

  changeActiveTabColor = (location) => {
    const pathname = location.pathname;
    for (let i = 0; i < navigation.length; i++) {
      if (pathname.indexOf(navigation[i].to) !== -1) {
        this.setState({
          activeTab: i
        });
        break;
      }
    }
  };

  setActiveTab = (index) => {
    this.setState({
      activeTab: index
    });
  }

  setOpenClose = (index) => {
    const { openedSubMenus } = this.state;
    openedSubMenus[index] = !openedSubMenus[index];
    this.setState({
      openedSubMenus
    });
  };

  displaySidebarMenu = () => {
    const { activeTab, openedSubMenus } = this.state;
    let retData = [];
    for (let i = 0; i < navigation.length; i++) {
      let nav = navigation[i];
      retData.push(
        <li className="sidebar-menu">
          <ListItem className={activeTab === i ? "active" : ""} tabindex="0" component={Link} to={nav.to} onClick={() => this.setActiveTab(i)}>
            <ListItemIcon className="icon">
              {nav.icon}
            </ListItemIcon>
            <ListItemText primary={nav.name} className="name" />
            {nav.name === 'Email' && <span className="float-right length">{emailData.length}</span>}
          </ListItem>
          {nav.children &&
            <div className="float-right arrow" onClick={e => this.setOpenClose(i)}>
              {!openedSubMenus[i] &&
                <ExpandMoreIcon />
              }
              {openedSubMenus[i] &&
                <ExpandLessIcon />
              }
            </div>
          }
          {(nav.children && openedSubMenus[i]) &&
            <ul>
              {this.displayChild(nav.children)}
            </ul>
          }
        </li>
      );
    }
    return retData;
  }

  displayChild = (data) => {
    let childData = [];
    for (let j = 0; j < data.length; j++) {
      childData.push(
        <ListItem>
          <Link to={data[j].to}>
            {data[j].name}
          </Link>
        </ListItem>
      );
    }
    return childData;
  }

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <div className="d-block d-md-none mobile-toggale">
          <IconButton className="menu-toggale"
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerOpenClose}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className={isOpen ? "sidebar open" : "sidebar"}>
          <div className="d-block logo-container">
            <div className="logo"><a href="/"><img src={Logo} alt="" /></a></div>
            <div className="toggale">
              <IconButton className="menu-toggale"
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpenClose}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </div>
          <SimpleBar style={{ maxHeight: 'calc(100% - 76px)' }}>
            <List className="sidebar-content">
              <ListItem className="menu-heading">
                Main Menu
              </ListItem>
              {this.displaySidebarMenu()}
            </List>
            <div className="increase-box">
              <span><ViewComfyIcon /></span>
              <p>Increase your <br /> work with kanban</p>
              <span><ArrowRightAltIcon /></span>
            </div>
          </SimpleBar>
        </div>
      </>)
  }
}


export default SideMenu;