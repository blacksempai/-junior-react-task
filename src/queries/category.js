import { gql } from '@apollo/client';

export const categoriesQuery = gql`
    query categoriesQuery {
        categories {
            name
          }
    }
`;