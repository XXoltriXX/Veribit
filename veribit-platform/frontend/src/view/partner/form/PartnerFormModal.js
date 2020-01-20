import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import PartnerForm from 'view/partner/form/PartnerForm';
import PartnerService from 'modules/partner/partnerService';
import Errors from 'modules/shared/error/errors';

class PartnerFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await PartnerService.create(data);
      const record = await PartnerService.find(id);
      this.props.onSuccess(record);
    } catch (error) {
      Errors.handle(error);
    } finally {
      this.setState({
        saveLoading: false,
      });
    }
  };

  render() {
    if (!this.props.visible) {
      return null;
    }

    return (
      <Modal
        title={i18n('entities.partner.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <PartnerForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default PartnerFormModal;
