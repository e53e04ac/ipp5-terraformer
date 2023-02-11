# ipp5-terraformer

~~~~~ sh
npm install e53e04ac/ipp5-terraformer
~~~~~

~~~~~ mjs
import { Ipp5Terraformer } from 'e53e04ac/ipp5-terraformer';
~~~~~

~~~~~ mermaid
graph RL;
  A(["e53e04ac/ipp5-terraformer"]);
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
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  A --reference--> B_4;
  A --reference--> B_5;
  click B_0 "https://github.com/e53e04ac/azure-terraformer/tree/83f43112910867460a36834e2ae4dcd5a62d68ed";
  click B_1 "https://github.com/e53e04ac/base/tree/b4e091dbfeba0ea30c870ac7ac7877582e3fd4f0";
  click B_2 "https://github.com/e53e04ac/event-emitter/tree/289e6320381f1be4d43177944eca0a12b665c4f7";
  click B_3 "https://github.com/e53e04ac/hold/tree/2143f5f52192ae4156ea0af80d41c87c55355e9c";
  click B_4 "https://github.com/e53e04ac/ipp5-configuration/tree/6dcb25815a00c4d07df4a648713acea68733e69e";
  click B_5 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/ipp5-terraformer"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "azure-terraformer"
    D0(["AzureTerraformer"]);
  end;
  subgraph "event-emitter"
    D1(["EventEmitter"]);
  end;
  subgraph "hold"
    D2(["hold"]);
    D3(["unwrap"]);
    D4(["Get"]);
    D5(["ValueOrGet"]);
  end;
  subgraph "ipp5-configuration"
    D6(["Ipp5Configuration"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C0;
  D0 --import--> C1;
  D1 --import--> C1;
  D4 --import--> C1;
  D5 --import--> C1;
  D6 --import--> C1;
~~~~~
