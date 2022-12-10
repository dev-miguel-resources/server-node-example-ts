import http from 'http'

export default interface Route {
  path: string
  execute: (request: http.IncomingMessage, response: http.ServerResponse) => void
}

type Routes = Route[]

const routes: Routes = [
  {
    path: '/user/description',
    execute(request: http.IncomingMessage, response: http.ServerResponse) {
      response.writeHead(200, { 'content-type': 'text/plain' })
      response.write('<h2>User: Miguel</h2>')
      response.end()
    },
  },
  {
    path: '/user/list',
    execute(request: http.IncomingMessage, response: http.ServerResponse) {
      response.writeHead(200, { 'content-type': 'application/json' })
      response.write(
        JSON.stringify([
          { username: 'mchamorro', active: true },
          { username: 'jponte', active: true },
        ]),
      )
      response.end()
    },
  },
  {
    path: '/user/detail',
    execute(request: http.IncomingMessage, response: http.ServerResponse) {
      response.writeHead(200, { 'content-type': 'application/json' })
      response.write(JSON.stringify({ username: 'mchamorro', active: false }))
      response.end()
    },
  },
  {
    path: '/user/delete',
    execute(request: http.IncomingMessage, response: http.ServerResponse) {
      response.writeHead(200, { 'content-type': 'text/plain' })
      response.write('User delete succesfully')
      response.end()
    },
  },
]

export const getRoute = (path: string): Route | undefined => routes.find((route: Route) => route.path === path)

export const exceptionNotFound = (request: http.IncomingMessage, response: http.ServerResponse): void => {
  response.writeHead(404, { 'conten-type': 'text/plain' })
  response.end('Path not found')
}
