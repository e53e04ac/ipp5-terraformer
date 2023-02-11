# ipp5-terraformer

~~~~~ sh
npm install e53e04ac/ipp5-terraformer
~~~~~

~~~~~ mjs
import { Ipp5Terraformer } from 'e53e04ac/ipp5-terraformer';
~~~~~

~~~~~ mermaid
graph LR;
  A(["ipp5-terraformer"]);
  B0(["e53e04ac/azure-terraformer"]);
  B1(["e53e04ac/base"]);
  B2(["e53e04ac/event-emitter"]);
  B3(["e53e04ac/hold"]);
  B4(["e53e04ac/ipp5-configuration"]);
  C0(["@types/node"]);
  click B0 href "https://github.com/e53e04ac/azure-terraformer";
  click B1 href "https://github.com/e53e04ac/base";
  click B2 href "https://github.com/e53e04ac/event-emitter";
  click B3 href "https://github.com/e53e04ac/hold";
  click B4 href "https://github.com/e53e04ac/ipp5-configuration";
  subgraph "e53e04ac/ipp5-terraformer";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
    B2 --import--> A;
    B3 --import--> A;
    B4 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
  end;
~~~~~
