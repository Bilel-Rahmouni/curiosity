import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'tn.curiosity.app',
  appName: 'curiosity',
  webDir: 'dist',
  backgroundColor: '#0a0a0a',
  server: {
    androidScheme: 'https',
  },
}

export default config
