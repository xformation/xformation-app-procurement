import 'react-pro-sidebar/dist/css/styles.css'

const _nav = [
    {
        _tag: 'SidebarNavItem',
        name: 'Dashbord',
        to: '/PostLogin/dashboard',
        activeArr: ['/PostLogin/dashboard'],
        open: false,
        icon: <i className="fas fa-tachometer-fast"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Email',
        to: '/PostLogin/email',
        activeArr: ['/PostLogin/email'],
        open: false,
        icon: <i className="fas fa-envelope"></i>,
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
        activeArr: ['/PostLogin/chat'],
        open: false,
        icon: <i className="fas fa-comments"></i>,
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
        activeArr: ['/PostLogin/kanban'],
        open: false,
        icon: <i className="fab fa-microsoft"></i>,
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
        activeArr: ['/PostLogin/setupcommittee'],
        open: false,
        icon: <i className="fab fa-jedi-order"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Recieved RFP',
        to: '/PostLogin/recivedrfp',
        activeArr: ['/Recieved RFP'],
        open: false,
        icon: <i className="fas fa-retweet"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Send RfQ',
        to: '/PostLogin/Sendrfq',
        activeArr: ['/PostLogin/Sendrfq'],
        open: false,
        icon: <i className="fab fa-first-order"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'New Requisition',
        to: '/PostLogin/Newrequisition',
        activeArr: ['/PostLogin/NewRequisition'],
        open: false,
        icon: <i className="fas fa-sync-alt"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Manage Requisition',
        to: '/PostLogin/managerequisition',
        activeArr: ['/PostLogin/ManageRequisition'],
        open: false,
        icon: <i className="fab fa-galactic-republic"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Requisition Tracker',
        to: '/PostLogin/Requisitiontracker',
        activeArr: ['/PostLogin/Requisitiontracker'],
        open: false,
        icon: <i className="fas fa-road"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Approved Requisition',
        to: '/postLogin/approvedrequisition',
        activeArr: ['/PostLogin/approvedrequisition'],
        open: false,
        icon: <i className="fas fa-star"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Contact',
        to: '/postLogin/contact',
        activeArr: ['/PostLogin/Contact'],
        open: false,
        icon: <i className="fas fa-id-badge"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Invoices',
        to: '/postLogin/invoices',
        activeArr: ['/PostLogin/invoices'],
        open: false,
        icon: <i className="fas fa-receipt"></i>,
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
        activeArr: ['/PostLogin/generatepo'],
        open: false,
        icon: <i className="fas fa-folder-plus"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: ' Calender',
        to: '/postLogin/calender',
        activeArr: ['/PostLogin/calender'],
        open: false,
        icon: <i className="fas fa-calendar"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: ' Vendor Enroll',
        to: '/postLogin/vendorenroll',
        activeArr: ['/PostLogin/vendorenroll'],
        open: false,
        icon: <i className="fas fa-shekel-sign"></i>,
    }
]

export default _nav;