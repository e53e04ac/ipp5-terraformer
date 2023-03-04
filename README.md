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
    C_0(["e53e04ac/azure-terraformer\n16560692233a91b14cc61b3efbf82150630ab55d"]);
    C_1(["e53e04ac/base\ne35c91c119067c191178231a2f7db2a8be9e49fa"]);
    C_2(["e53e04ac/event-emitter\nf8600a5c4de347aa3374c8a40ea315afdcde0d3b"]);
    C_3(["e53e04ac/hold\ndb62bd33b4c93d0fb459b06c3b707d82924c6077"]);
    C_4(["e53e04ac/ipp5-configuration\n1c74edb0af449e7fff2219d7ba38e70f083b6bdb"]);
  end;
  subgraph "npmjs";
    C_5(["@types/node\n18.14.6"]);
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
  click C_0 "https://github.com/e53e04ac/azure-terraformer/tree/16560692233a91b14cc61b3efbf82150630ab55d";
  click C_1 "https://github.com/e53e04ac/base/tree/e35c91c119067c191178231a2f7db2a8be9e49fa";
  click C_2 "https://github.com/e53e04ac/event-emitter/tree/f8600a5c4de347aa3374c8a40ea315afdcde0d3b";
  click C_3 "https://github.com/e53e04ac/hold/tree/db62bd33b4c93d0fb459b06c3b707d82924c6077";
  click C_4 "https://github.com/e53e04ac/ipp5-configuration/tree/1c74edb0af449e7fff2219d7ba38e70f083b6bdb";
  click C_5 "https://www.npmjs.com/package/@types/node/v/18.14.6";
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
