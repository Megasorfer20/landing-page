import { MongoClient } from "mongodb";

const mongoUri = "mongodb+srv://techManager:ManagTech145@clusterlanding.kyqcvr9.mongodb.net/";
const databse = "Dropshipping";

export const nuevoPedido = async (infoPedido) => {
  const client = new MongoClient(mongoUri);
  await client.connect();
  const db = client.db(databse);
  const usuariosCollection = db.collection("usuarios");
  const productosCollection = db.collection("productos");
  const ofertasCollection = db.collection("ofertas");
  const pedidosCollection = db.collection("pedidos");

  const usuario = {
    nombre: infoPedido.nombre,
    apellido: infoPedido.apellido,
    telefono: infoPedido.telefono,
  };

  const existUser = await usuariosCollection.findOne({
    telefono: infoPedido.telefono,
  });

  if (!existUser) {
    await usuariosCollection.insertOne(usuario);
  } else {
    await usuariosCollection.updateMany(
      { telefono: infoPedido.telefono },
      usuario
    );
  }

  const ofertas = await ofertasCollection
    .aggregate([
      {
        $lookup: {
          from: "productos",
          localField: "producto",
          foreignField: "_id",
          as: "producto_info",
        },
      },
      {
        $lookup: {
          from: "productos",
          let: { regaloId: "$regalo" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $cond: {
                    if: { $eq: ["$$regaloId", null] },
                    then: { $eq: ["$$regaloId", null] },
                    else: { $eq: ["$_id", "$$regaloId"] },
                  },
                },
              },
            },
          ],
          as: "regalo_info",
        },
      },
    ])
    .toArray();


    const pedido = {
        direccion: infoPedido.direccion,
        departamento: infoPedido.departamento,
        fechaPedido: new Date(),
        producto: infoPedido.producto,
        cantidad: infoPedido.cantidad,
        estado: 1,
      };
};
