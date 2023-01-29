/*!
    @e53e04ac/ipp5-terraformer/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { AzureTerraformer } from 'azure-terraformer';
import { EventEmitter } from 'event-emitter';
import { hold } from 'hold';
import { unwrap } from 'hold';

/** @type {import('.').Ipp5Terraformer.Constructor} */
const constructor = ((options) => {

    const _options = ({
        configuration: hold(() => {
            return unwrap(options.configuration);
        }),
    });

    /** @type {import('.').Ipp5Terraformer._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        azureTerraformer: hold(() => {
            return AzureTerraformer({});
        }),
        createDefaultResourceGroup: hold(async () => {
            await _self.azureTerraformer().azGroupCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().defaultResouceGroup.subscription,
                name: _options.configuration().defaultResouceGroup.name,
                location: _options.configuration().defaultResouceGroup.location,
            });
        }),
        createDefaultKeyvault: hold(async () => {
            await _self.azureTerraformer().azKeyvaultCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().defaultKeyvault.subscription,
                resourceGroup: _options.configuration().defaultKeyvault.resourceGroup,
                name: _options.configuration().defaultKeyvault.name,
                location: _options.configuration().defaultKeyvault.location,
                sku: 'standard',
            });
            await _self.azureTerraformer().azKeyvaultUpdate({
                az: _options.configuration().az,
                subscription: _options.configuration().defaultKeyvault.subscription,
                resourceGroup: _options.configuration().defaultKeyvault.resourceGroup,
                name: _options.configuration().defaultKeyvault.name,
                publicNetworkAccess: 'Enabled',
                retentionDays: 7,
            });
        }),
        createDefaultStorageAccount: hold(async () => {
            await _self.azureTerraformer().azStorageAccountCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().defaultStorageAccount.subscription,
                resourceGroup: _options.configuration().defaultStorageAccount.resourceGroup,
                name: _options.configuration().defaultStorageAccount.name,
                location: _options.configuration().defaultStorageAccount.location,
                sku: 'Standard_LRS',
            });
            await _self.azureTerraformer().azStorageAccountUpdate({
                az: _options.configuration().az,
                subscription: _options.configuration().defaultStorageAccount.subscription,
                resourceGroup: _options.configuration().defaultStorageAccount.resourceGroup,
                name: _options.configuration().defaultStorageAccount.name,
                allowBlobPublicAccess: true,
                allowCrossTenantReplication: false,
                enableSftp: false,
                httpsOnly: true,
                minTlsVersion: 'TLS1_2',
                publicNetworkAccess: 'Enabled',
                routingChoice: 'MicrosoftRouting',
            });
            await _self.azureTerraformer().azStorageAccountFileServicePropertiesUpdate({
                az: _options.configuration().az,
                subscription: _options.configuration().defaultStorageAccount.subscription,
                accountName: _options.configuration().defaultStorageAccount.name,
                enableDeleteRetention: false,
            });
        }),
        createDefaultAcr: hold(async () => {
            await _self.azureTerraformer().azAcrCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().defaultAcr.subscription,
                resourceGroup: _options.configuration().defaultAcr.resourceGroup,
                name: _options.configuration().defaultAcr.name,
                location: _options.configuration().defaultAcr.location,
                sku: 'Basic',
            });
            await _self.azureTerraformer().azAcrUpdate({
                az: _options.configuration().az,
                subscription: _options.configuration().defaultAcr.subscription,
                resourceGroup: _options.configuration().defaultAcr.resourceGroup,
                name: _options.configuration().defaultAcr.name,
                adminEnabled: false,
            });
        }),
        createDefaultAppservicePlan: hold(async () => {
            await _self.azureTerraformer().azAppservicePlanCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().defaultAppservicePlan.subscription,
                resourceGroup: _options.configuration().defaultAppservicePlan.resourceGroup,
                name: _options.configuration().defaultAppservicePlan.name,
                location: _options.configuration().defaultAppservicePlan.location,
                sku: 'B1',
                isLinux: true,
            });
            await _self.azureTerraformer().azAppservicePlanUpdate({
                az: _options.configuration().az,
                subscription: _options.configuration().defaultAppservicePlan.subscription,
                resourceGroup: _options.configuration().defaultAppservicePlan.resourceGroup,
                name: _options.configuration().defaultAppservicePlan.name,
                numberOfWorkers: 1,
            });
        }),
        createFrontendWebapp: hold(async () => {
            await _self.azureTerraformer().azWebappCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().frontendWebapp.subscription,
                resourceGroup: _options.configuration().frontendWebapp.resourceGroup,
                name: _options.configuration().frontendWebapp.name,
                plan: _options.configuration().frontendWebapp.plan,
                deploymentContainerImageName: _options.configuration().frontendWebapp.deploymentContainerImageName,
            });
            await _self.azureTerraformer().azWebappUpdate({
                az: _options.configuration().az,
                subscription: _options.configuration().frontendWebapp.subscription,
                resourceGroup: _options.configuration().frontendWebapp.resourceGroup,
                name: _options.configuration().frontendWebapp.name,
                clientAffinityEnabled: false,
                httpsOnly: true,
            });
            await _self.azureTerraformer().azWebappConfigSet({
                az: _options.configuration().az,
                subscription: _options.configuration().frontendWebapp.subscription,
                resourceGroup: _options.configuration().frontendWebapp.resourceGroup,
                name: _options.configuration().frontendWebapp.name,
                alwaysOn: false,
                ftpsState: 'Disabled',
                http20Enabled: true,
                minTlsVersion: '1.2',
                numberOfWorkers: 1,
                remoteDebuggingEnabled: false,
                use32bitWorkerProcess: false,
                webSocketsEnabled: false,
            });
            await _self.azureTerraformer().azWebappIdentityAssign({
                az: _options.configuration().az,
                subscription: _options.configuration().frontendWebapp.subscription,
                resourceGroup: _options.configuration().frontendWebapp.resourceGroup,
                name: _options.configuration().frontendWebapp.name,
            });
        }),
        createBackendStaticWebapp: hold(async () => {
            await _self.azureTerraformer().azWebappCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().backendStaticWebapp.subscription,
                resourceGroup: _options.configuration().backendStaticWebapp.resourceGroup,
                name: _options.configuration().backendStaticWebapp.name,
                plan: _options.configuration().backendStaticWebapp.plan,
                deploymentContainerImageName: _options.configuration().backendStaticWebapp.deploymentContainerImageName,
            });
            await _self.azureTerraformer().azWebappUpdate({
                az: _options.configuration().az,
                subscription: _options.configuration().backendStaticWebapp.subscription,
                resourceGroup: _options.configuration().backendStaticWebapp.resourceGroup,
                name: _options.configuration().backendStaticWebapp.name,
                clientAffinityEnabled: false,
                httpsOnly: true,
            });
            await _self.azureTerraformer().azWebappConfigSet({
                az: _options.configuration().az,
                subscription: _options.configuration().backendStaticWebapp.subscription,
                resourceGroup: _options.configuration().backendStaticWebapp.resourceGroup,
                name: _options.configuration().backendStaticWebapp.name,
                alwaysOn: false,
                ftpsState: 'Disabled',
                http20Enabled: true,
                minTlsVersion: '1.2',
                numberOfWorkers: 1,
                remoteDebuggingEnabled: false,
                use32bitWorkerProcess: false,
                webSocketsEnabled: false,
            });
            await _self.azureTerraformer().azWebappIdentityAssign({
                az: _options.configuration().az,
                subscription: _options.configuration().backendStaticWebapp.subscription,
                resourceGroup: _options.configuration().backendStaticWebapp.resourceGroup,
                name: _options.configuration().backendStaticWebapp.name,
            });
        }),
        createBackendIdpWebapp: hold(async () => {
            await _self.azureTerraformer().azWebappCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().backendIdpWebapp.subscription,
                resourceGroup: _options.configuration().backendIdpWebapp.resourceGroup,
                name: _options.configuration().backendIdpWebapp.name,
                plan: _options.configuration().backendIdpWebapp.plan,
                deploymentContainerImageName: _options.configuration().backendIdpWebapp.deploymentContainerImageName,
            });
            await _self.azureTerraformer().azWebappUpdate({
                az: _options.configuration().az,
                subscription: _options.configuration().backendIdpWebapp.subscription,
                resourceGroup: _options.configuration().backendIdpWebapp.resourceGroup,
                name: _options.configuration().backendIdpWebapp.name,
                clientAffinityEnabled: false,
                httpsOnly: true,
            });
            await _self.azureTerraformer().azWebappConfigSet({
                az: _options.configuration().az,
                subscription: _options.configuration().backendIdpWebapp.subscription,
                resourceGroup: _options.configuration().backendIdpWebapp.resourceGroup,
                name: _options.configuration().backendIdpWebapp.name,
                alwaysOn: false,
                ftpsState: 'Disabled',
                http20Enabled: true,
                minTlsVersion: '1.2',
                numberOfWorkers: 1,
                remoteDebuggingEnabled: false,
                use32bitWorkerProcess: false,
                webSocketsEnabled: false,
            });
            await _self.azureTerraformer().azWebappIdentityAssign({
                az: _options.configuration().az,
                subscription: _options.configuration().backendIdpWebapp.subscription,
                resourceGroup: _options.configuration().backendIdpWebapp.resourceGroup,
                name: _options.configuration().backendIdpWebapp.name,
            });
        }),
        createBackendApiWebapp: hold(async () => {
            await _self.azureTerraformer().azWebappCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().backendApiWebapp.subscription,
                resourceGroup: _options.configuration().backendApiWebapp.resourceGroup,
                name: _options.configuration().backendApiWebapp.name,
                plan: _options.configuration().backendApiWebapp.plan,
                deploymentContainerImageName: _options.configuration().backendApiWebapp.deploymentContainerImageName,
            });
            await _self.azureTerraformer().azWebappUpdate({
                az: _options.configuration().az,
                subscription: _options.configuration().backendApiWebapp.subscription,
                resourceGroup: _options.configuration().backendApiWebapp.resourceGroup,
                name: _options.configuration().backendApiWebapp.name,
                clientAffinityEnabled: false,
                httpsOnly: true,
            });
            await _self.azureTerraformer().azWebappConfigSet({
                az: _options.configuration().az,
                subscription: _options.configuration().backendApiWebapp.subscription,
                resourceGroup: _options.configuration().backendApiWebapp.resourceGroup,
                name: _options.configuration().backendApiWebapp.name,
                alwaysOn: false,
                ftpsState: 'Disabled',
                http20Enabled: true,
                minTlsVersion: '1.2',
                numberOfWorkers: 1,
                remoteDebuggingEnabled: false,
                use32bitWorkerProcess: false,
                webSocketsEnabled: false,
            });
            await _self.azureTerraformer().azWebappIdentityAssign({
                az: _options.configuration().az,
                subscription: _options.configuration().backendApiWebapp.subscription,
                resourceGroup: _options.configuration().backendApiWebapp.resourceGroup,
                name: _options.configuration().backendApiWebapp.name,
            });
        }),
        createBackendBatchWebapp: hold(async () => {
            await _self.azureTerraformer().azWebappCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().backendBatchWebapp.subscription,
                resourceGroup: _options.configuration().backendBatchWebapp.resourceGroup,
                name: _options.configuration().backendBatchWebapp.name,
                plan: _options.configuration().backendBatchWebapp.plan,
                deploymentContainerImageName: _options.configuration().backendBatchWebapp.deploymentContainerImageName,
            });
            await _self.azureTerraformer().azWebappUpdate({
                az: _options.configuration().az,
                subscription: _options.configuration().backendBatchWebapp.subscription,
                resourceGroup: _options.configuration().backendBatchWebapp.resourceGroup,
                name: _options.configuration().backendBatchWebapp.name,
                clientAffinityEnabled: false,
                httpsOnly: true,
            });
            await _self.azureTerraformer().azWebappConfigSet({
                az: _options.configuration().az,
                subscription: _options.configuration().backendBatchWebapp.subscription,
                resourceGroup: _options.configuration().backendBatchWebapp.resourceGroup,
                name: _options.configuration().backendBatchWebapp.name,
                alwaysOn: false,
                ftpsState: 'Disabled',
                http20Enabled: true,
                minTlsVersion: '1.2',
                numberOfWorkers: 1,
                remoteDebuggingEnabled: false,
                use32bitWorkerProcess: false,
                webSocketsEnabled: false,
            });
            await _self.azureTerraformer().azWebappIdentityAssign({
                az: _options.configuration().az,
                subscription: _options.configuration().backendBatchWebapp.subscription,
                resourceGroup: _options.configuration().backendBatchWebapp.resourceGroup,
                name: _options.configuration().backendBatchWebapp.name,
            });
        }),
        createBackendStorageShare: hold(async () => {
            await _self.azureTerraformer().azStorageShareCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().backendStorageShare.subscription,
                accountName: _options.configuration().backendStorageShare.accountName,
                name: _options.configuration().backendStorageShare.name,
            });
            await _self.azureTerraformer().azStorageShareUpdate({
                az: _options.configuration().az,
                subscription: _options.configuration().backendStorageShare.subscription,
                accountName: _options.configuration().backendStorageShare.accountName,
                name: _options.configuration().backendStorageShare.name,
                quota: 32,
            });
        }),
        createBackendBatchStorageShare: hold(async () => {
            await _self.azureTerraformer().azStorageShareCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().backendBatchStorageShare.subscription,
                accountName: _options.configuration().backendBatchStorageShare.accountName,
                name: _options.configuration().backendBatchStorageShare.name,
            });
            await _self.azureTerraformer().azStorageShareUpdate({
                az: _options.configuration().az,
                subscription: _options.configuration().backendBatchStorageShare.subscription,
                accountName: _options.configuration().backendBatchStorageShare.accountName,
                name: _options.configuration().backendBatchStorageShare.name,
                quota: 32,
            });
        }),
        createPendingStorageTable: hold(async () => {
            await _self.azureTerraformer().azStorageTableCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().pendingStorageTable.subscription,
                accountName: _options.configuration().pendingStorageTable.accountName,
                name: _options.configuration().pendingStorageTable.name,
            });
        }),
        createRegisteredStorageTable: hold(async () => {
            await _self.azureTerraformer().azStorageTableCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().pendingStorageTable.subscription,
                accountName: _options.configuration().registeredStorageTable.accountName,
                name: _options.configuration().registeredStorageTable.name,
            });
        }),
        getDefaultKeyvaultInfo: hold(async () => {
            const azKeyvaultShowResult = await _self.azureTerraformer().azKeyvaultShow({
                az: _options.configuration().az,
                subscription: _options.configuration().defaultKeyvault.subscription,
                resourceGroup: _options.configuration().defaultKeyvault.resourceGroup,
                name: _options.configuration().defaultKeyvault.name,
            });
            return azKeyvaultShowResult;
        }),
        getDefaultStorageAccountInfo: hold(async () => {
            const azStorageAccountShowResult = await _self.azureTerraformer().azStorageAccountShow({
                az: _options.configuration().az,
                subscription: _options.configuration().defaultStorageAccount.subscription,
                resourceGroup: _options.configuration().defaultStorageAccount.resourceGroup,
                name: _options.configuration().defaultStorageAccount.name,
            });
            return azStorageAccountShowResult;
        }),
        getDefaultStorageAccountKeys: hold(async () => {
            const azStorageAccountKeysListResult = await _self.azureTerraformer().azStorageAccountKeysList({
                az: _options.configuration().az,
                subscription: _options.configuration().defaultStorageAccount.subscription,
                resourceGroup: _options.configuration().defaultStorageAccount.resourceGroup,
                accountName: _options.configuration().defaultStorageAccount.name,
            });
            return azStorageAccountKeysListResult;
        }),
        getDefaultAcrInfo: hold(async () => {
            const azAcrShowResult = await _self.azureTerraformer().azAcrShow({
                az: _options.configuration().az,
                subscription: _options.configuration().defaultAcr.subscription,
                resourceGroup: _options.configuration().defaultAcr.resourceGroup,
                name: _options.configuration().defaultAcr.name,
            });
            return azAcrShowResult;
        }),
        getFrontendWebappIdentityInfo: hold(async () => {
            const azWebappIdentityShowResult = await _self.azureTerraformer().azWebappIdentityShow({
                az: _options.configuration().az,
                subscription: _options.configuration().frontendWebapp.subscription,
                resourceGroup: _options.configuration().frontendWebapp.resourceGroup,
                name: _options.configuration().frontendWebapp.name,
            });
            return azWebappIdentityShowResult;
        }),
        getBackendStaticWebappIdentityInfo: hold(async () => {
            const azWebappIdentityShowResult = await _self.azureTerraformer().azWebappIdentityShow({
                az: _options.configuration().az,
                subscription: _options.configuration().backendStaticWebapp.subscription,
                resourceGroup: _options.configuration().backendStaticWebapp.resourceGroup,
                name: _options.configuration().backendStaticWebapp.name,
            });
            return azWebappIdentityShowResult;
        }),
        getBackendIdpWebappIdentityInfo: hold(async () => {
            const azWebappIdentityShowResult = await _self.azureTerraformer().azWebappIdentityShow({
                az: _options.configuration().az,
                subscription: _options.configuration().backendIdpWebapp.subscription,
                resourceGroup: _options.configuration().backendIdpWebapp.resourceGroup,
                name: _options.configuration().backendIdpWebapp.name,
            });
            return azWebappIdentityShowResult;
        }),
        getBackendApiWebappIdentityInfo: hold(async () => {
            const azWebappIdentityShowResult = await _self.azureTerraformer().azWebappIdentityShow({
                az: _options.configuration().az,
                subscription: _options.configuration().backendApiWebapp.subscription,
                resourceGroup: _options.configuration().backendApiWebapp.resourceGroup,
                name: _options.configuration().backendApiWebapp.name,
            });
            return azWebappIdentityShowResult;
        }),
        getBackendBatchWebappIdentityInfo: hold(async () => {
            const azWebappIdentityShowResult = await _self.azureTerraformer().azWebappIdentityShow({
                az: _options.configuration().az,
                subscription: _options.configuration().backendBatchWebapp.subscription,
                resourceGroup: _options.configuration().backendBatchWebapp.resourceGroup,
                name: _options.configuration().backendBatchWebapp.name,
            });
            return azWebappIdentityShowResult;
        }),
        createBackendApiWebappBackendStorageShare: hold(async () => {
            const storageAccountKeys = await _self.getDefaultStorageAccountKeys();
            await _self.azureTerraformer().azWebappConfigStorageAccountAdd({
                az: _options.configuration().az,
                subscription: _options.configuration().backendApiWebapp.subscription,
                resourceGroup: _options.configuration().backendApiWebapp.resourceGroup,
                name: _options.configuration().backendApiWebapp.name,
                customId: _options.configuration().backendStorageShare.name,
                mountPath: _options.configuration().backendApi.containerBackendMountPath,
                storageType: 'AzureFiles',
                accountName: _options.configuration().backendStorageShare.accountName,
                shareName: _options.configuration().backendStorageShare.name,
                accessKey: storageAccountKeys[0].value,
            });
        }),
        createBackendBatchWebappBackendStorageShare: hold(async () => {
            const storageAccountKeys = await _self.getDefaultStorageAccountKeys();
            await _self.azureTerraformer().azWebappConfigStorageAccountAdd({
                az: _options.configuration().az,
                subscription: _options.configuration().backendBatchWebapp.subscription,
                resourceGroup: _options.configuration().backendBatchWebapp.resourceGroup,
                name: _options.configuration().backendBatchWebapp.name,
                customId: _options.configuration().backendStorageShare.name,
                mountPath: _options.configuration().backendBatch.containerBackendMountPath,
                storageType: 'AzureFiles',
                accountName: _options.configuration().backendStorageShare.accountName,
                shareName: _options.configuration().backendStorageShare.name,
                accessKey: storageAccountKeys[0].value,
            });
        }),
        createBackendBatchWebappBackendBatchStorageShare: hold(async () => {
            const storageAccountKeys = await _self.getDefaultStorageAccountKeys();
            await _self.azureTerraformer().azWebappConfigStorageAccountAdd({
                az: _options.configuration().az,
                subscription: _options.configuration().backendBatchWebapp.subscription,
                resourceGroup: _options.configuration().backendBatchWebapp.resourceGroup,
                name: _options.configuration().backendBatchWebapp.name,
                customId: _options.configuration().backendBatchStorageShare.name,
                mountPath: _options.configuration().backendBatch.containerBackendBatchMountPath,
                storageType: 'AzureFiles',
                accountName: _options.configuration().backendBatchStorageShare.accountName,
                shareName: _options.configuration().backendBatchStorageShare.name,
                accessKey: storageAccountKeys[0].value,
            });
        }),
        createFrontendWebappAcrPullRole: hold(async () => {
            const webappIdentityInfo = await _self.getFrontendWebappIdentityInfo();
            const acrInfo = await _self.getDefaultAcrInfo();
            await _self.azureTerraformer().azRoleAssignmentCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().frontendWebapp.subscription,
                assignee: webappIdentityInfo.principalId,
                scope: acrInfo.id,
                role: 'AcrPull',
            });
            await _self.azureTerraformer().azWebappConfigSet({
                az: _options.configuration().az,
                subscription: _options.configuration().frontendWebapp.subscription,
                resourceGroup: _options.configuration().frontendWebapp.resourceGroup,
                name: _options.configuration().frontendWebapp.name,
                genericConfiguration: {
                    acrUseManagedIdentityCreds: true,
                },
            });
        }),
        createBackendStaticWebappAcrPullRole: hold(async () => {
            const webappIdentityInfo = await _self.getBackendStaticWebappIdentityInfo();
            const acrInfo = await _self.getDefaultAcrInfo();
            await _self.azureTerraformer().azRoleAssignmentCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().backendStaticWebapp.subscription,
                assignee: webappIdentityInfo.principalId,
                scope: acrInfo.id,
                role: 'AcrPull',
            });
            await _self.azureTerraformer().azWebappConfigSet({
                az: _options.configuration().az,
                subscription: _options.configuration().backendStaticWebapp.subscription,
                resourceGroup: _options.configuration().backendStaticWebapp.resourceGroup,
                name: _options.configuration().backendStaticWebapp.name,
                genericConfiguration: {
                    acrUseManagedIdentityCreds: true,
                },
            });
        }),
        createBackendIdpWebappAcrPullRole: hold(async () => {
            const webappIdentityInfo = await _self.getBackendIdpWebappIdentityInfo();
            const acrInfo = await _self.getDefaultAcrInfo();
            await _self.azureTerraformer().azRoleAssignmentCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().backendIdpWebapp.subscription,
                assignee: webappIdentityInfo.principalId,
                scope: acrInfo.id,
                role: 'AcrPull',
            });
            await _self.azureTerraformer().azWebappConfigSet({
                az: _options.configuration().az,
                subscription: _options.configuration().backendIdpWebapp.subscription,
                resourceGroup: _options.configuration().backendIdpWebapp.resourceGroup,
                name: _options.configuration().backendIdpWebapp.name,
                genericConfiguration: {
                    acrUseManagedIdentityCreds: true,
                },
            });
        }),
        createBackendApiWebappAcrPullRole: hold(async () => {
            const webappIdentityInfo = await _self.getBackendApiWebappIdentityInfo();
            const acrInfo = await _self.getDefaultAcrInfo();
            await _self.azureTerraformer().azRoleAssignmentCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().backendApiWebapp.subscription,
                assignee: webappIdentityInfo.principalId,
                scope: acrInfo.id,
                role: 'AcrPull',
            });
            await _self.azureTerraformer().azWebappConfigSet({
                az: _options.configuration().az,
                subscription: _options.configuration().backendApiWebapp.subscription,
                resourceGroup: _options.configuration().backendApiWebapp.resourceGroup,
                name: _options.configuration().backendApiWebapp.name,
                genericConfiguration: {
                    acrUseManagedIdentityCreds: true,
                },
            });
        }),
        createBackendBatchWebappAcrPullRole: hold(async () => {
            const webappIdentityInfo = await _self.getBackendBatchWebappIdentityInfo();
            const acrInfo = await _self.getDefaultAcrInfo();
            await _self.azureTerraformer().azRoleAssignmentCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().backendBatchWebapp.subscription,
                assignee: webappIdentityInfo.principalId,
                scope: acrInfo.id,
                role: 'AcrPull',
            });
            await _self.azureTerraformer().azWebappConfigSet({
                az: _options.configuration().az,
                subscription: _options.configuration().backendBatchWebapp.subscription,
                resourceGroup: _options.configuration().backendBatchWebapp.resourceGroup,
                name: _options.configuration().backendBatchWebapp.name,
                genericConfiguration: {
                    acrUseManagedIdentityCreds: true,
                },
            });
        }),
        createBackendBatchWebappKeyvaultSecretPermissionsGetPolicy: hold(async () => {
            const webappIdentityInfo = await _self.getBackendBatchWebappIdentityInfo();
            await _self.azureTerraformer().azKeyvaultSetPolicy({
                az: _options.configuration().az,
                subscription: _options.configuration().defaultKeyvault.subscription,
                resourceGroup: _options.configuration().defaultKeyvault.resourceGroup,
                name: _options.configuration().defaultKeyvault.name,
                objectId: webappIdentityInfo.principalId,
                secretPermissions: 'get',
            });
        }),
        createBackendIdpWebappPendingStorageTableDataContributorRole: hold(async () => {
            const identityInfo = await _self.getBackendIdpWebappIdentityInfo();
            const storageAccountInfo = await _self.getDefaultStorageAccountInfo();
            await _self.azureTerraformer().azRoleAssignmentCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().backendIdpWebapp.subscription,
                assignee: identityInfo.principalId,
                scope: `${storageAccountInfo.id}/tableServices/default/tables/${_options.configuration().pendingStorageTable.name}`,
                role: 'Storage Table Data Contributor',
            });
        }),
        createBackendIdpWebappRegisteredStorageTableDataContributorRole: hold(async () => {
            const identityInfo = await _self.getBackendIdpWebappIdentityInfo();
            const storageAccountInfo = await _self.getDefaultStorageAccountInfo();
            await _self.azureTerraformer().azRoleAssignmentCreate({
                az: _options.configuration().az,
                subscription: _options.configuration().backendIdpWebapp.subscription,
                assignee: identityInfo.principalId,
                scope: `${storageAccountInfo.id}/tableServices/default/tables/${_options.configuration().registeredStorageTable.name}`,
                role: 'Storage Table Data Contributor',
            });
        }),
    });

    /** @type {import('.').Ipp5Terraformer.Self} */
    const self = ({
        ...EventEmitter({}),
        _Ipp5Terraformer: (() => {
            return _self;
        }),
        terraform: hold(async () => {
            await _self.createDefaultResourceGroup();
            await _self.createDefaultKeyvault();
            await _self.createDefaultStorageAccount();
            await _self.createDefaultAcr();
            await _self.createDefaultAppservicePlan();
            await _self.createFrontendWebapp();
            await _self.createBackendStaticWebapp();
            await _self.createBackendIdpWebapp();
            await _self.createBackendApiWebapp();
            await _self.createBackendBatchWebapp();
            await _self.createBackendStorageShare();
            await _self.createBackendBatchStorageShare();
            await _self.createPendingStorageTable();
            await _self.createRegisteredStorageTable();
            await _self.createBackendApiWebappBackendStorageShare();
            await _self.createBackendBatchWebappBackendStorageShare();
            await _self.createBackendBatchWebappBackendBatchStorageShare();
            await _self.createFrontendWebappAcrPullRole();
            await _self.createBackendStaticWebappAcrPullRole();
            await _self.createBackendIdpWebappAcrPullRole();
            await _self.createBackendApiWebappAcrPullRole();
            await _self.createBackendBatchWebappAcrPullRole();
            await _self.createBackendBatchWebappKeyvaultSecretPermissionsGetPolicy();
            await _self.createBackendIdpWebappPendingStorageTableDataContributorRole();
            await _self.createBackendIdpWebappRegisteredStorageTableDataContributorRole();
        }),
    });

    return self;

});

/** @type {import('.').Ipp5Terraformer.Companion} */
const companion = ({});

/** @type {import('.').Ipp5Terraformer.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as Ipp5Terraformer };
