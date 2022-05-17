import { gql } from "@apollo/client";

export const GET_PRODUCT_INFO = gql`
  query ($category: String!) {
    category(input: { title: $category }) {
      products {
        id
        name
        prices {
          currency {
            symbol
          }
          amount
        }
        attributes {
        id
        name
        type
        items {
          displayValue
          id
          value
        }
      }
        gallery
        inStock
      }
    }
  }
`;
