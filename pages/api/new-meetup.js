import { MongoClient } from "mongodb"

async function saveMeetups(req, res) {
    if (req.method === 'POST') {
        const data = req.body

        const {title, image, address, description} = data

        const client = await MongoClient.connect(
            'mongodb+srv://Nurperi:nurperi@cluster0.teldjlw.mongodb.net/meetups?retryWrites=true&w=majority&appName=AtlasApp')
        
        const dataBase = client.db()
        const meetupCollection = dataBase.collection('meetups')

        const result = await meetupCollection.insertOne(data)
        client.close()
        console.log(result);
        res.status(200).json({message: 'Meetup saved'})
    }
}

export default saveMeetups

