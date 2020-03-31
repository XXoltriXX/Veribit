import model from 'modules/apps/appsModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';


const { fields } = model;

class AppsView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.novi.label}
          value={fields.novi.forView(record.novi)}
        />

        <TextViewItem
          label={fields.levo.label}
          value={fields.levo.forView(record.levo)}
        />

        <TextViewItem
          label={fields.nosco.label}
          value={fields.nosco.forView(record.nosco)}
        />

        <TextViewItem
          label={fields.scio.label}
          value={fields.scio.forView(record.scio)}
        />

        <TextViewItem
          label={fields.disco.label}
          value={fields.disco.forView(record.disco)}
        />

        <TextViewItem
          label={fields.indicium.label}
          value={fields.indicium.forView(record.indicium)}
        />

        <TextViewItem
          label={fields.specto.label}
          value={fields.specto.forView(record.specto)}
        />

        <TextViewItem
          label={fields.intelligo.label}
          value={fields.intelligo.forView(record.intelligo)}
        />

        <TextViewItem
          label={fields.teneo.label}
          value={fields.teneo.forView(record.teneo)}
        />

        <TextViewItem
          label={fields.percipio.label}
          value={fields.percipio.forView(record.percipio)}
        />

        <TextViewItem
          label={fields.antikythera.label}
          value={fields.antikythera.forView(record.antikythera)}
        />

        <TextViewItem
          label={fields.createdAt.label}
          value={fields.createdAt.forView(record.createdAt)}
        />

        <TextViewItem
          label={fields.updatedAt.label}
          value={fields.updatedAt.forView(record.updatedAt)}
        />
      </ViewWrapper>
    );
  }

  render() {
    const { record, loading } = this.props;

    if (loading || !record) {
      return <Spinner />;
    }

    return this.renderView();
  }
}

export default AppsView;
