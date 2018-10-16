export interface IS3Config {
    bucketName: string;
    bucketRegion: string;
    s3_endpoint?: string;
    folderLevel?: string;
    publicLevel?: string;
}

export let S3Config: IS3Config = {
    bucketName: 'ionic-aws-app',
    bucketRegion: 'us-east-1',
    s3_endpoint: '',
    folderLevel: 'protected',
    publicLevel: 'public'
}