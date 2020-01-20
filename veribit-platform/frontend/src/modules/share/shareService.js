import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class ShareService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SHARE_UPDATE(
          $id: String!
          $data: ShareInput!
        ) {
          shareUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.shareUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SHARE_DESTROY($ids: [String!]!) {
          shareDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.shareDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SHARE_CREATE($data: ShareInput!) {
          shareCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.shareCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SHARE_IMPORT(
          $data: ShareInput!
          $importHash: String!
        ) {
          shareImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.shareImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query SHARE_FIND($id: String!) {
          shareFind(id: $id) {
            id
            txid
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.shareFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query SHARE_LIST(
          $filter: ShareFilterInput
          $orderBy: ShareOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          shareList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              txid
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

    return response.data.shareList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query SHARE_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          shareAutocomplete(query: $query, limit: $limit) {
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

    return response.data.shareAutocomplete;
  }
}
