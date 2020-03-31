import React, { Component } from 'react';
import AppsListFilter from 'view/apps/list/AppsListFilter';
import AppsListTable from 'view/apps/list/AppsListTable';
import AppsListToolbar from 'view/apps/list/AppsListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class AppsListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.apps.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.apps.list.title')}
          </PageTitle>

          <AppsListToolbar />
          <AppsListFilter />
          <AppsListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default AppsListPage;
