var data = {
  chatinit: {
    title: ["Hello <span class='emoji'> &#128075;</span>", "I am Chatbot", "problem in ?"],
    options: ["Hardware", "ERP", "Network", "System Admin"]
  },
  hardware: {
    title: ["Please select category"],
    options: ['Datacard', 'HTT', 'Laptop/Desktop', 'Plotter', 'Printer', 'Scanner', 'Teams Phone', 'Tablet'],
    url: {
      Datacard: 'https://hsd.adityabirla.com',
      HTT: 'https://hsd.adityabirla.com',
      'Laptop/Desktop': 'https://hsd.adityabirla.com',
      Plotter: 'https://hsd.adityabirla.com',
      Printer: 'https://hsd.adityabirla.com',
      Scanner: 'https://hsd.adityabirla.com',
      'Teams Phone': 'https://hsd.adityabirla.com',
      Tablet: 'https://hsd.adityabirla.com'
    }
  },
  erp: {
    title: ["Please select category"],
    options: ['Electricity Billing System', 'Disposal System', 'Hospital Management System', 'Transport Management System', 'Mobile App', 'Housing'],
    url: {
      'Electricity Billing System': 'https://hsd.adityabirla.com',
      'Disposal System': 'https://hsd.adityabirla.com',
      'Hospital Management System': 'https://hsd.adityabirla.com',
      'Transport Management System': 'https://hsd.adityabirla.com',
      'Mobile App': 'https://hsd.adityabirla.com',
      Housing: 'https://hsd.adityabirla.com'
    }
  },
  network: {
    title: ["Please select category"],
    options: ['Option 1', 'Option 2', 'Option 3'],
    url: {
      'Option 1': 'https://hsd.adityabirla.com',
      'Option 2': 'https://hsd.adityabirla.com',
      'Option 3': 'https://hsd.adityabirla.com'
    }
  },
  'system admin': {
    title: ["Please select category"],
    options: ['Option A', 'Option B', 'Option C'],
    url: {
      'Option A': 'https://hsd.adityabirla.com',
      'Option B': 'https://hsd.adityabirla.com',
      'Option C': 'https://hsd.adityabirla.com'
    }
  }
};




document.getElementById("init").addEventListener("click", showChatBot);
var cbot = document.getElementById("chat-box");
var len1 = data.chatinit.title.length;

function showChatBot() {
  console.log(this.innerText);
  if (this.innerText == 'START CHAT') {
    document.getElementById('test').style.display = 'block';
    document.getElementById('init').innerText = 'CLOSE CHAT';
    initChat();
  } else {
    location.reload();
  }
}

function initChat() {
  j = 0;
  cbot.innerHTML = '';
  for (var i = 0; i < len1; i++) {
    setTimeout(handleChat, i * 500);
  }
  setTimeout(function () {
    showOptions(data.chatinit.options);
  }, (len1 + 1) * 500);
}

var j = 0;

function handleChat() {
  console.log(j);
  var elm = document.createElement("p");
  elm.innerHTML = data.chatinit.title[j];
  elm.setAttribute("class", "msg");
  cbot.appendChild(elm);
  j++;
  handleScroll();
}

function showOptions(options) {
  for (var i = 0; i < options.length; i++) {
    var opt = document.createElement("span");
    var inp = '<div>' + options[i] + '</div>';
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt");
    opt.addEventListener("click", handleOpt);
    cbot.appendChild(opt);
    handleScroll();
  }
}

function handleOpt() {
  console.log(this);
  var str = this.innerText;
  var textArr = str.split(" ");
  var findText = textArr[0];

  document.querySelectorAll(".opt").forEach(function (el) {
    el.remove();
  });
  var elm = document.createElement("p");
  elm.setAttribute("class", "test");
  var sp = '<span class="rep">' + this.innerText + '</span>';
  elm.innerHTML = sp;
  cbot.appendChild(elm);

  console.log(findText.toLowerCase());
  var tempObj = data[findText.toLowerCase()];
  handleResults(tempObj.title, tempObj.options, tempObj.url);
}

function handleDelay(title) {
  var elm = document.createElement("p");
  elm.innerHTML = title;
  elm.setAttribute("class", "msg");
  cbot.appendChild(elm);
}

function handleResults(title, options, url) {
  for (let i = 0; i < title.length; i++) {
    setTimeout(function () {
      handleDelay(title[i]);
    }, i * 500);
  }

  const isObjectEmpty = function (url) {
    return JSON.stringify(url) === "{}";
  };

  if (isObjectEmpty(url) == true) {
    console.log("having more options");
    setTimeout(function () {
      showOptions(options);
    }, title.length * 500);
  } else {
    console.log("end result");
    setTimeout(function () {
      handleOptions(options, url);
    }, title.length * 500);
  }
}

function handleOptions(options, url) {
  for (var i = 0; i < options.length; i++) {
    var opt = document.createElement("span");
    var inp = '<a class="m-link" href="' + url[options[i]] + '">' + options[i] + '</a>';
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt");
    cbot.appendChild(opt);
  }

}

function handleScroll() {
  var elem = document.getElementById("chat-box");
  elem.scrollTop = elem.scrollHeight;
}
