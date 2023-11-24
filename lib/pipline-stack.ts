import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from "aws-cdk-lib/pipelines";
export class PiplineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // AWS CI-CD Pipeline
    const upworkcicdpipeline = new CodePipeline(this, "Pipeline", {
      synth: new ShellStep("Synth", {
        input: CodePipelineSource.gitHub("uwaifo/upworkawsinfra-cidd", "main"),
        commands: ["npm ci", "npm run build", "npm run test"],
        primaryOutputDirectory: "dist",
      }),
    });
  }
}
