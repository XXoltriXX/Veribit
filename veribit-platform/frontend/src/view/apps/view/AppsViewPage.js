import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import AppsView from 'view/apps/view/AppsView';
import { i18n } from 'i18n';
import actions from 'modules/apps/view/appsViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/apps/view/appsViewSelectors';
import AppsViewToolbar from 'view/apps/view/AppsViewToolbar';

class AppsPage extends Component {
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
            [i18n('entities.apps.menu'), '/apps'],
            [i18n('entities.apps.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.apps.view.title')}
          </PageTitle>

          <AppsViewToolbar match={this.props.match} />

          <AppsView
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

export default connect(select)(AppsPage);
