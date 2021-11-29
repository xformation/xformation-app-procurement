import config from '../config';

export const apiEndPoint = {
    LOGIN: `${config.apiUrl}/auth/login`,

    // *Buyer Api Url
    ADDBUYER: `${config.apiUrl}/addBuyer`,
    GETEDITBUYER: `${config.apiUrl}/getBuyers`,
    DELETEBUYER: `${config.apiUrl}/deleteBuyer`,
    UPDATEBUYER: `${config.apiUrl}/setBuyers`,

    // *Committee Api Url
    ADDCOMMITTEE: `${config.apiUrl}/addCommittee`,
    FETCHCOMMITTEE: `${config.apiUrl}/searchCommittee`,
    GETCOMMITTEETYPE: `${config.apiUrl}/getCommitteeType`,

    // *Contact Api Url
    ADDCONTACT: `${config.apiUrl}/addContact`,
    FETCHCONTACT: `${config.apiUrl}/getContacts`,
    GETCONTACT: `${config.apiUrl}/getContact`,
    DELETECONTACT: `${config.apiUrl}/deleteContact`,
    UPDATECONTACT: `${config.apiUrl}/editContact`,

    // *Department Api Url
    FETCHDEPARTMENT: `${config.apiUrl}/searchDepartment`,

    // *Contact Api Url
    ADDINVOICE: `${config.apiUrl}/addInvoice`,
    FETCHINVOICE: `${config.apiUrl}/fetchInvoice`,
    GETINVOICE: `${config.apiUrl}/viewInvoice`,
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

    // *recievedrfp api url

    FETCHRECIEVEDRFP: `${config.apiUrl}/searchRecievedRfp`,
    GETRECIEVEDRFP: `${config.apiUrl}/getRequisitionRfp`,
    ADDSTATUSRFP: `${config.apiUrl}/addStatusRfp`,

    //*generate po api url

    FETCHGPO: `${config.apiUrl}/searchGeneratePo`,
    GETGPO: `${config.apiUrl}/getGeneratePo`,
    ADDGPODETAIL: `${config.apiUrl}/addGeneratePoDetail`,

    //recievedefq api url

    FETCHRECIEVEDRFQ: `${config.apiUrl}/searchRecievedRfq`,
    GETRECIEVEDRFQ: `${config.apiUrl}/getRecievedRfq`,
    ADDSTATUSRFQ: `${config.apiUrl}/addStatusRfq`,
};