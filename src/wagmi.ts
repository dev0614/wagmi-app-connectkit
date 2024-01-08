import { getDefaultConfig } from 'connectkit'
import { createConfig } from 'wagmi'

export const config = createConfig(
  getDefaultConfig({
    autoConnect: true,
    appName: 'My wagmi + ConnectKit App',
    walletConnectProjectId: 'CSXKL-hL24qiBwN-yY7pGu0s-STVyzfa',
  })
)
