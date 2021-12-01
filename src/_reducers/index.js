import { combineReducers } from 'redux';
import { authConstants } from "../_constants";
import { auth } from './auth.reducers';
import { committee } from './committee.reducers';
import { contact } from './contact.reducers';
import { department } from './department.reducers';
import { invoice } from './invoice.reducers';
import { requisition } from './requisition.reducers';
import { roles } from './roles.reducers';
import { rules } from './rules.reducers';
import { vendor } from './vendor.reducers';
import { buyer } from './buyer.reducers';
import { home } from './home.reducers';
import { recievedrfp } from './recievedrfp.reducers';
import{generatePurchaseOrder} from './purchaseOrder.reducer';
import{email} from'./email.reducers'
const appReducers = combineReducers({
    auth,
    committee,
    contact,
    department,
    invoice,
    requisition,
    roles,
    rules,
    vendor,
    buyer,
    home,
    recievedrfp,
    generatePurchaseOrder,
    email
});

const rootReducer = (state, action) => {
    if (action.type === authConstants.LOGOUT) {
        state = undefined;
    }
    return appReducers(state, action);
}

export default rootReducer;