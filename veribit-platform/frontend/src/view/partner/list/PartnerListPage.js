import React, { Component } from 'react';
import PartnerListFilter from 'view/partner/list/PartnerListFilter';
import PartnerListTable from 'view/partner/list/PartnerListTable';
import PartnerListToolbar from 'view/partner/list/PartnerListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class PartnerListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.partner.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.partner.list.title')}
          </PageTitle>

          <PartnerListToolbar />
          <PartnerListFilter />
          <PartnerListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default PartnerListPage;
