/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface UnipilotDeployerInterface extends utils.Interface {
  functions: {
    "parameters()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "parameters", values?: undefined): string;

  decodeFunctionResult(functionFragment: "parameters", data: BytesLike): Result;

  events: {};
}

export interface UnipilotDeployer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UnipilotDeployerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    parameters(overrides?: CallOverrides): Promise<
      [string, string, string, number] & {
        factory: string;
        tokenA: string;
        tokenB: string;
        fee: number;
      }
    >;
  };

  parameters(overrides?: CallOverrides): Promise<
    [string, string, string, number] & {
      factory: string;
      tokenA: string;
      tokenB: string;
      fee: number;
    }
  >;

  callStatic: {
    parameters(overrides?: CallOverrides): Promise<
      [string, string, string, number] & {
        factory: string;
        tokenA: string;
        tokenB: string;
        fee: number;
      }
    >;
  };

  filters: {};

  estimateGas: {
    parameters(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    parameters(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
