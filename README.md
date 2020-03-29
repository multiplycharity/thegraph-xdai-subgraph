Documentation is at https://thegraph.com/docs/define-a-subgraph.

I took the ERC20 ABI from https://github.com/graphprotocol/erc20-subgraph/blob/master/abis/ERC20.json and the ERC20 graph schema from https://github.com/graphprotocol/uniswap-subgraph/blob/master/schema.graphql.

I initialized the subgraph in three steps:

1. `yarn global add @graphprotocol/graph-cli`
2. `graph init --from-contract 0x0Fd6e8F2320C90e9D4b3A5bd888c4D556d20AbD4 --network xdai --abi ABI.txt seichris/xdaiSarafuToken xdaiSarafuToken`
3. `graph auth https://api.thegraph.com/deploy/ <my auth key>`
