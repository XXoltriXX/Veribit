import React, { Component } from 'react';
import MediaListFilter from 'view/media/list/MediaListFilter';
import MediaListTable from 'view/media/list/MediaListTable';
import MediaListToolbar from 'view/media/list/MediaListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class MediaListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.media.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.media.list.title')}
          </PageTitle>

          <MediaListToolbar />
          <MediaListFilter />
          <MediaListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default MediaListPage;
