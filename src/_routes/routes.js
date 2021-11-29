import React from 'react';
const Dashbord = React.lazy(() => import('../PostLogin/Dashbord'));
const EmailPage = React.lazy(() => import('../PostLogin/Email/EmailPage'));
const Kanban = React.lazy(() => import('../PostLogin/Kanban'));
const ManageRequisition = React.lazy(() => import('../PostLogin/Requisition/ManageRequisition'));
const RequisitionTracker = React.lazy(() => import('../PostLogin/Requisition/RequisitionTracker'));
const NewRequisition = React.lazy(() => import('../PostLogin/Requisition/NewRequisition'));
const ApprovedRequisition = React.lazy(() => import('../PostLogin/Requisition/ApprovedRequisition'));
const ViewRequisition = React.lazy(() => import('../PostLogin/Requisition/ViewRequisition'));
const SelectBuyers = React.lazy(() => import('../PostLogin/SelectBuyers'));
const SetUpCommittee = React.lazy(() => import('../PostLogin/SetUpCommittee'));
const RecievedRfp = React.lazy(() => import('../PostLogin/RecievedRfp'));
const RecievedRfq = React.lazy(() => import('../PostLogin/RecievedRfq'));
const GeneratePo = React.lazy(() => import('../PostLogin/GeneratePo/'));
const Contact = React.lazy(() => import('../PostLogin/Contact'));
const addNewContact = React.lazy(() => import('../PostLogin/Contact/addNewContact'));
const VendorEnroll = React.lazy(() => import('../PostLogin/VendorEnroll'));
const Invoices = React.lazy(() => import('../PostLogin/Invoices'));
const ViewInvoice = React.lazy(() => import('../PostLogin/Invoices/ViewInvoice'))
const Calender = React.lazy(() => import('../PostLogin/Calender'));
const selectCommitteeMember = React.lazy(() => import('../PostLogin/SetUpCommittee/selectCommitteeMember'));
const ViewRecievedRfp = React.lazy(() => import('../PostLogin/RecievedRfp/ViewRecievedRfp'));
const ViewRecievedRfq = React.lazy(() => import('../PostLogin/RecievedRfq/ViewRecievedRfq'));
const ViewPurchaseOrder = React.lazy(() => import('../PostLogin/GeneratePo/viewPo'));

const routes = [
    { path: '/postlogin/dashboard', exact: true, name: 'Dashbord', component: Dashbord },
    { path: '/postlogin/email', exact: true, name: 'EmailPage', component: EmailPage },
    { path: '/postlogin/kanban', exact: true, name: 'Kanban', component: Kanban },
    { path: '/postlogin/requisitiontracker', exact: true, name: 'RequisitionTracker', component: RequisitionTracker },
    { path: '/postlogin/newrequisition', exact: true, name: 'NewRequisition', component: NewRequisition },
    { path: '/postlogin/newrequisition/:id', exact: true, name: 'NewRequisition', component: NewRequisition },
    { path: '/postlogin/approvedrequisition', exact: true, name: 'ApprovedRequisition', component: ApprovedRequisition },
    { path: '/postlogin/viewdetails/:id', exact: true, name: 'ViewRequisition', component: ViewRequisition },
    { path: '/postlogin/selectbuyers/:id', exact: true, name: 'SelectBuyers', component: SelectBuyers },
    { path: '/postlogin/setupcommittee', exact: true, name: 'SetUpCommittee', component: SetUpCommittee },
    { path: '/postlogin/recivedrfp', exact: true, name: 'RecievedRfp', component: RecievedRfp },
    { path: '/postlogin/recievedrfq', exact: true, name: 'RecievedRfq', component: RecievedRfq },
    { path: '/postlogin/generatepo', exact: true, name: 'GeneratePo', component: GeneratePo },
    { path: '/postlogin/generatepo/:id', exact: true, name: 'ViewPurchaseOrder', component: ViewPurchaseOrder },
    { path: '/postlogin/contact', exact: true, name: 'Contact', component: Contact },
    { path: '/postlogin/newcontact', exact: true, name: 'addNewContact', component: addNewContact },
    { path: '/postlogin/newcontact/:id', exact: true, name: 'addNewContact', component: addNewContact },
    { path: '/postlogin/vendorenroll', exact: true, name: 'VendorEnroll', component: VendorEnroll },
    { path: '/postlogin/invoices', exact: true, name: 'Invoices', component: Invoices },
    { path: '/postlogin/viewinvoice/:id', exact: true, name: 'ViewInvoices', component: ViewInvoice },
    { path: '/postlogin/managerequisition', exact: true, name: 'ManageRequisition', component: ManageRequisition },
    { path: '/postlogin/calender', exact: true, name: 'Calender', component: Calender },
    { path: '/postlogin/selectecommittee', exact: true, name: 'selectCommitteeMember', component: selectCommitteeMember },
    { path: '/postlogin/recivedrfp/:id', exact: true, name: 'ViewRecievedRfp', component: ViewRecievedRfp },
    { path: '/postlogin/recivedrfq/:id', exact: true, name: 'ViewRecievedRfq', component: ViewRecievedRfq },
]

export default routes;