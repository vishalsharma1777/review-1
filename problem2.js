const posts = require('./data/posts.json');
const topics = require('./data/topics.json');

let numberOfPosts = {};
const allTopics = [];

for (const topic of topics) {
  if (!allTopics.includes(topic['id'])) {
    allTopics.push(topic['id']);
  }
}

for (const topic of allTopics) {
  for (const post of posts) {
    if (post['topicId'] == topic) {
      if (numberOfPosts[topic] == undefined) {
        numberOfPosts[topic] = 0;
      }
      numberOfPosts[topic] += 1;
    }
  }
}

const top5 = Object.entries(numberOfPosts)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 5);

let ans = [];
for (const top of top5) {
  for (const topic of topics)
    if (topic['id'] == top[0]) {
      ans.push(topic['name']);
    }
}

console.log(ans);
