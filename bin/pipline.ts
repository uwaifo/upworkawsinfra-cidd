#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PiplineStack } from '../lib/pipline-stack';

const app = new cdk.App();
new PiplineStack(app, 'PiplineStack', {
  env: { account: '471249635533', region: 'us-east-1' },
 });