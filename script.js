const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');

function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText === '') return;

    displayMessage(messageText, 'user');
    // Simulate a response from the chatbot (you can replace this with actual chatbot logic)
    setTimeout(() => {
        displayMessage(getBotResponse(messageText), 'bot');
    }, 500);
    messageInput.value = '';
    messageInput.focus();
}

function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    
    const emptyMessageElement = document.createElement('div');
    emptyMessageElement.classList.add('empty-message');
    chatMessages.appendChild(emptyMessageElement);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(message) {
    // Replace this with your chatbot logic
    const responses = {
        'hello': 'Hi there!',
        'hi': 'Hi there!',
        'how are you?': 'I\'m good, thanks for asking!',
        'what is your name?': 'My name is FunChatty.',
        'what can you do?': 'I can assist you with basic tasks and provide information.',
        'who created you?': 'I was created by Sabiha.',
        'who developed you?': 'I was developed by Sabiha.',
        'thanks': 'You\'re welcome!',
        'thank you': 'You\'re welcome!',
        'bye': 'Goodbye!',
        'tell me a fun fact': 'Did you know that honey never spoils?',
        'what is the capital of India?': 'The capital of India is Delhi.',
        'what is the tallest mountain in the world?': 'Mount Everest is the tallest mountain in the world.',
        'what are some healthy foods?': 'Some healthy foods include fruits, vegetables, whole grains, lean proteins, and nuts.',
        'what are some good exercises?': 'Good exercises include walking, jogging, swimming, cycling, and strength training.',
        'what is the importance of drinking water?': 'Drinking water is important for staying hydrated, regulating body temperature, and flushing out toxins.',
        'what to do for acne?': 'To manage acne, it\'s important to cleanse your face regularly, avoid touching your face with dirty hands, use non-comedogenic skincare products, and maintain a healthy diet.',
        'skincare in summer': 'During summer, it\'s important to protect your skin from the sun by wearing sunscreen, staying hydrated, and using lightweight, oil-free skincare products.',
        'skincare in winter': 'In winter, it\'s important to moisturize your skin frequently, use a humidifier to combat dry air, and protect your skin from harsh winds and cold temperatures.',
        'skincare in rainy seasons': 'During rainy seasons, it\'s important to keep your skin clean and dry, use waterproof sunscreen, and avoid excessive humidity to prevent skin irritation and breakouts.',
        'technologies to learn for SDE role': 'For a Software Development Engineer (SDE) role, it\'s important to have a strong foundation in programming languages like Java, Python, or JavaScript, as well as knowledge of data structures, algorithms, and software development methodologies. Additionally, learning frameworks and tools like Spring Boot, React, or Angular can be beneficial. Continuous learning and staying updated with industry trends are also essential for SDE roles.',
        'technologies to learn for data science': 'For data science, it\'s important to have proficiency in programming languages like Python or R, as well as knowledge of statistical analysis, machine learning, and data visualization techniques. Familiarity with libraries and frameworks like NumPy, pandas, scikit-learn, and TensorFlow is also beneficial. Additionally, learning SQL for data manipulation and database querying can be useful for working with large datasets.',
        'technologies to learn for data analysis': 'For data analysis, it\'s important to have proficiency in tools like Excel or Google Sheets for basic data manipulation and analysis. Additionally, learning programming languages like Python or R for more advanced analysis, as well as SQL for querying databases, can be beneficial. Familiarity with data visualization libraries like Matplotlib or ggplot2 is also helpful for presenting insights visually.',
        'technologies to learn for Java development': 'For Java development, it\'s important to have a strong understanding of core Java concepts such as object-oriented programming, collections, and multithreading. Additionally, learning frameworks like Spring Framework, Hibernate, and Maven can be beneficial. Knowledge of databases like MySQL or PostgreSQL and familiarity with RESTful web services are also valuable for Java developers.',
        'technologies to learn for Python development': 'For Python development, it\'s important to have proficiency in Python programming language, as well as knowledge of popular libraries and frameworks such as Django, Flask, and NumPy. Familiarity with database technologies like SQLite, MongoDB, or PostgreSQL can also be helpful for Python developers.',
        'technologies to learn for front end development': 'For front end development, it\'s important to have proficiency in HTML, CSS, and JavaScript, as well as knowledge of front end frameworks and libraries like React, Angular, or Vue.js. Familiarity with responsive design principles, CSS preprocessors like Sass or Less, and version control systems like Git are also important for front end developers.',
        'technologies to learn for backend development': 'For backend development, it\'s important to have proficiency in programming languages like Java, Python, Node.js, or PHP, as well as knowledge of server-side frameworks like Spring Boot, Django, Express.js, or Laravel. Understanding of databases and data modeling concepts, RESTful APIs, and security best practices are also essential for backend developers.',
        'technologies to learn for web development': 'For web development, it\'s important to have proficiency in both front end and backend technologies. This includes HTML, CSS, JavaScript for front end development, and programming languages like Java, Python, or JavaScript for backend development. Knowledge of web frameworks and libraries like React, Angular, Vue.js, Django, or Express.js, as well as databases like MySQL or MongoDB, are also important for web developers.',
        'technologies to learn for full stack development roles': 'For full stack development roles, it\'s important to have proficiency in both front end and backend technologies, as well as knowledge of databases and deployment processes. This includes proficiency in HTML, CSS, JavaScript, and front end frameworks like React, Angular, or Vue.js, as well as programming languages and frameworks like Java/Spring Boot, Python/Django, or JavaScript/Node.js for backend development. Understanding of databases, RESTful APIs, version control systems, and cloud platforms is also essential for full stack developers.',
        'default': 'I\'m sorry, I don\'t understand.'
    };
    return responses[message.toLowerCase()] || responses['default'];
}
