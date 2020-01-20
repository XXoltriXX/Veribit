import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class MediaService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation MEDIA_UPDATE(
          $id: String!
          $data: MediaInput!
        ) {
          mediaUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.mediaUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation MEDIA_DESTROY($ids: [String!]!) {
          mediaDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.mediaDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation MEDIA_CREATE($data: MediaInput!) {
          mediaCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.mediaCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation MEDIA_IMPORT(
          $data: MediaInput!
          $importHash: String!
        ) {
          mediaImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.mediaImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query MEDIA_FIND($id: String!) {
          mediaFind(id: $id) {
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

    return response.data.mediaFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query MEDIA_LIST(
          $filter: MediaFilterInput
          $orderBy: MediaOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          mediaList(
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

    return response.data.mediaList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query MEDIA_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          mediaAutocomplete(query: $query, limit: $limit) {
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

    return response.data.mediaAutocomplete;
  }
}
