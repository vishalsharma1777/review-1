const posts = require('./data/posts.json');
const users = require('./data/users.json');
const votes = require('./data/votes.json');

let userPoints = {};
for (const user of users) {
  if (userPoints[user.id] === undefined) {
    userPoints[user.id] = 0;
  }
}
for (const post of posts) {
  userPoints[post['userId']] += 5;
}
for (const vote of votes) {
  userPoints[vote['userId']] += 1;
}
const rankWise = Object.entries(userPoints).sort((x, y) => y[1] - x[1]);
const top5 = rankWise.slice(0, 5);
let ans = [];
for (const top of top5) {
  for (const user of users)
    if (user['id'] == top[0]) {
      ans.push(user['name']);
    }
}
console.log(ans);
