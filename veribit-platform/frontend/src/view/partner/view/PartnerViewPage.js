import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import PartnerView from 'view/partner/view/PartnerView';
import { i18n } from 'i18n';
import actions from 'modules/partner/view/partnerViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/partner/view/partnerViewSelectors';
import PartnerViewToolbar from 'view/partner/view/PartnerViewToolbar';

class PartnerPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.partner.menu'), '/partner'],
            [i18n('entities.partner.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.partner.view.title')}
          </PageTitle>

          <PartnerViewToolbar match={this.props.match} />

          <PartnerView
            loading={this.props.loading}
            record={this.props.record}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(PartnerPage);
