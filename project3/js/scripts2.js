var messages = [];

var messageType = {
  out: 'out-message',
  in: 'in-message',
  unknown: 'unknown-message'
};

var data = [
  {
    type: messageType.out,
    user: 'Admin1',
    message: 'We are here to try to help kids in our country of America!'
  },
  {
    type: messageType.in,
    user: 'User1',
    message: 'We all have a part that we can try to do to help.'
  }
];


function Message(type, user, message) {
  this.type = type;
  this.user = user;
  this.message = message;
}

function createMessageElement(message) {

  var messageText = document.createTextNode(
    message.user + ': ' + message.message
  );

 
  var messageEl = document.createElement('div');
  messageEl.appendChild(messageText);

 
  messageEl.className = message.type;

  return messageEl;
}


function addMessageHandler(event) {
  var user, type;


  var messageInputEl = document.getElementById('message-input');
  var messageContainerEl = document.getElementById('message-container');


  switch (event.target.id) {
    case 'send-button':
      user = 'Admin1';
      type = messageType.out;
      break;
    case 'reply-button':
      user = 'User1';
      type = messageType.in;
      break;
    default:
      user = 'unknown';
      type = messageType.unknown;
      break;
  }


  if (messageInputEl.value != '') {
 
    var message = new Message(type, user, messageInputEl.value);
    messages.push(message);


    var el = createMessageElement(message);


    messageContainerEl.appendChild(el);


    messageInputEl.value = '';
  }
}

function init() {

  document.getElementById('send-button').onclick = addMessageHandler;
  document.getElementById('reply-button').onclick = addMessageHandler;


  var messageContainerEl = document.getElementById('message-container');


  for (let i = 0; i < data.length; i++) {
    const item = data[i];


    var message = new Message(item.type, item.user, item.message);
    messages.push(message);


    var el = createMessageElement(message);


    messageContainerEl.appendChild(el);
  }
}

init();