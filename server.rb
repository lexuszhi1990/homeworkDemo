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
   TCPSocket.open("192.168.1.11", "8000")
end

EventMachine.run do
  
  # create a chatroom object. Shared by every connection
  @chatroom = EM::Channel.new

  EventMachine::WebSocket.start(:host => "127.0.0.1", :port => 8000, :debug => true) do |ws|

    # fires when we open a connection
    ws.onopen do

      #create a socket
      client = open_link
      client.send("start", 0)
          
      # holds info about the user's chat session. 
      chatsession = {:nick => "gardon"}

      # subscribe to the chatroom
      sid = @chatroom.subscribe do |msg|
        ws.send msg
      end
      
      # fires when we receive a message on the channel
      ws.onmessage do |msg|
            begin
              client.send(msg, 0)
              puts msg
              puts client.readchar
              puts client.readchar
            rescue EPIPE

            end
      end
      
      # fires when someone leaves
      ws.onclose do
        @chatroom.unsubscribe(sid)
        @chatroom.push "User #{chatsession[:nick]} has left"
        client.close unless client.closed?
      end
      
      # command parser - looking for /nick newname
      def parse_command(ws, msg, chatsession)
        parts = msg.split(" ")
        command = parts.delete(parts[0])
        command = command[1..-1] # strip the /
        options = parts.join(" ")
        case command
        when "nick"
          oldnick = chatsession[:nick]
          chatsession[:nick] = options
          ws.send "Changed your nick to #{chatsession[:nick]}."
          @chatroom.push "#{oldnick} is now known as #{chatsession[:nick]}"
        end
      end

    end
  end

  puts "server started"
end
