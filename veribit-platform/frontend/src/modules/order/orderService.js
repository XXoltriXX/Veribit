import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class OrderService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation ORDER_UPDATE(
          $id: String!
          $data: OrderInput!
        ) {
          orderUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.orderUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation ORDER_DESTROY($ids: [String!]!) {
          orderDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.orderDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation ORDER_CREATE($data: OrderInput!) {
          orderCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.orderCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation ORDER_IMPORT(
          $data: OrderInput!
          $importHash: String!
        ) {
          orderImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.orderImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query ORDER_FIND($id: String!) {
          orderFind(id: $id) {
            id
            customer {
              id
              name
            }
            products {
              id
              name
            }
            employee {
              id
              fullName
              email
            }
            delivered
            attachments {
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

    return response.data.orderFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query ORDER_LIST(
          $filter: OrderFilterInput
          $orderBy: OrderOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          orderList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              customer {
                id
                name
              }
              products {
                id
                name
              }
              employee {
                id
                fullName
                email
              }
              attachments {
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

    return response.data.orderList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query ORDER_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          orderAutocomplete(query: $query, limit: $limit) {
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

    return response.data.orderAutocomplete;
  }
}
