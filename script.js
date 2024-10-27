document.getElementById("jokeForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const request = document.getElementById("request").value;

  // Fake AI response - in a real scenario, this would be an API call
  const jokes = [
    `Based on your input "${request}", here's a joke: Why don't skeletons fight each other? They don't have the guts.`,
    `Considering "${request}", try this one: How do you organize a space party? You planet.`,
    `Reflecting on "${request}", here's a laugh: Why was the math book sad? Because it had too many problems.`,
    `"${request}" makes me think of this: What do you call fake spaghetti? An impasta.`,
  ];

  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  document.getElementById("jokeDisplay").innerText = joke;
});
