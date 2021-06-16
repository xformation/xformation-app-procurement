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
// import Menu from './Menu';

class SideMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true,
      activeTab: 0,
      data: false,
      activeChildren: null,
    }
  }

  handleDrawerOpenClose = () => {
    const { isOpen, } = this.state;
    let data = !isOpen;
    this.setState({
      isOpen: data,
      isChild: false
    });
  };

  LINKS = [
    { url: '/PostLogin/dashboard', active: 0 },
    { url: '/PostLogin/email', active: 1 },
    { url: '/PostLogin/chat', active: 2 },
    { url: '/PostLogin/kanban', active: 3 },
    { url: '/PostLogin/setupcommittee', active: 4 },
    { url: '/PostLogin/recivedrfp', active: 5 },
    { url: '/PostLogin/sendrfq', active: 6 },
    { url: '/PostLogin/newreq', active: 7 },
    { url: '/psotLogin/managereq', active: 8 },
    { url: '/PostLogin/reqtracker', active: 9 },
    { url: '/postLogin/approvedreq', active: 10 },
    { url: '/postLogin/contact', active: 11 },
    { url: '/postLogin/invoices', active: 12 },
    { url: '/postLogin/generatepo', active: 13 },
    { url: '/postLogin/calender', active: 14 },
    { url: '/postLogin/vendor', active: 15 }
  ];

  componentDidMount() {
    const { history } = this.props;
    this.historyListener = history.listen((location) => {
      this.changeActiveTabColor(location);
    });
    this.changeActiveTabColor(this.props.location);
  }

  changeActiveTabColor = (location) => {
    const pathname = location.pathname;
    for (let i = 0; i < this.LINKS.length; i++) {
      if (pathname.indexOf(this.LINKS[i].url) !== -1) {
        this.setState({
          activeTab: this.LINKS[i].active
        });
        break;
      }
    }
  };

  onChildrenClick = (index) => {
    const { activeChildren } = this.state;

    if (index !== activeChildren) {
      this.setState({ activeChildren: index })
    } else {
      this.setState({ activeChildren: null });
    }
  }

  setActiveTab = (index) => {
    for (let i = 0; i < navigation.length; i++) {
      if (i == index && navigation[i].children) {
        navigation[i].open = !navigation[i].open;
      } else {
        navigation[i].open = false;
      }
    }
    this.setState({
      activeTab: index
    });
  }

  displaySidebarMenu = () => {
    const { activeTab, activeChildren } = this.state;
    let cpath = this.props.location.pathname;
    let retData = [];
    for (let i = 0; i < navigation.length; i++) {
      let nav = navigation[i];
      retData.push(
        <li className="sidebar-menu">
          <ListItem className={activeTab === i ? "active" : ""} tabindex="0" component={Link} to={nav.to}>
            <ListItemIcon className="icon">
              {nav.icon}
            </ListItemIcon>
            <ListItemText primary={nav.name} className="name" />
            {nav.name === 'Email' && <span className="float-right length">{emailData.length}</span>}
          </ListItem>
          {nav.children &&
            <div className="float-right arrow" onClick={e => this.setActiveTab(i)}>
              {!nav.open &&
                <ExpandMoreIcon />
              }
              {nav.open &&
                <ExpandLessIcon />
              }
            </div>
          }
          {(nav.children && nav.open) &&
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
    console.log(data);
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