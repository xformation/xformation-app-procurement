import { combineReducers } from 'redux';
import { authConstants } from "../_constants";
import { auth } from './auth.reducers';
import { committee } from './committee.reducers';
import { contact } from './contact.reducers';
import { currency } from './currency.reducers';
import { department } from './department.reducers';
import { invoice } from './invoice.reducers';
import { mails } from './mails.reducers';
import { purchaseOrder } from './purchaseOrder.reducers';
import { quotation } from './quotation.reducers';
import { requisition } from './requisition.reducers';
import { requisitionLineTtem } from './requisitionLineTtem.reducers';
import { roles } from './roles.reducers';
import { rules } from './rules.reducers';
import { vendor } from './vendor.reducers';
import { buyer } from './buyer.reducers';
import { committeeMembers } from './committeeMembers.reducers';
import { home } from './home.reducers';

const appReducers = combineReducers({
    auth,
    committee,
    contact,
    currency,
    department,
    invoice,
    mails,
    purchaseOrder,
    quotation,
    requisition,
    requisitionLineTtem,
    roles,
    rules,
    vendor,
    buyer,
    committeeMembers,
    home
});

const rootReducer = (state, action) => {
    if (action.type === authConstants.LOGOUT) {
        state = undefined;
    }
    return appReducers(state, action);
}

export default rootReducer;