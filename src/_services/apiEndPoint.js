import config from '../config';

export const apiEndPoint = {
    LOGIN: `${config.apiUrl}/auth/login`,

    // *Buyer Api Url
    BUYER: `${config.apiUrl}/buyers`,

    // *Committee Api Url
    COMMITTEE: `${config.apiUrl}/committee`,
    COMMITTEETYPE: `${config.apiUrl}/committeeType`,

    // *Contact Api Url
    CONTACT: `${config.apiUrl}/contacts`,

    INVITATION: `${config.apiUrl}/invitation`,

    // *Department Api Url
    DEPARTMENT: `${config.apiUrl}/department`,

    // *Contact Api Url
    INVOICE: `${config.apiUrl}/invoice`,
    NEWINVOICE: `${config.apiUrl}/newInvoice`,

    // Requisition Api Url
    REQUISTION: `${config.apiUrl}/requisition`,
    APPROVEDREQUISITION: `${config.apiUrl}/approveRequisition`,


    CURRENCY: `${config.apiUrl}/currency`,

    // *Role Api Url
    ROLE: `${config.apiUrl}/roles`,

    // *Vendor Api Url
    ADDVENDOR: `${config.apiUrl}/addVendor`,

    // *Rules Api Url
    RULES: `${config.apiUrl}/rules`,

    // *recievedrfp api url

    RECIEVEDRFP: `${config.apiUrl}/recievedRfp`,

    //*generate po api url

    GENERATEPO: `${config.apiUrl}/generatePo`,

    APPROVEPO: `${config.apiUrl}/generateApprovePo`,

    //recievedefq api url

    RECIEVEDRFQ: `${config.apiUrl}/recievedRfq`,

    // email api url
    CHATS: `${config.apiUrl}/chat`,
    EMAIL: `${config.apiUrl}/mailList`,

    //*kanban api url
    KANBAN: `${config.apiUrl}/kanbanList`,

    //  dashboardApiURL
    DASHBOARDDATA: `${config.apiUrl}/dashboardData`,

    // frp track Api url
    TRACKFRPDATA: `${config.apiUrl}/trackfrpdata`,

    //GET NOTIFICATION DATA
    NOTIFICATIONS: `${config.apiUrl}/notifications`,

    // GET BUDGETOVERVIEW DATA
    BUDGET: `${config.apiUrl}/bugetOverviewData`,

    //GET REPORTS DATA 
    GETREPORTS: `${config.apiUrl}/getReorts`,

};