/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface UnipilotTokenProxyInterface extends ethers.utils.Interface {
  functions: {
    "mint(address,uint256)": FunctionFragment;
    "minter(address)": FunctionFragment;
    "timelock()": FunctionFragment;
    "updateMinter(address)": FunctionFragment;
    "updateTimelock(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: "minter", values: [string]): string;
  encodeFunctionData(functionFragment: "timelock", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateMinter",
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: "updateTimelock",
    values: [string],
  ): string;

  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateMinter",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateTimelock",
    data: BytesLike,
  ): Result;

  events: {
    "MinterUpdated(address,bool)": EventFragment;
    "TimelockUpdated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MinterUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TimelockUpdated"): EventFragment;
}

export type MinterUpdatedEvent = TypedEvent<
  [string, boolean] & { minter: string; status: boolean }
>;

export type TimelockUpdatedEvent = TypedEvent<
  [string, string] & { previousTimelock: string; newTimelock: string }
>;

export class UnipilotTokenProxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: UnipilotTokenProxyInterface;

  functions: {
    mint(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    minter(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    timelock(overrides?: CallOverrides): Promise<[string]>;

    updateMinter(
      _minter: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    updateTimelock(
      _timelock: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  mint(
    _to: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  minter(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  timelock(overrides?: CallOverrides): Promise<string>;

  updateMinter(
    _minter: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  updateTimelock(
    _timelock: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    mint(
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    minter(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    timelock(overrides?: CallOverrides): Promise<string>;

    updateMinter(_minter: string, overrides?: CallOverrides): Promise<void>;

    updateTimelock(_timelock: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "MinterUpdated(address,bool)"(
      minter?: null,
      status?: null,
    ): TypedEventFilter<[string, boolean], { minter: string; status: boolean }>;

    MinterUpdated(
      minter?: null,
      status?: null,
    ): TypedEventFilter<[string, boolean], { minter: string; status: boolean }>;

    "TimelockUpdated(address,address)"(
      previousTimelock?: null,
      newTimelock?: null,
    ): TypedEventFilter<
      [string, string],
      { previousTimelock: string; newTimelock: string }
    >;

    TimelockUpdated(
      previousTimelock?: null,
      newTimelock?: null,
    ): TypedEventFilter<
      [string, string],
      { previousTimelock: string; newTimelock: string }
    >;
  };

  estimateGas: {
    mint(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    minter(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    timelock(overrides?: CallOverrides): Promise<BigNumber>;

    updateMinter(
      _minter: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    updateTimelock(
      _timelock: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    mint(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    minter(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    timelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateMinter(
      _minter: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    updateTimelock(
      _timelock: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
