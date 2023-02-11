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
  click B_0 "https://github.com/e53e04ac/azure-terraformer/tree/cafb9b584749126974289df5354ae22c1aef6d90";
  click B_1 "https://github.com/e53e04ac/base/tree/86bc9dc951e32d7e173b8e7bf020b9439d75f8f7";
  click B_2 "https://github.com/e53e04ac/event-emitter/tree/964765f7141bb2ab94b8dc1b5c41323a8b8ab1e3";
  click B_3 "https://github.com/e53e04ac/hold/tree/385afd8049a499071f966af24caf970731543db4";
  click B_4 "https://github.com/e53e04ac/ipp5-configuration/tree/788eb02972a88181153d322227d722c784f825df";
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
