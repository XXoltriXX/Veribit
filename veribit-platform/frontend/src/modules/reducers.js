import { connectRouter } from 'connected-react-router';
import layout from 'modules/layout/layoutReducers';
import auth from 'modules/auth/authReducers';
import iam from 'modules/iam/iamReducers';
import auditLog from 'modules/auditLog/auditLogReducers';
import settings from 'modules/settings/settingsReducers';
import apps from 'modules/apps/appsReducers';
import media from 'modules/media/mediaReducers';
import sign from 'modules/sign/signReducers';
import share from 'modules/share/shareReducers';
import product from 'modules/product/productReducers';
import order from 'modules/order/orderReducers';
import partner from 'modules/partner/partnerReducers';
import customer from 'modules/customer/customerReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    iam,
    auditLog,
    settings,
    apps,
    media,
    sign,
    share,
    product,
    order,
    partner,
    customer,
  });
