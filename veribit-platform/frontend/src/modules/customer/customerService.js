import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class CustomerService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation CUSTOMER_UPDATE(
          $id: String!
          $data: CustomerInput!
        ) {
          customerUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.customerUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation CUSTOMER_DESTROY($ids: [String!]!) {
          customerDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.customerDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation CUSTOMER_CREATE($data: CustomerInput!) {
          customerCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.customerCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation CUSTOMER_IMPORT(
          $data: CustomerInput!
          $importHash: String!
        ) {
          customerImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.customerImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query CUSTOMER_FIND($id: String!) {
          customerFind(id: $id) {
            id
            name
            birthdate
            gender
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.customerFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query CUSTOMER_LIST(
          $filter: CustomerFilterInput
          $orderBy: CustomerOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          customerList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              name
              birthdate
              gender
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

    return response.data.customerList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query CUSTOMER_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          customerAutocomplete(query: $query, limit: $limit) {
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

    return response.data.customerAutocomplete;
  }
}
