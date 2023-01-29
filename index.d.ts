/*!
    @e53e04ac/ipp5-terraformer/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { AzureTerraformer } from 'azure-terraformer';
import { EventEmitter } from 'event-emitter';
import { Get } from 'hold';
import { ValueOrGet } from 'hold';
import { Ipp5Configuration } from 'ipp5-configuration';

export declare namespace Ipp5Terraformer {

    type EventSpecs = Record<never, never>;

    type Options = {
        readonly configuration: ValueOrGet<Ipp5Configuration>;
    };

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly azureTerraformer: Get<AzureTerraformer>;
        readonly createDefaultResourceGroup: Get<Promise<void>>;
        readonly createDefaultKeyvault: Get<Promise<void>>;
        readonly createDefaultStorageAccount: Get<Promise<void>>;
        readonly createDefaultAcr: Get<Promise<void>>;
        readonly createDefaultAppservicePlan: Get<Promise<void>>;
        readonly createFrontendWebapp: Get<Promise<void>>;
        readonly createBackendStaticWebapp: Get<Promise<void>>;
        readonly createBackendIdpWebapp: Get<Promise<void>>;
        readonly createBackendApiWebapp: Get<Promise<void>>;
        readonly createBackendBatchWebapp: Get<Promise<void>>;
        readonly createBackendStorageShare: Get<Promise<void>>;
        readonly createBackendBatchStorageShare: Get<Promise<void>>;
        readonly createPendingStorageTable: Get<Promise<void>>;
        readonly createRegisteredStorageTable: Get<Promise<void>>;
        readonly getDefaultKeyvaultInfo: Get<Promise<{
            readonly id: string;
        }>>;
        readonly getDefaultStorageAccountInfo: Get<Promise<{
            readonly id: string;
        }>>;
        readonly getDefaultStorageAccountKeys: Get<Promise<{
            readonly value: string;
        }[]>>;
        readonly getDefaultAcrInfo: Get<Promise<{
            readonly id: string;
        }>>;
        readonly getFrontendWebappIdentityInfo: Get<Promise<{
            readonly principalId: string;
        }>>;
        readonly getBackendStaticWebappIdentityInfo: Get<Promise<{
            readonly principalId: string;
        }>>;
        readonly getBackendIdpWebappIdentityInfo: Get<Promise<{
            readonly principalId: string;
        }>>;
        readonly getBackendApiWebappIdentityInfo: Get<Promise<{
            readonly principalId: string;
        }>>;
        readonly getBackendBatchWebappIdentityInfo: Get<Promise<{
            readonly principalId: string;
        }>>;
        readonly createBackendApiWebappBackendStorageShare: Get<Promise<void>>;
        readonly createBackendBatchWebappBackendStorageShare: Get<Promise<void>>;
        readonly createBackendBatchWebappBackendBatchStorageShare: Get<Promise<void>>;
        readonly createFrontendWebappAcrPullRole: Get<Promise<void>>;
        readonly createBackendStaticWebappAcrPullRole: Get<Promise<void>>;
        readonly createBackendIdpWebappAcrPullRole: Get<Promise<void>>;
        readonly createBackendApiWebappAcrPullRole: Get<Promise<void>>;
        readonly createBackendBatchWebappAcrPullRole: Get<Promise<void>>;
        readonly createBackendBatchWebappKeyvaultSecretPermissionsGetPolicy: Get<Promise<void>>;
        readonly createBackendIdpWebappPendingStorageTableDataContributorRole: Get<Promise<void>>;
        readonly createBackendIdpWebappRegisteredStorageTableDataContributorRole: Get<Promise<void>>;
    };

    type Self = EventEmitter<EventSpecs> & {
        readonly _Ipp5Terraformer: Get<_Self>;
        readonly terraform: Get<Promise<void>>;
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type Ipp5Terraformer = Ipp5Terraformer.Self;

export declare const Ipp5Terraformer: Ipp5Terraformer.ConstructorWithCompanion;
