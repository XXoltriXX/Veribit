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
      customerEditor: 'customerEditor',
      customerViewer: 'customerViewer',
      productEditor: 'productEditor',
      productViewer: 'productViewer',
      orderEditor: 'orderEditor',
      orderViewer: 'orderViewer',
      mediaEditor: 'mediaEditor',
      mediaViewer: 'mediaViewer',
      signEditor: 'signEditor',
      signViewer: 'signViewer',
      shareEditor: 'shareEditor',
      shareViewer: 'shareViewer',
      partnerEditor: 'partnerEditor',
      partnerViewer: 'partnerViewer',
    };
  }
}

module.exports = Roles;
