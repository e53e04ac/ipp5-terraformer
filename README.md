# ipp5-terraformer

~~~~~ sh
npm install e53e04ac/ipp5-terraformer
~~~~~

~~~~~ mjs
import { Ipp5Terraformer } from 'ipp5-terraformer';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["azure-terraformer"]);
    B_1(["base"]);
    B_2(["event-emitter"]);
    B_3(["hold"]);
    B_4(["ipp5-configuration"]);
  end;
  subgraph "devDependencies";
    B_5(["@types/node"]);
  end;
  subgraph "github";
    C_0(["e53e04ac/azure-terraformer\n88063530559233a0139b1cd10d84f9dc3d356366"]);
    C_1(["e53e04ac/base\n58b103e868bb808365f57a91729e725c379c93a1"]);
    C_2(["e53e04ac/event-emitter\nb07aafda2d8ddb14a40a0fe63ea41de2b8b58ca3"]);
    C_3(["e53e04ac/hold\n6ce132702778d99c7f80a785e982419974dca8e5"]);
    C_4(["e53e04ac/ipp5-configuration\nfd5a4e687f49d4f3cd226f5ec4e1c1de7a322e4d"]);
  end;
  subgraph "npmjs";
    C_5(["@types/node\n18.15.11"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  B_5 ----> C_5;
  click C_0 "https://github.com/e53e04ac/azure-terraformer/tree/88063530559233a0139b1cd10d84f9dc3d356366";
  click C_1 "https://github.com/e53e04ac/base/tree/58b103e868bb808365f57a91729e725c379c93a1";
  click C_2 "https://github.com/e53e04ac/event-emitter/tree/b07aafda2d8ddb14a40a0fe63ea41de2b8b58ca3";
  click C_3 "https://github.com/e53e04ac/hold/tree/6ce132702778d99c7f80a785e982419974dca8e5";
  click C_4 "https://github.com/e53e04ac/ipp5-configuration/tree/fd5a4e687f49d4f3cd226f5ec4e1c1de7a322e4d";
  click C_5 "https://www.npmjs.com/package/@types/node/v/18.15.11";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-terraformer";
    E_0(["namespace Ipp5Terraformer"]);
    E_1(["type Ipp5Terraformer"]);
    E_2(["const Ipp5Terraformer"]);
  end;
  M["index.d.ts"]
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
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-terraformer";
    E_0(["Ipp5Terraformer"]);
  end;
  M["index.mjs"]
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
