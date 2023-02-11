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
  click B_0 "https://github.com/e53e04ac/azure-terraformer/tree/8d9ed1349321411331432f746aada8a2c4874046";
  click B_1 "https://github.com/e53e04ac/base/tree/2dc903faf7859d755dd52f7fde706be5170b9a6f";
  click B_2 "https://github.com/e53e04ac/event-emitter/tree/0c338d821268a5f0aaa42481216fd2e73c8734c9";
  click B_3 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_4 "https://github.com/e53e04ac/ipp5-configuration/tree/ffcf50c4f21af8ae25a7df8bb91b37d38e2f7f4e";
  click B_5 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph RL;
  A(["index.mjs"])
  subgraph "azure-terraformer";
    B_0_0(["AzureTerraformer"]);
  end;
  subgraph "event-emitter";
    B_1_0(["EventEmitter"]);
  end;
  subgraph "hold";
    B_2_0(["hold"]);
    B_2_1(["unwrap"]);
  end;
  A ----> B_0_0;
  A ----> B_1_0;
  A ----> B_2_0;
  A ----> B_2_1;
~~~~~

~~~~~ mermaid
graph RL;
  A(["index.d.ts"])
  subgraph "azure-terraformer";
    B_0_0(["AzureTerraformer"]);
  end;
  subgraph "event-emitter";
    B_1_0(["EventEmitter"]);
  end;
  subgraph "hold";
    B_2_0(["Get"]);
    B_2_1(["ValueOrGet"]);
  end;
  subgraph "ipp5-configuration";
    B_3_0(["Ipp5Configuration"]);
  end;
  A ----> B_0_0;
  A ----> B_1_0;
  A ----> B_2_0;
  A ----> B_2_1;
  A ----> B_3_0;
~~~~~
