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
  name: 'master-chef-v1'
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
    History: {
      kind: 'OBJECT'
      name: 'History'
      fields: {
        block: {
          name: 'block'
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
        owner: {
          name: 'owner'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'MasterChef'; ofType: null }
          }
        }
        slpAge: {
          name: 'slpAge'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        slpAgeRemoved: {
          name: 'slpAgeRemoved'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        slpBalance: {
          name: 'slpBalance'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        slpDeposited: {
          name: 'slpDeposited'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        slpWithdrawn: {
          name: 'slpWithdrawn'
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
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
      }
    }
    History_filter: {
      kind: 'INPUT_OBJECT'
      name: 'History_filter'
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
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'owner_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'MasterChef_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'slpBalance'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpBalance_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpAge'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpAge_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpDeposited'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpDeposited_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
          name: 'block'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
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
              name: 'History_filter'
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
              name: 'History_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    History_orderBy: {
      name: 'History_orderBy'
      enumValues:
        | 'id'
        | 'owner'
        | 'owner__id'
        | 'owner__bonusMultiplier'
        | 'owner__bonusEndBlock'
        | 'owner__devaddr'
        | 'owner__migrator'
        | 'owner__owner'
        | 'owner__startBlock'
        | 'owner__sushi'
        | 'owner__sushiPerBlock'
        | 'owner__totalAllocPoint'
        | 'owner__poolCount'
        | 'owner__slpBalance'
        | 'owner__slpAge'
        | 'owner__slpAgeRemoved'
        | 'owner__slpDeposited'
        | 'owner__slpWithdrawn'
        | 'owner__updatedAt'
        | 'slpBalance'
        | 'slpAge'
        | 'slpAgeRemoved'
        | 'slpDeposited'
        | 'slpWithdrawn'
        | 'timestamp'
        | 'block'
    }
    ID: unknown
    Int: unknown
    Int8: unknown
    MasterChef: {
      kind: 'OBJECT'
      name: 'MasterChef'
      fields: {
        bonusEndBlock: {
          name: 'bonusEndBlock'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        bonusMultiplier: {
          name: 'bonusMultiplier'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        devaddr: {
          name: 'devaddr'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        history: {
          name: 'history'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'History'; ofType: null }
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
        migrator: {
          name: 'migrator'
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
        poolCount: {
          name: 'poolCount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
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
        slpAge: {
          name: 'slpAge'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        slpAgeRemoved: {
          name: 'slpAgeRemoved'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        slpBalance: {
          name: 'slpBalance'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        slpDeposited: {
          name: 'slpDeposited'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        slpWithdrawn: {
          name: 'slpWithdrawn'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        startBlock: {
          name: 'startBlock'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        sushi: {
          name: 'sushi'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        sushiPerBlock: {
          name: 'sushiPerBlock'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        totalAllocPoint: {
          name: 'totalAllocPoint'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        updatedAt: {
          name: 'updatedAt'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
      }
    }
    MasterChef_filter: {
      kind: 'INPUT_OBJECT'
      name: 'MasterChef_filter'
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
          name: 'bonusMultiplier'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'bonusMultiplier_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'bonusMultiplier_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'bonusMultiplier_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'bonusMultiplier_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'bonusMultiplier_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'bonusMultiplier_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'bonusMultiplier_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'bonusEndBlock'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'bonusEndBlock_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'bonusEndBlock_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'bonusEndBlock_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'bonusEndBlock_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'bonusEndBlock_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'bonusEndBlock_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'bonusEndBlock_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'devaddr'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'devaddr_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'devaddr_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'devaddr_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'devaddr_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'devaddr_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'devaddr_in'
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
          name: 'devaddr_not_in'
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
          name: 'devaddr_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'devaddr_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'migrator'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'migrator_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'migrator_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'migrator_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'migrator_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'migrator_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'migrator_in'
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
          name: 'migrator_not_in'
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
          name: 'migrator_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'migrator_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
          name: 'startBlock'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'startBlock_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'startBlock_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'startBlock_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'startBlock_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'startBlock_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'startBlock_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'startBlock_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushi'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushi_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushi_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushi_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushi_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushi_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushi_in'
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
          name: 'sushi_not_in'
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
          name: 'sushi_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushi_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiPerBlock'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiPerBlock_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiPerBlock_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiPerBlock_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiPerBlock_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiPerBlock_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiPerBlock_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiPerBlock_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalAllocPoint'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalAllocPoint_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalAllocPoint_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalAllocPoint_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalAllocPoint_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalAllocPoint_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'totalAllocPoint_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'totalAllocPoint_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pools_'
          type: { kind: 'INPUT_OBJECT'; name: 'Pool_filter'; ofType: null }
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
          name: 'slpBalance'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpBalance_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpAge'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpAge_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpDeposited'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpDeposited_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'history_'
          type: { kind: 'INPUT_OBJECT'; name: 'History_filter'; ofType: null }
          defaultValue: null
        },
        {
          name: 'updatedAt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'updatedAt_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'updatedAt_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'updatedAt_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'updatedAt_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'updatedAt_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'updatedAt_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'updatedAt_not_in'
          type: {
            kind: 'LIST'
            name: never
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
              name: 'MasterChef_filter'
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
              name: 'MasterChef_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    MasterChef_orderBy: {
      name: 'MasterChef_orderBy'
      enumValues:
        | 'id'
        | 'bonusMultiplier'
        | 'bonusEndBlock'
        | 'devaddr'
        | 'migrator'
        | 'owner'
        | 'startBlock'
        | 'sushi'
        | 'sushiPerBlock'
        | 'totalAllocPoint'
        | 'pools'
        | 'poolCount'
        | 'slpBalance'
        | 'slpAge'
        | 'slpAgeRemoved'
        | 'slpDeposited'
        | 'slpWithdrawn'
        | 'history'
        | 'updatedAt'
    }
    OrderDirection: { name: 'OrderDirection'; enumValues: 'asc' | 'desc' }
    Pool: {
      kind: 'OBJECT'
      name: 'Pool'
      fields: {
        accSushiPerShare: {
          name: 'accSushiPerShare'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        allocPoint: {
          name: 'allocPoint'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        balance: {
          name: 'balance'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        block: {
          name: 'block'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        entryUSD: {
          name: 'entryUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        exitUSD: {
          name: 'exitUSD'
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
        lastRewardBlock: {
          name: 'lastRewardBlock'
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
            ofType: { kind: 'OBJECT'; name: 'MasterChef'; ofType: null }
          }
        }
        pair: {
          name: 'pair'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        slpAge: {
          name: 'slpAge'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        slpAgeRemoved: {
          name: 'slpAgeRemoved'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        slpBalance: {
          name: 'slpBalance'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        slpDeposited: {
          name: 'slpDeposited'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        slpWithdrawn: {
          name: 'slpWithdrawn'
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
        sushiHarvestedUSD: {
          name: 'sushiHarvestedUSD'
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
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        updatedAt: {
          name: 'updatedAt'
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
    PoolHistory: {
      kind: 'OBJECT'
      name: 'PoolHistory'
      fields: {
        block: {
          name: 'block'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        entryUSD: {
          name: 'entryUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        exitUSD: {
          name: 'exitUSD'
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
        pool: {
          name: 'pool'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
          }
        }
        slpAge: {
          name: 'slpAge'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        slpAgeRemoved: {
          name: 'slpAgeRemoved'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        slpBalance: {
          name: 'slpBalance'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        slpDeposited: {
          name: 'slpDeposited'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        slpWithdrawn: {
          name: 'slpWithdrawn'
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
        sushiHarvestedUSD: {
          name: 'sushiHarvestedUSD'
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
      }
    }
    PoolHistory_filter: {
      kind: 'INPUT_OBJECT'
      name: 'PoolHistory_filter'
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
          name: 'slpBalance'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpBalance_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpAge'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpAge_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpDeposited'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpDeposited_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
          name: 'block'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'entryUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'entryUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'entryUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'entryUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'entryUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'entryUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'entryUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'entryUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'exitUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'exitUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'exitUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'exitUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'exitUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'exitUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'exitUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'exitUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
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
          name: 'sushiHarvestedUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
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
              name: 'PoolHistory_filter'
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
              name: 'PoolHistory_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    PoolHistory_orderBy: {
      name: 'PoolHistory_orderBy'
      enumValues:
        | 'id'
        | 'pool'
        | 'pool__id'
        | 'pool__pair'
        | 'pool__allocPoint'
        | 'pool__lastRewardBlock'
        | 'pool__accSushiPerShare'
        | 'pool__balance'
        | 'pool__userCount'
        | 'pool__slpBalance'
        | 'pool__slpAge'
        | 'pool__slpAgeRemoved'
        | 'pool__slpDeposited'
        | 'pool__slpWithdrawn'
        | 'pool__timestamp'
        | 'pool__block'
        | 'pool__updatedAt'
        | 'pool__entryUSD'
        | 'pool__exitUSD'
        | 'pool__sushiHarvested'
        | 'pool__sushiHarvestedUSD'
        | 'slpBalance'
        | 'slpAge'
        | 'slpAgeRemoved'
        | 'slpDeposited'
        | 'slpWithdrawn'
        | 'userCount'
        | 'timestamp'
        | 'block'
        | 'entryUSD'
        | 'exitUSD'
        | 'sushiHarvested'
        | 'sushiHarvestedUSD'
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
          name: 'owner'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'String'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'owner_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'owner_'
          type: {
            kind: 'INPUT_OBJECT'
            name: 'MasterChef_filter'
            ofType: null
          }
          defaultValue: null
        },
        {
          name: 'pair'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'pair_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'pair_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'allocPoint'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'allocPoint_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'allocPoint_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'allocPoint_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'allocPoint_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'allocPoint_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'allocPoint_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'allocPoint_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'lastRewardBlock'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'lastRewardBlock_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'lastRewardBlock_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'lastRewardBlock_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'lastRewardBlock_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'lastRewardBlock_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'lastRewardBlock_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'lastRewardBlock_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'accSushiPerShare'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'accSushiPerShare_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'accSushiPerShare_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'accSushiPerShare_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'accSushiPerShare_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'accSushiPerShare_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'accSushiPerShare_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'accSushiPerShare_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
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
          name: 'users_'
          type: { kind: 'INPUT_OBJECT'; name: 'User_filter'; ofType: null }
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
          name: 'slpBalance'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpBalance_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpAge'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAge_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpAge_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpAgeRemoved_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpDeposited'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpDeposited_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpDeposited_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'slpWithdrawn_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
          name: 'block'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'updatedAt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'updatedAt_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'updatedAt_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'updatedAt_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'updatedAt_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'updatedAt_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'updatedAt_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'updatedAt_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'entryUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'entryUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'entryUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'entryUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'entryUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'entryUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'entryUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'entryUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'exitUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'exitUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'exitUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'exitUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'exitUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'exitUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'exitUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'exitUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
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
          name: 'sushiHarvestedUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
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
        | 'owner'
        | 'owner__id'
        | 'owner__bonusMultiplier'
        | 'owner__bonusEndBlock'
        | 'owner__devaddr'
        | 'owner__migrator'
        | 'owner__owner'
        | 'owner__startBlock'
        | 'owner__sushi'
        | 'owner__sushiPerBlock'
        | 'owner__totalAllocPoint'
        | 'owner__poolCount'
        | 'owner__slpBalance'
        | 'owner__slpAge'
        | 'owner__slpAgeRemoved'
        | 'owner__slpDeposited'
        | 'owner__slpWithdrawn'
        | 'owner__updatedAt'
        | 'pair'
        | 'allocPoint'
        | 'lastRewardBlock'
        | 'accSushiPerShare'
        | 'balance'
        | 'users'
        | 'userCount'
        | 'slpBalance'
        | 'slpAge'
        | 'slpAgeRemoved'
        | 'slpDeposited'
        | 'slpWithdrawn'
        | 'timestamp'
        | 'block'
        | 'updatedAt'
        | 'entryUSD'
        | 'exitUSD'
        | 'sushiHarvested'
        | 'sushiHarvestedUSD'
    }
    Query: {
      kind: 'OBJECT'
      name: 'Query'
      fields: {
        _meta: {
          name: '_meta'
          type: { kind: 'OBJECT'; name: '_Meta_'; ofType: null }
        }
        histories: {
          name: 'histories'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'History'; ofType: null }
              }
            }
          }
        }
        history: {
          name: 'history'
          type: { kind: 'OBJECT'; name: 'History'; ofType: null }
        }
        masterChef: {
          name: 'masterChef'
          type: { kind: 'OBJECT'; name: 'MasterChef'; ofType: null }
        }
        masterChefs: {
          name: 'masterChefs'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'MasterChef'; ofType: null }
              }
            }
          }
        }
        pool: {
          name: 'pool'
          type: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
        }
        poolHistories: {
          name: 'poolHistories'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'PoolHistory'; ofType: null }
              }
            }
          }
        }
        poolHistory: {
          name: 'poolHistory'
          type: { kind: 'OBJECT'; name: 'PoolHistory'; ofType: null }
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
        histories: {
          name: 'histories'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'History'; ofType: null }
              }
            }
          }
        }
        history: {
          name: 'history'
          type: { kind: 'OBJECT'; name: 'History'; ofType: null }
        }
        masterChef: {
          name: 'masterChef'
          type: { kind: 'OBJECT'; name: 'MasterChef'; ofType: null }
        }
        masterChefs: {
          name: 'masterChefs'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'MasterChef'; ofType: null }
              }
            }
          }
        }
        pool: {
          name: 'pool'
          type: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
        }
        poolHistories: {
          name: 'poolHistories'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'PoolHistory'; ofType: null }
              }
            }
          }
        }
        poolHistory: {
          name: 'poolHistory'
          type: { kind: 'OBJECT'; name: 'PoolHistory'; ofType: null }
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
    Timestamp: unknown
    User: {
      kind: 'OBJECT'
      name: 'User'
      fields: {
        address: {
          name: 'address'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          }
        }
        amount: {
          name: 'amount'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        block: {
          name: 'block'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        entryUSD: {
          name: 'entryUSD'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          }
        }
        exitUSD: {
          name: 'exitUSD'
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
        pool: {
          name: 'pool'
          type: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
        }
        rewardDebt: {
          name: 'rewardDebt'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
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
        sushiHarvestedUSD: {
          name: 'sushiHarvestedUSD'
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
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
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
          name: 'address'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'address_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'address_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'address_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'address_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'address_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'address_in'
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
          name: 'address_not_in'
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
          name: 'address_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'address_not_contains'
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
          name: 'rewardDebt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewardDebt_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewardDebt_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewardDebt_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewardDebt_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewardDebt_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewardDebt_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'rewardDebt_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'entryUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'entryUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'entryUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'entryUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'entryUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'entryUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'entryUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'entryUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'exitUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'exitUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'exitUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'exitUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'exitUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'exitUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'exitUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'exitUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
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
          name: 'sushiHarvestedUSD'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_not'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_gt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_lt'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_gte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_lte'
          type: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiHarvestedUSD_not_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigDecimal'; ofType: null }
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
          name: 'block'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'block_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
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
        | 'address'
        | 'pool'
        | 'pool__id'
        | 'pool__pair'
        | 'pool__allocPoint'
        | 'pool__lastRewardBlock'
        | 'pool__accSushiPerShare'
        | 'pool__balance'
        | 'pool__userCount'
        | 'pool__slpBalance'
        | 'pool__slpAge'
        | 'pool__slpAgeRemoved'
        | 'pool__slpDeposited'
        | 'pool__slpWithdrawn'
        | 'pool__timestamp'
        | 'pool__block'
        | 'pool__updatedAt'
        | 'pool__entryUSD'
        | 'pool__exitUSD'
        | 'pool__sushiHarvested'
        | 'pool__sushiHarvestedUSD'
        | 'amount'
        | 'rewardDebt'
        | 'entryUSD'
        | 'exitUSD'
        | 'sushiHarvested'
        | 'sushiHarvestedUSD'
        | 'timestamp'
        | 'block'
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
