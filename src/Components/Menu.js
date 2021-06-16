import { Link, withRouter } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { emailData } from '../PostLogin/Email/emaildata';
import { Component } from 'react';
import 'simplebar/dist/simplebar.min.css';

class Menu extends Component {
    constructor(props) {
        super(props)
    }

    handleNavClick = () => {
        const { nav, onChildrenClick } = this.props;
        if (nav.children) {
            onChildrenClick();
            return;
        }
    }

    render() {
        const { isActive, nav, isExpanded } = this.props;

        return (
            <li className="sidebar-menu">
                <ListItem className={isActive ? "active" : ""} onClick={this.handleNavClick} tabindex="0" component={Link} to={nav.children ? '#' : nav.to}>
                    <ListItemIcon className="icon">
                        {nav.icon}
                    </ListItemIcon>
                    <ListItemText primary={nav.name === 'Email' ? `${nav.name} ${emailData.length}` : nav.name} className="name" />
                </ListItem>
                {isExpanded && nav.children &&
                    nav.children.map(el => (
                        <ListItem key={el.to} component={Link} to={el.to}>
                            <ListItemText primary={el.name} className="name" />
                        </ListItem>
                    ))}
            </li>
        )
    }
}

export default withRouter(Menu);