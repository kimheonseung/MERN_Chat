## Chat Demo With MERN Stack
  

#### Example Demo Application Using MERN Stack
  
  
  
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
---
---
  
  
## Frontend
  

### Stack
- React
  
---
  
- Chat Components
  - /components/chat
    - page/ChatRoomPage.js -> Chat Room Page Component. Contains Chatbox.js
    - page/ChatRoomList.js -> Chat Room List Page Component.
    - ChatBox.js -> Component for chat area.
- User Components
  - /components/user
    - Login.js -> Login Page Component.
    - Registesr.js -> Register Page Component

#### Using Axios, Hooks, Router, React-Bootstrap    

---
### Register Page
- Input Validation
- <img width="300" alt="스크린샷 2021-04-25 오후 11 30 56" src="https://user-images.githubusercontent.com/74658424/115998086-97bf6800-a620-11eb-8212-8f9689f52caf.png">

### Login Page
- Using JWT for Authenticate
- <img width="300" alt="스크린샷 2021-04-25 오후 11 31 07" src="https://user-images.githubusercontent.com/74658424/115998099-aa39a180-a620-11eb-8ddc-349b477cdf3b.png">


### Chat Room List Page
- List of Chat Rooms exists in Database
- <img width="300" alt="스크린샷 2021-04-25 오후 11 31 16" src="https://user-images.githubusercontent.com/74658424/115998106-b291dc80-a620-11eb-82a0-6ea776fe5846.png">


### Chat Room Page
- Chat Room that user entered.
- <img width="300" alt="스크린샷 2021-04-25 오후 11 31 27" src="https://user-images.githubusercontent.com/74658424/115998110-b7ef2700-a620-11eb-8b1f-5d5734fbdc0d.png">


