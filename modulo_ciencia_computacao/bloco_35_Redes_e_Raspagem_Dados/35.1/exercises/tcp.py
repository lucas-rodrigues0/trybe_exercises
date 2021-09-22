from socketserver import StreamRequestHandler, TCPServer


class TCPHandler(StreamRequestHandler):
    def handle(self):
        self.wfile.write(b"Ola, cliente!\n")
        while True:
            data = self.rfile.readline().strip().decode("utf-8")
            if not data:
                self.wfile.write(b"Cliente desconectado!")
                print("Cliente desconectado!")
                break
            print(data)


if __name__ == "__main__":
    server_address = ("localhost", 8080)
    with TCPServer(server_address, TCPHandler) as server:
        print("Server TCP ativo!")
        server.serve_forever()
