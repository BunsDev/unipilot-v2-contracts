/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface UnipilotMathsInterface extends utils.Interface {
  functions: {
    "PRECISION()": FunctionFragment;
    "currentTick(IUniswapV3Pool)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(functionFragment: "currentTick", values: [string]): string;

  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentTick",
    data: BytesLike,
  ): Result;

  events: {};
}

export interface UnipilotMaths extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UnipilotMathsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    currentTick(
      pool: string,
      overrides?: CallOverrides,
    ): Promise<[number] & { tick: number }>;
  };

  PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  currentTick(pool: string, overrides?: CallOverrides): Promise<number>;

  callStatic: {
    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    currentTick(pool: string, overrides?: CallOverrides): Promise<number>;
  };

  filters: {};

  estimateGas: {
    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    currentTick(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentTick(
      pool: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
