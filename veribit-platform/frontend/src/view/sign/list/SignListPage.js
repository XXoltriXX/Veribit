import React, { Component } from 'react';
import SignListFilter from 'view/sign/list/SignListFilter';
import SignListTable from 'view/sign/list/SignListTable';
import SignListToolbar from 'view/sign/list/SignListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class SignListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.sign.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.sign.list.title')}
          </PageTitle>

          <SignListToolbar />
          <SignListFilter />
          <SignListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default SignListPage;
