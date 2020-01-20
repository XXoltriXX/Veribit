import { connectRouter } from 'connected-react-router';
import layout from 'modules/layout/layoutReducers';
import auth from 'modules/auth/authReducers';
import iam from 'modules/iam/iamReducers';
import auditLog from 'modules/auditLog/auditLogReducers';
import settings from 'modules/settings/settingsReducers';
import customer from 'modules/customer/customerReducers';
import product from 'modules/product/productReducers';
import order from 'modules/order/orderReducers';
import media from 'modules/media/mediaReducers';
import sign from 'modules/sign/signReducers';
import share from 'modules/share/shareReducers';
import partner from 'modules/partner/partnerReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    iam,
    auditLog,
    settings,
    customer,
    product,
    order,
    media,
    sign,
    share,
    partner,
  });
