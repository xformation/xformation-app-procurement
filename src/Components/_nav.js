import 'react-pro-sidebar/dist/css/styles.css'
import SpeedIcon from '@material-ui/icons/Speed';
import EmailIcon from '@material-ui/icons/Email';
import ChatIcon from '@material-ui/icons/Chat';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import CreateNewFolderRoundedIcon from '@material-ui/icons/CreateNewFolderRounded';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import SyncIcon from '@material-ui/icons/Sync';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import CalendarTodayTwoToneIcon from '@material-ui/icons/CalendarTodayTwoTone';
import ReceiptIcon from '@material-ui/icons/Receipt';
import RepeatIcon from '@material-ui/icons/Repeat';

const _nav = [
    {
        _tag: 'SidebarNavItem',
        name: 'Dashbord',
        to: '/PostLogin/dashboard',
        activeArr: ['/PostLogin/dashboard'],
        open: false,
        icon: <SpeedIcon />,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Email',
        to: '/PostLogin/email',
        activeArr: ['/email'],
        open: false,
        icon: <EmailIcon />,
        children: [
            {
                _tag: 'CSidebarNavItem',
                name: 'Email 1',
                to: '/',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Email 2',
                to: '/',
            },
        ]
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Chat',
        to: '/PostLogin/chat',
        activeArr: ['/chat'],
        open: false,
        icon: <ChatIcon />,
        children: [
            {
                _tag: 'CSidebarNavItem',
                name: 'Chat 1',
                to: '/',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Chat 2',
                to: '/',
            },
        ]
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Kanban',
        to: '/PostLogin/kanban',
        activeArr: ['/kanban'],
        open: false,
        icon: <AppsRoundedIcon />,
        children: [
            {
                _tag: 'CSidebarNavItem',
                name: 'Kanban 1',
                to: '/',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Kanban 2',
                to: '/',
            },
        ]
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Setup Committee',
        to: '/PostLogin/setupcommittee',
        activeArr: ['/setupcommittee'],
        open: false,
        icon: <span className="setup"></span>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Recieved RFP',
        to: '/PostLogin/recivedrfp',
        activeArr: ['/Recieved RFP'],
        open: false,
        icon: <RepeatIcon />,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Send RfQ',
        to: '/PostLogin/sendrfq',
        activeArr: ['/Send RfQ'],
        open: false,
        icon: <span className="rfq"></span>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'New Requisition',
        to: '/PostLogin/newreq',
        activeArr: ['/newreq'],
        open: false,
        icon: <SyncIcon />,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Manage Requisition',
        to: '/psotLogin/managereq',
        activeArr: ['/Manage Requisition'],
        open: false,
        icon: <span className="manage"></span>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Requisition Tracker',
        to: '/PostLogin/reqtracker',
        activeArr: ['/reqtracker'],
        open: false,
        icon: <span className="tracker"></span>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Approved Requisition',
        to: '/postLogin/approvedreq',
        activeArr: ['/Approved Requisition'],
        open: false,
        icon: <StarRateRoundedIcon />,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Contact',
        to: '/postLogin/contact',
        activeArr: ['/Contact'],
        open: false,
        icon: <PermContactCalendarIcon />,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Invoices',
        to: '/postLogin/invoices',
        activeArr: ['/Invoices'],
        open: false,
        icon: <ReceiptIcon />,
        children: [
            {
                _tag: 'CSidebarNavItem',
                name: 'Kanban 1',
                to: '/',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Kanban 2',
                to: '/',
            },
        ]
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Generate P.O',
        to: '/postLogin/generatepo',
        activeArr: ['/Generate P.O'],
        open: false,
        icon: <CreateNewFolderRoundedIcon />,
    },
    {
        _tag: 'SidebarNavItem',
        name: ' Calender',
        to: '/postLogin/calender',
        activeArr: ['/ Calender'],
        open: false,
        icon: <CalendarTodayTwoToneIcon />,
    },
    {
        _tag: 'SidebarNavItem',
        name: ' Vendor Enroll',
        to: '/postLogin/vendor',
        activeArr: ['/ Vendor Enroll'],
        open: false,
        icon: <span className="vendor"></span>,
    }
]

export default _nav;