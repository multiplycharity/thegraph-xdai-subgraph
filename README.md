Documentation is at https://thegraph.com/docs/define-a-subgraph.

I took the ERC20 ABI from https://github.com/graphprotocol/erc20-subgraph/blob/master/abis/ERC20.json and the ERC20 graph schema from https://github.com/graphprotocol/uniswap-subgraph/blob/master/schema.graphql.

Inspired by https://github.com/k06a/all-erc20-transfers-subgraph/blob/master/subgraph.yaml and corresponding https://thegraph.com/explorer/subgraph/k06a/all-erc20-transfers?query=Top%20USDT%20Hodlers.

## Setup

I initialized the subgraph in three steps:

1. `yarn global add @graphprotocol/graph-cli`
2. `graph init --from-contract 0x0Fd6e8F2320C90e9D4b3A5bd888c4D556d20AbD4 --network xdai --abi ABI.txt seichris/xdaiSarafuToken xdaiSarafuToken`
3. `graph auth https://api.thegraph.com/deploy/ <my auth key>`

## Deploy subgraph to thegraph.com/explorer

1. `yarn codegen`
2. `yarn deploy`
3. check `https://thegraph.com/explorer/subgraph/abundance-stack/xdai-sarafu-token`

## Which data do we want to see?

### Transfers

1. How many transactions were sent (in timeframe)?
2. How much volume was transferred (in timeframe)?

**Queries**

1. `tokenTransfers`
2. `...`

### Accounts

1. Which accounts transferred most (in timeframe)?
2. Current token balance of all Sarafu

**Queries**

1. ``
2. `accounts(first: 5, orderBy: balance, orderDirection: desc)`
