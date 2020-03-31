import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class SignService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SIGN_UPDATE(
          $id: String!
          $data: SignInput!
        ) {
          signUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.signUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SIGN_DESTROY($ids: [String!]!) {
          signDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.signDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SIGN_CREATE($data: SignInput!) {
          signCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.signCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SIGN_IMPORT(
          $data: SignInput!
          $importHash: String!
        ) {
          signImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.signImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query SIGN_FIND($id: String!) {
          signFind(id: $id) {
            id
            txid
            documents {
              id
              name
              sizeInBytes
              publicUrl
              privateUrl
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

    return response.data.signFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query SIGN_LIST(
          $filter: SignFilterInput
          $orderBy: SignOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          signList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              txid
              documents {
                id
                name
                sizeInBytes
                publicUrl
                privateUrl
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

    return response.data.signList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query SIGN_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          signAutocomplete(query: $query, limit: $limit) {
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

    return response.data.signAutocomplete;
  }
}
