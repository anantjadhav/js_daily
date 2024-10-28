function showInfo() {
    const topics = document.getElementsByClassName('topics')[0];
    const infoList = ['For Loop', 'While Loop', 'ForEach Loop']; // Replace with your custom information

    topics.innerHTML = ''; // Clear existing content
    infoList.forEach(info => {
        const listItem = document.createElement('li');
        listItem.textContent = info;
        topics.appendChild(listItem);
    });
}

document.getElementById("demo").innerHTML = "Hello Javascript world!";

