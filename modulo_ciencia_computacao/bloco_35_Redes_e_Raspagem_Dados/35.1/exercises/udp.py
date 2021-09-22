from socketserver import UDPServer, DatagramRequestHandler


class UDPHandler(DatagramRequestHandler):
    def handler(self):
        self.wfile.write(b"Ola, cliente!\n")
        print("Ola, cliente!")
        for line in self.rfile:
            data = line.strip().decode("utf-8")
            print(data)


if __name__ == "__main__":
    server_address = ("localhost", 9090)
    with UDPServer(server_address, UDPHandler) as server:
        print("Server UDP ativo!")
        server.serve_forever()
