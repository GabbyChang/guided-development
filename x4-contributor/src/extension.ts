// import { IGuidedDev } from '@sap-devx/guided-development-types';
import { ICollection, CollectionType, IItem, ActionType, IGuidedDevContribution } from './types/GuidedDev';
import * as vscode from 'vscode';
import * as _ from 'lodash';

const datauri = require("datauri");
var path = require('path');
// const DEFAULT_IMAGE = require("../images/defaultImage");

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "x4-contributor" is now active!');

    const guidedDevContribution: IGuidedDevContribution = {
        // return items based on workspace folders/projects
        getCollections: () => {
            const collections: Array<ICollection> = [];
            let collection: ICollection = {
                id: "collection1",
                title: "Development Tools ---- Scripts",
                description: "Use this script to generate the application manifest and copy the metaobject schema to perform the metadata check. The local workspace files are already maintained in the metadata assocation with the schema and the sync settings, the docker image file hosts the BAF runtime. The script also installs the selected Microsoft Visual studio (VSC) code extensions",
                type: CollectionType.Scenario,
                itemIds: [
                    "BAF.x4-contributor.create-app",
                    "BAF.x4-contributor.create-bo"
                ]
            };
            collections.push(collection);

            return collections;
        },
        getItems: () => {
            const items: Array<IItem> = [];
            let item: IItem = {
                id: "create-app-script",
                title: "Script",
                description: "yo baf-scripts:create-app",
                labels: []
            };
            items.push(item);

            item = {
                id: "create-app-prerequisites",
                title: "Prerequisites",
                description: `
                    1. generator-baf-scripts is installed
                    2. RSync is configured
                `,
                labels: []
            };
            items.push(item);

            item = {
                id: "create-app-expected-result",
                title: "Expected Result",
                description: ``,
                image: getImage(path.join(context.extensionUri.fsPath, "./src/images/bafapp.png")),
                labels: []
            };
            items.push(item);

            item = {
                id: "create-app",
                title: "Create application",
                description: `
                Use this script to generate the application manifest and copy the metaobject schema to perform the metadata check. The local workspace files are already maintained in the metadata assocation with the schema and the sync settings, the docker image file hosts the BAF runtime. The script also installs the selected Microsoft Visual studio (VSC) code extensions
                `,
                itemIds: [
                    "BAF.x4-contributor.create-app-prerequisites",
                    "BAF.x4-contributor.create-app-script",
                    "BAF.x4-contributor.create-app-expected-result"
                ],
                labels: [
                    { "Project Name": "x4sample" },
                    { "Project Type": "X4" },
                    { "Path": "/home/user/projects/x4sample" }
                ]
            };
            items.push(item);

            item = {
                id: "create-bo-script",
                title: "Script",
                description: "yo baf-scripts:create-bo",
                labels: []
            };
            items.push(item);

            item = {
                id: "create-bo-prerequisites",
                title: "Prerequisites",
                description: `
                    1. generator-baf-scripts are installed.
                    2. Business Application Factory application is created and started.
                `,
                labels: []
            };
            items.push(item);

            item = {
                id: "create-bo-expected-result",
                title: "Expected Result",
                description: ``,
                image: getImage(path.join(context.extensionUri.fsPath, "./src/images/boStructure.png")),
                labels: []
            };
            items.push(item);

            item = {
                id: "create-bo",
                title: "Create business object",
                description: "Use this script to create the business object model and the implementation in the application.",
                itemIds: [
                    "BAF.x4-contributor.create-bo-prerequisites",
                    "BAF.x4-contributor.create-bo-script",
                    "BAF.x4-contributor.create-bo-expected-result"
                ],
                labels: [
                    { "Project Name": "x4sample" },
                    { "Project Type": "X4" },
                    { "Path": "/home/user/projects/x4sample" }
                ]
            };
            items.push(item);

            return items;
        }
    };

    const api = {
        guidedDevContribution
    };

    return api;
}

function getImage(imagePath: string): string {
    let image;
    try {
        image = datauri.sync(imagePath);
    } catch (error) {
        // image = DEFAULT_IMAGE;
    }
    return image;
}


export function deactivate() { }
