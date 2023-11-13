#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("aws-cdk-lib");
const whatsapp_otp_stack_1 = require("../lib/whatsapp_otp-stack");
const app = new cdk.App();
new whatsapp_otp_stack_1.WhatsappOtpStack(app, 'WhatsappOtpStack', {
    /* If you don't specify 'env', this stack will be environment-agnostic.
     * Account/Region-dependent features and context lookups will not work,
     * but a single synthesized template can be deployed anywhere. */
    /* Uncomment the next line to specialize this stack for the AWS Account
     * and Region that are implied by the current CLI configuration. */
    // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
    /* Uncomment the next line if you know exactly what Account and Region you
     * want to deploy the stack to. */
    // env: { account: '12345678', region: 'us-east-2' } */
    /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
