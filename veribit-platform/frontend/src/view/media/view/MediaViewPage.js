import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import MediaView from 'view/media/view/MediaView';
import { i18n } from 'i18n';
import actions from 'modules/media/view/mediaViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/media/view/mediaViewSelectors';
import MediaViewToolbar from 'view/media/view/MediaViewToolbar';

class MediaPage extends Component {
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
            [i18n('entities.media.menu'), '/media'],
            [i18n('entities.media.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.media.view.title')}
          </PageTitle>

          <MediaViewToolbar match={this.props.match} />

          <MediaView
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

export default connect(select)(MediaPage);
