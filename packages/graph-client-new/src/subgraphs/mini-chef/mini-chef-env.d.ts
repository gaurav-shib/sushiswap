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
  name: 'mini-chef'
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
    ID: unknown
    Int: unknown
    Int8: unknown
    MiniChef: {
      kind: 'OBJECT'
      name: 'MiniChef'
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
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
            }
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
        sushiPerSecond: {
          name: 'sushiPerSecond'
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
        totalAllocPoint: {
          name: 'totalAllocPoint'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
      }
    }
    MiniChef_filter: {
      kind: 'INPUT_OBJECT'
      name: 'MiniChef_filter'
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
          name: 'sushiPerSecond'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiPerSecond_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiPerSecond_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiPerSecond_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiPerSecond_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiPerSecond_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiPerSecond_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'sushiPerSecond_not_in'
          type: {
            kind: 'LIST'
            name: never
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
              name: 'MiniChef_filter'
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
              name: 'MiniChef_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    MiniChef_orderBy: {
      name: 'MiniChef_orderBy'
      enumValues:
        | 'id'
        | 'sushi'
        | 'sushiPerSecond'
        | 'totalAllocPoint'
        | 'pools'
        | 'poolCount'
        | 'timestamp'
        | 'block'
    }
    NativeRewarderPool: {
      kind: 'OBJECT'
      name: 'NativeRewarderPool'
      fields: {
        allocPoint: {
          name: 'allocPoint'
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
      }
    }
    NativeRewarderPool_filter: {
      kind: 'INPUT_OBJECT'
      name: 'NativeRewarderPool_filter'
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
              name: 'NativeRewarderPool_filter'
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
              name: 'NativeRewarderPool_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    NativeRewarderPool_orderBy: {
      name: 'NativeRewarderPool_orderBy'
      enumValues: 'id' | 'allocPoint'
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
        lastRewardTime: {
          name: 'lastRewardTime'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        miniChef: {
          name: 'miniChef'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'OBJECT'; name: 'MiniChef'; ofType: null }
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
        rewarder: {
          name: 'rewarder'
          type: { kind: 'OBJECT'; name: 'Rewarder'; ofType: null }
        }
        slpBalance: {
          name: 'slpBalance'
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
          name: 'miniChef'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'miniChef_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'miniChef_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'miniChef_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'miniChef_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'miniChef_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'miniChef_in'
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
          name: 'miniChef_not_in'
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
          name: 'miniChef_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'miniChef_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'miniChef_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'miniChef_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'miniChef_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'miniChef_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'miniChef_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'miniChef_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'miniChef_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'miniChef_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'miniChef_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'miniChef_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'miniChef_'
          type: { kind: 'INPUT_OBJECT'; name: 'MiniChef_filter'; ofType: null }
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
          name: 'rewarder'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewarder_not'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewarder_gt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewarder_lt'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewarder_gte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewarder_lte'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewarder_in'
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
          name: 'rewarder_not_in'
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
          name: 'rewarder_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewarder_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewarder_not_contains'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewarder_not_contains_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewarder_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewarder_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewarder_not_starts_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewarder_not_starts_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewarder_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewarder_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewarder_not_ends_with'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewarder_not_ends_with_nocase'
          type: { kind: 'SCALAR'; name: 'String'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewarder_'
          type: { kind: 'INPUT_OBJECT'; name: 'Rewarder_filter'; ofType: null }
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
          name: 'lastRewardTime'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'lastRewardTime_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'lastRewardTime_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'lastRewardTime_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'lastRewardTime_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'lastRewardTime_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'lastRewardTime_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'lastRewardTime_not_in'
          type: {
            kind: 'LIST'
            name: never
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
          name: 'slpBalance'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'slpBalance_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
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
        | 'miniChef'
        | 'miniChef__id'
        | 'miniChef__sushi'
        | 'miniChef__sushiPerSecond'
        | 'miniChef__totalAllocPoint'
        | 'miniChef__poolCount'
        | 'miniChef__timestamp'
        | 'miniChef__block'
        | 'pair'
        | 'rewarder'
        | 'rewarder__id'
        | 'rewarder__rewardToken'
        | 'rewarder__rewardPerSecond'
        | 'rewarder__totalAllocPoint'
        | 'rewarder__timestamp'
        | 'rewarder__block'
        | 'allocPoint'
        | 'lastRewardTime'
        | 'accSushiPerShare'
        | 'slpBalance'
        | 'users'
        | 'userCount'
        | 'timestamp'
        | 'block'
    }
    Query: {
      kind: 'OBJECT'
      name: 'Query'
      fields: {
        _meta: {
          name: '_meta'
          type: { kind: 'OBJECT'; name: '_Meta_'; ofType: null }
        }
        miniChef: {
          name: 'miniChef'
          type: { kind: 'OBJECT'; name: 'MiniChef'; ofType: null }
        }
        miniChefs: {
          name: 'miniChefs'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'MiniChef'; ofType: null }
              }
            }
          }
        }
        nativeRewarderPool: {
          name: 'nativeRewarderPool'
          type: { kind: 'OBJECT'; name: 'NativeRewarderPool'; ofType: null }
        }
        nativeRewarderPools: {
          name: 'nativeRewarderPools'
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
                  name: 'NativeRewarderPool'
                  ofType: null
                }
              }
            }
          }
        }
        pool: {
          name: 'pool'
          type: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
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
        rewarder: {
          name: 'rewarder'
          type: { kind: 'OBJECT'; name: 'Rewarder'; ofType: null }
        }
        rewarders: {
          name: 'rewarders'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Rewarder'; ofType: null }
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
    Rewarder: {
      kind: 'OBJECT'
      name: 'Rewarder'
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
        rewardPerSecond: {
          name: 'rewardPerSecond'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
        rewardToken: {
          name: 'rewardToken'
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
        totalAllocPoint: {
          name: 'totalAllocPoint'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          }
        }
      }
    }
    Rewarder_filter: {
      kind: 'INPUT_OBJECT'
      name: 'Rewarder_filter'
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
          name: 'rewardToken'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewardToken_not'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewardToken_gt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewardToken_lt'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewardToken_gte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewardToken_lte'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewardToken_in'
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
          name: 'rewardToken_not_in'
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
          name: 'rewardToken_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewardToken_not_contains'
          type: { kind: 'SCALAR'; name: 'Bytes'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewardPerSecond'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewardPerSecond_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewardPerSecond_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewardPerSecond_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewardPerSecond_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewardPerSecond_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'rewardPerSecond_in'
          type: {
            kind: 'LIST'
            name: never
            ofType: {
              kind: 'NON_NULL'
              name: never
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
            }
          }
          defaultValue: null
        },
        {
          name: 'rewardPerSecond_not_in'
          type: {
            kind: 'LIST'
            name: never
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
              name: 'Rewarder_filter'
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
              name: 'Rewarder_filter'
              ofType: null
            }
          }
          defaultValue: null
        },
      ]
    }
    Rewarder_orderBy: {
      name: 'Rewarder_orderBy'
      enumValues:
        | 'id'
        | 'rewardToken'
        | 'rewardPerSecond'
        | 'totalAllocPoint'
        | 'timestamp'
        | 'block'
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
        miniChef: {
          name: 'miniChef'
          type: { kind: 'OBJECT'; name: 'MiniChef'; ofType: null }
        }
        miniChefs: {
          name: 'miniChefs'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'MiniChef'; ofType: null }
              }
            }
          }
        }
        nativeRewarderPool: {
          name: 'nativeRewarderPool'
          type: { kind: 'OBJECT'; name: 'NativeRewarderPool'; ofType: null }
        }
        nativeRewarderPools: {
          name: 'nativeRewarderPools'
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
                  name: 'NativeRewarderPool'
                  ofType: null
                }
              }
            }
          }
        }
        pool: {
          name: 'pool'
          type: { kind: 'OBJECT'; name: 'Pool'; ofType: null }
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
        rewarder: {
          name: 'rewarder'
          type: { kind: 'OBJECT'; name: 'Rewarder'; ofType: null }
        }
        rewarders: {
          name: 'rewarders'
          type: {
            kind: 'NON_NULL'
            name: never
            ofType: {
              kind: 'LIST'
              name: never
              ofType: {
                kind: 'NON_NULL'
                name: never
                ofType: { kind: 'OBJECT'; name: 'Rewarder'; ofType: null }
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
          name: 'sushiHarvested'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_not'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_gt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_lt'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_gte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
          defaultValue: null
        },
        {
          name: 'sushiHarvested_lte'
          type: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
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
              ofType: { kind: 'SCALAR'; name: 'BigInt'; ofType: null }
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
        | 'pool__lastRewardTime'
        | 'pool__accSushiPerShare'
        | 'pool__slpBalance'
        | 'pool__userCount'
        | 'pool__timestamp'
        | 'pool__block'
        | 'amount'
        | 'rewardDebt'
        | 'sushiHarvested'
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
