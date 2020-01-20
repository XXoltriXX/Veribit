import React, { Component } from 'react';
import ShareListFilter from 'view/share/list/ShareListFilter';
import ShareListTable from 'view/share/list/ShareListTable';
import ShareListToolbar from 'view/share/list/ShareListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class ShareListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.share.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.share.list.title')}
          </PageTitle>

          <ShareListToolbar />
          <ShareListFilter />
          <ShareListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default ShareListPage;
