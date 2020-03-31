import { i18n } from 'i18n';
import _values from 'lodash/values';

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

  static labelOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.label`);
  }

  static descriptionOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.description`);
  }

  static get selectOptions() {
    return _values(this.values).map((value) => ({
      id: value,
      value: value,
      title: this.descriptionOf(value),
      label: this.labelOf(value),
    }));
  }
}

export default Roles;
