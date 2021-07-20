class Chat < ApplicationRecord
  after_create_commit {ChatMessageBroadcastJob.perform_later self}
end