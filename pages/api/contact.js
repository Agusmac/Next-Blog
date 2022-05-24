
import { MongoClient } from 'mongodb'

export async function connectDatabase() {

  const url=(`mongodb+srv://${process.env.username}:${process.env.mongoKey}@${process.env.clustername}.so5m2.mongodb.net/${process.env.database}?retryWrites=true&w=majority`)
  const client = await MongoClient.connect(url)
  return client
}

export async function insertDocument(client, newMessage) {
  const db = client.db()
  const result = await db.collection('messages').insertOne(newMessage)
  return result
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: "Invalid Input" })
      return;
    }
    const newMessage = { email, name, message }

    let client;

    try {
      client = await connectDatabase()
    } catch (error) {
      res.status(500).json({ message: 'Database connection failed' })
      return;
    }
    try {
      const result = await insertDocument(client, newMessage)
    //  newMessage.id=result.insertedId
    } catch (error) {
      res.status(500).json({ message: 'Database Insertion failed' })
      return;
    }
    client.close()
    res.status(201).json({ message: 'Successfully stored message!', newMessage })
  }

}
