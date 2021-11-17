import config from '../config';

export const apiEndPoint = {
    LOGIN: `${config.apiUrl}/auth/login`,

    // *Buyer Api Url
    ADDBUYER: `${config.apiUrl}/addBuyer`,
    FETCHBUYER: `${config.apiUrl}/searchBuyer`,
    GETEDITBUYER: `https://d10c1133-0814-46e5-937a-3211cf6287c7.mock.pstmn.io/buyers`,
    DELETEBUYER: `${config.apiUrl}/deleteBuyer`,
    UPDATEBUYER: `https://c9cd69b2-eed7-4c06-a92b-f81cb2b8f3d0.mock.pstmn.io/setbuyers`,

    // *Committee Api Url
    ADDCOMMITTEE: `${config.apiUrl}/addCommittee`,
    FETCHCOMMITTEE: `${config.apiUrl}/searchCommittee`,
    GETEDITCOMMITTEE: `${config.apiUrl}/getCommittee`,
    DELETECOMMITTEE: `${config.apiUrl}/deleteCommittee`,
    UPDATECOMMITTEE: `${config.apiUrl}/updateCommittee`,

    // *Contact Api Url
    ADDCONTACT: `https://a93eb577-66f7-41cb-b50c-6f63a32513ca.mock.pstmn.io/addContact`,
    FETCHCONTACT: `https://e5d3045c-b97e-4cac-8878-c7fd9cbdb85d.mock.pstmn.io/getContact`,
    GETEDITCONTACT: `https://93e1c756-9a54-4d6e-88fd-6d129024a21d.mock.pstmn.io/getEditContact`,
    DELETECONTACT: `https://c2a7ab89-89c4-480f-a1e4-3c8cb16c1aaf.mock.pstmn.io/deleteContact`,
    UPDATECONTACT: `https://09e7ce9b-49d0-44b0-8b5c-b3b065a72ef5.mock.pstmn.io/editContact`,

    // *Department Api Url
    FETCHDEPARTMENT: `${config.apiUrl}/searchDepartment`,

    // *Contact Api Url
    ADDINVOICE: `${config.apiUrl}/addInvoice`,
    FETCHINVOICE: `https://c1027ec9-3590-4b25-96ed-e4c56cd8cfbe.mock.pstmn.io/getinvoices`,
    GETEDITINVOICE: `${config.apiUrl}/getInvoice`,
    DELETEINVOICE: `${config.apiUrl}/deleteInvoice`,
    UPDATEINVOICE: `${config.apiUrl}/updateInvoice`,

    // Requisition Api Url
    ADDREQUISTION: `${config.apiUrl}/addRequisition`,
    FETCHREQUISTION: `${config.apiUrl}/searchRequisition`,
    GETEDITREQUISTION: `${config.apiUrl}/getRequisition`,
    DELETEREQUISTION: `${config.apiUrl}/deleteRequisition`,
    UPDATEREQUISTION: `${config.apiUrl}/updateRequisition`,
    SEARCHREQUISITION: `${config.apiUrl}/searchRequisition`,
    APPROVEDREQUISITION: `${config.apiUrl}/approveRequisition`,


    GETCURRENCY: `${config.apiUrl}/searchCurrency`,

    // *Role Api Url
    ADDROLE: `${config.apiUrl}/addRoles`,
    FETCHROLE: `${config.apiUrl}/searchRoles`,
    GETEDITROLE: `${config.apiUrl}/getRoles`,
    DELETEROLE: `${config.apiUrl}/deleteRoles`,
    UPDATEROLE: `${config.apiUrl}/updateRoles`,

     // *Vendor Api Url
     ADDVENDOR: `${config.apiUrl}/addVendor`,
     FETCHVENDOR: `${config.apiUrl}/searchVendor`,
     GETEDITVENDOR: `${config.apiUrl}/getVendor`,
     DELETEVENDOR: `${config.apiUrl}/deleteVendor`,
     UPDATEVENDOR: `${config.apiUrl}/updateVendor`,

     // *Rules Api Url
     ADDRULES: `${config.apiUrl}/addRules`,
     FETCHRULES: `${config.apiUrl}/searchRules`,
     GETEDITRULES: `${config.apiUrl}/getRulesByName`,
     DELETERULES: `${config.apiUrl}/deleteRules`,
     UPDATERULES: `${config.apiUrl}/updateRules`,
};