import type {CapacitorConfig} from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'hello',
  webDir: 'out',
  server: {
    url: 'http://192.168.0.206:3000',
    cleartext: true,
  },
}

export default config
