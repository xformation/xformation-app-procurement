import config from '../config';

export const apiEndPoint = {
    LOGIN: `${config.apiUrl}/auth/login`,

    // *Buyer Api Url
    ADDBUYER: `${config.apiUrl}/addbuyer`,
    FETCHBUYER: `${config.apiUrl}/fetchbuyer`,
    GETEDITBUYER: `${config.apiUrl}/buyers`,
    DELETEBUYER: `${config.apiUrl}/deleteBuyer`,
    UPDATEBUYER: `${config.apiUrl}/setbuyers`,

    // *Committee Api Url
    ADDCOMMITTEE: `${config.apiUrl}/addCommittee`,
    FETCHCOMMITTEE: `${config.apiUrl}/searchCommittee`,
    GETEDITCOMMITTEE: `${config.apiUrl}/getCommittee`,
    DELETECOMMITTEE: `${config.apiUrl}/deleteCommittee`,
    UPDATECOMMITTEE: `${config.apiUrl}/updateCommittee`,

    // *Contact Api Url
    ADDCONTACT: `${config.apiUrl}/addContact`,
    FETCHCONTACT: `${config.apiUrl}/fetchcontact`,
    GETEDITCONTACT: `${config.apiUrl}/geteditcontact/2`,
    DELETECONTACT: `${config.apiUrl}/deletecontact/id`,
    UPDATECONTACT: `${config.apiUrl}/editContact`,

    // *Department Api Url
    FETCHDEPARTMENT: `${config.apiUrl}/getdepartment`,

    // *Contact Api Url
    ADDINVOICE: `${config.apiUrl}/addInvoice`,
    FETCHINVOICE: `${config.apiUrl}/fetchinvoice`,
    GETEDITINVOICE: `${config.apiUrl}/viewinvoice`,
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


    GETCURRENCY: `${config.apiUrl}/getcurrency`,

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