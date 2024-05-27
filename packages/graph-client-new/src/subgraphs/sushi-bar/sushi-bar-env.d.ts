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
  name: 'sushi-bar'
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
    Bytes: unknown
    DaySnapshot: {
      kind: 'OBJECT'
      name: 'DaySnapshot'
      fields: {
        apr12m: {
          name: 'apr12m'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        apr1m: {
          name: 'apr1m'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        apr3m: {
          name: 'apr3m'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        apr6m: {
          name: 'apr6m'
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
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        newFeeAmount: {
          name: 'newFeeAmount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        newSushiHarvested: {
          name: 'newSushiHarvested'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        newSushiStaked: {
          name: 'newSushiStaked'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        newTransactions: {
          name: 'newTransactions'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        newXSushiBurned: {
          name: 'newXSushiBurned'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        newXSushiMinted: {
          name: 'newXSushiMinted'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        sushiHarvested: {
          name: 'sushiHarvested'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        sushiStaked: {
          name: 'sushiStaked'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        sushiSupply: {
          name: 'sushiSupply'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        sushiXsushiRatio: {
          name: 'sushiXsushiRatio'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalFeeAmount: {
          name: 'totalFeeAmount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        transactionCount: {
          name: 'transactionCount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        userCount: {
          name: 'userCount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        xSushiBurned: {
          name: 'xSushiBurned'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        xSushiMinted: {
          name: 'xSushiMinted'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        xSushiSupply: {
          name: 'xSushiSupply'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        xSushiSushiRatio: {
          name: 'xSushiSushiRatio'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
      }
    }
    DaySnapshot_filter: {
      kind: 'INPUT_OBJECT'
      name: 'DaySnapshot_filter'
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
          name: 'userCount'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_in'
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
          name: 'userCount_not_in'
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
          name: 'transactionCount'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_in'
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
          name: 'transactionCount_not_in'
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
          name: 'sushiSupply'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiSupply_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiSupply'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiStaked'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiStaked_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiHarvested'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiBurned'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiMinted'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr1m'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr1m_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr3m'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr3m_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr6m'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr6m_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr12m'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr12m_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newTransactions'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newTransactions_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newTransactions_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newTransactions_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newTransactions_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newTransactions_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newTransactions_in'
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
          name: 'newTransactions_not_in'
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
          name: 'newSushiStaked'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newFeeAmount'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_not_in'
          type: {
            kind: 'LIST'
            name: never
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
              name: 'DaySnapshot_filter'
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
              name: 'DaySnapshot_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    DaySnapshot_orderBy: {
      name: 'DaySnapshot_orderBy'
      enumValues:
        | 'id'
        | 'date'
        | 'userCount'
        | 'transactionCount'
        | 'sushiSupply'
        | 'xSushiSupply'
        | 'sushiStaked'
        | 'sushiHarvested'
        | 'totalFeeAmount'
        | 'xSushiBurned'
        | 'xSushiMinted'
        | 'xSushiSushiRatio'
        | 'sushiXsushiRatio'
        | 'apr1m'
        | 'apr3m'
        | 'apr6m'
        | 'apr12m'
        | 'newTransactions'
        | 'newSushiStaked'
        | 'newSushiHarvested'
        | 'newFeeAmount'
        | 'newXSushiBurned'
        | 'newXSushiMinted'
    }
    Fee: {
      kind: 'OBJECT'
      name: 'Fee'
      fields: {
        amount: {
          name: 'amount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        createdAtBlock: {
          name: 'createdAtBlock'
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
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        sender: {
          name: 'sender'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'FeeSender'; ofType: null }
          }
        }
      }
    }
    FeeSender: {
      kind: 'OBJECT'
      name: 'FeeSender'
      fields: {
        createdAtBlock: {
          name: 'createdAtBlock'
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
        fees: {
          name: 'fees'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Fee'; ofType: null }
              }
            }
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
        modifiedAtBlock: {
          name: 'modifiedAtBlock'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        modifiedAtTimestamp: {
          name: 'modifiedAtTimestamp'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        totalFeeSent: {
          name: 'totalFeeSent'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
      }
    }
    FeeSender_filter: {
      kind: 'INPUT_OBJECT'
      name: 'FeeSender_filter'
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
          name: 'totalFeeSent'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeSent_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeSent_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeSent_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeSent_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeSent_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeSent_in'
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
          name: 'totalFeeSent_not_in'
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
          name: 'fees_'
          type: { kind: 'INPUT_OBJECT'; name: 'Fee_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_in'
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
          name: 'createdAtBlock_not_in'
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
          name: 'modifiedAtBlock'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtBlock_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtBlock_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtBlock_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtBlock_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtBlock_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtBlock_in'
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
          name: 'modifiedAtBlock_not_in'
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
          name: 'modifiedAtTimestamp'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtTimestamp_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtTimestamp_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtTimestamp_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtTimestamp_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtTimestamp_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtTimestamp_in'
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
          name: 'modifiedAtTimestamp_not_in'
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
              name: 'FeeSender_filter'
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
              name: 'FeeSender_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    FeeSender_orderBy: {
      name: 'FeeSender_orderBy'
      enumValues:
        | 'id'
        | 'totalFeeSent'
        | 'fees'
        | 'createdAtBlock'
        | 'createdAtTimestamp'
        | 'modifiedAtBlock'
        | 'modifiedAtTimestamp'
    }
    Fee_filter: {
      kind: 'INPUT_OBJECT'
      name: 'Fee_filter'
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
          name: 'sender'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sender_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sender_'
          type: { kind: 'INPUT_OBJECT'; name: 'FeeSender_filter'; ofType: null }
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
          name: 'createdAtBlock'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_in'
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
          name: 'createdAtBlock_not_in'
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
            ofType: { kind: 'INPUT_OBJECT'; name: 'Fee_filter'; ofType: null }
          }
          defaultValue: null
        },
        {
          name: 'or'
          type: {
            kind: 'LIST'
            name: never
            ofType: { kind: 'INPUT_OBJECT'; name: 'Fee_filter'; ofType: null }
          }
          defaultValue: null
        },
      ]
    }
    Fee_orderBy: {
      name: 'Fee_orderBy'
      enumValues:
        | 'id'
        | 'sender'
        | 'sender__id'
        | 'sender__totalFeeSent'
        | 'sender__createdAtBlock'
        | 'sender__createdAtTimestamp'
        | 'sender__modifiedAtBlock'
        | 'sender__modifiedAtTimestamp'
        | 'amount'
        | 'createdAtBlock'
        | 'createdAtTimestamp'
    }
    HourSnapshot: {
      kind: 'OBJECT'
      name: 'HourSnapshot'
      fields: {
        apr12m: {
          name: 'apr12m'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        apr1m: {
          name: 'apr1m'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        apr3m: {
          name: 'apr3m'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        apr6m: {
          name: 'apr6m'
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
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        newFeeAmount: {
          name: 'newFeeAmount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        newSushiHarvested: {
          name: 'newSushiHarvested'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        newSushiStaked: {
          name: 'newSushiStaked'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        newTransactions: {
          name: 'newTransactions'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        newXSushiBurned: {
          name: 'newXSushiBurned'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        newXSushiMinted: {
          name: 'newXSushiMinted'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        sushiHarvested: {
          name: 'sushiHarvested'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        sushiStaked: {
          name: 'sushiStaked'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        sushiSupply: {
          name: 'sushiSupply'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        sushiXsushiRatio: {
          name: 'sushiXsushiRatio'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalFeeAmount: {
          name: 'totalFeeAmount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        transactionCount: {
          name: 'transactionCount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        userCount: {
          name: 'userCount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        xSushiBurned: {
          name: 'xSushiBurned'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        xSushiMinted: {
          name: 'xSushiMinted'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        xSushiSupply: {
          name: 'xSushiSupply'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        xSushiSushiRatio: {
          name: 'xSushiSushiRatio'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
      }
    }
    HourSnapshot_filter: {
      kind: 'INPUT_OBJECT'
      name: 'HourSnapshot_filter'
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
          name: 'userCount'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_in'
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
          name: 'userCount_not_in'
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
          name: 'transactionCount'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_in'
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
          name: 'transactionCount_not_in'
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
          name: 'sushiSupply'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiSupply_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiSupply'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiStaked'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiStaked_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiHarvested'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiBurned'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiMinted'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr1m'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr1m_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr3m'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr3m_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr6m'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr6m_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr12m'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr12m_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newTransactions'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newTransactions_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newTransactions_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newTransactions_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newTransactions_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newTransactions_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newTransactions_in'
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
          name: 'newTransactions_not_in'
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
          name: 'newSushiStaked'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newFeeAmount'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_not_in'
          type: {
            kind: 'LIST'
            name: never
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
              name: 'HourSnapshot_filter'
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
              name: 'HourSnapshot_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    HourSnapshot_orderBy: {
      name: 'HourSnapshot_orderBy'
      enumValues:
        | 'id'
        | 'date'
        | 'userCount'
        | 'transactionCount'
        | 'sushiSupply'
        | 'xSushiSupply'
        | 'sushiStaked'
        | 'sushiHarvested'
        | 'totalFeeAmount'
        | 'xSushiBurned'
        | 'xSushiMinted'
        | 'xSushiSushiRatio'
        | 'sushiXsushiRatio'
        | 'apr1m'
        | 'apr3m'
        | 'apr6m'
        | 'apr12m'
        | 'newTransactions'
        | 'newSushiStaked'
        | 'newSushiHarvested'
        | 'newFeeAmount'
        | 'newXSushiBurned'
        | 'newXSushiMinted'
    }
    ID: unknown
    Int: unknown
    Int8: unknown
    OrderDirection: { name: 'OrderDirection'; enumValues: 'asc' | 'desc' }
    Query: {
      kind: 'OBJECT'
      name: 'Query'
      fields: {
        _meta: {
          name: '_meta'
          type: { kind: 'OBJECT'; name: '_Meta_'; ofType: null }
        }
        daySnapshot: {
          name: 'daySnapshot'
          type: { kind: 'OBJECT'; name: 'DaySnapshot'; ofType: null }
        }
        daySnapshots: {
          name: 'daySnapshots'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'DaySnapshot'; ofType: null }
              }
            }
          }
        }
        fee: {
          name: 'fee'
          type: { kind: 'OBJECT'; name: 'Fee'; ofType: null }
        }
        feeSender: {
          name: 'feeSender'
          type: { kind: 'OBJECT'; name: 'FeeSender'; ofType: null }
        }
        feeSenders: {
          name: 'feeSenders'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'FeeSender'; ofType: null }
              }
            }
          }
        }
        fees: {
          name: 'fees'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Fee'; ofType: null }
              }
            }
          }
        }
        hourSnapshot: {
          name: 'hourSnapshot'
          type: { kind: 'OBJECT'; name: 'HourSnapshot'; ofType: null }
        }
        hourSnapshots: {
          name: 'hourSnapshots'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'HourSnapshot'; ofType: null }
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
        weekSnapshot: {
          name: 'weekSnapshot'
          type: { kind: 'OBJECT'; name: 'WeekSnapshot'; ofType: null }
        }
        weekSnapshots: {
          name: 'weekSnapshots'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'WeekSnapshot'; ofType: null }
              }
            }
          }
        }
        xsushi: {
          name: 'xsushi'
          type: { kind: 'OBJECT'; name: 'XSushi'; ofType: null }
        }
        xsushis: {
          name: 'xsushis'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'XSushi'; ofType: null }
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
        daySnapshot: {
          name: 'daySnapshot'
          type: { kind: 'OBJECT'; name: 'DaySnapshot'; ofType: null }
        }
        daySnapshots: {
          name: 'daySnapshots'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'DaySnapshot'; ofType: null }
              }
            }
          }
        }
        fee: {
          name: 'fee'
          type: { kind: 'OBJECT'; name: 'Fee'; ofType: null }
        }
        feeSender: {
          name: 'feeSender'
          type: { kind: 'OBJECT'; name: 'FeeSender'; ofType: null }
        }
        feeSenders: {
          name: 'feeSenders'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'FeeSender'; ofType: null }
              }
            }
          }
        }
        fees: {
          name: 'fees'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Fee'; ofType: null }
              }
            }
          }
        }
        hourSnapshot: {
          name: 'hourSnapshot'
          type: { kind: 'OBJECT'; name: 'HourSnapshot'; ofType: null }
        }
        hourSnapshots: {
          name: 'hourSnapshots'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'HourSnapshot'; ofType: null }
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
        weekSnapshot: {
          name: 'weekSnapshot'
          type: { kind: 'OBJECT'; name: 'WeekSnapshot'; ofType: null }
        }
        weekSnapshots: {
          name: 'weekSnapshots'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'WeekSnapshot'; ofType: null }
              }
            }
          }
        }
        xsushi: {
          name: 'xsushi'
          type: { kind: 'OBJECT'; name: 'XSushi'; ofType: null }
        }
        xsushis: {
          name: 'xsushis'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'XSushi'; ofType: null }
              }
            }
          }
        }
      }
    }
    Timestamp: unknown
    Transaction: {
      kind: 'OBJECT'
      name: 'Transaction'
      fields: {
        amount: {
          name: 'amount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        createdAtBlock: {
          name: 'createdAtBlock'
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
        from: {
          name: 'from'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'User'; ofType: null }
          }
        }
        gasLimit: {
          name: 'gasLimit'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
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
        to: {
          name: 'to'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'User'; ofType: null }
          }
        }
        type: {
          name: 'type'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'ENUM'; name: 'TransactionType'; ofType: null }
          }
        }
      }
    }
    TransactionType: {
      name: 'TransactionType'
      enumValues: 'TRANSFER' | 'MINT' | 'BURN'
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
          name: 'from'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'from_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'from_'
          type: { kind: 'INPUT_OBJECT'; name: 'User_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'to_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'to_'
          type: { kind: 'INPUT_OBJECT'; name: 'User_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'amount_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'type'
          type: { kind: 'ENUM'; name: 'TransactionType'; ofType: null }
          defaultValue: null
        },
        {
          name: 'type_not'
          type: { kind: 'ENUM'; name: 'TransactionType'; ofType: null }
          defaultValue: null
        },
        {
          name: 'type_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'ENUM'; name: 'TransactionType'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'type_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'ENUM'; name: 'TransactionType'; ofType: null }
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
          name: 'gasLimit'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'gasLimit_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'gasLimit_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'gasLimit_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'gasLimit_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'gasLimit_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'gasLimit_in'
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
          name: 'gasLimit_not_in'
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
          name: 'createdAtBlock'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_in'
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
          name: 'createdAtBlock_not_in'
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
        | 'from'
        | 'from__id'
        | 'from__balance'
        | 'from__createdAtBlock'
        | 'from__createdAtTimestamp'
        | 'from__modifiedAtBlock'
        | 'from__modifiedAtTimestamp'
        | 'to'
        | 'to__id'
        | 'to__balance'
        | 'to__createdAtBlock'
        | 'to__createdAtTimestamp'
        | 'to__modifiedAtBlock'
        | 'to__modifiedAtTimestamp'
        | 'amount'
        | 'type'
        | 'gasUsed'
        | 'gasLimit'
        | 'gasPrice'
        | 'createdAtBlock'
        | 'createdAtTimestamp'
    }
    User: {
      kind: 'OBJECT'
      name: 'User'
      fields: {
        balance: {
          name: 'balance'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        createdAtBlock: {
          name: 'createdAtBlock'
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
        deposits: {
          name: 'deposits'
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
        id: {
          name: 'id'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        modifiedAtBlock: {
          name: 'modifiedAtBlock'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        modifiedAtTimestamp: {
          name: 'modifiedAtTimestamp'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        withdrawals: {
          name: 'withdrawals'
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
      }
    }
    User_filter: {
      kind: 'INPUT_OBJECT'
      name: 'User_filter'
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
          name: 'balance'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'balance_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'balance_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'balance_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'balance_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'balance_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'balance_in'
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
          name: 'balance_not_in'
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
          name: 'withdrawals_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'Transaction_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'deposits_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'Transaction_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'createdAtBlock'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'createdAtBlock_in'
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
          name: 'createdAtBlock_not_in'
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
          name: 'modifiedAtBlock'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtBlock_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtBlock_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtBlock_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtBlock_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtBlock_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtBlock_in'
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
          name: 'modifiedAtBlock_not_in'
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
          name: 'modifiedAtTimestamp'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtTimestamp_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtTimestamp_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtTimestamp_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtTimestamp_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtTimestamp_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'modifiedAtTimestamp_in'
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
          name: 'modifiedAtTimestamp_not_in'
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
      enumValues:
        | 'id'
        | 'balance'
        | 'withdrawals'
        | 'deposits'
        | 'createdAtBlock'
        | 'createdAtTimestamp'
        | 'modifiedAtBlock'
        | 'modifiedAtTimestamp'
    }
    WeekSnapshot: {
      kind: 'OBJECT'
      name: 'WeekSnapshot'
      fields: {
        apr12m: {
          name: 'apr12m'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        apr1m: {
          name: 'apr1m'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        apr3m: {
          name: 'apr3m'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        apr6m: {
          name: 'apr6m'
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
            ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null }
          }
        }
        newFeeAmount: {
          name: 'newFeeAmount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        newSushiHarvested: {
          name: 'newSushiHarvested'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        newSushiStaked: {
          name: 'newSushiStaked'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        newTransactions: {
          name: 'newTransactions'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        newXSushiBurned: {
          name: 'newXSushiBurned'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        newXSushiMinted: {
          name: 'newXSushiMinted'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        sushiHarvested: {
          name: 'sushiHarvested'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        sushiStaked: {
          name: 'sushiStaked'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        sushiSupply: {
          name: 'sushiSupply'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        sushiXsushiRatio: {
          name: 'sushiXsushiRatio'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalFeeAmount: {
          name: 'totalFeeAmount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        transactionCount: {
          name: 'transactionCount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        userCount: {
          name: 'userCount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        xSushiBurned: {
          name: 'xSushiBurned'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        xSushiMinted: {
          name: 'xSushiMinted'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        xSushiSupply: {
          name: 'xSushiSupply'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        xSushiSushiRatio: {
          name: 'xSushiSushiRatio'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
      }
    }
    WeekSnapshot_filter: {
      kind: 'INPUT_OBJECT'
      name: 'WeekSnapshot_filter'
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
          name: 'userCount'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_in'
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
          name: 'userCount_not_in'
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
          name: 'transactionCount'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_in'
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
          name: 'transactionCount_not_in'
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
          name: 'sushiSupply'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiSupply_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiSupply'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiStaked'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiStaked_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiHarvested'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiBurned'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiMinted'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr1m'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr1m_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr3m'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr3m_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr6m'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr6m_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr12m'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr12m_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newTransactions'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newTransactions_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newTransactions_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newTransactions_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newTransactions_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newTransactions_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newTransactions_in'
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
          name: 'newTransactions_not_in'
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
          name: 'newSushiStaked'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newSushiStaked_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newSushiHarvested_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newFeeAmount'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newFeeAmount_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newXSushiBurned_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'newXSushiMinted_not_in'
          type: {
            kind: 'LIST'
            name: never
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
              name: 'WeekSnapshot_filter'
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
              name: 'WeekSnapshot_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    WeekSnapshot_orderBy: {
      name: 'WeekSnapshot_orderBy'
      enumValues:
        | 'id'
        | 'date'
        | 'userCount'
        | 'transactionCount'
        | 'sushiSupply'
        | 'xSushiSupply'
        | 'sushiStaked'
        | 'sushiHarvested'
        | 'totalFeeAmount'
        | 'xSushiBurned'
        | 'xSushiMinted'
        | 'xSushiSushiRatio'
        | 'sushiXsushiRatio'
        | 'apr1m'
        | 'apr3m'
        | 'apr6m'
        | 'apr12m'
        | 'newTransactions'
        | 'newSushiStaked'
        | 'newSushiHarvested'
        | 'newFeeAmount'
        | 'newXSushiBurned'
        | 'newXSushiMinted'
    }
    XSushi: {
      kind: 'OBJECT'
      name: 'XSushi'
      fields: {
        apr12m: {
          name: 'apr12m'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        apr1m: {
          name: 'apr1m'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        apr3m: {
          name: 'apr3m'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        apr6m: {
          name: 'apr6m'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        aprUpdatedAtTimestamp: {
          name: 'aprUpdatedAtTimestamp'
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
        sushiHarvested: {
          name: 'sushiHarvested'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        sushiStaked: {
          name: 'sushiStaked'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        sushiSupply: {
          name: 'sushiSupply'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        sushiXsushiRatio: {
          name: 'sushiXsushiRatio'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        totalFeeAmount: {
          name: 'totalFeeAmount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        transactionCount: {
          name: 'transactionCount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        userCount: {
          name: 'userCount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        xSushiBurned: {
          name: 'xSushiBurned'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        xSushiMinted: {
          name: 'xSushiMinted'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        xSushiSupply: {
          name: 'xSushiSupply'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        xSushiSushiRatio: {
          name: 'xSushiSushiRatio'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
      }
    }
    XSushi_filter: {
      kind: 'INPUT_OBJECT'
      name: 'XSushi_filter'
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
          name: 'userCount'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'userCount_in'
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
          name: 'userCount_not_in'
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
          name: 'transactionCount'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'transactionCount_in'
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
          name: 'transactionCount_not_in'
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
          name: 'sushiSupply'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiSupply_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiSupply_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiSupply'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiSupply_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiStaked'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiStaked_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiStaked_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiHarvested'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalFeeAmount_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiBurned'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiBurned_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiMinted'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiMinted_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'xSushiSushiRatio_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiXsushiRatio_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr1m'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr1m_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr1m_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr3m'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr3m_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr3m_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr6m'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr6m_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr6m_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr12m'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'apr12m_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'apr12m_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'aprUpdatedAtTimestamp'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'aprUpdatedAtTimestamp_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'aprUpdatedAtTimestamp_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'aprUpdatedAtTimestamp_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'aprUpdatedAtTimestamp_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'aprUpdatedAtTimestamp_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'aprUpdatedAtTimestamp_in'
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
          name: 'aprUpdatedAtTimestamp_not_in'
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
              name: 'XSushi_filter'
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
              name: 'XSushi_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    XSushi_orderBy: {
      name: 'XSushi_orderBy'
      enumValues:
        | 'id'
        | 'userCount'
        | 'transactionCount'
        | 'sushiSupply'
        | 'xSushiSupply'
        | 'sushiStaked'
        | 'sushiHarvested'
        | 'totalFeeAmount'
        | 'xSushiBurned'
        | 'xSushiMinted'
        | 'xSushiSushiRatio'
        | 'sushiXsushiRatio'
        | 'apr1m'
        | 'apr3m'
        | 'apr6m'
        | 'apr12m'
        | 'aprUpdatedAtTimestamp'
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
