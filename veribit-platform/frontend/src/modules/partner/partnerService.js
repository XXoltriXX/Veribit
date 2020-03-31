import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class PartnerService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PARTNER_UPDATE(
          $id: String!
          $data: PartnerInput!
        ) {
          partnerUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.partnerUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PARTNER_DESTROY($ids: [String!]!) {
          partnerDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.partnerDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PARTNER_CREATE($data: PartnerInput!) {
          partnerCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.partnerCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PARTNER_IMPORT(
          $data: PartnerInput!
          $importHash: String!
        ) {
          partnerImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.partnerImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query PARTNER_FIND($id: String!) {
          partnerFind(id: $id) {
            id
            txid
            list {
              id
              fullName
              email
            }
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.partnerFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query PARTNER_LIST(
          $filter: PartnerFilterInput
          $orderBy: PartnerOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          partnerList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              txid
              list {
                id
                fullName
                email
              }
              updatedAt
              createdAt
            }
          }
        }
      `,

      variables: {
        filter,
        orderBy,
        limit,
        offset,
      },
    });

    return response.data.partnerList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query PARTNER_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          partnerAutocomplete(query: $query, limit: $limit) {
            id
            label
          }
        }
      `,

      variables: {
        query,
        limit,
      },
    });

    return response.data.partnerAutocomplete;
  }
}
