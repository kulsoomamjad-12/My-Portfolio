import dns from 'node:dns'
import mongoose from 'mongoose'

// Node's resolver can pick up an unreachable link-local IPv6 DNS server on
// some Windows networks, which breaks the SRV/TXT lookups mongodb+srv:// needs.
dns.setServers(['8.8.8.8', '1.1.1.1'])

export async function connectDB() {
  const uri = process.env.MONGO_URI

  if (!uri) {
    throw new Error('MONGO_URI is not set in the environment')
  }

  await mongoose.connect(uri)
  console.log('MongoDB connected')
}
