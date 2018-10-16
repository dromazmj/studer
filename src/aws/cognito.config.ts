export interface ICognitoConfig {
    region: string;
    userPoolId: string;
    appId: string;
    idpUrl?: string;
    identityPoolId?: string;
}

export let CognitoConfig: ICognitoConfig = {
    region:'us-east-1',
    userPoolId: 'us-east-1_JknViQIb0',
    appId: '6javljvcko12q97dj23ug7sck5',
    idpUrl: `cognito-idp.us-east-1.amazonaws.com`,
    identityPoolId: 'us-east-1:20c803f6-d14a-4545-91ea-667374319a09'
}