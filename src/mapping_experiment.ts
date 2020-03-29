import { BigDecimal, Bytes, EthereumEvent } from '@graphprotocol/graph-ts'

import { Contract, Approval, Transfer } from "../generated/Contract/Contract"

import { Transfer, ExampleEntity } from '../generated/schema'

const GENESIS_ADDRESS = '0x0000000000000000000000000000000000000000'

import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.spender = event.params.spender

  // Entities can be written to the store with `.save()`
  entity.save()
}

export function handleTransfer(event: Transfer): void {
  let transferEvent = new Transfer(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  transferEvent.token = event.address.toHex()
  transferEvent.amount = amount
  transferEvent.sender = source
  transferEvent.source = source
  transferEvent.destination = destination

  transferEvent.block = event.block.number
  transferEvent.timestamp = event.block.timestamp
  transferEvent.transaction = event.transaction.hash

  transferEvent.save()

  return transferEvent
}
