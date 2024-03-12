import { MongoClient } from "mongodb";
import { config } from "dotenv";

config()

const mongoUri = process.env.MONGOURI
const databse = process.env.DBNAME

const nuevoPedido = async (infoPedido) => {

    const client = new MongoClient(mongoUri)
    await client.connect()
    const db = client.db(databse)
    const usuariosCollection = db.collection("")
    const productosCollection = db.collection("")
    const combosCollection = db.collection("")
    const pedidosCollection = db.collection("")


    const usuario = {
        nombre: infoPedido.nombre,
        apellido: infoPedido.apellido,
        telefono: infoPedido.telefono
    }

    const pedido = {
        direccion: infoPedido.direccion,
        departamento: infoPedido.departamento,
        fechaPedido: new Date(),
        producto: infoPedido.producto,
        cantidad: infoPedido.cantidad,
    }
}