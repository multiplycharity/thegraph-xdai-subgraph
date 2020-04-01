Query the subgraph from https://thegraph.com/explorer/subgraph/abundance-stack/xdai-sarafu-token?version=current.

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

## Querying the xDAI Sarafu contract

### Last 5 (or any other number of) transfers

Show me the last 5 transactions
```
tokenTransfers (first: 5, orderBy: timestamp, orderDirection: desc) {
    id
    token
    amount
    block
    timestamp
  }
```

### Transfers in the last 30 days

How many transactions were sent (in timeframe)?
How much volume was transferred (in timeframe)?

```
tokenTransfers(first: 5, orderBy: timestamp, orderDirection: desc, where: {timestamp: "2592000"}) {
    id
    token
    amount
    block
    timestamp
  }
```

### Looking at 5 (or any other number of) accounts

Which accounts hold most // Top 5 token whales
```
accounts(first: 5, orderBy: balance, orderDirection: desc) {
    id
    account
    token
    balance
  }
```

Which accounts transferred most volume (in timeframe)?
Which accounts has most number of trades (in timeframe)?
Total balance of Sarafu in existence

### Looking at all transfers

Total amount of transfers
Total volume traded

### Looking at one account

**Current state of certain account**

Current balance of certain account

```
accounts(first: 5, orderBy: timestamp, orderDirection: desc, where: {account: "0xbdb3bc887c3b70586bc25d04d89ec802b897fc5f"}) {
    balance
  }
```

Total trade volume of certain account
```
......
```

Total number of trades of certain account
```
......
```

**Last 5 ...**

Last 5 transfers from certain account
```
tokenTransfers(first: 5, orderBy: timestamp, orderDirection: desc, where: {sender: "0x00036d3df07ba5d3ec5ed4aa87d15acae5fb00f0"}) {
    id
    sender
    token
    amount
    timestamp
  }
```

Last 5 transfers received by certain account
```
tokenTransfers(first: 5, orderBy: timestamp, orderDirection: desc, where: {receiver: "0x00036d3df07ba5d3ec5ed4aa87d15acae5fb00f0"}) {
    id
    receiver
    token
    amount
    timestamp
  }
```

Total trade volume of certain account
```
......
```

Total number of trades of certain account
```
......
```
