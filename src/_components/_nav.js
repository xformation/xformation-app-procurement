import 'react-pro-sidebar/dist/css/styles.css'

const _nav = [
    {
        _tag: 'SidebarNavItem',
        name: 'Dashbord',
        to: '/postlogin/dashboard',
        activeArr: ['/postlogin/dashboard'],
        open: false,
        icon: <i className="fas fa-tachometer-fast"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Email',
        to: '/postlogin/email',
        activeArr: ['/postlogin/email'],
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
        to: '/postlogin/chat',
        activeArr: ['/postlogin/chat'],
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
        to: '/postlogin/kanban',
        activeArr: ['/postlogin/kanban'],
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
        to: '/postlogin/setupcommittee',
        activeArr: ['/postlogin/setupcommittee'],
        open: false,
        icon: <i className="fab fa-jedi-order"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Recieved RFP',
        to: '/postlogin/recivedrfp',
        activeArr: ['/postlogin/recivedrfp'],
        open: false,
        icon: <i className="fas fa-retweet"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Send RfQ',
        to: '/postlogin/sendrfq',
        activeArr: ['/postlogin/sendrfq'],
        open: false,
        icon: <i className="fab fa-first-order"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'New Requisition',
        to: '/postlogin/newrequisition',
        activeArr: ['/postlogin/newRequisition'],
        open: false,
        icon: <i className="fas fa-sync-alt"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Manage Requisition',
        to: '/postlogin/managerequisition',
        activeArr: ['/postlogin/managerequisition'],
        open: false,
        icon: <i className="fab fa-galactic-republic"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Requisition Tracker',
        to: '/postlogin/requisitiontracker',
        activeArr: ['/postlogin/requisitiontracker'],
        open: false,
        icon: <i className="fas fa-road"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Approved Requisition',
        to: '/postlogin/approvedrequisition',
        activeArr: ['/postlogin/approvedrequisition'],
        open: false,
        icon: <i className="fas fa-star"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Contact',
        to: '/postlogin/contact',
        activeArr: ['/postlogin/contact'],
        open: false,
        icon: <i className="fas fa-id-badge"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: 'Invoices',
        to: '/postlogin/invoices',
        activeArr: ['/postlogin/invoices'],
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
        to: '/postlogin/generatepo',
        activeArr: ['/postlogin/generatepo'],
        open: false,
        icon: <i className="fas fa-folder-plus"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: ' Calender',
        to: '/postlogin/calender',
        activeArr: ['/postlogin/calender'],
        open: false,
        icon: <i className="fas fa-calendar"></i>,
    },
    {
        _tag: 'SidebarNavItem',
        name: ' Vendor Enroll',
        to: '/postlogin/vendorenroll',
        activeArr: ['/postlogin/vendorenroll'],
        open: false,
        icon: <i className="fas fa-shekel-sign"></i>,
    }
]

export default _nav;