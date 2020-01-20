import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class ProductService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PRODUCT_UPDATE(
          $id: String!
          $data: ProductInput!
        ) {
          productUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.productUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PRODUCT_DESTROY($ids: [String!]!) {
          productDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.productDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PRODUCT_CREATE($data: ProductInput!) {
          productCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.productCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PRODUCT_IMPORT(
          $data: ProductInput!
          $importHash: String!
        ) {
          productImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.productImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query PRODUCT_FIND($id: String!) {
          productFind(id: $id) {
            id
            name
            description
            unitPrice
            photos {
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

    return response.data.productFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query PRODUCT_LIST(
          $filter: ProductFilterInput
          $orderBy: ProductOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          productList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              name
              description
              unitPrice
              photos {
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

    return response.data.productList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query PRODUCT_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          productAutocomplete(query: $query, limit: $limit) {
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

    return response.data.productAutocomplete;
  }
}
