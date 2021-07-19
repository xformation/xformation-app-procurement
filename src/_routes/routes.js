import React from 'react';
const Dashbord = React.lazy(() => import('../PostLogin/Dashbord'));
const EmailPage = React.lazy(() => import('../PostLogin/Email/EmailPage'));
const Kanban = React.lazy(() => import('../PostLogin/Kanban'));
const RequisitionTracker = React.lazy(() => import('../PostLogin/RequisitionTracker'));
const NewRequisition = React.lazy(() => import('../PostLogin/NewRequisition'));
const SetUpCommittee = React.lazy(() => import('../PostLogin/SetUpCommittee'));
const RecievedRfp = React.lazy(() => import('../PostLogin/RecievedRfp'));
const SendRfq = React.lazy(() => import('../PostLogin/SendRfq'));
const ApprovedRrequisition = React.lazy(() => import('../PostLogin/ApprovedRrequisition'));
const GeneratePo = React.lazy(() => import('../PostLogin/GeneratePo/'));
const Contact = React.lazy(() => import('../PostLogin/Contact'));
const VendorEnroll = React.lazy(() => import('../PostLogin/VendorEnroll'));
const Invoices = React.lazy(() => import('../PostLogin/Invoices'));
const ManageRequisition = React.lazy(() => import('../PostLogin/ManageRequisition'));
const Calender = React.lazy(() => import('../PostLogin/Calender'));

const routes = [
    { path: '/PostLogin/dashboard', exact: true, name: 'Dashbord', component: Dashbord },
    { path: '/PostLogin/email', exact: true, name: 'EmailPage', component: EmailPage },
    { path: '/PostLogin/kanban', exact: true, name: 'Kanban', component: Kanban },
    { path: '/PostLogin/Requisitiontracker', exact: true, name: 'RequisitionTracker', component: RequisitionTracker },
    { path: '/PostLogin/Newrequisition', exact: true, name: 'NewRequisition', component: NewRequisition },
    { path: '/PostLogin/setupcommittee', exact: true, name: 'SetUpCommittee', component: SetUpCommittee },
    { path: '/PostLogin/recivedrfp', exact: true, name: 'RecievedRfp', component: RecievedRfp },
    { path: '/PostLogin/Sendrfq', exact: true, name: 'SendRfq', component: SendRfq },
    { path: '/PostLogin/approvedrequisition', exact: true, name: 'ApprovedRrequisition', component: ApprovedRrequisition },
    { path: '/PostLogin/generatepo', exact: true, name: 'GeneratePo', component: GeneratePo },
    { path: '/PostLogin/Contact', exact: true, name: 'Contact', component: Contact },
    { path: '/PostLogin/vendorenroll', exact: true, name: 'VendorEnroll', component: VendorEnroll },
    { path: '/PostLogin/invoices', exact: true, name: 'Invoices', component: Invoices },
    { path: '/PostLogin/managerequisition', exact: true, name: 'ManageRequisition', component: ManageRequisition },
    { path: '/PostLogin/Calender', exact: true, name: 'Calender', component: Calender }
]

export default routes;