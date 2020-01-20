import Permissions from 'security/permissions';
import { i18n } from 'i18n';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    icon: 'home',
    label: i18n('home.menu'),
    menu: {
      exact: true,
    },
    loader: () => import('view/home/HomePage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
    menu: false,
  },

  {
    path: '/iam',
    loader: () => import('view/iam/list/IamPage'),
    permissionRequired: permissions.iamRead,
    exact: true,
    icon: 'user-add',
    label: i18n('iam.menu'),
    menu: true,
  },
  {
    path: '/iam/new',
    loader: () => import('view/iam/new/IamNewPage'),
    menu: false,
    permissionRequired: permissions.iamCreate,
    exact: true,
  },
  {
    path: '/iam/importer',
    loader: () =>
      import('view/iam/importer/IamImporterPage'),
    menu: false,
    permissionRequired: permissions.iamImport,
    exact: true,
  },
  {
    path: '/iam/:id/edit',
    loader: () => import('view/iam/edit/IamEditPage'),
    menu: false,
    permissionRequired: permissions.iamEdit,
    exact: true,
  },
  {
    path: '/iam/:id',
    loader: () => import('view/iam/view/IamViewPage'),
    menu: false,
    permissionRequired: permissions.iamRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    icon: 'file-search',
    label: i18n('auditLog.menu'),
    loader: () => import('view/auditLog/AuditLogPage'),
    menu: true,
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: 'setting',
    label: i18n('settings.menu'),
    loader: () => import('view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
    menu: true,
  },

  {
    path: '/customer',
    loader: () => import('view/customer/list/CustomerListPage'),
    permissionRequired: permissions.customerRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.customer.menu'),
    menu: true,
  },
  {
    path: '/customer/new',
    loader: () => import('view/customer/form/CustomerFormPage'),
    menu: false,
    permissionRequired: permissions.customerCreate,
    exact: true,
  },
  {
    path: '/customer/importer',
    loader: () =>
      import('view/customer/importer/CustomerImporterPage'),
    menu: false,
    permissionRequired: permissions.customerImport,
    exact: true,
  },
  {
    path: '/customer/:id/edit',
    loader: () => import('view/customer/form/CustomerFormPage'),
    menu: false,
    permissionRequired: permissions.customerEdit,
    exact: true,
  },
  {
    path: '/customer/:id',
    loader: () => import('view/customer/view/CustomerViewPage'),
    menu: false,
    permissionRequired: permissions.customerRead,
    exact: true,
  },

  {
    path: '/product',
    loader: () => import('view/product/list/ProductListPage'),
    permissionRequired: permissions.productRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.product.menu'),
    menu: true,
  },
  {
    path: '/product/new',
    loader: () => import('view/product/form/ProductFormPage'),
    menu: false,
    permissionRequired: permissions.productCreate,
    exact: true,
  },
  {
    path: '/product/importer',
    loader: () =>
      import('view/product/importer/ProductImporterPage'),
    menu: false,
    permissionRequired: permissions.productImport,
    exact: true,
  },
  {
    path: '/product/:id/edit',
    loader: () => import('view/product/form/ProductFormPage'),
    menu: false,
    permissionRequired: permissions.productEdit,
    exact: true,
  },
  {
    path: '/product/:id',
    loader: () => import('view/product/view/ProductViewPage'),
    menu: false,
    permissionRequired: permissions.productRead,
    exact: true,
  },

  {
    path: '/order',
    loader: () => import('view/order/list/OrderListPage'),
    permissionRequired: permissions.orderRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.order.menu'),
    menu: true,
  },
  {
    path: '/order/new',
    loader: () => import('view/order/form/OrderFormPage'),
    menu: false,
    permissionRequired: permissions.orderCreate,
    exact: true,
  },
  {
    path: '/order/importer',
    loader: () =>
      import('view/order/importer/OrderImporterPage'),
    menu: false,
    permissionRequired: permissions.orderImport,
    exact: true,
  },
  {
    path: '/order/:id/edit',
    loader: () => import('view/order/form/OrderFormPage'),
    menu: false,
    permissionRequired: permissions.orderEdit,
    exact: true,
  },
  {
    path: '/order/:id',
    loader: () => import('view/order/view/OrderViewPage'),
    menu: false,
    permissionRequired: permissions.orderRead,
    exact: true,
  },

  {
    path: '/media',
    loader: () => import('view/media/list/MediaListPage'),
    permissionRequired: permissions.mediaRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.media.menu'),
    menu: true,
  },
  {
    path: '/media/new',
    loader: () => import('view/media/form/MediaFormPage'),
    menu: false,
    permissionRequired: permissions.mediaCreate,
    exact: true,
  },
  {
    path: '/media/importer',
    loader: () =>
      import('view/media/importer/MediaImporterPage'),
    menu: false,
    permissionRequired: permissions.mediaImport,
    exact: true,
  },
  {
    path: '/media/:id/edit',
    loader: () => import('view/media/form/MediaFormPage'),
    menu: false,
    permissionRequired: permissions.mediaEdit,
    exact: true,
  },
  {
    path: '/media/:id',
    loader: () => import('view/media/view/MediaViewPage'),
    menu: false,
    permissionRequired: permissions.mediaRead,
    exact: true,
  },

  {
    path: '/sign',
    loader: () => import('view/sign/list/SignListPage'),
    permissionRequired: permissions.signRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.sign.menu'),
    menu: true,
  },
  {
    path: '/sign/new',
    loader: () => import('view/sign/form/SignFormPage'),
    menu: false,
    permissionRequired: permissions.signCreate,
    exact: true,
  },
  {
    path: '/sign/importer',
    loader: () =>
      import('view/sign/importer/SignImporterPage'),
    menu: false,
    permissionRequired: permissions.signImport,
    exact: true,
  },
  {
    path: '/sign/:id/edit',
    loader: () => import('view/sign/form/SignFormPage'),
    menu: false,
    permissionRequired: permissions.signEdit,
    exact: true,
  },
  {
    path: '/sign/:id',
    loader: () => import('view/sign/view/SignViewPage'),
    menu: false,
    permissionRequired: permissions.signRead,
    exact: true,
  },

  {
    path: '/share',
    loader: () => import('view/share/list/ShareListPage'),
    permissionRequired: permissions.shareRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.share.menu'),
    menu: true,
  },
  {
    path: '/share/new',
    loader: () => import('view/share/form/ShareFormPage'),
    menu: false,
    permissionRequired: permissions.shareCreate,
    exact: true,
  },
  {
    path: '/share/importer',
    loader: () =>
      import('view/share/importer/ShareImporterPage'),
    menu: false,
    permissionRequired: permissions.shareImport,
    exact: true,
  },
  {
    path: '/share/:id/edit',
    loader: () => import('view/share/form/ShareFormPage'),
    menu: false,
    permissionRequired: permissions.shareEdit,
    exact: true,
  },
  {
    path: '/share/:id',
    loader: () => import('view/share/view/ShareViewPage'),
    menu: false,
    permissionRequired: permissions.shareRead,
    exact: true,
  },

  {
    path: '/partner',
    loader: () => import('view/partner/list/PartnerListPage'),
    permissionRequired: permissions.partnerRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.partner.menu'),
    menu: true,
  },
  {
    path: '/partner/new',
    loader: () => import('view/partner/form/PartnerFormPage'),
    menu: false,
    permissionRequired: permissions.partnerCreate,
    exact: true,
  },
  {
    path: '/partner/importer',
    loader: () =>
      import('view/partner/importer/PartnerImporterPage'),
    menu: false,
    permissionRequired: permissions.partnerImport,
    exact: true,
  },
  {
    path: '/partner/:id/edit',
    loader: () => import('view/partner/form/PartnerFormPage'),
    menu: false,
    permissionRequired: permissions.partnerEdit,
    exact: true,
  },
  {
    path: '/partner/:id',
    loader: () => import('view/partner/view/PartnerViewPage'),
    menu: false,
    permissionRequired: permissions.partnerRead,
    exact: true,
  },
];

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () => import('view/auth/ForgotPasswordPage'),
  },
];

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () => import('view/auth/EmptyPermissionsPage'),
  },
];

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () => import('view/auth/EmailUnverifiedPage'),
  },
];

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () => import('view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () => import('view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () => import('view/shared/errors/Error404Page'),
  },
];

export default {
  privateRoutes,
  publicRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
