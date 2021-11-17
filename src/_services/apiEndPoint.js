import config from '../config';

export const apiEndPoint = {
    LOGIN: `${config.apiUrl}/auth/login`,

    // *Buyer Api Url
    ADDBUYER: `${config.apiUrl}/addBuyer`,
    FETCHBUYER: `${config.apiUrl}/searchBuyer`,
    GETEDITBUYER: `${config.apiUrl}/getBuyer`,
    DELETEBUYER: `${config.apiUrl}/deleteBuyer`,
    UPDATEBUYER: `${config.apiUrl}/updateBuyer`,

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
};