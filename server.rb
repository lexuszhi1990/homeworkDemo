# # prerequisites:
# #   gem install em-websocket-server json
# #
# # run with:
# #   ruby server.rb

require 'rubygems'
require 'em-websocket'
require 'socket'
require 'json'


def open_link
   TCPSocket.open("192.168.1.11", 8000)
end

EventMachine.run do

  EventMachine::WebSocket.start(:host => "127.0.0.1", :port => 8000, :debug => true) do |ws|

    # fires when we open a connection
    ws.onopen do

      #create a socket
      client = open_link
      client.puts "start"

      ws.onmessage do |msg|
            begin
              puts msg
              client.send msg, 0
            rescue

            end
      end

      ws.onclose do
        client.close unless client.closed?
      end

    end
  end

  puts "server started"
end
