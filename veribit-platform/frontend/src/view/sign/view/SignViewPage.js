import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import SignView from 'view/sign/view/SignView';
import { i18n } from 'i18n';
import actions from 'modules/sign/view/signViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/sign/view/signViewSelectors';
import SignViewToolbar from 'view/sign/view/SignViewToolbar';

class SignPage extends Component {
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
            [i18n('entities.sign.menu'), '/sign'],
            [i18n('entities.sign.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.sign.view.title')}
          </PageTitle>

          <SignViewToolbar match={this.props.match} />

          <SignView
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

export default connect(select)(SignPage);
