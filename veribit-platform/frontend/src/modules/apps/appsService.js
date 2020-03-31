import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class AppsService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation APPS_UPDATE(
          $id: String!
          $data: AppsInput!
        ) {
          appsUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.appsUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation APPS_DESTROY($ids: [String!]!) {
          appsDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.appsDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation APPS_CREATE($data: AppsInput!) {
          appsCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.appsCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation APPS_IMPORT(
          $data: AppsInput!
          $importHash: String!
        ) {
          appsImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.appsImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query APPS_FIND($id: String!) {
          appsFind(id: $id) {
            id
            novi
            levo
            nosco
            scio
            disco
            indicium
            specto
            intelligo
            teneo
            percipio
            antikythera
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.appsFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query APPS_LIST(
          $filter: AppsFilterInput
          $orderBy: AppsOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          appsList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              novi
              levo
              nosco
              scio
              disco
              indicium
              specto
              intelligo
              teneo
              percipio
              antikythera
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

    return response.data.appsList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query APPS_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          appsAutocomplete(query: $query, limit: $limit) {
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

    return response.data.appsAutocomplete;
  }
}
