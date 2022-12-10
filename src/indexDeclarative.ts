import ServerBootstrap, { Bootstrap } from './bootstrap/server.bootstrap'
import Application from './app'

const serverBootstrap: Bootstrap = new ServerBootstrap(Application.requestListener)

// forma 1
const start = async () => {
  try {
    const resultServer = await serverBootstrap.initialize()
    console.log(resultServer)
  } catch (error) {
    console.log(error)
  }
}

//start()

// forma 2: para hacerla correr no volver a tipar el message porque esa propiedad ya está tipada
/*serverBootstrap
    .initialize()
    .then((message) => console.log(message))
    .catch((error) => console.log(error))
*/

// forma 3 combinada con la 1
async () => {
  try {
    const resultServer = await serverBootstrap.initialize()
    console.log(resultServer)
  } catch (error) {
    console.log(error)
  }
}

start()
