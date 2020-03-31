/**
 * List of Roles available for the Users.
 */
class Roles {
  static get values() {
    return {
      owner: 'owner',
      editor: 'editor',
      viewer: 'viewer',
      auditLogViewer: 'auditLogViewer',
      iamSecurityReviewer: 'iamSecurityReviewer',
      entityEditor: 'entityEditor',
      entityViewer: 'entityViewer',
      appsEditor: 'appsEditor',
      appsViewer: 'appsViewer',
      mediaEditor: 'mediaEditor',
      mediaViewer: 'mediaViewer',
      signEditor: 'signEditor',
      signViewer: 'signViewer',
      shareEditor: 'shareEditor',
      shareViewer: 'shareViewer',
      productEditor: 'productEditor',
      productViewer: 'productViewer',
      orderEditor: 'orderEditor',
      orderViewer: 'orderViewer',
      partnerEditor: 'partnerEditor',
      partnerViewer: 'partnerViewer',
      customerEditor: 'customerEditor',
      customerViewer: 'customerViewer',
    };
  }
}

module.exports = Roles;
