import React from 'react';
const Dashbord = React.lazy(() => import('../PostLogin/Dashbord'));
const EmailPage = React.lazy(() => import('../PostLogin/Email/EmailPage'));
const Kanban = React.lazy(() => import('../PostLogin/Kanban/Kanban'));
const ReqTracker = React.lazy(() => import('../PostLogin/ReqTracker/ReqTracker'));
const AddNewRequester = React.lazy(() => import('../PostLogin/NewRequester/AddNewReq'));
const SetUpCommittee = React.lazy(()=>import('../PostLogin/SetUpCommittee/SetUpCommittee'));

const routes = [
    { path: '/PostLogin/dashboard', exact: true, name: 'Dashbord', component: Dashbord },
    { path: '/PostLogin/email', exact: true, name: 'EmailPage', component: EmailPage },
    { path: '/PostLogin/kanban', exact: true, name: Kanban, component: Kanban },
    { path: '/PostLogin/reqtracker', exact: true, name: ReqTracker, component: ReqTracker },
    { path: '/PostLogin/newreq', exact: true, name: AddNewRequester, component: AddNewRequester },
    { path: '/PostLogin/setupcommittee', exact: true, name: SetUpCommittee, component: SetUpCommittee },
]


export default routes;