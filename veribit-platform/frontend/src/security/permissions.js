import Roles from 'security/roles';
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
          roles.viewer,
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,

          roles.orderEditor,
          roles.orderViewer,
          roles.partnerEditor,
          roles.partnerViewer,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.owner, roles.auditLogViewer, roles.viewer],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.owner],
      },
      appsImport: {
        id: 'appsImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.appsEditor,
        ],
      },
      appsCreate: {
        id: 'appsCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.appsEditor,
        ],
        allowedStorageFolders: ['apps'],
      },
      appsEdit: {
        id: 'appsEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.appsEditor,
        ],
        allowedStorageFolders: ['apps'],
      },
      appsDestroy: {
        id: 'appsDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.appsEditor,
        ],
        allowedStorageFolders: ['apps'],
      },
      appsRead: {
        id: 'appsRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.appsEditor,
          roles.appsViewer,
        ],
      },
      appsAutocomplete: {
        id: 'appsAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.appsEditor,
          roles.appsViewer,

        ],
      },

      mediaImport: {
        id: 'mediaImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.mediaEditor,
        ],
      },
      mediaCreate: {
        id: 'mediaCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.mediaEditor,
        ],
        allowedStorageFolders: ['media'],
      },
      mediaEdit: {
        id: 'mediaEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.mediaEditor,
        ],
        allowedStorageFolders: ['media'],
      },
      mediaDestroy: {
        id: 'mediaDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.mediaEditor,
        ],
        allowedStorageFolders: ['media'],
      },
      mediaRead: {
        id: 'mediaRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.mediaEditor,
          roles.mediaViewer,
        ],
      },
      mediaAutocomplete: {
        id: 'mediaAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.mediaEditor,
          roles.mediaViewer,

        ],
      },

      signImport: {
        id: 'signImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.signEditor,
        ],
      },
      signCreate: {
        id: 'signCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.signEditor,
        ],
        allowedStorageFolders: ['sign'],
      },
      signEdit: {
        id: 'signEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.signEditor,
        ],
        allowedStorageFolders: ['sign'],
      },
      signDestroy: {
        id: 'signDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.signEditor,
        ],
        allowedStorageFolders: ['sign'],
      },
      signRead: {
        id: 'signRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.signEditor,
          roles.signViewer,
        ],
      },
      signAutocomplete: {
        id: 'signAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.signEditor,
          roles.signViewer,

        ],
      },

      shareImport: {
        id: 'shareImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.shareEditor,
        ],
      },
      shareCreate: {
        id: 'shareCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.shareEditor,
        ],
        allowedStorageFolders: ['share'],
      },
      shareEdit: {
        id: 'shareEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.shareEditor,
        ],
        allowedStorageFolders: ['share'],
      },
      shareDestroy: {
        id: 'shareDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.shareEditor,
        ],
        allowedStorageFolders: ['share'],
      },
      shareRead: {
        id: 'shareRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.shareEditor,
          roles.shareViewer,
        ],
      },
      shareAutocomplete: {
        id: 'shareAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.shareEditor,
          roles.shareViewer,

        ],
      },

      productImport: {
        id: 'productImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productEditor,
        ],
      },
      productCreate: {
        id: 'productCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productEditor,
        ],
        allowedStorageFolders: ['product'],
      },
      productEdit: {
        id: 'productEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productEditor,
        ],
        allowedStorageFolders: ['product'],
      },
      productDestroy: {
        id: 'productDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.productEditor,
        ],
        allowedStorageFolders: ['product'],
      },
      productRead: {
        id: 'productRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.productEditor,
          roles.productViewer,
        ],
      },
      productAutocomplete: {
        id: 'productAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.productEditor,
          roles.productViewer,
          roles.orderEditor,
          roles.orderViewer,
        ],
      },

      orderImport: {
        id: 'orderImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.orderEditor,
        ],
      },
      orderCreate: {
        id: 'orderCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.orderEditor,
        ],
        allowedStorageFolders: ['order'],
      },
      orderEdit: {
        id: 'orderEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.orderEditor,
        ],
        allowedStorageFolders: ['order'],
      },
      orderDestroy: {
        id: 'orderDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.orderEditor,
        ],
        allowedStorageFolders: ['order'],
      },
      orderRead: {
        id: 'orderRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.orderEditor,
          roles.orderViewer,
        ],
      },
      orderAutocomplete: {
        id: 'orderAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.orderEditor,
          roles.orderViewer,

        ],
      },

      partnerImport: {
        id: 'partnerImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.partnerEditor,
        ],
      },
      partnerCreate: {
        id: 'partnerCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.partnerEditor,
        ],
        allowedStorageFolders: ['partner'],
      },
      partnerEdit: {
        id: 'partnerEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.partnerEditor,
        ],
        allowedStorageFolders: ['partner'],
      },
      partnerDestroy: {
        id: 'partnerDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.partnerEditor,
        ],
        allowedStorageFolders: ['partner'],
      },
      partnerRead: {
        id: 'partnerRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.partnerEditor,
          roles.partnerViewer,
        ],
      },
      partnerAutocomplete: {
        id: 'partnerAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.partnerEditor,
          roles.partnerViewer,

        ],
      },

      customerImport: {
        id: 'customerImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.customerEditor,
        ],
      },
      customerCreate: {
        id: 'customerCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.customerEditor,
        ],
        allowedStorageFolders: ['customer'],
      },
      customerEdit: {
        id: 'customerEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.customerEditor,
        ],
        allowedStorageFolders: ['customer'],
      },
      customerDestroy: {
        id: 'customerDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.customerEditor,
        ],
        allowedStorageFolders: ['customer'],
      },
      customerRead: {
        id: 'customerRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.customerEditor,
          roles.customerViewer,
        ],
      },
      customerAutocomplete: {
        id: 'customerAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.customerEditor,
          roles.customerViewer,
          roles.orderEditor,
          roles.orderViewer,
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
