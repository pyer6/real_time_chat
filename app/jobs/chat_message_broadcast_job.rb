class ChatMessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(chat_message)
    ActionCable.server.broadcast 'room_channel', {chat_message: render_chat_message(chat_message)}
  end

  private

    def render_chat_message(chat_message)
      ApplicationController.renderer.render(partial: 'chats/chat', locals: { chat: chat_message })
    end
end