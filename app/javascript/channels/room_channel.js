import consumer from "./consumer"

const appRoom = consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    return alert(data['chat_message']);
  },

  speak: function(chat_message) {
    return this.perform('speak', { chat_message: chat_message });
  }
});


$(document).on("keydown", ".room_message-form_textarea", function(e) {
  if (e.key === "Enter") {
    appRoom.speak(e.target.value);
    e.target.value = '';
    e.preventDefault();
  }
})