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
  name: 'sushi-v2'
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
        ethPrice: {
          name: 'ethPrice'
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
          name: 'ethPrice'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'ethPrice_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'ethPrice_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'ethPrice_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'ethPrice_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'ethPrice_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'ethPrice_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'ethPrice_not_in'
          type: {
            kind: 'LIST'
            name: never
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
    Bundle_orderBy: { name: 'Bundle_orderBy'; enumValues: 'id' | 'ethPrice' }
    Burn: {
      kind: 'OBJECT'
      name: 'Burn'
      fields: {
        amount0: {
          name: 'amount0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
        }
        amount1: {
          name: 'amount1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
        }
        amountUSD: {
          name: 'amountUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
        }
        feeLiquidity: {
          name: 'feeLiquidity'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
        }
        feeTo: {
          name: 'feeTo'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        liquidity: {
          name: 'liquidity'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        logIndex: {
          name: 'logIndex'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
        }
        needsComplete: {
          name: 'needsComplete'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null }
          }
        }
        pair: {
          name: 'pair'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pair'; ofType: null }
          }
        }
        sender: {
          name: 'sender'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
        }
        timestamp: {
          name: 'timestamp'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        to: {
          name: 'to'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
          name: 'pair'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_in'
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
          name: 'pair_not_in'
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
          name: 'pair_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pair_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
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
          name: 'to'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_in'
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
          name: 'to_not_in'
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
          name: 'to_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
          name: 'needsComplete'
          type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null }
          defaultValue: null
        },
        {
          name: 'needsComplete_not'
          type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null }
          defaultValue: null
        },
        {
          name: 'needsComplete_in'
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
          name: 'needsComplete_not_in'
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
          name: 'feeTo'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTo_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTo_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTo_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTo_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTo_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTo_in'
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
          name: 'feeTo_not_in'
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
          name: 'feeTo_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTo_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeLiquidity'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeLiquidity_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeLiquidity_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeLiquidity_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeLiquidity_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeLiquidity_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeLiquidity_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeLiquidity_not_in'
          type: {
            kind: 'LIST'
            name: never
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
        | 'timestamp'
        | 'pair'
        | 'pair__id'
        | 'pair__reserve0'
        | 'pair__reserve1'
        | 'pair__totalSupply'
        | 'pair__reserveETH'
        | 'pair__reserveUSD'
        | 'pair__trackedReserveETH'
        | 'pair__token0Price'
        | 'pair__token1Price'
        | 'pair__volumeToken0'
        | 'pair__volumeToken1'
        | 'pair__volumeUSD'
        | 'pair__untrackedVolumeUSD'
        | 'pair__txCount'
        | 'pair__createdAtTimestamp'
        | 'pair__createdAtBlockNumber'
        | 'pair__liquidityProviderCount'
        | 'liquidity'
        | 'sender'
        | 'amount0'
        | 'amount1'
        | 'to'
        | 'logIndex'
        | 'amountUSD'
        | 'needsComplete'
        | 'feeTo'
        | 'feeLiquidity'
    }
    Bytes: unknown
    ID: unknown
    Int: unknown
    Int8: unknown
    LiquidityPosition: {
      kind: 'OBJECT'
      name: 'LiquidityPosition'
      fields: {
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        liquidityTokenBalance: {
          name: 'liquidityTokenBalance'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        pair: {
          name: 'pair'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pair'; ofType: null }
          }
        }
        user: {
          name: 'user'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'User'; ofType: null }
          }
        }
      }
    }
    LiquidityPositionSnapshot: {
      kind: 'OBJECT'
      name: 'LiquidityPositionSnapshot'
      fields: {
        block: {
          name: 'block'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        liquidityPosition: {
          name: 'liquidityPosition'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'LiquidityPosition'; ofType: null }
          }
        }
        liquidityTokenBalance: {
          name: 'liquidityTokenBalance'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        liquidityTokenTotalSupply: {
          name: 'liquidityTokenTotalSupply'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        pair: {
          name: 'pair'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pair'; ofType: null }
          }
        }
        reserve0: {
          name: 'reserve0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        reserve1: {
          name: 'reserve1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        reserveUSD: {
          name: 'reserveUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        timestamp: {
          name: 'timestamp'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          }
        }
        token0PriceUSD: {
          name: 'token0PriceUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        token1PriceUSD: {
          name: 'token1PriceUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        user: {
          name: 'user'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'User'; ofType: null }
          }
        }
      }
    }
    LiquidityPositionSnapshot_filter: {
      kind: 'INPUT_OBJECT'
      name: 'LiquidityPositionSnapshot_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityPosition'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityPosition_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityPosition_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityPosition_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityPosition_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityPosition_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityPosition_in'
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
          name: 'liquidityPosition_not_in'
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
          name: 'liquidityPosition_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityPosition_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityPosition_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityPosition_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityPosition_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityPosition_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityPosition_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityPosition_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityPosition_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityPosition_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityPosition_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityPosition_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityPosition_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'LiquidityPosition_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'timestamp'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_not'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_gt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_lt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_gte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'timestamp_lte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'block'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_not'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_gt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_lt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_gte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_lte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_in'
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
          name: 'block_not_in'
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
          name: 'user'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_in'
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
          name: 'user_not_in'
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
          name: 'user_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_'
          type: { kind: 'INPUT_OBJECT'; name: 'User_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_in'
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
          name: 'pair_not_in'
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
          name: 'pair_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pair_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0PriceUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0PriceUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0PriceUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0PriceUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0PriceUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0PriceUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token0PriceUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token0PriceUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1PriceUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1PriceUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1PriceUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1PriceUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1PriceUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1PriceUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'token1PriceUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'token1PriceUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserve0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserve0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserve1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserve1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserveUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserveUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidityTokenTotalSupply'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityTokenTotalSupply_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityTokenTotalSupply_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityTokenTotalSupply_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityTokenTotalSupply_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityTokenTotalSupply_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityTokenTotalSupply_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidityTokenTotalSupply_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidityTokenBalance'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityTokenBalance_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityTokenBalance_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityTokenBalance_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityTokenBalance_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityTokenBalance_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityTokenBalance_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidityTokenBalance_not_in'
          type: {
            kind: 'LIST'
            name: never
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
              name: 'LiquidityPositionSnapshot_filter'
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
              name: 'LiquidityPositionSnapshot_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    LiquidityPositionSnapshot_orderBy: {
      name: 'LiquidityPositionSnapshot_orderBy'
      enumValues:
        | 'id'
        | 'liquidityPosition'
        | 'liquidityPosition__id'
        | 'liquidityPosition__liquidityTokenBalance'
        | 'timestamp'
        | 'block'
        | 'user'
        | 'user__id'
        | 'user__usdSwapped'
        | 'pair'
        | 'pair__id'
        | 'pair__reserve0'
        | 'pair__reserve1'
        | 'pair__totalSupply'
        | 'pair__reserveETH'
        | 'pair__reserveUSD'
        | 'pair__trackedReserveETH'
        | 'pair__token0Price'
        | 'pair__token1Price'
        | 'pair__volumeToken0'
        | 'pair__volumeToken1'
        | 'pair__volumeUSD'
        | 'pair__untrackedVolumeUSD'
        | 'pair__txCount'
        | 'pair__createdAtTimestamp'
        | 'pair__createdAtBlockNumber'
        | 'pair__liquidityProviderCount'
        | 'token0PriceUSD'
        | 'token1PriceUSD'
        | 'reserve0'
        | 'reserve1'
        | 'reserveUSD'
        | 'liquidityTokenTotalSupply'
        | 'liquidityTokenBalance'
    }
    LiquidityPosition_filter: {
      kind: 'INPUT_OBJECT'
      name: 'LiquidityPosition_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_in'
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
          name: 'user_not_in'
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
          name: 'user_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'user_'
          type: { kind: 'INPUT_OBJECT'; name: 'User_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_in'
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
          name: 'pair_not_in'
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
          name: 'pair_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pair_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityTokenBalance'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityTokenBalance_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityTokenBalance_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityTokenBalance_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityTokenBalance_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityTokenBalance_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityTokenBalance_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'liquidityTokenBalance_not_in'
          type: {
            kind: 'LIST'
            name: never
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
              name: 'LiquidityPosition_filter'
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
              name: 'LiquidityPosition_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    LiquidityPosition_orderBy: {
      name: 'LiquidityPosition_orderBy'
      enumValues:
        | 'id'
        | 'user'
        | 'user__id'
        | 'user__usdSwapped'
        | 'pair'
        | 'pair__id'
        | 'pair__reserve0'
        | 'pair__reserve1'
        | 'pair__totalSupply'
        | 'pair__reserveETH'
        | 'pair__reserveUSD'
        | 'pair__trackedReserveETH'
        | 'pair__token0Price'
        | 'pair__token1Price'
        | 'pair__volumeToken0'
        | 'pair__volumeToken1'
        | 'pair__volumeUSD'
        | 'pair__untrackedVolumeUSD'
        | 'pair__txCount'
        | 'pair__createdAtTimestamp'
        | 'pair__createdAtBlockNumber'
        | 'pair__liquidityProviderCount'
        | 'liquidityTokenBalance'
    }
    Mint: {
      kind: 'OBJECT'
      name: 'Mint'
      fields: {
        amount0: {
          name: 'amount0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
        }
        amount1: {
          name: 'amount1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
        }
        amountUSD: {
          name: 'amountUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
        }
        feeLiquidity: {
          name: 'feeLiquidity'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
        }
        feeTo: {
          name: 'feeTo'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        liquidity: {
          name: 'liquidity'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        logIndex: {
          name: 'logIndex'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
        }
        pair: {
          name: 'pair'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pair'; ofType: null }
          }
        }
        sender: {
          name: 'sender'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
        }
        timestamp: {
          name: 'timestamp'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        to: {
          name: 'to'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
          name: 'pair'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_in'
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
          name: 'pair_not_in'
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
          name: 'pair_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pair_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_in'
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
          name: 'to_not_in'
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
          name: 'to_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidity_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
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
          name: 'feeTo'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTo_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTo_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTo_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTo_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTo_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTo_in'
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
          name: 'feeTo_not_in'
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
          name: 'feeTo_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeTo_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeLiquidity'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeLiquidity_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeLiquidity_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeLiquidity_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeLiquidity_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeLiquidity_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'feeLiquidity_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'feeLiquidity_not_in'
          type: {
            kind: 'LIST'
            name: never
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
        | 'timestamp'
        | 'pair'
        | 'pair__id'
        | 'pair__reserve0'
        | 'pair__reserve1'
        | 'pair__totalSupply'
        | 'pair__reserveETH'
        | 'pair__reserveUSD'
        | 'pair__trackedReserveETH'
        | 'pair__token0Price'
        | 'pair__token1Price'
        | 'pair__volumeToken0'
        | 'pair__volumeToken1'
        | 'pair__volumeUSD'
        | 'pair__untrackedVolumeUSD'
        | 'pair__txCount'
        | 'pair__createdAtTimestamp'
        | 'pair__createdAtBlockNumber'
        | 'pair__liquidityProviderCount'
        | 'to'
        | 'liquidity'
        | 'sender'
        | 'amount0'
        | 'amount1'
        | 'logIndex'
        | 'amountUSD'
        | 'feeTo'
        | 'feeLiquidity'
    }
    OrderDirection: { name: 'OrderDirection'; enumValues: 'asc' | 'desc' }
    Pair: {
      kind: 'OBJECT'
      name: 'Pair'
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
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        liquidityPositionSnapshots: {
          name: 'liquidityPositionSnapshots'
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
                  name: 'LiquidityPositionSnapshot'
                  ofType: null
                }
              }
            }
          }
        }
        liquidityPositions: {
          name: 'liquidityPositions'
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
                  name: 'LiquidityPosition'
                  ofType: null
                }
              }
            }
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
        pairHourData: {
          name: 'pairHourData'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'PairHourData'; ofType: null }
              }
            }
          }
        }
        reserve0: {
          name: 'reserve0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        reserve1: {
          name: 'reserve1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        reserveETH: {
          name: 'reserveETH'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        reserveUSD: {
          name: 'reserveUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
        totalSupply: {
          name: 'totalSupply'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        trackedReserveETH: {
          name: 'trackedReserveETH'
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
    PairDayData: {
      kind: 'OBJECT'
      name: 'PairDayData'
      fields: {
        dailyTxns: {
          name: 'dailyTxns'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        dailyVolumeToken0: {
          name: 'dailyVolumeToken0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        dailyVolumeToken1: {
          name: 'dailyVolumeToken1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        dailyVolumeUSD: {
          name: 'dailyVolumeUSD'
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
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        pairAddress: {
          name: 'pairAddress'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        reserve0: {
          name: 'reserve0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        reserve1: {
          name: 'reserve1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        reserveUSD: {
          name: 'reserveUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
        totalSupply: {
          name: 'totalSupply'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
        }
      }
    }
    PairDayData_filter: {
      kind: 'INPUT_OBJECT'
      name: 'PairDayData_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
          name: 'pairAddress'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pairAddress_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pairAddress_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pairAddress_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pairAddress_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pairAddress_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pairAddress_in'
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
          name: 'pairAddress_not_in'
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
          name: 'pairAddress_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pairAddress_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
          name: 'reserve0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserve0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserve1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserve1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalSupply'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserveUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserveUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'dailyTxns'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyTxns_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyTxns_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyTxns_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyTxns_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyTxns_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyTxns_in'
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
          name: 'dailyTxns_not_in'
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
              name: 'PairDayData_filter'
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
              name: 'PairDayData_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    PairDayData_orderBy: {
      name: 'PairDayData_orderBy'
      enumValues:
        | 'id'
        | 'date'
        | 'pairAddress'
        | 'token0'
        | 'token0__id'
        | 'token0__symbol'
        | 'token0__name'
        | 'token0__decimals'
        | 'token0__totalSupply'
        | 'token0__tradeVolume'
        | 'token0__tradeVolumeUSD'
        | 'token0__untrackedVolumeUSD'
        | 'token0__txCount'
        | 'token0__totalLiquidity'
        | 'token0__derivedETH'
        | 'token1'
        | 'token1__id'
        | 'token1__symbol'
        | 'token1__name'
        | 'token1__decimals'
        | 'token1__totalSupply'
        | 'token1__tradeVolume'
        | 'token1__tradeVolumeUSD'
        | 'token1__untrackedVolumeUSD'
        | 'token1__txCount'
        | 'token1__totalLiquidity'
        | 'token1__derivedETH'
        | 'reserve0'
        | 'reserve1'
        | 'totalSupply'
        | 'reserveUSD'
        | 'dailyVolumeToken0'
        | 'dailyVolumeToken1'
        | 'dailyVolumeUSD'
        | 'dailyTxns'
    }
    PairHourData: {
      kind: 'OBJECT'
      name: 'PairHourData'
      fields: {
        hourStartUnix: {
          name: 'hourStartUnix'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          }
        }
        hourlyTxns: {
          name: 'hourlyTxns'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        hourlyVolumeToken0: {
          name: 'hourlyVolumeToken0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        hourlyVolumeToken1: {
          name: 'hourlyVolumeToken1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        hourlyVolumeUSD: {
          name: 'hourlyVolumeUSD'
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
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        pair: {
          name: 'pair'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pair'; ofType: null }
          }
        }
        reserve0: {
          name: 'reserve0'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        reserve1: {
          name: 'reserve1'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        reserveUSD: {
          name: 'reserveUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalSupply: {
          name: 'totalSupply'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
        }
      }
    }
    PairHourData_filter: {
      kind: 'INPUT_OBJECT'
      name: 'PairHourData_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourStartUnix'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourStartUnix_not'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourStartUnix_gt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourStartUnix_lt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourStartUnix_gte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourStartUnix_lte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourStartUnix_in'
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
          name: 'hourStartUnix_not_in'
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
          name: 'pair'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_in'
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
          name: 'pair_not_in'
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
          name: 'pair_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pair_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserve0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserve1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserve1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalSupply'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserveUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserveUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeToken0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeToken0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeToken0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeToken0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeToken0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeToken0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeToken0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeToken0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeToken1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeToken1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeToken1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeToken1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeToken1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeToken1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeToken1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeToken1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'hourlyVolumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'hourlyTxns'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyTxns_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyTxns_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyTxns_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyTxns_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyTxns_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'hourlyTxns_in'
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
          name: 'hourlyTxns_not_in'
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
              name: 'PairHourData_filter'
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
              name: 'PairHourData_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    PairHourData_orderBy: {
      name: 'PairHourData_orderBy'
      enumValues:
        | 'id'
        | 'hourStartUnix'
        | 'pair'
        | 'pair__id'
        | 'pair__reserve0'
        | 'pair__reserve1'
        | 'pair__totalSupply'
        | 'pair__reserveETH'
        | 'pair__reserveUSD'
        | 'pair__trackedReserveETH'
        | 'pair__token0Price'
        | 'pair__token1Price'
        | 'pair__volumeToken0'
        | 'pair__volumeToken1'
        | 'pair__volumeUSD'
        | 'pair__untrackedVolumeUSD'
        | 'pair__txCount'
        | 'pair__createdAtTimestamp'
        | 'pair__createdAtBlockNumber'
        | 'pair__liquidityProviderCount'
        | 'reserve0'
        | 'reserve1'
        | 'totalSupply'
        | 'reserveUSD'
        | 'hourlyVolumeToken0'
        | 'hourlyVolumeToken1'
        | 'hourlyVolumeUSD'
        | 'hourlyTxns'
    }
    Pair_filter: {
      kind: 'INPUT_OBJECT'
      name: 'Pair_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
          name: 'reserve0'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve0_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserve0_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserve1'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserve1_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserve1_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalSupply'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalSupply_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserveETH'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveETH_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveETH_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveETH_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveETH_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveETH_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveETH_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserveETH_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserveUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'reserveUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'reserveUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'trackedReserveETH'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'trackedReserveETH_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'trackedReserveETH_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'trackedReserveETH_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'trackedReserveETH_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'trackedReserveETH_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'trackedReserveETH_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'trackedReserveETH_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
          name: 'pairHourData_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'PairHourData_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'liquidityPositions_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'LiquidityPosition_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'liquidityPositionSnapshots_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'LiquidityPositionSnapshot_filter'
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
            ofType: { kind: 'INPUT_OBJECT'; name: 'Pair_filter'; ofType: null }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'INPUT_OBJECT'; name: 'Pair_filter'; ofType: null }
          }
          defaultValue: null
        },
      ]
    }
    Pair_orderBy: {
      name: 'Pair_orderBy'
      enumValues:
        | 'id'
        | 'token0'
        | 'token0__id'
        | 'token0__symbol'
        | 'token0__name'
        | 'token0__decimals'
        | 'token0__totalSupply'
        | 'token0__tradeVolume'
        | 'token0__tradeVolumeUSD'
        | 'token0__untrackedVolumeUSD'
        | 'token0__txCount'
        | 'token0__totalLiquidity'
        | 'token0__derivedETH'
        | 'token1'
        | 'token1__id'
        | 'token1__symbol'
        | 'token1__name'
        | 'token1__decimals'
        | 'token1__totalSupply'
        | 'token1__tradeVolume'
        | 'token1__tradeVolumeUSD'
        | 'token1__untrackedVolumeUSD'
        | 'token1__txCount'
        | 'token1__totalLiquidity'
        | 'token1__derivedETH'
        | 'reserve0'
        | 'reserve1'
        | 'totalSupply'
        | 'reserveETH'
        | 'reserveUSD'
        | 'trackedReserveETH'
        | 'token0Price'
        | 'token1Price'
        | 'volumeToken0'
        | 'volumeToken1'
        | 'volumeUSD'
        | 'untrackedVolumeUSD'
        | 'txCount'
        | 'createdAtTimestamp'
        | 'createdAtBlockNumber'
        | 'liquidityProviderCount'
        | 'pairHourData'
        | 'liquidityPositions'
        | 'liquidityPositionSnapshots'
        | 'mints'
        | 'burns'
        | 'swaps'
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
        liquidityPosition: {
          name: 'liquidityPosition'
          type: { kind: 'OBJECT'; name: 'LiquidityPosition'; ofType: null }
        }
        liquidityPositionSnapshot: {
          name: 'liquidityPositionSnapshot'
          type: {
            kind: 'OBJECT'
            name: 'LiquidityPositionSnapshot'
            ofType: null
          }
        }
        liquidityPositionSnapshots: {
          name: 'liquidityPositionSnapshots'
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
                  name: 'LiquidityPositionSnapshot'
                  ofType: null
                }
              }
            }
          }
        }
        liquidityPositions: {
          name: 'liquidityPositions'
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
                  name: 'LiquidityPosition'
                  ofType: null
                }
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
        pair: {
          name: 'pair'
          type: { kind: 'OBJECT'; name: 'Pair'; ofType: null }
        }
        pairDayData: {
          name: 'pairDayData'
          type: { kind: 'OBJECT'; name: 'PairDayData'; ofType: null }
        }
        pairDayDatas: {
          name: 'pairDayDatas'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'PairDayData'; ofType: null }
              }
            }
          }
        }
        pairHourData: {
          name: 'pairHourData'
          type: { kind: 'OBJECT'; name: 'PairHourData'; ofType: null }
        }
        pairHourDatas: {
          name: 'pairHourDatas'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'PairHourData'; ofType: null }
              }
            }
          }
        }
        pairs: {
          name: 'pairs'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Pair'; ofType: null }
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
        uniswapFactories: {
          name: 'uniswapFactories'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'UniswapFactory'; ofType: null }
              }
            }
          }
        }
        uniswapFactory: {
          name: 'uniswapFactory'
          type: { kind: 'OBJECT'; name: 'UniswapFactory'; ofType: null }
        }
        user: {
          name: 'user'
          type: { kind: 'OBJECT'; name: 'User'; ofType: null }
        }
        users: {
          name: 'users'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'User'; ofType: null }
              }
            }
          }
        }
      }
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
        liquidityPosition: {
          name: 'liquidityPosition'
          type: { kind: 'OBJECT'; name: 'LiquidityPosition'; ofType: null }
        }
        liquidityPositionSnapshot: {
          name: 'liquidityPositionSnapshot'
          type: {
            kind: 'OBJECT'
            name: 'LiquidityPositionSnapshot'
            ofType: null
          }
        }
        liquidityPositionSnapshots: {
          name: 'liquidityPositionSnapshots'
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
                  name: 'LiquidityPositionSnapshot'
                  ofType: null
                }
              }
            }
          }
        }
        liquidityPositions: {
          name: 'liquidityPositions'
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
                  name: 'LiquidityPosition'
                  ofType: null
                }
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
        pair: {
          name: 'pair'
          type: { kind: 'OBJECT'; name: 'Pair'; ofType: null }
        }
        pairDayData: {
          name: 'pairDayData'
          type: { kind: 'OBJECT'; name: 'PairDayData'; ofType: null }
        }
        pairDayDatas: {
          name: 'pairDayDatas'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'PairDayData'; ofType: null }
              }
            }
          }
        }
        pairHourData: {
          name: 'pairHourData'
          type: { kind: 'OBJECT'; name: 'PairHourData'; ofType: null }
        }
        pairHourDatas: {
          name: 'pairHourDatas'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'PairHourData'; ofType: null }
              }
            }
          }
        }
        pairs: {
          name: 'pairs'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Pair'; ofType: null }
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
        uniswapFactories: {
          name: 'uniswapFactories'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'UniswapFactory'; ofType: null }
              }
            }
          }
        }
        uniswapFactory: {
          name: 'uniswapFactory'
          type: { kind: 'OBJECT'; name: 'UniswapFactory'; ofType: null }
        }
        user: {
          name: 'user'
          type: { kind: 'OBJECT'; name: 'User'; ofType: null }
        }
        users: {
          name: 'users'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'User'; ofType: null }
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
        amount0In: {
          name: 'amount0In'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        amount0Out: {
          name: 'amount0Out'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        amount1In: {
          name: 'amount1In'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        amount1Out: {
          name: 'amount1Out'
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
        from: {
          name: 'from'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        logIndex: {
          name: 'logIndex'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
        }
        pair: {
          name: 'pair'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pair'; ofType: null }
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
        to: {
          name: 'to'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
          name: 'pair'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_in'
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
          name: 'pair_not_in'
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
          name: 'pair_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pair_filter'; ofType: null }
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
          name: 'from'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_in'
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
          name: 'from_not_in'
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
          name: 'from_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0In'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0In_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0In_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0In_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0In_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0In_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0In_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount0In_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount1In'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1In_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1In_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1In_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1In_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1In_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1In_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount1In_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount0Out'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0Out_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0Out_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0Out_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0Out_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0Out_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount0Out_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount0Out_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount1Out'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1Out_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1Out_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1Out_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1Out_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1Out_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount1Out_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'amount1Out_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'to'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_in'
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
          name: 'to_not_in'
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
          name: 'to_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
        | 'timestamp'
        | 'pair'
        | 'pair__id'
        | 'pair__reserve0'
        | 'pair__reserve1'
        | 'pair__totalSupply'
        | 'pair__reserveETH'
        | 'pair__reserveUSD'
        | 'pair__trackedReserveETH'
        | 'pair__token0Price'
        | 'pair__token1Price'
        | 'pair__volumeToken0'
        | 'pair__volumeToken1'
        | 'pair__volumeUSD'
        | 'pair__untrackedVolumeUSD'
        | 'pair__txCount'
        | 'pair__createdAtTimestamp'
        | 'pair__createdAtBlockNumber'
        | 'pair__liquidityProviderCount'
        | 'sender'
        | 'from'
        | 'amount0In'
        | 'amount1In'
        | 'amount0Out'
        | 'amount1Out'
        | 'to'
        | 'logIndex'
        | 'amountUSD'
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
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
        pairBase: {
          name: 'pairBase'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Pair'; ofType: null }
              }
            }
          }
        }
        pairDayDataBase: {
          name: 'pairDayDataBase'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'PairDayData'; ofType: null }
              }
            }
          }
        }
        pairDayDataQuote: {
          name: 'pairDayDataQuote'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'PairDayData'; ofType: null }
              }
            }
          }
        }
        pairQuote: {
          name: 'pairQuote'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Pair'; ofType: null }
              }
            }
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
        totalLiquidity: {
          name: 'totalLiquidity'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
        tradeVolume: {
          name: 'tradeVolume'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        tradeVolumeUSD: {
          name: 'tradeVolumeUSD'
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
    TokenDayData: {
      kind: 'OBJECT'
      name: 'TokenDayData'
      fields: {
        dailyTxns: {
          name: 'dailyTxns'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        dailyVolumeETH: {
          name: 'dailyVolumeETH'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        dailyVolumeToken: {
          name: 'dailyVolumeToken'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        dailyVolumeUSD: {
          name: 'dailyVolumeUSD'
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
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
        totalLiquidityETH: {
          name: 'totalLiquidityETH'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalLiquidityToken: {
          name: 'totalLiquidityToken'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalLiquidityUSD: {
          name: 'totalLiquidityUSD'
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
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
          name: 'dailyVolumeToken'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'dailyVolumeToken_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'dailyVolumeETH'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeETH_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeETH_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeETH_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeETH_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeETH_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeETH_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'dailyVolumeETH_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'dailyTxns'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyTxns_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyTxns_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyTxns_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyTxns_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyTxns_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyTxns_in'
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
          name: 'dailyTxns_not_in'
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
          name: 'totalLiquidityToken'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityToken_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityToken_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityToken_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityToken_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityToken_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityToken_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalLiquidityToken_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
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
        | 'token__tradeVolume'
        | 'token__tradeVolumeUSD'
        | 'token__untrackedVolumeUSD'
        | 'token__txCount'
        | 'token__totalLiquidity'
        | 'token__derivedETH'
        | 'dailyVolumeToken'
        | 'dailyVolumeETH'
        | 'dailyVolumeUSD'
        | 'dailyTxns'
        | 'totalLiquidityToken'
        | 'totalLiquidityETH'
        | 'totalLiquidityUSD'
        | 'priceUSD'
    }
    Token_filter: {
      kind: 'INPUT_OBJECT'
      name: 'Token_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
          name: 'tradeVolume'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tradeVolume_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tradeVolume_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tradeVolume_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tradeVolume_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tradeVolume_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tradeVolume_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tradeVolume_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tradeVolumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tradeVolumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tradeVolumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tradeVolumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tradeVolumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tradeVolumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'tradeVolumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'tradeVolumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
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
          name: 'totalLiquidity'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidity_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidity_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidity_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidity_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidity_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidity_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalLiquidity_not_in'
          type: {
            kind: 'LIST'
            name: never
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
          name: 'tokenDayData_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'TokenDayData_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'pairDayDataBase_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'PairDayData_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'pairDayDataQuote_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'PairDayData_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'pairBase_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pair_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pairQuote_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pair_filter'; ofType: null }
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
        | 'tradeVolume'
        | 'tradeVolumeUSD'
        | 'untrackedVolumeUSD'
        | 'txCount'
        | 'totalLiquidity'
        | 'derivedETH'
        | 'tokenDayData'
        | 'pairDayDataBase'
        | 'pairDayDataQuote'
        | 'pairBase'
        | 'pairQuote'
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
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
          name: 'mints'
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
          name: 'mints_not'
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
          name: 'mints_contains'
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
          name: 'mints_contains_nocase'
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
          name: 'mints_not_contains'
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
          name: 'mints_not_contains_nocase'
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
          name: 'mints_'
          type: { kind: 'INPUT_OBJECT'; name: 'Mint_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'burns'
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
          name: 'burns_not'
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
          name: 'burns_contains'
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
          name: 'burns_contains_nocase'
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
          name: 'burns_not_contains'
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
          name: 'burns_not_contains_nocase'
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
          name: 'burns_'
          type: { kind: 'INPUT_OBJECT'; name: 'Burn_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'swaps'
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
          name: 'swaps_not'
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
          name: 'swaps_contains'
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
          name: 'swaps_contains_nocase'
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
          name: 'swaps_not_contains'
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
          name: 'swaps_not_contains_nocase'
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
          name: 'swaps_'
          type: { kind: 'INPUT_OBJECT'; name: 'Swap_filter'; ofType: null }
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
        | 'mints'
        | 'burns'
        | 'swaps'
    }
    UniswapDayData: {
      kind: 'OBJECT'
      name: 'UniswapDayData'
      fields: {
        dailyVolumeETH: {
          name: 'dailyVolumeETH'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        dailyVolumeUSD: {
          name: 'dailyVolumeUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        dailyVolumeUntracked: {
          name: 'dailyVolumeUntracked'
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
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        totalLiquidityETH: {
          name: 'totalLiquidityETH'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalLiquidityUSD: {
          name: 'totalLiquidityUSD'
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
      }
    }
    UniswapDayData_filter: {
      kind: 'INPUT_OBJECT'
      name: 'UniswapDayData_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
          name: 'dailyVolumeETH'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeETH_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeETH_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeETH_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeETH_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeETH_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeETH_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'dailyVolumeETH_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUntracked'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUntracked_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUntracked_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUntracked_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUntracked_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUntracked_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUntracked_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'dailyVolumeUntracked_not_in'
          type: {
            kind: 'LIST'
            name: never
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
          name: 'totalLiquidityETH'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
          name: 'totalLiquidityUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
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
        | 'dailyVolumeETH'
        | 'dailyVolumeUSD'
        | 'dailyVolumeUntracked'
        | 'totalVolumeETH'
        | 'totalLiquidityETH'
        | 'totalVolumeUSD'
        | 'totalLiquidityUSD'
        | 'txCount'
    }
    UniswapFactory: {
      kind: 'OBJECT'
      name: 'UniswapFactory'
      fields: {
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        pairCount: {
          name: 'pairCount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          }
        }
        totalLiquidityETH: {
          name: 'totalLiquidityETH'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalLiquidityUSD: {
          name: 'totalLiquidityUSD'
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
    UniswapFactory_filter: {
      kind: 'INPUT_OBJECT'
      name: 'UniswapFactory_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pairCount'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pairCount_not'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pairCount_gt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pairCount_lt'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pairCount_gte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pairCount_lte'
          type: { kind: 'SCALAR'; name: 'Int'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pairCount_in'
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
          name: 'pairCount_not_in'
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
          name: 'totalLiquidityUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalLiquidityUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalLiquidityETH_not_in'
          type: {
            kind: 'LIST'
            name: never
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
              name: 'UniswapFactory_filter'
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
              name: 'UniswapFactory_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    UniswapFactory_orderBy: {
      name: 'UniswapFactory_orderBy'
      enumValues:
        | 'id'
        | 'pairCount'
        | 'totalVolumeUSD'
        | 'totalVolumeETH'
        | 'untrackedVolumeUSD'
        | 'totalLiquidityUSD'
        | 'totalLiquidityETH'
        | 'txCount'
    }
    User: {
      kind: 'OBJECT'
      name: 'User'
      fields: {
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        liquidityPositions: {
          name: 'liquidityPositions'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: {
                kind: 'OBJECT'
                name: 'LiquidityPosition'
                ofType: null
              }
            }
          }
        }
        usdSwapped: {
          name: 'usdSwapped'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
      }
    }
    User_filter: {
      kind: 'INPUT_OBJECT'
      name: 'User_filter'
      isOneOf: false
      inputFields: [
        {
          name: 'id'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'id_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'id_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'liquidityPositions_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'LiquidityPosition_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'usdSwapped'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'usdSwapped_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'usdSwapped_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'usdSwapped_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'usdSwapped_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'usdSwapped_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'usdSwapped_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'usdSwapped_not_in'
          type: {
            kind: 'LIST'
            name: never
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
            ofType: { kind: 'INPUT_OBJECT'; name: 'User_filter'; ofType: null }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'INPUT_OBJECT'; name: 'User_filter'; ofType: null }
          }
          defaultValue: null
        },
      ]
    }
    User_orderBy: {
      name: 'User_orderBy'
      enumValues: 'id' | 'liquidityPositions' | 'usdSwapped'
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
