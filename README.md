# ipp5-terraformer

~~~~~ sh
npm install e53e04ac/ipp5-terraformer
~~~~~

~~~~~ mjs
import { Ipp5Terraformer } from 'e53e04ac/ipp5-terraformer';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["e53e04ac/azure-terraformer"]);
    B_1(["e53e04ac/base"]);
    B_2(["e53e04ac/event-emitter"]);
    B_3(["e53e04ac/hold"]);
    B_4(["e53e04ac/ipp5-configuration"]);
  end;
  subgraph "devDependencies";
    B_5(["@types/node"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  click B_0 "https://github.com/e53e04ac/azure-terraformer/tree/0894700dac012d6f5e31df50b30ae74e7089478a";
  click B_1 "https://github.com/e53e04ac/base/tree/ec922e97d594333727b64f0f4754321480a59c3c";
  click B_2 "https://github.com/e53e04ac/event-emitter/tree/58fd3772aa6977c80111d1af5425c38551c0da3e";
  click B_3 "https://github.com/e53e04ac/hold/tree/5dd6f94b8ecd94f98219a7afae52320676380c27";
  click B_4 "https://github.com/e53e04ac/ipp5-configuration/tree/76ea94f4248eb721a26aec0643053d40cd0ee65e";
  click B_5 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-terraformer";
    E_0(["Ipp5Terraformer"]);
  end;
  M(["index.mjs"])
  subgraph "azure-terraformer";
    I_0_0(["AzureTerraformer"]);
  end;
  subgraph "event-emitter";
    I_1_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_2_0(["hold"]);
    I_2_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-terraformer";
    E_0(["type Ipp5Terraformer"]);
    E_1(["const Ipp5Terraformer"]);
  end;
  M(["index.d.ts"])
  subgraph "azure-terraformer";
    I_0_0(["AzureTerraformer"]);
  end;
  subgraph "event-emitter";
    I_1_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_2_0(["Get"]);
    I_2_1(["ValueOrGet"]);
  end;
  subgraph "ipp5-configuration";
    I_3_0(["Ipp5Configuration"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  M ----> I_3_0;
  E_0 ----> M;
  E_1 ----> M;
~~~~~
