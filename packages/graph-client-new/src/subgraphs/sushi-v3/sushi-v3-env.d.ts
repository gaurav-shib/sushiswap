/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  name: 'sushi-v3'
  query: 'Query'
  mutation: never
  subscription: 'Subscription'
  types: {
    Aggregation_interval: {
      name: 'Aggregation_interval'
      enumValues: 'hour' | 'day'
    }
    BigDecimal: unknown
    BigInt: unknown
    BlockChangedFilter: {
      kind: 'INPUT_OBJECT'
      name: 'BlockChangedFilter'
      isOneOf: false
      inputFields: [
        {
          name: 'number_gte'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          }
          defaultValue: null
        },
      ]
    }
    Block_height: {
      kind: 'INPUT_OBJECT'
      name: 'Block_height'
      isOneOf: false
      inputFields: [
        {
          name: 'hash'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'number'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'number_gte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
      ]
    }
    Boolean: unknown
    Bundle: {
      kind: 'OBJECT'
      name: 'Bundle'
      fields: {
        ethPriceUSD: {
          name: 'ethPriceUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
      }
    }
    Bundle_filter: {
      kind: 'INPUT_OBJECT'
      name: 'Bundle_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'ethPriceUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'ethPriceUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'ethPriceUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'ethPriceUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'ethPriceUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'ethPriceUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'ethPriceUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'ethPriceUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'Bundle_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'Bundle_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    Bundle_orderBy: { name: 'Bundle_orderBy'; enumValues: 'id' | 'ethPriceUSD' }
    Burn: {
      kind: 'OBJECT'
      name: 'Burn'
      fields: {
        amount: {
          name: 'amount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        amount0: {
          name: 'amount0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        amount1: {
          name: 'amount1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        amountUSD: {
          name: 'amountUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        logIndex: {
          name: 'logIndex'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
        }
        origin: {
          name: 'origin'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        owner: {
          name: 'owner'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
        }
        pool: {
          name: 'pool'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
          }
        }
        tickLower: {
          name: 'tickLower'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        tickUpper: {
          name: 'tickUpper'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        timestamp: {
          name: 'timestamp'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        token0: {
          name: 'token0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Token'; ofType: null }
          }
        }
        token1: {
          name: 'token1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Token'; ofType: null }
          }
        }
        transaction: {
          name: 'transaction'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Transaction'; ofType: null }
          }
        }
      }
    }
    Burn_filter: {
      kind: 'INPUT_OBJECT'
      name: 'Burn_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'Transaction_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'pool'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pool_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_'
          type: { kind: 'INPUT_OBJECT'; name: 'Token_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_'
          type: { kind: 'INPUT_OBJECT'; name: 'Token_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'timestamp_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'owner'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'owner_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'owner_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'origin_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'origin_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amountUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amountUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tickLower'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tickLower_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tickUpper'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tickUpper_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'logIndex'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'logIndex_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'INPUT_OBJECT'; name: 'Burn_filter'; ofType: null }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'INPUT_OBJECT'; name: 'Burn_filter'; ofType: null }
          }
          defaultValue: null
        },
      ]
    }
    Burn_orderBy: {
      name: 'Burn_orderBy'
      enumValues:
        | 'id'
        | 'transaction'
        | 'transaction__id'
        | 'transaction__blockNumber'
        | 'transaction__timestamp'
        | 'transaction__gasUsed'
        | 'transaction__gasPrice'
        | 'pool'
        | 'pool__id'
        | 'pool__createdAtTimestamp'
        | 'pool__createdAtBlockNumber'
        | 'pool__feeTier'
        | 'pool__liquidity'
        | 'pool__sqrtPrice'
        | 'pool__feeGrowthGlobal0X128'
        | 'pool__feeGrowthGlobal1X128'
        | 'pool__token0Price'
        | 'pool__token1Price'
        | 'pool__tick'
        | 'pool__observationIndex'
        | 'pool__volumeToken0'
        | 'pool__volumeToken1'
        | 'pool__volumeUSD'
        | 'pool__untrackedVolumeUSD'
        | 'pool__feesUSD'
        | 'pool__txCount'
        | 'pool__collectedFeesToken0'
        | 'pool__collectedFeesToken1'
        | 'pool__collectedFeesUSD'
        | 'pool__totalValueLockedToken0'
        | 'pool__totalValueLockedToken1'
        | 'pool__totalValueLockedETH'
        | 'pool__totalValueLockedUSD'
        | 'pool__totalValueLockedUSDUntracked'
        | 'pool__isProtocolFeeEnabled'
        | 'pool__liquidityProviderCount'
        | 'token0'
        | 'token0__id'
        | 'token0__symbol'
        | 'token0__name'
        | 'token0__decimals'
        | 'token0__totalSupply'
        | 'token0__volume'
        | 'token0__volumeUSD'
        | 'token0__untrackedVolumeUSD'
        | 'token0__feesUSD'
        | 'token0__txCount'
        | 'token0__poolCount'
        | 'token0__totalValueLocked'
        | 'token0__totalValueLockedUSD'
        | 'token0__totalValueLockedUSDUntracked'
        | 'token0__derivedETH'
        | 'token1'
        | 'token1__id'
        | 'token1__symbol'
        | 'token1__name'
        | 'token1__decimals'
        | 'token1__totalSupply'
        | 'token1__volume'
        | 'token1__volumeUSD'
        | 'token1__untrackedVolumeUSD'
        | 'token1__feesUSD'
        | 'token1__txCount'
        | 'token1__poolCount'
        | 'token1__totalValueLocked'
        | 'token1__totalValueLockedUSD'
        | 'token1__totalValueLockedUSDUntracked'
        | 'token1__derivedETH'
        | 'timestamp'
        | 'owner'
        | 'origin'
        | 'amount'
        | 'amount0'
        | 'amount1'
        | 'amountUSD'
        | 'tickLower'
        | 'tickUpper'
        | 'logIndex'
    }
    Bytes: unknown
    Collect: {
      kind: 'OBJECT'
      name: 'Collect'
      fields: {
        amount0: {
          name: 'amount0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        amount1: {
          name: 'amount1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        amountUSD: {
          name: 'amountUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        logIndex: {
          name: 'logIndex'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
        }
        owner: {
          name: 'owner'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
        }
        pool: {
          name: 'pool'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
          }
        }
        tickLower: {
          name: 'tickLower'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        tickUpper: {
          name: 'tickUpper'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        timestamp: {
          name: 'timestamp'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        transaction: {
          name: 'transaction'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Transaction'; ofType: null }
          }
        }
      }
    }
    Collect_filter: {
      kind: 'INPUT_OBJECT'
      name: 'Collect_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'Transaction_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'timestamp'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'timestamp_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pool_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'owner_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'owner_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amountUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amountUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tickLower'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tickLower_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tickUpper'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tickUpper_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'logIndex'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'logIndex_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'Collect_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'Collect_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    Collect_orderBy: {
      name: 'Collect_orderBy'
      enumValues:
        | 'id'
        | 'transaction'
        | 'transaction__id'
        | 'transaction__blockNumber'
        | 'transaction__timestamp'
        | 'transaction__gasUsed'
        | 'transaction__gasPrice'
        | 'timestamp'
        | 'pool'
        | 'pool__id'
        | 'pool__createdAtTimestamp'
        | 'pool__createdAtBlockNumber'
        | 'pool__feeTier'
        | 'pool__liquidity'
        | 'pool__sqrtPrice'
        | 'pool__feeGrowthGlobal0X128'
        | 'pool__feeGrowthGlobal1X128'
        | 'pool__token0Price'
        | 'pool__token1Price'
        | 'pool__tick'
        | 'pool__observationIndex'
        | 'pool__volumeToken0'
        | 'pool__volumeToken1'
        | 'pool__volumeUSD'
        | 'pool__untrackedVolumeUSD'
        | 'pool__feesUSD'
        | 'pool__txCount'
        | 'pool__collectedFeesToken0'
        | 'pool__collectedFeesToken1'
        | 'pool__collectedFeesUSD'
        | 'pool__totalValueLockedToken0'
        | 'pool__totalValueLockedToken1'
        | 'pool__totalValueLockedETH'
        | 'pool__totalValueLockedUSD'
        | 'pool__totalValueLockedUSDUntracked'
        | 'pool__isProtocolFeeEnabled'
        | 'pool__liquidityProviderCount'
        | 'owner'
        | 'amount0'
        | 'amount1'
        | 'amountUSD'
        | 'tickLower'
        | 'tickUpper'
        | 'logIndex'
    }
    DecreaseEvent: {
      kind: 'OBJECT'
      name: 'DecreaseEvent'
      fields: {
        amount0: {
          name: 'amount0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        amount1: {
          name: 'amount1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        pool: {
          name: 'pool'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
          }
        }
        position: {
          name: 'position'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Position'; ofType: null }
          }
        }
        timeStamp: {
          name: 'timeStamp'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        token0: {
          name: 'token0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Token'; ofType: null }
          }
        }
        token1: {
          name: 'token1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Token'; ofType: null }
          }
        }
        tokenID: {
          name: 'tokenID'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        transaction: {
          name: 'transaction'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Transaction'; ofType: null }
          }
        }
      }
    }
    DecreaseEvent_filter: {
      kind: 'INPUT_OBJECT'
      name: 'DecreaseEvent_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pool_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tokenID'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tokenID_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tokenID_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tokenID_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tokenID_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tokenID_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tokenID_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tokenID_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'position'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'position_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'position_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_'
          type: { kind: 'INPUT_OBJECT'; name: 'Position_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount1'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_'
          type: { kind: 'INPUT_OBJECT'; name: 'Token_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_'
          type: { kind: 'INPUT_OBJECT'; name: 'Token_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timeStamp'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timeStamp_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timeStamp_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timeStamp_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timeStamp_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timeStamp_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timeStamp_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'timeStamp_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'Transaction_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'DecreaseEvent_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'DecreaseEvent_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    DecreaseEvent_orderBy: {
      name: 'DecreaseEvent_orderBy'
      enumValues:
        | 'id'
        | 'pool'
        | 'pool__id'
        | 'pool__createdAtTimestamp'
        | 'pool__createdAtBlockNumber'
        | 'pool__feeTier'
        | 'pool__liquidity'
        | 'pool__sqrtPrice'
        | 'pool__feeGrowthGlobal0X128'
        | 'pool__feeGrowthGlobal1X128'
        | 'pool__token0Price'
        | 'pool__token1Price'
        | 'pool__tick'
        | 'pool__observationIndex'
        | 'pool__volumeToken0'
        | 'pool__volumeToken1'
        | 'pool__volumeUSD'
        | 'pool__untrackedVolumeUSD'
        | 'pool__feesUSD'
        | 'pool__txCount'
        | 'pool__collectedFeesToken0'
        | 'pool__collectedFeesToken1'
        | 'pool__collectedFeesUSD'
        | 'pool__totalValueLockedToken0'
        | 'pool__totalValueLockedToken1'
        | 'pool__totalValueLockedETH'
        | 'pool__totalValueLockedUSD'
        | 'pool__totalValueLockedUSDUntracked'
        | 'pool__isProtocolFeeEnabled'
        | 'pool__liquidityProviderCount'
        | 'tokenID'
        | 'position'
        | 'position__id'
        | 'position__owner'
        | 'position__liquidity'
        | 'position__depositedToken0'
        | 'position__depositedToken1'
        | 'position__withdrawnToken0'
        | 'position__withdrawnToken1'
        | 'position__collectedToken0'
        | 'position__collectedToken1'
        | 'position__collectedFeesToken0'
        | 'position__collectedFeesToken1'
        | 'position__amountDepositedUSD'
        | 'position__amountWithdrawnUSD'
        | 'position__amountCollectedUSD'
        | 'position__feeGrowthInside0LastX128'
        | 'position__feeGrowthInside1LastX128'
        | 'amount0'
        | 'amount1'
        | 'token0'
        | 'token0__id'
        | 'token0__symbol'
        | 'token0__name'
        | 'token0__decimals'
        | 'token0__totalSupply'
        | 'token0__volume'
        | 'token0__volumeUSD'
        | 'token0__untrackedVolumeUSD'
        | 'token0__feesUSD'
        | 'token0__txCount'
        | 'token0__poolCount'
        | 'token0__totalValueLocked'
        | 'token0__totalValueLockedUSD'
        | 'token0__totalValueLockedUSDUntracked'
        | 'token0__derivedETH'
        | 'token1'
        | 'token1__id'
        | 'token1__symbol'
        | 'token1__name'
        | 'token1__decimals'
        | 'token1__totalSupply'
        | 'token1__volume'
        | 'token1__volumeUSD'
        | 'token1__untrackedVolumeUSD'
        | 'token1__feesUSD'
        | 'token1__txCount'
        | 'token1__poolCount'
        | 'token1__totalValueLocked'
        | 'token1__totalValueLockedUSD'
        | 'token1__totalValueLockedUSDUntracked'
        | 'token1__derivedETH'
        | 'timeStamp'
        | 'transaction'
        | 'transaction__id'
        | 'transaction__blockNumber'
        | 'transaction__timestamp'
        | 'transaction__gasUsed'
        | 'transaction__gasPrice'
    }
    Factory: {
      kind: 'OBJECT'
      name: 'Factory'
      fields: {
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        owner: {
          name: 'owner'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        poolCount: {
          name: 'poolCount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        totalFeesETH: {
          name: 'totalFeesETH'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalFeesUSD: {
          name: 'totalFeesUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalValueLockedETH: {
          name: 'totalValueLockedETH'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalValueLockedETHUntracked: {
          name: 'totalValueLockedETHUntracked'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalValueLockedUSD: {
          name: 'totalValueLockedUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalValueLockedUSDUntracked: {
          name: 'totalValueLockedUSDUntracked'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalVolumeETH: {
          name: 'totalVolumeETH'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalVolumeUSD: {
          name: 'totalVolumeUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        txCount: {
          name: 'txCount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        untrackedVolumeUSD: {
          name: 'untrackedVolumeUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
      }
    }
    Factory_filter: {
      kind: 'INPUT_OBJECT'
      name: 'Factory_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'poolCount'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolCount_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolCount_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolCount_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolCount_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolCount_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolCount_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'poolCount_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'txCount'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'txCount_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalVolumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalVolumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalVolumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalVolumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalVolumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalVolumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalVolumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalVolumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalVolumeETH'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalVolumeETH_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalVolumeETH_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalVolumeETH_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalVolumeETH_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalVolumeETH_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalVolumeETH_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalVolumeETH_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalFeesUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeesUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeesUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeesUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeesUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeesUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeesUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalFeesUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalFeesETH'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeesETH_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeesETH_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeesETH_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeesETH_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeesETH_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeesETH_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalFeesETH_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETH'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETH_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETH_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETH_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETH_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETH_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETH_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETH_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETHUntracked'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETHUntracked_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETHUntracked_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETHUntracked_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETHUntracked_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETHUntracked_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETHUntracked_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETHUntracked_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'owner'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'owner_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'Factory_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'Factory_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    Factory_orderBy: {
      name: 'Factory_orderBy'
      enumValues:
        | 'id'
        | 'poolCount'
        | 'txCount'
        | 'totalVolumeUSD'
        | 'totalVolumeETH'
        | 'totalFeesUSD'
        | 'totalFeesETH'
        | 'untrackedVolumeUSD'
        | 'totalValueLockedUSD'
        | 'totalValueLockedETH'
        | 'totalValueLockedUSDUntracked'
        | 'totalValueLockedETHUntracked'
        | 'owner'
    }
    Flash: {
      kind: 'OBJECT'
      name: 'Flash'
      fields: {
        amount0: {
          name: 'amount0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        amount0Paid: {
          name: 'amount0Paid'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        amount1: {
          name: 'amount1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        amount1Paid: {
          name: 'amount1Paid'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        amountUSD: {
          name: 'amountUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        logIndex: {
          name: 'logIndex'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
        }
        pool: {
          name: 'pool'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
          }
        }
        recipient: {
          name: 'recipient'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        sender: {
          name: 'sender'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        timestamp: {
          name: 'timestamp'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        transaction: {
          name: 'transaction'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Transaction'; ofType: null }
          }
        }
      }
    }
    Flash_filter: {
      kind: 'INPUT_OBJECT'
      name: 'Flash_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'Transaction_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'timestamp'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'timestamp_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pool_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sender_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sender_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'recipient'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'recipient_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'recipient_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'recipient_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'recipient_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'recipient_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'recipient_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'recipient_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'recipient_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'recipient_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amountUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amountUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount0Paid'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0Paid_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0Paid_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0Paid_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0Paid_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0Paid_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0Paid_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount0Paid_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount1Paid'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1Paid_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1Paid_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1Paid_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1Paid_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1Paid_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1Paid_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount1Paid_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'logIndex'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'logIndex_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'INPUT_OBJECT'; name: 'Flash_filter'; ofType: null }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'INPUT_OBJECT'; name: 'Flash_filter'; ofType: null }
          }
          defaultValue: null
        },
      ]
    }
    Flash_orderBy: {
      name: 'Flash_orderBy'
      enumValues:
        | 'id'
        | 'transaction'
        | 'transaction__id'
        | 'transaction__blockNumber'
        | 'transaction__timestamp'
        | 'transaction__gasUsed'
        | 'transaction__gasPrice'
        | 'timestamp'
        | 'pool'
        | 'pool__id'
        | 'pool__createdAtTimestamp'
        | 'pool__createdAtBlockNumber'
        | 'pool__feeTier'
        | 'pool__liquidity'
        | 'pool__sqrtPrice'
        | 'pool__feeGrowthGlobal0X128'
        | 'pool__feeGrowthGlobal1X128'
        | 'pool__token0Price'
        | 'pool__token1Price'
        | 'pool__tick'
        | 'pool__observationIndex'
        | 'pool__volumeToken0'
        | 'pool__volumeToken1'
        | 'pool__volumeUSD'
        | 'pool__untrackedVolumeUSD'
        | 'pool__feesUSD'
        | 'pool__txCount'
        | 'pool__collectedFeesToken0'
        | 'pool__collectedFeesToken1'
        | 'pool__collectedFeesUSD'
        | 'pool__totalValueLockedToken0'
        | 'pool__totalValueLockedToken1'
        | 'pool__totalValueLockedETH'
        | 'pool__totalValueLockedUSD'
        | 'pool__totalValueLockedUSDUntracked'
        | 'pool__isProtocolFeeEnabled'
        | 'pool__liquidityProviderCount'
        | 'sender'
        | 'recipient'
        | 'amount0'
        | 'amount1'
        | 'amountUSD'
        | 'amount0Paid'
        | 'amount1Paid'
        | 'logIndex'
    }
    ID: unknown
    IncreaseEvent: {
      kind: 'OBJECT'
      name: 'IncreaseEvent'
      fields: {
        amount0: {
          name: 'amount0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        amount1: {
          name: 'amount1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        pool: {
          name: 'pool'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
          }
        }
        position: {
          name: 'position'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Position'; ofType: null }
          }
        }
        timeStamp: {
          name: 'timeStamp'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        token0: {
          name: 'token0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Token'; ofType: null }
          }
        }
        token1: {
          name: 'token1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Token'; ofType: null }
          }
        }
        tokenID: {
          name: 'tokenID'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        transaction: {
          name: 'transaction'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Transaction'; ofType: null }
          }
        }
      }
    }
    IncreaseEvent_filter: {
      kind: 'INPUT_OBJECT'
      name: 'IncreaseEvent_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pool_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tokenID'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tokenID_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tokenID_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tokenID_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tokenID_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tokenID_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tokenID_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tokenID_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'position'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'position_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'position_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_'
          type: { kind: 'INPUT_OBJECT'; name: 'Position_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount1'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_'
          type: { kind: 'INPUT_OBJECT'; name: 'Token_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_'
          type: { kind: 'INPUT_OBJECT'; name: 'Token_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timeStamp'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timeStamp_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timeStamp_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timeStamp_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timeStamp_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timeStamp_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timeStamp_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'timeStamp_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'Transaction_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'IncreaseEvent_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'IncreaseEvent_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    IncreaseEvent_orderBy: {
      name: 'IncreaseEvent_orderBy'
      enumValues:
        | 'id'
        | 'pool'
        | 'pool__id'
        | 'pool__createdAtTimestamp'
        | 'pool__createdAtBlockNumber'
        | 'pool__feeTier'
        | 'pool__liquidity'
        | 'pool__sqrtPrice'
        | 'pool__feeGrowthGlobal0X128'
        | 'pool__feeGrowthGlobal1X128'
        | 'pool__token0Price'
        | 'pool__token1Price'
        | 'pool__tick'
        | 'pool__observationIndex'
        | 'pool__volumeToken0'
        | 'pool__volumeToken1'
        | 'pool__volumeUSD'
        | 'pool__untrackedVolumeUSD'
        | 'pool__feesUSD'
        | 'pool__txCount'
        | 'pool__collectedFeesToken0'
        | 'pool__collectedFeesToken1'
        | 'pool__collectedFeesUSD'
        | 'pool__totalValueLockedToken0'
        | 'pool__totalValueLockedToken1'
        | 'pool__totalValueLockedETH'
        | 'pool__totalValueLockedUSD'
        | 'pool__totalValueLockedUSDUntracked'
        | 'pool__isProtocolFeeEnabled'
        | 'pool__liquidityProviderCount'
        | 'tokenID'
        | 'position'
        | 'position__id'
        | 'position__owner'
        | 'position__liquidity'
        | 'position__depositedToken0'
        | 'position__depositedToken1'
        | 'position__withdrawnToken0'
        | 'position__withdrawnToken1'
        | 'position__collectedToken0'
        | 'position__collectedToken1'
        | 'position__collectedFeesToken0'
        | 'position__collectedFeesToken1'
        | 'position__amountDepositedUSD'
        | 'position__amountWithdrawnUSD'
        | 'position__amountCollectedUSD'
        | 'position__feeGrowthInside0LastX128'
        | 'position__feeGrowthInside1LastX128'
        | 'amount0'
        | 'amount1'
        | 'token0'
        | 'token0__id'
        | 'token0__symbol'
        | 'token0__name'
        | 'token0__decimals'
        | 'token0__totalSupply'
        | 'token0__volume'
        | 'token0__volumeUSD'
        | 'token0__untrackedVolumeUSD'
        | 'token0__feesUSD'
        | 'token0__txCount'
        | 'token0__poolCount'
        | 'token0__totalValueLocked'
        | 'token0__totalValueLockedUSD'
        | 'token0__totalValueLockedUSDUntracked'
        | 'token0__derivedETH'
        | 'token1'
        | 'token1__id'
        | 'token1__symbol'
        | 'token1__name'
        | 'token1__decimals'
        | 'token1__totalSupply'
        | 'token1__volume'
        | 'token1__volumeUSD'
        | 'token1__untrackedVolumeUSD'
        | 'token1__feesUSD'
        | 'token1__txCount'
        | 'token1__poolCount'
        | 'token1__totalValueLocked'
        | 'token1__totalValueLockedUSD'
        | 'token1__totalValueLockedUSDUntracked'
        | 'token1__derivedETH'
        | 'timeStamp'
        | 'transaction'
        | 'transaction__id'
        | 'transaction__blockNumber'
        | 'transaction__timestamp'
        | 'transaction__gasUsed'
        | 'transaction__gasPrice'
    }
    Int: unknown
    Int8: unknown
    Mint: {
      kind: 'OBJECT'
      name: 'Mint'
      fields: {
        amount: {
          name: 'amount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        amount0: {
          name: 'amount0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        amount1: {
          name: 'amount1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        amountUSD: {
          name: 'amountUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        logIndex: {
          name: 'logIndex'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
        }
        origin: {
          name: 'origin'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        owner: {
          name: 'owner'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        pool: {
          name: 'pool'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
          }
        }
        sender: {
          name: 'sender'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
        }
        tickLower: {
          name: 'tickLower'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        tickUpper: {
          name: 'tickUpper'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        timestamp: {
          name: 'timestamp'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        token0: {
          name: 'token0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Token'; ofType: null }
          }
        }
        token1: {
          name: 'token1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Token'; ofType: null }
          }
        }
        transaction: {
          name: 'transaction'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Transaction'; ofType: null }
          }
        }
      }
    }
    Mint_filter: {
      kind: 'INPUT_OBJECT'
      name: 'Mint_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'Transaction_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'timestamp'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'timestamp_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pool_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_'
          type: { kind: 'INPUT_OBJECT'; name: 'Token_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_'
          type: { kind: 'INPUT_OBJECT'; name: 'Token_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'owner_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'owner_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sender_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sender_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'origin_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'origin_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amountUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amountUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tickLower'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tickLower_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tickUpper'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tickUpper_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'logIndex'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'logIndex_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'INPUT_OBJECT'; name: 'Mint_filter'; ofType: null }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'INPUT_OBJECT'; name: 'Mint_filter'; ofType: null }
          }
          defaultValue: null
        },
      ]
    }
    Mint_orderBy: {
      name: 'Mint_orderBy'
      enumValues:
        | 'id'
        | 'transaction'
        | 'transaction__id'
        | 'transaction__blockNumber'
        | 'transaction__timestamp'
        | 'transaction__gasUsed'
        | 'transaction__gasPrice'
        | 'timestamp'
        | 'pool'
        | 'pool__id'
        | 'pool__createdAtTimestamp'
        | 'pool__createdAtBlockNumber'
        | 'pool__feeTier'
        | 'pool__liquidity'
        | 'pool__sqrtPrice'
        | 'pool__feeGrowthGlobal0X128'
        | 'pool__feeGrowthGlobal1X128'
        | 'pool__token0Price'
        | 'pool__token1Price'
        | 'pool__tick'
        | 'pool__observationIndex'
        | 'pool__volumeToken0'
        | 'pool__volumeToken1'
        | 'pool__volumeUSD'
        | 'pool__untrackedVolumeUSD'
        | 'pool__feesUSD'
        | 'pool__txCount'
        | 'pool__collectedFeesToken0'
        | 'pool__collectedFeesToken1'
        | 'pool__collectedFeesUSD'
        | 'pool__totalValueLockedToken0'
        | 'pool__totalValueLockedToken1'
        | 'pool__totalValueLockedETH'
        | 'pool__totalValueLockedUSD'
        | 'pool__totalValueLockedUSDUntracked'
        | 'pool__isProtocolFeeEnabled'
        | 'pool__liquidityProviderCount'
        | 'token0'
        | 'token0__id'
        | 'token0__symbol'
        | 'token0__name'
        | 'token0__decimals'
        | 'token0__totalSupply'
        | 'token0__volume'
        | 'token0__volumeUSD'
        | 'token0__untrackedVolumeUSD'
        | 'token0__feesUSD'
        | 'token0__txCount'
        | 'token0__poolCount'
        | 'token0__totalValueLocked'
        | 'token0__totalValueLockedUSD'
        | 'token0__totalValueLockedUSDUntracked'
        | 'token0__derivedETH'
        | 'token1'
        | 'token1__id'
        | 'token1__symbol'
        | 'token1__name'
        | 'token1__decimals'
        | 'token1__totalSupply'
        | 'token1__volume'
        | 'token1__volumeUSD'
        | 'token1__untrackedVolumeUSD'
        | 'token1__feesUSD'
        | 'token1__txCount'
        | 'token1__poolCount'
        | 'token1__totalValueLocked'
        | 'token1__totalValueLockedUSD'
        | 'token1__totalValueLockedUSDUntracked'
        | 'token1__derivedETH'
        | 'owner'
        | 'sender'
        | 'origin'
        | 'amount'
        | 'amount0'
        | 'amount1'
        | 'amountUSD'
        | 'tickLower'
        | 'tickUpper'
        | 'logIndex'
    }
    OrderDirection: { name: 'OrderDirection'; enumValues: 'asc' | 'desc' }
    Pool: {
      kind: 'OBJECT'
      name: 'Pool'
      fields: {
        burns: {
          name: 'burns'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Burn'; ofType: null }
              }
            }
          }
        }
        collectedFeesToken0: {
          name: 'collectedFeesToken0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        collectedFeesToken1: {
          name: 'collectedFeesToken1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        collectedFeesUSD: {
          name: 'collectedFeesUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        collects: {
          name: 'collects'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Collect'; ofType: null }
              }
            }
          }
        }
        createdAtBlockNumber: {
          name: 'createdAtBlockNumber'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        createdAtTimestamp: {
          name: 'createdAtTimestamp'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        feeGrowthGlobal0X128: {
          name: 'feeGrowthGlobal0X128'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        feeGrowthGlobal1X128: {
          name: 'feeGrowthGlobal1X128'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        feeTier: {
          name: 'feeTier'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        feesUSD: {
          name: 'feesUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        isProtocolFeeEnabled: {
          name: 'isProtocolFeeEnabled'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null }
          }
        }
        liquidity: {
          name: 'liquidity'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        liquidityProviderCount: {
          name: 'liquidityProviderCount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        mints: {
          name: 'mints'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Mint'; ofType: null }
              }
            }
          }
        }
        observationIndex: {
          name: 'observationIndex'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        poolDayData: {
          name: 'poolDayData'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'PoolDayData'; ofType: null }
              }
            }
          }
        }
        poolHourData: {
          name: 'poolHourData'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'PoolHourData'; ofType: null }
              }
            }
          }
        }
        sqrtPrice: {
          name: 'sqrtPrice'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        swaps: {
          name: 'swaps'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Swap'; ofType: null }
              }
            }
          }
        }
        tick: {
          name: 'tick'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
        }
        ticks: {
          name: 'ticks'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Tick'; ofType: null }
              }
            }
          }
        }
        token0: {
          name: 'token0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Token'; ofType: null }
          }
        }
        token0Price: {
          name: 'token0Price'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        token1: {
          name: 'token1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Token'; ofType: null }
          }
        }
        token1Price: {
          name: 'token1Price'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalValueLockedETH: {
          name: 'totalValueLockedETH'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalValueLockedToken0: {
          name: 'totalValueLockedToken0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalValueLockedToken1: {
          name: 'totalValueLockedToken1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalValueLockedUSD: {
          name: 'totalValueLockedUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalValueLockedUSDUntracked: {
          name: 'totalValueLockedUSDUntracked'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        txCount: {
          name: 'txCount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        untrackedVolumeUSD: {
          name: 'untrackedVolumeUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volumeToken0: {
          name: 'volumeToken0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volumeToken1: {
          name: 'volumeToken1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volumeUSD: {
          name: 'volumeUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
      }
    }
    PoolDayData: {
      kind: 'OBJECT'
      name: 'PoolDayData'
      fields: {
        close: {
          name: 'close'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        date: {
          name: 'date'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          }
        }
        feeGrowthGlobal0X128: {
          name: 'feeGrowthGlobal0X128'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        feeGrowthGlobal1X128: {
          name: 'feeGrowthGlobal1X128'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        feesUSD: {
          name: 'feesUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        high: {
          name: 'high'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        liquidity: {
          name: 'liquidity'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        low: {
          name: 'low'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        open: {
          name: 'open'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        pool: {
          name: 'pool'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
          }
        }
        sqrtPrice: {
          name: 'sqrtPrice'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        tick: {
          name: 'tick'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
        }
        token0Price: {
          name: 'token0Price'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        token1Price: {
          name: 'token1Price'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        tvlUSD: {
          name: 'tvlUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        txCount: {
          name: 'txCount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        volumeToken0: {
          name: 'volumeToken0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volumeToken1: {
          name: 'volumeToken1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volumeUSD: {
          name: 'volumeUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
      }
    }
    PoolDayData_filter: {
      kind: 'INPUT_OBJECT'
      name: 'PoolDayData_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'date'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_not'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_gt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_lt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_gte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_lte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'date_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pool_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidity_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sqrtPrice'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0Price'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0Price_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0Price_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0Price_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0Price_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0Price_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0Price_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0Price_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1Price'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1Price_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1Price_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1Price_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1Price_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1Price_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1Price_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1Price_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tick'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tick_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tvlUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tvlUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tvlUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tvlUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tvlUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tvlUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tvlUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tvlUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feesUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feesUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'txCount'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'txCount_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'open'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'open_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'high'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'high_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'low'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'low_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'close'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'close_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'PoolDayData_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'PoolDayData_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    PoolDayData_orderBy: {
      name: 'PoolDayData_orderBy'
      enumValues:
        | 'id'
        | 'date'
        | 'pool'
        | 'pool__id'
        | 'pool__createdAtTimestamp'
        | 'pool__createdAtBlockNumber'
        | 'pool__feeTier'
        | 'pool__liquidity'
        | 'pool__sqrtPrice'
        | 'pool__feeGrowthGlobal0X128'
        | 'pool__feeGrowthGlobal1X128'
        | 'pool__token0Price'
        | 'pool__token1Price'
        | 'pool__tick'
        | 'pool__observationIndex'
        | 'pool__volumeToken0'
        | 'pool__volumeToken1'
        | 'pool__volumeUSD'
        | 'pool__untrackedVolumeUSD'
        | 'pool__feesUSD'
        | 'pool__txCount'
        | 'pool__collectedFeesToken0'
        | 'pool__collectedFeesToken1'
        | 'pool__collectedFeesUSD'
        | 'pool__totalValueLockedToken0'
        | 'pool__totalValueLockedToken1'
        | 'pool__totalValueLockedETH'
        | 'pool__totalValueLockedUSD'
        | 'pool__totalValueLockedUSDUntracked'
        | 'pool__isProtocolFeeEnabled'
        | 'pool__liquidityProviderCount'
        | 'liquidity'
        | 'sqrtPrice'
        | 'token0Price'
        | 'token1Price'
        | 'tick'
        | 'feeGrowthGlobal0X128'
        | 'feeGrowthGlobal1X128'
        | 'tvlUSD'
        | 'volumeToken0'
        | 'volumeToken1'
        | 'volumeUSD'
        | 'feesUSD'
        | 'txCount'
        | 'open'
        | 'high'
        | 'low'
        | 'close'
    }
    PoolHourData: {
      kind: 'OBJECT'
      name: 'PoolHourData'
      fields: {
        close: {
          name: 'close'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        feeGrowthGlobal0X128: {
          name: 'feeGrowthGlobal0X128'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        feeGrowthGlobal1X128: {
          name: 'feeGrowthGlobal1X128'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        feesUSD: {
          name: 'feesUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        high: {
          name: 'high'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        liquidity: {
          name: 'liquidity'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        low: {
          name: 'low'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        open: {
          name: 'open'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        periodStartUnix: {
          name: 'periodStartUnix'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          }
        }
        pool: {
          name: 'pool'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
          }
        }
        sqrtPrice: {
          name: 'sqrtPrice'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        tick: {
          name: 'tick'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
        }
        token0Price: {
          name: 'token0Price'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        token1Price: {
          name: 'token1Price'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        tvlUSD: {
          name: 'tvlUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        txCount: {
          name: 'txCount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        volumeToken0: {
          name: 'volumeToken0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volumeToken1: {
          name: 'volumeToken1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volumeUSD: {
          name: 'volumeUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
      }
    }
    PoolHourData_filter: {
      kind: 'INPUT_OBJECT'
      name: 'PoolHourData_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'periodStartUnix'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_not'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_gt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_lt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_gte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_lte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pool_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidity_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sqrtPrice'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0Price'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0Price_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0Price_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0Price_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0Price_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0Price_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0Price_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0Price_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1Price'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1Price_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1Price_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1Price_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1Price_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1Price_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1Price_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1Price_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tick'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tick_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tvlUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tvlUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tvlUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tvlUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tvlUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tvlUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tvlUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tvlUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feesUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feesUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'txCount'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'txCount_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'open'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'open_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'high'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'high_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'low'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'low_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'close'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'close_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'PoolHourData_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'PoolHourData_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    PoolHourData_orderBy: {
      name: 'PoolHourData_orderBy'
      enumValues:
        | 'id'
        | 'periodStartUnix'
        | 'pool'
        | 'pool__id'
        | 'pool__createdAtTimestamp'
        | 'pool__createdAtBlockNumber'
        | 'pool__feeTier'
        | 'pool__liquidity'
        | 'pool__sqrtPrice'
        | 'pool__feeGrowthGlobal0X128'
        | 'pool__feeGrowthGlobal1X128'
        | 'pool__token0Price'
        | 'pool__token1Price'
        | 'pool__tick'
        | 'pool__observationIndex'
        | 'pool__volumeToken0'
        | 'pool__volumeToken1'
        | 'pool__volumeUSD'
        | 'pool__untrackedVolumeUSD'
        | 'pool__feesUSD'
        | 'pool__txCount'
        | 'pool__collectedFeesToken0'
        | 'pool__collectedFeesToken1'
        | 'pool__collectedFeesUSD'
        | 'pool__totalValueLockedToken0'
        | 'pool__totalValueLockedToken1'
        | 'pool__totalValueLockedETH'
        | 'pool__totalValueLockedUSD'
        | 'pool__totalValueLockedUSDUntracked'
        | 'pool__isProtocolFeeEnabled'
        | 'pool__liquidityProviderCount'
        | 'liquidity'
        | 'sqrtPrice'
        | 'token0Price'
        | 'token1Price'
        | 'tick'
        | 'feeGrowthGlobal0X128'
        | 'feeGrowthGlobal1X128'
        | 'tvlUSD'
        | 'volumeToken0'
        | 'volumeToken1'
        | 'volumeUSD'
        | 'feesUSD'
        | 'txCount'
        | 'open'
        | 'high'
        | 'low'
        | 'close'
    }
    Pool_filter: {
      kind: 'INPUT_OBJECT'
      name: 'Pool_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'createdAtTimestamp'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtTimestamp_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtTimestamp_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtTimestamp_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtTimestamp_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtTimestamp_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtTimestamp_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'createdAtTimestamp_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'createdAtBlockNumber'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlockNumber_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlockNumber_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlockNumber_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlockNumber_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlockNumber_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlockNumber_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'createdAtBlockNumber_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_'
          type: { kind: 'INPUT_OBJECT'; name: 'Token_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_'
          type: { kind: 'INPUT_OBJECT'; name: 'Token_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTier'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTier_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTier_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTier_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTier_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTier_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTier_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeTier_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidity'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidity_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sqrtPrice'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sqrtPrice_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal0X128_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthGlobal1X128_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0Price'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0Price_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0Price_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0Price_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0Price_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0Price_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0Price_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0Price_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1Price'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1Price_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1Price_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1Price_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1Price_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1Price_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1Price_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1Price_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tick'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tick_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'observationIndex'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'observationIndex_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'observationIndex_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'observationIndex_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'observationIndex_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'observationIndex_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'observationIndex_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'observationIndex_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feesUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feesUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'txCount'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'txCount_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedFeesUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedFeesUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedToken0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedToken0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedToken0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedToken0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedToken0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedToken0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedToken0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedToken0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedToken1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedToken1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedToken1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedToken1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedToken1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedToken1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedToken1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedToken1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETH'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETH_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETH_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETH_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETH_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETH_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETH_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedETH_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'isProtocolFeeEnabled'
          type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null }
          defaultValue: null
        },
        {
          name: 'isProtocolFeeEnabled_not'
          type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null }
          defaultValue: null
        },
        {
          name: 'isProtocolFeeEnabled_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'isProtocolFeeEnabled_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidityProviderCount'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityProviderCount_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityProviderCount_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityProviderCount_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityProviderCount_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityProviderCount_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityProviderCount_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidityProviderCount_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'poolHourData_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'PoolHourData_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'poolDayData_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'PoolDayData_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'mints_'
          type: { kind: 'INPUT_OBJECT'; name: 'Mint_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'burns_'
          type: { kind: 'INPUT_OBJECT'; name: 'Burn_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'swaps_'
          type: { kind: 'INPUT_OBJECT'; name: 'Swap_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collects_'
          type: { kind: 'INPUT_OBJECT'; name: 'Collect_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'ticks_'
          type: { kind: 'INPUT_OBJECT'; name: 'Tick_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'INPUT_OBJECT'; name: 'Pool_filter'; ofType: null }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'INPUT_OBJECT'; name: 'Pool_filter'; ofType: null }
          }
          defaultValue: null
        },
      ]
    }
    Pool_orderBy: {
      name: 'Pool_orderBy'
      enumValues:
        | 'id'
        | 'createdAtTimestamp'
        | 'createdAtBlockNumber'
        | 'token0'
        | 'token0__id'
        | 'token0__symbol'
        | 'token0__name'
        | 'token0__decimals'
        | 'token0__totalSupply'
        | 'token0__volume'
        | 'token0__volumeUSD'
        | 'token0__untrackedVolumeUSD'
        | 'token0__feesUSD'
        | 'token0__txCount'
        | 'token0__poolCount'
        | 'token0__totalValueLocked'
        | 'token0__totalValueLockedUSD'
        | 'token0__totalValueLockedUSDUntracked'
        | 'token0__derivedETH'
        | 'token1'
        | 'token1__id'
        | 'token1__symbol'
        | 'token1__name'
        | 'token1__decimals'
        | 'token1__totalSupply'
        | 'token1__volume'
        | 'token1__volumeUSD'
        | 'token1__untrackedVolumeUSD'
        | 'token1__feesUSD'
        | 'token1__txCount'
        | 'token1__poolCount'
        | 'token1__totalValueLocked'
        | 'token1__totalValueLockedUSD'
        | 'token1__totalValueLockedUSDUntracked'
        | 'token1__derivedETH'
        | 'feeTier'
        | 'liquidity'
        | 'sqrtPrice'
        | 'feeGrowthGlobal0X128'
        | 'feeGrowthGlobal1X128'
        | 'token0Price'
        | 'token1Price'
        | 'tick'
        | 'observationIndex'
        | 'volumeToken0'
        | 'volumeToken1'
        | 'volumeUSD'
        | 'untrackedVolumeUSD'
        | 'feesUSD'
        | 'txCount'
        | 'collectedFeesToken0'
        | 'collectedFeesToken1'
        | 'collectedFeesUSD'
        | 'totalValueLockedToken0'
        | 'totalValueLockedToken1'
        | 'totalValueLockedETH'
        | 'totalValueLockedUSD'
        | 'totalValueLockedUSDUntracked'
        | 'isProtocolFeeEnabled'
        | 'liquidityProviderCount'
        | 'poolHourData'
        | 'poolDayData'
        | 'mints'
        | 'burns'
        | 'swaps'
        | 'collects'
        | 'ticks'
    }
    Position: {
      kind: 'OBJECT'
      name: 'Position'
      fields: {
        amountCollectedUSD: {
          name: 'amountCollectedUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        amountDepositedUSD: {
          name: 'amountDepositedUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        amountWithdrawnUSD: {
          name: 'amountWithdrawnUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        collectedFeesToken0: {
          name: 'collectedFeesToken0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        collectedFeesToken1: {
          name: 'collectedFeesToken1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        collectedToken0: {
          name: 'collectedToken0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        collectedToken1: {
          name: 'collectedToken1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        decreaseEvents: {
          name: 'decreaseEvents'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'IncreaseEvent'; ofType: null }
              }
            }
          }
        }
        depositedToken0: {
          name: 'depositedToken0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        depositedToken1: {
          name: 'depositedToken1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        feeGrowthInside0LastX128: {
          name: 'feeGrowthInside0LastX128'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        feeGrowthInside1LastX128: {
          name: 'feeGrowthInside1LastX128'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        increaseEvents: {
          name: 'increaseEvents'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'IncreaseEvent'; ofType: null }
              }
            }
          }
        }
        liquidity: {
          name: 'liquidity'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        owner: {
          name: 'owner'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        pool: {
          name: 'pool'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
          }
        }
        tickLower: {
          name: 'tickLower'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Tick'; ofType: null }
          }
        }
        tickUpper: {
          name: 'tickUpper'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Tick'; ofType: null }
          }
        }
        token0: {
          name: 'token0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Token'; ofType: null }
          }
        }
        token1: {
          name: 'token1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Token'; ofType: null }
          }
        }
        transaction: {
          name: 'transaction'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Transaction'; ofType: null }
          }
        }
        withdrawnToken0: {
          name: 'withdrawnToken0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        withdrawnToken1: {
          name: 'withdrawnToken1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
      }
    }
    PositionSnapshot: {
      kind: 'OBJECT'
      name: 'PositionSnapshot'
      fields: {
        blockNumber: {
          name: 'blockNumber'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        collectedFeesToken0: {
          name: 'collectedFeesToken0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        collectedFeesToken1: {
          name: 'collectedFeesToken1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        depositedToken0: {
          name: 'depositedToken0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        depositedToken1: {
          name: 'depositedToken1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        feeGrowthInside0LastX128: {
          name: 'feeGrowthInside0LastX128'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        feeGrowthInside1LastX128: {
          name: 'feeGrowthInside1LastX128'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        liquidity: {
          name: 'liquidity'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        owner: {
          name: 'owner'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        pool: {
          name: 'pool'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
          }
        }
        position: {
          name: 'position'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Position'; ofType: null }
          }
        }
        timestamp: {
          name: 'timestamp'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        transaction: {
          name: 'transaction'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Transaction'; ofType: null }
          }
        }
        withdrawnToken0: {
          name: 'withdrawnToken0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        withdrawnToken1: {
          name: 'withdrawnToken1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
      }
    }
    PositionSnapshot_filter: {
      kind: 'INPUT_OBJECT'
      name: 'PositionSnapshot_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'owner'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'owner_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'owner_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pool_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'position_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'position_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'position_'
          type: { kind: 'INPUT_OBJECT'; name: 'Position_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'blockNumber'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'blockNumber_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'blockNumber_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'blockNumber_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'blockNumber_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'blockNumber_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'blockNumber_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'blockNumber_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'timestamp'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'timestamp_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidity'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidity_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'depositedToken0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'depositedToken0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'depositedToken1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'depositedToken1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'withdrawnToken0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'withdrawnToken0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'withdrawnToken1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'withdrawnToken1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'Transaction_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside0LastX128'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside0LastX128_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside0LastX128_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside0LastX128_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside0LastX128_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside0LastX128_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside0LastX128_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside0LastX128_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside1LastX128'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside1LastX128_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside1LastX128_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside1LastX128_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside1LastX128_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside1LastX128_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside1LastX128_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside1LastX128_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'PositionSnapshot_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'PositionSnapshot_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    PositionSnapshot_orderBy: {
      name: 'PositionSnapshot_orderBy'
      enumValues:
        | 'id'
        | 'owner'
        | 'pool'
        | 'pool__id'
        | 'pool__createdAtTimestamp'
        | 'pool__createdAtBlockNumber'
        | 'pool__feeTier'
        | 'pool__liquidity'
        | 'pool__sqrtPrice'
        | 'pool__feeGrowthGlobal0X128'
        | 'pool__feeGrowthGlobal1X128'
        | 'pool__token0Price'
        | 'pool__token1Price'
        | 'pool__tick'
        | 'pool__observationIndex'
        | 'pool__volumeToken0'
        | 'pool__volumeToken1'
        | 'pool__volumeUSD'
        | 'pool__untrackedVolumeUSD'
        | 'pool__feesUSD'
        | 'pool__txCount'
        | 'pool__collectedFeesToken0'
        | 'pool__collectedFeesToken1'
        | 'pool__collectedFeesUSD'
        | 'pool__totalValueLockedToken0'
        | 'pool__totalValueLockedToken1'
        | 'pool__totalValueLockedETH'
        | 'pool__totalValueLockedUSD'
        | 'pool__totalValueLockedUSDUntracked'
        | 'pool__isProtocolFeeEnabled'
        | 'pool__liquidityProviderCount'
        | 'position'
        | 'position__id'
        | 'position__owner'
        | 'position__liquidity'
        | 'position__depositedToken0'
        | 'position__depositedToken1'
        | 'position__withdrawnToken0'
        | 'position__withdrawnToken1'
        | 'position__collectedToken0'
        | 'position__collectedToken1'
        | 'position__collectedFeesToken0'
        | 'position__collectedFeesToken1'
        | 'position__amountDepositedUSD'
        | 'position__amountWithdrawnUSD'
        | 'position__amountCollectedUSD'
        | 'position__feeGrowthInside0LastX128'
        | 'position__feeGrowthInside1LastX128'
        | 'blockNumber'
        | 'timestamp'
        | 'liquidity'
        | 'depositedToken0'
        | 'depositedToken1'
        | 'withdrawnToken0'
        | 'withdrawnToken1'
        | 'collectedFeesToken0'
        | 'collectedFeesToken1'
        | 'transaction'
        | 'transaction__id'
        | 'transaction__blockNumber'
        | 'transaction__timestamp'
        | 'transaction__gasUsed'
        | 'transaction__gasPrice'
        | 'feeGrowthInside0LastX128'
        | 'feeGrowthInside1LastX128'
    }
    Position_filter: {
      kind: 'INPUT_OBJECT'
      name: 'Position_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'owner'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'owner_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'owner_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pool_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_'
          type: { kind: 'INPUT_OBJECT'; name: 'Token_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_'
          type: { kind: 'INPUT_OBJECT'; name: 'Token_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tickLower_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tickLower_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickLower_'
          type: { kind: 'INPUT_OBJECT'; name: 'Tick_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tickUpper_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tickUpper_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickUpper_'
          type: { kind: 'INPUT_OBJECT'; name: 'Tick_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidity_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'depositedToken0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'depositedToken0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'depositedToken1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'depositedToken1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'depositedToken1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'withdrawnToken0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'withdrawnToken0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'withdrawnToken1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'withdrawnToken1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'withdrawnToken1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedToken0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedToken0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedToken0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedToken0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedToken0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedToken0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedToken0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedToken0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedToken1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedToken1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedToken1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedToken1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedToken1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedToken1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedToken1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedToken1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amountDepositedUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountDepositedUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountDepositedUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountDepositedUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountDepositedUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountDepositedUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountDepositedUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amountDepositedUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amountWithdrawnUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountWithdrawnUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountWithdrawnUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountWithdrawnUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountWithdrawnUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountWithdrawnUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountWithdrawnUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amountWithdrawnUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amountCollectedUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountCollectedUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountCollectedUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountCollectedUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountCollectedUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountCollectedUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountCollectedUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amountCollectedUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'Transaction_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside0LastX128'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside0LastX128_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside0LastX128_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside0LastX128_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside0LastX128_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside0LastX128_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside0LastX128_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside0LastX128_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside1LastX128'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside1LastX128_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside1LastX128_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside1LastX128_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside1LastX128_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside1LastX128_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside1LastX128_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthInside1LastX128_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'increaseEvents_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'IncreaseEvent_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'decreaseEvents_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'IncreaseEvent_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'Position_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'Position_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    Position_orderBy: {
      name: 'Position_orderBy'
      enumValues:
        | 'id'
        | 'owner'
        | 'pool'
        | 'pool__id'
        | 'pool__createdAtTimestamp'
        | 'pool__createdAtBlockNumber'
        | 'pool__feeTier'
        | 'pool__liquidity'
        | 'pool__sqrtPrice'
        | 'pool__feeGrowthGlobal0X128'
        | 'pool__feeGrowthGlobal1X128'
        | 'pool__token0Price'
        | 'pool__token1Price'
        | 'pool__tick'
        | 'pool__observationIndex'
        | 'pool__volumeToken0'
        | 'pool__volumeToken1'
        | 'pool__volumeUSD'
        | 'pool__untrackedVolumeUSD'
        | 'pool__feesUSD'
        | 'pool__txCount'
        | 'pool__collectedFeesToken0'
        | 'pool__collectedFeesToken1'
        | 'pool__collectedFeesUSD'
        | 'pool__totalValueLockedToken0'
        | 'pool__totalValueLockedToken1'
        | 'pool__totalValueLockedETH'
        | 'pool__totalValueLockedUSD'
        | 'pool__totalValueLockedUSDUntracked'
        | 'pool__isProtocolFeeEnabled'
        | 'pool__liquidityProviderCount'
        | 'token0'
        | 'token0__id'
        | 'token0__symbol'
        | 'token0__name'
        | 'token0__decimals'
        | 'token0__totalSupply'
        | 'token0__volume'
        | 'token0__volumeUSD'
        | 'token0__untrackedVolumeUSD'
        | 'token0__feesUSD'
        | 'token0__txCount'
        | 'token0__poolCount'
        | 'token0__totalValueLocked'
        | 'token0__totalValueLockedUSD'
        | 'token0__totalValueLockedUSDUntracked'
        | 'token0__derivedETH'
        | 'token1'
        | 'token1__id'
        | 'token1__symbol'
        | 'token1__name'
        | 'token1__decimals'
        | 'token1__totalSupply'
        | 'token1__volume'
        | 'token1__volumeUSD'
        | 'token1__untrackedVolumeUSD'
        | 'token1__feesUSD'
        | 'token1__txCount'
        | 'token1__poolCount'
        | 'token1__totalValueLocked'
        | 'token1__totalValueLockedUSD'
        | 'token1__totalValueLockedUSDUntracked'
        | 'token1__derivedETH'
        | 'tickLower'
        | 'tickLower__id'
        | 'tickLower__poolAddress'
        | 'tickLower__tickIdx'
        | 'tickLower__liquidityGross'
        | 'tickLower__liquidityNet'
        | 'tickLower__price0'
        | 'tickLower__price1'
        | 'tickLower__volumeToken0'
        | 'tickLower__volumeToken1'
        | 'tickLower__volumeUSD'
        | 'tickLower__untrackedVolumeUSD'
        | 'tickLower__feesUSD'
        | 'tickLower__collectedFeesToken0'
        | 'tickLower__collectedFeesToken1'
        | 'tickLower__collectedFeesUSD'
        | 'tickLower__createdAtTimestamp'
        | 'tickLower__createdAtBlockNumber'
        | 'tickLower__liquidityProviderCount'
        | 'tickLower__feeGrowthOutside0X128'
        | 'tickLower__feeGrowthOutside1X128'
        | 'tickUpper'
        | 'tickUpper__id'
        | 'tickUpper__poolAddress'
        | 'tickUpper__tickIdx'
        | 'tickUpper__liquidityGross'
        | 'tickUpper__liquidityNet'
        | 'tickUpper__price0'
        | 'tickUpper__price1'
        | 'tickUpper__volumeToken0'
        | 'tickUpper__volumeToken1'
        | 'tickUpper__volumeUSD'
        | 'tickUpper__untrackedVolumeUSD'
        | 'tickUpper__feesUSD'
        | 'tickUpper__collectedFeesToken0'
        | 'tickUpper__collectedFeesToken1'
        | 'tickUpper__collectedFeesUSD'
        | 'tickUpper__createdAtTimestamp'
        | 'tickUpper__createdAtBlockNumber'
        | 'tickUpper__liquidityProviderCount'
        | 'tickUpper__feeGrowthOutside0X128'
        | 'tickUpper__feeGrowthOutside1X128'
        | 'liquidity'
        | 'depositedToken0'
        | 'depositedToken1'
        | 'withdrawnToken0'
        | 'withdrawnToken1'
        | 'collectedToken0'
        | 'collectedToken1'
        | 'collectedFeesToken0'
        | 'collectedFeesToken1'
        | 'amountDepositedUSD'
        | 'amountWithdrawnUSD'
        | 'amountCollectedUSD'
        | 'transaction'
        | 'transaction__id'
        | 'transaction__blockNumber'
        | 'transaction__timestamp'
        | 'transaction__gasUsed'
        | 'transaction__gasPrice'
        | 'feeGrowthInside0LastX128'
        | 'feeGrowthInside1LastX128'
        | 'increaseEvents'
        | 'decreaseEvents'
    }
    Query: {
      kind: 'OBJECT'
      name: 'Query'
      fields: {
        _meta: {
          name: '_meta'
          type: { kind: 'OBJECT'; name: '_Meta_'; ofType: null }
        }
        bundle: {
          name: 'bundle'
          type: { kind: 'OBJECT'; name: 'Bundle'; ofType: null }
        }
        bundles: {
          name: 'bundles'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Bundle'; ofType: null }
              }
            }
          }
        }
        burn: {
          name: 'burn'
          type: { kind: 'OBJECT'; name: 'Burn'; ofType: null }
        }
        burns: {
          name: 'burns'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Burn'; ofType: null }
              }
            }
          }
        }
        collect: {
          name: 'collect'
          type: { kind: 'OBJECT'; name: 'Collect'; ofType: null }
        }
        collects: {
          name: 'collects'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Collect'; ofType: null }
              }
            }
          }
        }
        decreaseEvent: {
          name: 'decreaseEvent'
          type: { kind: 'OBJECT'; name: 'DecreaseEvent'; ofType: null }
        }
        decreaseEvents: {
          name: 'decreaseEvents'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'DecreaseEvent'; ofType: null }
              }
            }
          }
        }
        factories: {
          name: 'factories'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Factory'; ofType: null }
              }
            }
          }
        }
        factory: {
          name: 'factory'
          type: { kind: 'OBJECT'; name: 'Factory'; ofType: null }
        }
        flash: {
          name: 'flash'
          type: { kind: 'OBJECT'; name: 'Flash'; ofType: null }
        }
        flashes: {
          name: 'flashes'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Flash'; ofType: null }
              }
            }
          }
        }
        increaseEvent: {
          name: 'increaseEvent'
          type: { kind: 'OBJECT'; name: 'IncreaseEvent'; ofType: null }
        }
        increaseEvents: {
          name: 'increaseEvents'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'IncreaseEvent'; ofType: null }
              }
            }
          }
        }
        mint: {
          name: 'mint'
          type: { kind: 'OBJECT'; name: 'Mint'; ofType: null }
        }
        mints: {
          name: 'mints'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Mint'; ofType: null }
              }
            }
          }
        }
        pool: {
          name: 'pool'
          type: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
        }
        poolDayData: {
          name: 'poolDayData'
          type: { kind: 'OBJECT'; name: 'PoolDayData'; ofType: null }
        }
        poolDayDatas: {
          name: 'poolDayDatas'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'PoolDayData'; ofType: null }
              }
            }
          }
        }
        poolHourData: {
          name: 'poolHourData'
          type: { kind: 'OBJECT'; name: 'PoolHourData'; ofType: null }
        }
        poolHourDatas: {
          name: 'poolHourDatas'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'PoolHourData'; ofType: null }
              }
            }
          }
        }
        pools: {
          name: 'pools'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
              }
            }
          }
        }
        position: {
          name: 'position'
          type: { kind: 'OBJECT'; name: 'Position'; ofType: null }
        }
        positionSnapshot: {
          name: 'positionSnapshot'
          type: { kind: 'OBJECT'; name: 'PositionSnapshot'; ofType: null }
        }
        positionSnapshots: {
          name: 'positionSnapshots'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: {
                  kind: 'OBJECT'
                  name: 'PositionSnapshot'
                  ofType: null
                }
              }
            }
          }
        }
        positions: {
          name: 'positions'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Position'; ofType: null }
              }
            }
          }
        }
        setProtocolFeeEvent: {
          name: 'setProtocolFeeEvent'
          type: { kind: 'OBJECT'; name: 'SetProtocolFeeEvent'; ofType: null }
        }
        setProtocolFeeEvents: {
          name: 'setProtocolFeeEvents'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: {
                  kind: 'OBJECT'
                  name: 'SetProtocolFeeEvent'
                  ofType: null
                }
              }
            }
          }
        }
        swap: {
          name: 'swap'
          type: { kind: 'OBJECT'; name: 'Swap'; ofType: null }
        }
        swaps: {
          name: 'swaps'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Swap'; ofType: null }
              }
            }
          }
        }
        tick: {
          name: 'tick'
          type: { kind: 'OBJECT'; name: 'Tick'; ofType: null }
        }
        tickDayData: {
          name: 'tickDayData'
          type: { kind: 'OBJECT'; name: 'TickDayData'; ofType: null }
        }
        tickDayDatas: {
          name: 'tickDayDatas'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'TickDayData'; ofType: null }
              }
            }
          }
        }
        tickHourData: {
          name: 'tickHourData'
          type: { kind: 'OBJECT'; name: 'TickHourData'; ofType: null }
        }
        tickHourDatas: {
          name: 'tickHourDatas'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'TickHourData'; ofType: null }
              }
            }
          }
        }
        ticks: {
          name: 'ticks'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Tick'; ofType: null }
              }
            }
          }
        }
        token: {
          name: 'token'
          type: { kind: 'OBJECT'; name: 'Token'; ofType: null }
        }
        tokenDayData: {
          name: 'tokenDayData'
          type: { kind: 'OBJECT'; name: 'TokenDayData'; ofType: null }
        }
        tokenDayDatas: {
          name: 'tokenDayDatas'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'TokenDayData'; ofType: null }
              }
            }
          }
        }
        tokenHourData: {
          name: 'tokenHourData'
          type: { kind: 'OBJECT'; name: 'TokenHourData'; ofType: null }
        }
        tokenHourDatas: {
          name: 'tokenHourDatas'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'TokenHourData'; ofType: null }
              }
            }
          }
        }
        tokens: {
          name: 'tokens'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Token'; ofType: null }
              }
            }
          }
        }
        transaction: {
          name: 'transaction'
          type: { kind: 'OBJECT'; name: 'Transaction'; ofType: null }
        }
        transactions: {
          name: 'transactions'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Transaction'; ofType: null }
              }
            }
          }
        }
        uniswapDayData: {
          name: 'uniswapDayData'
          type: { kind: 'OBJECT'; name: 'UniswapDayData'; ofType: null }
        }
        uniswapDayDatas: {
          name: 'uniswapDayDatas'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'UniswapDayData'; ofType: null }
              }
            }
          }
        }
      }
    }
    SetProtocolFeeEvent: {
      kind: 'OBJECT'
      name: 'SetProtocolFeeEvent'
      fields: {
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        logIndex: {
          name: 'logIndex'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        new0: {
          name: 'new0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        new1: {
          name: 'new1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        old0: {
          name: 'old0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        old1: {
          name: 'old1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        pool: {
          name: 'pool'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
          }
        }
        timestamp: {
          name: 'timestamp'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
      }
    }
    SetProtocolFeeEvent_filter: {
      kind: 'INPUT_OBJECT'
      name: 'SetProtocolFeeEvent_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pool_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'logIndex_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'new0'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'new0_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'new0_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'new0_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'new0_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'new0_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'new0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'new0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'new1'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'new1_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'new1_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'new1_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'new1_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'new1_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'new1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'new1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'old0'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'old0_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'old0_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'old0_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'old0_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'old0_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'old0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'old0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'old1'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'old1_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'old1_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'old1_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'old1_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'old1_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'old1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'old1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'timestamp'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'timestamp_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'SetProtocolFeeEvent_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'SetProtocolFeeEvent_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    SetProtocolFeeEvent_orderBy: {
      name: 'SetProtocolFeeEvent_orderBy'
      enumValues:
        | 'id'
        | 'pool'
        | 'pool__id'
        | 'pool__createdAtTimestamp'
        | 'pool__createdAtBlockNumber'
        | 'pool__feeTier'
        | 'pool__liquidity'
        | 'pool__sqrtPrice'
        | 'pool__feeGrowthGlobal0X128'
        | 'pool__feeGrowthGlobal1X128'
        | 'pool__token0Price'
        | 'pool__token1Price'
        | 'pool__tick'
        | 'pool__observationIndex'
        | 'pool__volumeToken0'
        | 'pool__volumeToken1'
        | 'pool__volumeUSD'
        | 'pool__untrackedVolumeUSD'
        | 'pool__feesUSD'
        | 'pool__txCount'
        | 'pool__collectedFeesToken0'
        | 'pool__collectedFeesToken1'
        | 'pool__collectedFeesUSD'
        | 'pool__totalValueLockedToken0'
        | 'pool__totalValueLockedToken1'
        | 'pool__totalValueLockedETH'
        | 'pool__totalValueLockedUSD'
        | 'pool__totalValueLockedUSDUntracked'
        | 'pool__isProtocolFeeEnabled'
        | 'pool__liquidityProviderCount'
        | 'logIndex'
        | 'new0'
        | 'new1'
        | 'old0'
        | 'old1'
        | 'timestamp'
    }
    String: unknown
    Subscription: {
      kind: 'OBJECT'
      name: 'Subscription'
      fields: {
        _meta: {
          name: '_meta'
          type: { kind: 'OBJECT'; name: '_Meta_'; ofType: null }
        }
        bundle: {
          name: 'bundle'
          type: { kind: 'OBJECT'; name: 'Bundle'; ofType: null }
        }
        bundles: {
          name: 'bundles'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Bundle'; ofType: null }
              }
            }
          }
        }
        burn: {
          name: 'burn'
          type: { kind: 'OBJECT'; name: 'Burn'; ofType: null }
        }
        burns: {
          name: 'burns'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Burn'; ofType: null }
              }
            }
          }
        }
        collect: {
          name: 'collect'
          type: { kind: 'OBJECT'; name: 'Collect'; ofType: null }
        }
        collects: {
          name: 'collects'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Collect'; ofType: null }
              }
            }
          }
        }
        decreaseEvent: {
          name: 'decreaseEvent'
          type: { kind: 'OBJECT'; name: 'DecreaseEvent'; ofType: null }
        }
        decreaseEvents: {
          name: 'decreaseEvents'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'DecreaseEvent'; ofType: null }
              }
            }
          }
        }
        factories: {
          name: 'factories'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Factory'; ofType: null }
              }
            }
          }
        }
        factory: {
          name: 'factory'
          type: { kind: 'OBJECT'; name: 'Factory'; ofType: null }
        }
        flash: {
          name: 'flash'
          type: { kind: 'OBJECT'; name: 'Flash'; ofType: null }
        }
        flashes: {
          name: 'flashes'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Flash'; ofType: null }
              }
            }
          }
        }
        increaseEvent: {
          name: 'increaseEvent'
          type: { kind: 'OBJECT'; name: 'IncreaseEvent'; ofType: null }
        }
        increaseEvents: {
          name: 'increaseEvents'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'IncreaseEvent'; ofType: null }
              }
            }
          }
        }
        mint: {
          name: 'mint'
          type: { kind: 'OBJECT'; name: 'Mint'; ofType: null }
        }
        mints: {
          name: 'mints'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Mint'; ofType: null }
              }
            }
          }
        }
        pool: {
          name: 'pool'
          type: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
        }
        poolDayData: {
          name: 'poolDayData'
          type: { kind: 'OBJECT'; name: 'PoolDayData'; ofType: null }
        }
        poolDayDatas: {
          name: 'poolDayDatas'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'PoolDayData'; ofType: null }
              }
            }
          }
        }
        poolHourData: {
          name: 'poolHourData'
          type: { kind: 'OBJECT'; name: 'PoolHourData'; ofType: null }
        }
        poolHourDatas: {
          name: 'poolHourDatas'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'PoolHourData'; ofType: null }
              }
            }
          }
        }
        pools: {
          name: 'pools'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
              }
            }
          }
        }
        position: {
          name: 'position'
          type: { kind: 'OBJECT'; name: 'Position'; ofType: null }
        }
        positionSnapshot: {
          name: 'positionSnapshot'
          type: { kind: 'OBJECT'; name: 'PositionSnapshot'; ofType: null }
        }
        positionSnapshots: {
          name: 'positionSnapshots'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: {
                  kind: 'OBJECT'
                  name: 'PositionSnapshot'
                  ofType: null
                }
              }
            }
          }
        }
        positions: {
          name: 'positions'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Position'; ofType: null }
              }
            }
          }
        }
        setProtocolFeeEvent: {
          name: 'setProtocolFeeEvent'
          type: { kind: 'OBJECT'; name: 'SetProtocolFeeEvent'; ofType: null }
        }
        setProtocolFeeEvents: {
          name: 'setProtocolFeeEvents'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: {
                  kind: 'OBJECT'
                  name: 'SetProtocolFeeEvent'
                  ofType: null
                }
              }
            }
          }
        }
        swap: {
          name: 'swap'
          type: { kind: 'OBJECT'; name: 'Swap'; ofType: null }
        }
        swaps: {
          name: 'swaps'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Swap'; ofType: null }
              }
            }
          }
        }
        tick: {
          name: 'tick'
          type: { kind: 'OBJECT'; name: 'Tick'; ofType: null }
        }
        tickDayData: {
          name: 'tickDayData'
          type: { kind: 'OBJECT'; name: 'TickDayData'; ofType: null }
        }
        tickDayDatas: {
          name: 'tickDayDatas'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'TickDayData'; ofType: null }
              }
            }
          }
        }
        tickHourData: {
          name: 'tickHourData'
          type: { kind: 'OBJECT'; name: 'TickHourData'; ofType: null }
        }
        tickHourDatas: {
          name: 'tickHourDatas'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'TickHourData'; ofType: null }
              }
            }
          }
        }
        ticks: {
          name: 'ticks'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Tick'; ofType: null }
              }
            }
          }
        }
        token: {
          name: 'token'
          type: { kind: 'OBJECT'; name: 'Token'; ofType: null }
        }
        tokenDayData: {
          name: 'tokenDayData'
          type: { kind: 'OBJECT'; name: 'TokenDayData'; ofType: null }
        }
        tokenDayDatas: {
          name: 'tokenDayDatas'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'TokenDayData'; ofType: null }
              }
            }
          }
        }
        tokenHourData: {
          name: 'tokenHourData'
          type: { kind: 'OBJECT'; name: 'TokenHourData'; ofType: null }
        }
        tokenHourDatas: {
          name: 'tokenHourDatas'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'TokenHourData'; ofType: null }
              }
            }
          }
        }
        tokens: {
          name: 'tokens'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Token'; ofType: null }
              }
            }
          }
        }
        transaction: {
          name: 'transaction'
          type: { kind: 'OBJECT'; name: 'Transaction'; ofType: null }
        }
        transactions: {
          name: 'transactions'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Transaction'; ofType: null }
              }
            }
          }
        }
        uniswapDayData: {
          name: 'uniswapDayData'
          type: { kind: 'OBJECT'; name: 'UniswapDayData'; ofType: null }
        }
        uniswapDayDatas: {
          name: 'uniswapDayDatas'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'UniswapDayData'; ofType: null }
              }
            }
          }
        }
      }
    }
    Swap: {
      kind: 'OBJECT'
      name: 'Swap'
      fields: {
        amount0: {
          name: 'amount0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        amount1: {
          name: 'amount1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        amountUSD: {
          name: 'amountUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        logIndex: {
          name: 'logIndex'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
        }
        origin: {
          name: 'origin'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        pool: {
          name: 'pool'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
          }
        }
        recipient: {
          name: 'recipient'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        sender: {
          name: 'sender'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        sqrtPriceX96: {
          name: 'sqrtPriceX96'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        tick: {
          name: 'tick'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        timestamp: {
          name: 'timestamp'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        token0: {
          name: 'token0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Token'; ofType: null }
          }
        }
        token1: {
          name: 'token1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Token'; ofType: null }
          }
        }
        transaction: {
          name: 'transaction'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Transaction'; ofType: null }
          }
        }
      }
    }
    Swap_filter: {
      kind: 'INPUT_OBJECT'
      name: 'Swap_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'transaction_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transaction_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'Transaction_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'timestamp'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'timestamp_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pool_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0_'
          type: { kind: 'INPUT_OBJECT'; name: 'Token_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1_'
          type: { kind: 'INPUT_OBJECT'; name: 'Token_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sender_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sender_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'recipient'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'recipient_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'recipient_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'recipient_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'recipient_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'recipient_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'recipient_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'recipient_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'recipient_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'recipient_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'origin_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'origin_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'origin_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amountUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amountUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amountUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sqrtPriceX96'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPriceX96_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPriceX96_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPriceX96_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPriceX96_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPriceX96_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sqrtPriceX96_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sqrtPriceX96_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tick'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tick_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'logIndex'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'logIndex_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'logIndex_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'INPUT_OBJECT'; name: 'Swap_filter'; ofType: null }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'INPUT_OBJECT'; name: 'Swap_filter'; ofType: null }
          }
          defaultValue: null
        },
      ]
    }
    Swap_orderBy: {
      name: 'Swap_orderBy'
      enumValues:
        | 'id'
        | 'transaction'
        | 'transaction__id'
        | 'transaction__blockNumber'
        | 'transaction__timestamp'
        | 'transaction__gasUsed'
        | 'transaction__gasPrice'
        | 'timestamp'
        | 'pool'
        | 'pool__id'
        | 'pool__createdAtTimestamp'
        | 'pool__createdAtBlockNumber'
        | 'pool__feeTier'
        | 'pool__liquidity'
        | 'pool__sqrtPrice'
        | 'pool__feeGrowthGlobal0X128'
        | 'pool__feeGrowthGlobal1X128'
        | 'pool__token0Price'
        | 'pool__token1Price'
        | 'pool__tick'
        | 'pool__observationIndex'
        | 'pool__volumeToken0'
        | 'pool__volumeToken1'
        | 'pool__volumeUSD'
        | 'pool__untrackedVolumeUSD'
        | 'pool__feesUSD'
        | 'pool__txCount'
        | 'pool__collectedFeesToken0'
        | 'pool__collectedFeesToken1'
        | 'pool__collectedFeesUSD'
        | 'pool__totalValueLockedToken0'
        | 'pool__totalValueLockedToken1'
        | 'pool__totalValueLockedETH'
        | 'pool__totalValueLockedUSD'
        | 'pool__totalValueLockedUSDUntracked'
        | 'pool__isProtocolFeeEnabled'
        | 'pool__liquidityProviderCount'
        | 'token0'
        | 'token0__id'
        | 'token0__symbol'
        | 'token0__name'
        | 'token0__decimals'
        | 'token0__totalSupply'
        | 'token0__volume'
        | 'token0__volumeUSD'
        | 'token0__untrackedVolumeUSD'
        | 'token0__feesUSD'
        | 'token0__txCount'
        | 'token0__poolCount'
        | 'token0__totalValueLocked'
        | 'token0__totalValueLockedUSD'
        | 'token0__totalValueLockedUSDUntracked'
        | 'token0__derivedETH'
        | 'token1'
        | 'token1__id'
        | 'token1__symbol'
        | 'token1__name'
        | 'token1__decimals'
        | 'token1__totalSupply'
        | 'token1__volume'
        | 'token1__volumeUSD'
        | 'token1__untrackedVolumeUSD'
        | 'token1__feesUSD'
        | 'token1__txCount'
        | 'token1__poolCount'
        | 'token1__totalValueLocked'
        | 'token1__totalValueLockedUSD'
        | 'token1__totalValueLockedUSDUntracked'
        | 'token1__derivedETH'
        | 'sender'
        | 'recipient'
        | 'origin'
        | 'amount0'
        | 'amount1'
        | 'amountUSD'
        | 'sqrtPriceX96'
        | 'tick'
        | 'logIndex'
    }
    Tick: {
      kind: 'OBJECT'
      name: 'Tick'
      fields: {
        collectedFeesToken0: {
          name: 'collectedFeesToken0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        collectedFeesToken1: {
          name: 'collectedFeesToken1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        collectedFeesUSD: {
          name: 'collectedFeesUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        createdAtBlockNumber: {
          name: 'createdAtBlockNumber'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        createdAtTimestamp: {
          name: 'createdAtTimestamp'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        feeGrowthOutside0X128: {
          name: 'feeGrowthOutside0X128'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        feeGrowthOutside1X128: {
          name: 'feeGrowthOutside1X128'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        feesUSD: {
          name: 'feesUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        liquidityGross: {
          name: 'liquidityGross'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        liquidityNet: {
          name: 'liquidityNet'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        liquidityProviderCount: {
          name: 'liquidityProviderCount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        pool: {
          name: 'pool'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
          }
        }
        poolAddress: {
          name: 'poolAddress'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
        }
        price0: {
          name: 'price0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        price1: {
          name: 'price1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        tickIdx: {
          name: 'tickIdx'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        untrackedVolumeUSD: {
          name: 'untrackedVolumeUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volumeToken0: {
          name: 'volumeToken0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volumeToken1: {
          name: 'volumeToken1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volumeUSD: {
          name: 'volumeUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
      }
    }
    TickDayData: {
      kind: 'OBJECT'
      name: 'TickDayData'
      fields: {
        date: {
          name: 'date'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          }
        }
        feeGrowthOutside0X128: {
          name: 'feeGrowthOutside0X128'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        feeGrowthOutside1X128: {
          name: 'feeGrowthOutside1X128'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        feesUSD: {
          name: 'feesUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        liquidityGross: {
          name: 'liquidityGross'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        liquidityNet: {
          name: 'liquidityNet'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        pool: {
          name: 'pool'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
          }
        }
        tick: {
          name: 'tick'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Tick'; ofType: null }
          }
        }
        volumeToken0: {
          name: 'volumeToken0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volumeToken1: {
          name: 'volumeToken1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volumeUSD: {
          name: 'volumeUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
      }
    }
    TickDayData_filter: {
      kind: 'INPUT_OBJECT'
      name: 'TickDayData_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'date'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_not'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_gt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_lt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_gte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_lte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'date_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pool_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tick_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tick_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_'
          type: { kind: 'INPUT_OBJECT'; name: 'Tick_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidityGross_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidityNet'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityNet_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityNet_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityNet_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityNet_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityNet_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityNet_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidityNet_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feesUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feesUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside0X128'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside0X128_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside0X128_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside0X128_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside0X128_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside0X128_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside0X128_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside0X128_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside1X128'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside1X128_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside1X128_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside1X128_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside1X128_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside1X128_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside1X128_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside1X128_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'TickDayData_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'TickDayData_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    TickDayData_orderBy: {
      name: 'TickDayData_orderBy'
      enumValues:
        | 'id'
        | 'date'
        | 'pool'
        | 'pool__id'
        | 'pool__createdAtTimestamp'
        | 'pool__createdAtBlockNumber'
        | 'pool__feeTier'
        | 'pool__liquidity'
        | 'pool__sqrtPrice'
        | 'pool__feeGrowthGlobal0X128'
        | 'pool__feeGrowthGlobal1X128'
        | 'pool__token0Price'
        | 'pool__token1Price'
        | 'pool__tick'
        | 'pool__observationIndex'
        | 'pool__volumeToken0'
        | 'pool__volumeToken1'
        | 'pool__volumeUSD'
        | 'pool__untrackedVolumeUSD'
        | 'pool__feesUSD'
        | 'pool__txCount'
        | 'pool__collectedFeesToken0'
        | 'pool__collectedFeesToken1'
        | 'pool__collectedFeesUSD'
        | 'pool__totalValueLockedToken0'
        | 'pool__totalValueLockedToken1'
        | 'pool__totalValueLockedETH'
        | 'pool__totalValueLockedUSD'
        | 'pool__totalValueLockedUSDUntracked'
        | 'pool__isProtocolFeeEnabled'
        | 'pool__liquidityProviderCount'
        | 'tick'
        | 'tick__id'
        | 'tick__poolAddress'
        | 'tick__tickIdx'
        | 'tick__liquidityGross'
        | 'tick__liquidityNet'
        | 'tick__price0'
        | 'tick__price1'
        | 'tick__volumeToken0'
        | 'tick__volumeToken1'
        | 'tick__volumeUSD'
        | 'tick__untrackedVolumeUSD'
        | 'tick__feesUSD'
        | 'tick__collectedFeesToken0'
        | 'tick__collectedFeesToken1'
        | 'tick__collectedFeesUSD'
        | 'tick__createdAtTimestamp'
        | 'tick__createdAtBlockNumber'
        | 'tick__liquidityProviderCount'
        | 'tick__feeGrowthOutside0X128'
        | 'tick__feeGrowthOutside1X128'
        | 'liquidityGross'
        | 'liquidityNet'
        | 'volumeToken0'
        | 'volumeToken1'
        | 'volumeUSD'
        | 'feesUSD'
        | 'feeGrowthOutside0X128'
        | 'feeGrowthOutside1X128'
    }
    TickHourData: {
      kind: 'OBJECT'
      name: 'TickHourData'
      fields: {
        feesUSD: {
          name: 'feesUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        liquidityGross: {
          name: 'liquidityGross'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        liquidityNet: {
          name: 'liquidityNet'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        periodStartUnix: {
          name: 'periodStartUnix'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          }
        }
        pool: {
          name: 'pool'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
          }
        }
        tick: {
          name: 'tick'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Tick'; ofType: null }
          }
        }
        volumeToken0: {
          name: 'volumeToken0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volumeToken1: {
          name: 'volumeToken1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volumeUSD: {
          name: 'volumeUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
      }
    }
    TickHourData_filter: {
      kind: 'INPUT_OBJECT'
      name: 'TickHourData_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'periodStartUnix'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_not'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_gt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_lt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_gte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_lte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pool_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tick_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tick_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tick_'
          type: { kind: 'INPUT_OBJECT'; name: 'Tick_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidityGross_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidityNet'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityNet_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityNet_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityNet_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityNet_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityNet_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityNet_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidityNet_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feesUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feesUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'TickHourData_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'TickHourData_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    TickHourData_orderBy: {
      name: 'TickHourData_orderBy'
      enumValues:
        | 'id'
        | 'periodStartUnix'
        | 'pool'
        | 'pool__id'
        | 'pool__createdAtTimestamp'
        | 'pool__createdAtBlockNumber'
        | 'pool__feeTier'
        | 'pool__liquidity'
        | 'pool__sqrtPrice'
        | 'pool__feeGrowthGlobal0X128'
        | 'pool__feeGrowthGlobal1X128'
        | 'pool__token0Price'
        | 'pool__token1Price'
        | 'pool__tick'
        | 'pool__observationIndex'
        | 'pool__volumeToken0'
        | 'pool__volumeToken1'
        | 'pool__volumeUSD'
        | 'pool__untrackedVolumeUSD'
        | 'pool__feesUSD'
        | 'pool__txCount'
        | 'pool__collectedFeesToken0'
        | 'pool__collectedFeesToken1'
        | 'pool__collectedFeesUSD'
        | 'pool__totalValueLockedToken0'
        | 'pool__totalValueLockedToken1'
        | 'pool__totalValueLockedETH'
        | 'pool__totalValueLockedUSD'
        | 'pool__totalValueLockedUSDUntracked'
        | 'pool__isProtocolFeeEnabled'
        | 'pool__liquidityProviderCount'
        | 'tick'
        | 'tick__id'
        | 'tick__poolAddress'
        | 'tick__tickIdx'
        | 'tick__liquidityGross'
        | 'tick__liquidityNet'
        | 'tick__price0'
        | 'tick__price1'
        | 'tick__volumeToken0'
        | 'tick__volumeToken1'
        | 'tick__volumeUSD'
        | 'tick__untrackedVolumeUSD'
        | 'tick__feesUSD'
        | 'tick__collectedFeesToken0'
        | 'tick__collectedFeesToken1'
        | 'tick__collectedFeesUSD'
        | 'tick__createdAtTimestamp'
        | 'tick__createdAtBlockNumber'
        | 'tick__liquidityProviderCount'
        | 'tick__feeGrowthOutside0X128'
        | 'tick__feeGrowthOutside1X128'
        | 'liquidityGross'
        | 'liquidityNet'
        | 'volumeToken0'
        | 'volumeToken1'
        | 'volumeUSD'
        | 'feesUSD'
    }
    Tick_filter: {
      kind: 'INPUT_OBJECT'
      name: 'Tick_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'poolAddress'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolAddress_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolAddress_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolAddress_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolAddress_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolAddress_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolAddress_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'poolAddress_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'poolAddress_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolAddress_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolAddress_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolAddress_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolAddress_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolAddress_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolAddress_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolAddress_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolAddress_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolAddress_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolAddress_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolAddress_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickIdx'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickIdx_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickIdx_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickIdx_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickIdx_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickIdx_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tickIdx_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tickIdx_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pool_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pool_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pool_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityGross_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidityGross_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidityNet'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityNet_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityNet_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityNet_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityNet_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityNet_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityNet_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidityNet_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'price0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'price0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'price0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'price0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'price0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'price0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'price0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'price0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'price1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'price1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'price1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'price1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'price1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'price1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'price1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'price1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeToken1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeToken1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feesUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feesUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedFeesToken1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedFeesUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collectedFeesUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'collectedFeesUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'createdAtTimestamp'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtTimestamp_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtTimestamp_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtTimestamp_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtTimestamp_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtTimestamp_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtTimestamp_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'createdAtTimestamp_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'createdAtBlockNumber'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlockNumber_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlockNumber_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlockNumber_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlockNumber_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlockNumber_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlockNumber_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'createdAtBlockNumber_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidityProviderCount'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityProviderCount_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityProviderCount_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityProviderCount_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityProviderCount_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityProviderCount_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityProviderCount_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidityProviderCount_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside0X128'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside0X128_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside0X128_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside0X128_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside0X128_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside0X128_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside0X128_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside0X128_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside1X128'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside1X128_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside1X128_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside1X128_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside1X128_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside1X128_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside1X128_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeGrowthOutside1X128_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'INPUT_OBJECT'; name: 'Tick_filter'; ofType: null }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'INPUT_OBJECT'; name: 'Tick_filter'; ofType: null }
          }
          defaultValue: null
        },
      ]
    }
    Tick_orderBy: {
      name: 'Tick_orderBy'
      enumValues:
        | 'id'
        | 'poolAddress'
        | 'tickIdx'
        | 'pool'
        | 'pool__id'
        | 'pool__createdAtTimestamp'
        | 'pool__createdAtBlockNumber'
        | 'pool__feeTier'
        | 'pool__liquidity'
        | 'pool__sqrtPrice'
        | 'pool__feeGrowthGlobal0X128'
        | 'pool__feeGrowthGlobal1X128'
        | 'pool__token0Price'
        | 'pool__token1Price'
        | 'pool__tick'
        | 'pool__observationIndex'
        | 'pool__volumeToken0'
        | 'pool__volumeToken1'
        | 'pool__volumeUSD'
        | 'pool__untrackedVolumeUSD'
        | 'pool__feesUSD'
        | 'pool__txCount'
        | 'pool__collectedFeesToken0'
        | 'pool__collectedFeesToken1'
        | 'pool__collectedFeesUSD'
        | 'pool__totalValueLockedToken0'
        | 'pool__totalValueLockedToken1'
        | 'pool__totalValueLockedETH'
        | 'pool__totalValueLockedUSD'
        | 'pool__totalValueLockedUSDUntracked'
        | 'pool__isProtocolFeeEnabled'
        | 'pool__liquidityProviderCount'
        | 'liquidityGross'
        | 'liquidityNet'
        | 'price0'
        | 'price1'
        | 'volumeToken0'
        | 'volumeToken1'
        | 'volumeUSD'
        | 'untrackedVolumeUSD'
        | 'feesUSD'
        | 'collectedFeesToken0'
        | 'collectedFeesToken1'
        | 'collectedFeesUSD'
        | 'createdAtTimestamp'
        | 'createdAtBlockNumber'
        | 'liquidityProviderCount'
        | 'feeGrowthOutside0X128'
        | 'feeGrowthOutside1X128'
    }
    Timestamp: unknown
    Token: {
      kind: 'OBJECT'
      name: 'Token'
      fields: {
        decimals: {
          name: 'decimals'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        derivedETH: {
          name: 'derivedETH'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        feesUSD: {
          name: 'feesUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        name: {
          name: 'name'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
          }
        }
        poolCount: {
          name: 'poolCount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        symbol: {
          name: 'symbol'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
          }
        }
        tokenDayData: {
          name: 'tokenDayData'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'TokenDayData'; ofType: null }
              }
            }
          }
        }
        totalSupply: {
          name: 'totalSupply'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        totalValueLocked: {
          name: 'totalValueLocked'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalValueLockedUSD: {
          name: 'totalValueLockedUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalValueLockedUSDUntracked: {
          name: 'totalValueLockedUSDUntracked'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        txCount: {
          name: 'txCount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        untrackedVolumeUSD: {
          name: 'untrackedVolumeUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volume: {
          name: 'volume'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volumeUSD: {
          name: 'volumeUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        whitelistPools: {
          name: 'whitelistPools'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
              }
            }
          }
        }
      }
    }
    TokenDayData: {
      kind: 'OBJECT'
      name: 'TokenDayData'
      fields: {
        close: {
          name: 'close'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        date: {
          name: 'date'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          }
        }
        feesUSD: {
          name: 'feesUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        high: {
          name: 'high'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        low: {
          name: 'low'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        open: {
          name: 'open'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        priceUSD: {
          name: 'priceUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        token: {
          name: 'token'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Token'; ofType: null }
          }
        }
        totalValueLocked: {
          name: 'totalValueLocked'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalValueLockedUSD: {
          name: 'totalValueLockedUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        untrackedVolumeUSD: {
          name: 'untrackedVolumeUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volume: {
          name: 'volume'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volumeUSD: {
          name: 'volumeUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
      }
    }
    TokenDayData_filter: {
      kind: 'INPUT_OBJECT'
      name: 'TokenDayData_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'date'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_not'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_gt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_lt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_gte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_lte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'date_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_'
          type: { kind: 'INPUT_OBJECT'; name: 'Token_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volume'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volume_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volume_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volume_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volume_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volume_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volume_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volume_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLocked'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'priceUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'priceUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'priceUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'priceUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'priceUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'priceUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'priceUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'priceUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feesUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feesUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'open'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'open_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'high'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'high_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'low'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'low_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'close'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'close_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'TokenDayData_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'TokenDayData_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    TokenDayData_orderBy: {
      name: 'TokenDayData_orderBy'
      enumValues:
        | 'id'
        | 'date'
        | 'token'
        | 'token__id'
        | 'token__symbol'
        | 'token__name'
        | 'token__decimals'
        | 'token__totalSupply'
        | 'token__volume'
        | 'token__volumeUSD'
        | 'token__untrackedVolumeUSD'
        | 'token__feesUSD'
        | 'token__txCount'
        | 'token__poolCount'
        | 'token__totalValueLocked'
        | 'token__totalValueLockedUSD'
        | 'token__totalValueLockedUSDUntracked'
        | 'token__derivedETH'
        | 'volume'
        | 'volumeUSD'
        | 'untrackedVolumeUSD'
        | 'totalValueLocked'
        | 'totalValueLockedUSD'
        | 'priceUSD'
        | 'feesUSD'
        | 'open'
        | 'high'
        | 'low'
        | 'close'
    }
    TokenHourData: {
      kind: 'OBJECT'
      name: 'TokenHourData'
      fields: {
        close: {
          name: 'close'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        feesUSD: {
          name: 'feesUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        high: {
          name: 'high'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        low: {
          name: 'low'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        open: {
          name: 'open'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        periodStartUnix: {
          name: 'periodStartUnix'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          }
        }
        priceUSD: {
          name: 'priceUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        token: {
          name: 'token'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Token'; ofType: null }
          }
        }
        totalValueLocked: {
          name: 'totalValueLocked'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalValueLockedUSD: {
          name: 'totalValueLockedUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        untrackedVolumeUSD: {
          name: 'untrackedVolumeUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volume: {
          name: 'volume'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volumeUSD: {
          name: 'volumeUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
      }
    }
    TokenHourData_filter: {
      kind: 'INPUT_OBJECT'
      name: 'TokenHourData_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'periodStartUnix'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_not'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_gt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_lt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_gte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_lte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'periodStartUnix_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token_'
          type: { kind: 'INPUT_OBJECT'; name: 'Token_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volume'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volume_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volume_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volume_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volume_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volume_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volume_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volume_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLocked'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'priceUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'priceUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'priceUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'priceUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'priceUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'priceUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'priceUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'priceUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feesUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feesUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'open'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'open_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'open_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'high'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'high_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'high_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'low'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'low_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'low_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'close'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'close_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'close_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'TokenHourData_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'TokenHourData_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    TokenHourData_orderBy: {
      name: 'TokenHourData_orderBy'
      enumValues:
        | 'id'
        | 'periodStartUnix'
        | 'token'
        | 'token__id'
        | 'token__symbol'
        | 'token__name'
        | 'token__decimals'
        | 'token__totalSupply'
        | 'token__volume'
        | 'token__volumeUSD'
        | 'token__untrackedVolumeUSD'
        | 'token__feesUSD'
        | 'token__txCount'
        | 'token__poolCount'
        | 'token__totalValueLocked'
        | 'token__totalValueLockedUSD'
        | 'token__totalValueLockedUSDUntracked'
        | 'token__derivedETH'
        | 'volume'
        | 'volumeUSD'
        | 'untrackedVolumeUSD'
        | 'totalValueLocked'
        | 'totalValueLockedUSD'
        | 'priceUSD'
        | 'feesUSD'
        | 'open'
        | 'high'
        | 'low'
        | 'close'
    }
    Token_filter: {
      kind: 'INPUT_OBJECT'
      name: 'Token_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'symbol'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'symbol_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'symbol_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'symbol_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'symbol_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'symbol_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'symbol_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'symbol_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'symbol_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'symbol_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'symbol_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'symbol_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'symbol_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'symbol_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'symbol_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'symbol_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'symbol_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'symbol_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'symbol_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'symbol_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'name'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'name_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'name_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'name_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'name_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'name_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'name_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'name_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'name_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'name_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'name_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'name_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'name_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'name_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'name_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'name_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'name_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'name_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'name_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'name_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'decimals'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'decimals_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'decimals_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'decimals_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'decimals_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'decimals_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'decimals_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'decimals_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalSupply'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalSupply_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volume'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volume_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volume_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volume_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volume_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volume_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volume_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volume_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'untrackedVolumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feesUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feesUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'txCount'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'txCount_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'poolCount'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolCount_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolCount_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolCount_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolCount_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolCount_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'poolCount_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'poolCount_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLocked'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLocked_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalValueLockedUSDUntracked_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'derivedETH'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'derivedETH_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'derivedETH_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'derivedETH_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'derivedETH_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'derivedETH_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'derivedETH_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'derivedETH_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'whitelistPools'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'whitelistPools_not'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'whitelistPools_contains'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'whitelistPools_contains_nocase'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'whitelistPools_not_contains'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'whitelistPools_not_contains_nocase'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'whitelistPools_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pool_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tokenDayData_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'TokenDayData_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'INPUT_OBJECT'; name: 'Token_filter'; ofType: null }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'INPUT_OBJECT'; name: 'Token_filter'; ofType: null }
          }
          defaultValue: null
        },
      ]
    }
    Token_orderBy: {
      name: 'Token_orderBy'
      enumValues:
        | 'id'
        | 'symbol'
        | 'name'
        | 'decimals'
        | 'totalSupply'
        | 'volume'
        | 'volumeUSD'
        | 'untrackedVolumeUSD'
        | 'feesUSD'
        | 'txCount'
        | 'poolCount'
        | 'totalValueLocked'
        | 'totalValueLockedUSD'
        | 'totalValueLockedUSDUntracked'
        | 'derivedETH'
        | 'whitelistPools'
        | 'tokenDayData'
    }
    Transaction: {
      kind: 'OBJECT'
      name: 'Transaction'
      fields: {
        blockNumber: {
          name: 'blockNumber'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        burns: {
          name: 'burns'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Burn'; ofType: null }
              }
            }
          }
        }
        collects: {
          name: 'collects'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Collect'; ofType: null }
              }
            }
          }
        }
        flashed: {
          name: 'flashed'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Flash'; ofType: null }
              }
            }
          }
        }
        gasPrice: {
          name: 'gasPrice'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        gasUsed: {
          name: 'gasUsed'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        mints: {
          name: 'mints'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Mint'; ofType: null }
              }
            }
          }
        }
        swaps: {
          name: 'swaps'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Swap'; ofType: null }
              }
            }
          }
        }
        timestamp: {
          name: 'timestamp'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
      }
    }
    Transaction_filter: {
      kind: 'INPUT_OBJECT'
      name: 'Transaction_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'blockNumber'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'blockNumber_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'blockNumber_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'blockNumber_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'blockNumber_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'blockNumber_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'blockNumber_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'blockNumber_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'timestamp'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'timestamp_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'gasUsed'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'gasUsed_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'gasUsed_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'gasUsed_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'gasUsed_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'gasUsed_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'gasUsed_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'gasUsed_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'gasPrice'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'gasPrice_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'gasPrice_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'gasPrice_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'gasPrice_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'gasPrice_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'gasPrice_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'gasPrice_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'mints_'
          type: { kind: 'INPUT_OBJECT'; name: 'Mint_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'burns_'
          type: { kind: 'INPUT_OBJECT'; name: 'Burn_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'swaps_'
          type: { kind: 'INPUT_OBJECT'; name: 'Swap_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'flashed_'
          type: { kind: 'INPUT_OBJECT'; name: 'Flash_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'collects_'
          type: { kind: 'INPUT_OBJECT'; name: 'Collect_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'Transaction_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'Transaction_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    Transaction_orderBy: {
      name: 'Transaction_orderBy'
      enumValues:
        | 'id'
        | 'blockNumber'
        | 'timestamp'
        | 'gasUsed'
        | 'gasPrice'
        | 'mints'
        | 'burns'
        | 'swaps'
        | 'flashed'
        | 'collects'
    }
    UniswapDayData: {
      kind: 'OBJECT'
      name: 'UniswapDayData'
      fields: {
        date: {
          name: 'date'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          }
        }
        feesUSD: {
          name: 'feesUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        tvlUSD: {
          name: 'tvlUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        txCount: {
          name: 'txCount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        volumeETH: {
          name: 'volumeETH'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volumeUSD: {
          name: 'volumeUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        volumeUSDUntracked: {
          name: 'volumeUSDUntracked'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
      }
    }
    UniswapDayData_filter: {
      kind: 'INPUT_OBJECT'
      name: 'UniswapDayData_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'date'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_not'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_gt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_lt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_gte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_lte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'date_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'date_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeETH'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeETH_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeETH_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeETH_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeETH_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeETH_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeETH_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeETH_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSDUntracked'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSDUntracked_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSDUntracked_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSDUntracked_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSDUntracked_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSDUntracked_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'volumeUSDUntracked_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'volumeUSDUntracked_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feesUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feesUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feesUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'txCount'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'txCount_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'txCount_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tvlUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tvlUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tvlUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tvlUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tvlUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tvlUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tvlUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tvlUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: '_change_block'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'BlockChangedFilter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'and'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'UniswapDayData_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'INPUT_OBJECT'
              name: 'UniswapDayData_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    UniswapDayData_orderBy: {
      name: 'UniswapDayData_orderBy'
      enumValues:
        | 'id'
        | 'date'
        | 'volumeETH'
        | 'volumeUSD'
        | 'volumeUSDUntracked'
        | 'feesUSD'
        | 'txCount'
        | 'tvlUSD'
    }
    _Block_: {
      kind: 'OBJECT'
      name: '_Block_'
      fields: {
        hash: {
          name: 'hash'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
        }
        number: {
          name: 'number'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          }
        }
        parentHash: {
          name: 'parentHash'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
        }
        timestamp: {
          name: 'timestamp'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
        }
      }
    }
    _Meta_: {
      kind: 'OBJECT'
      name: '_Meta_'
      fields: {
        block: {
          name: 'block'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: '_Block_'; ofType: null }
          }
        }
        deployment: {
          name: 'deployment'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
          }
        }
        hasIndexingErrors: {
          name: 'hasIndexingErrors'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null }
          }
        }
      }
    }
    _SubgraphErrorPolicy_: {
      name: '_SubgraphErrorPolicy_'
      enumValues: 'allow' | 'deny'
    }
  }
}

import * as gqlTada from 'gql.tada'
