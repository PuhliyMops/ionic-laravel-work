import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myApp',
  webDir: 'public',
  server: {
      url: 'http://10.42.0.1:8001',
  }
};

export default config;
