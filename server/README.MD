## Backend  
  
  
### Stack
- MongoDB
- Express
- Node
  
---
  
### Models
- /models/chatRoom.js -> MongoDB Chat Room Model
- /models/user.js -> MongoDB User Model
  
---
  
### Routes And Controllers
- User  
  - Routes
    - /routes/user.js
      - [GET] /user/id/:userId -> get user by user id
      - [GET] /user/nick/:userNick -> get user by user nick
      - [GET] /user -> get all users
      - [PUT] /user, user(json) -> create user
      - [POST] /login, user(json) -> authenticate user
  - Controllers
    - /controllers/user.js
  
- Chat Room
  - Routes
    - /routes/chatRoom.js
      - [GET] /chat/room -> get all chat rooms
      - [PUT] /chat/room, chatRoom(json) -> create chat room
      - [GET] /chat/room/:roomNo -> get specific chat room
  
---
  

