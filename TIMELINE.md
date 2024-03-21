# Development flow for the app
---
### Backend Development
- Getting an understanding and map of what to implement.
- Choosing **typescript** over javascript for type management and safety (comfortable in both).
  Constructing routes for submitting and fetch source codes.
- Understanding and utilizing **Judge0 Api**.
- Spinning up **mysql** and **redis containers** to store data and caching.
- Managing Constructing Controllers and Routes in a **REST API**, MVC architecture using **express.js**.
  
---

### Frontend Development
- Creating routes using **react-router-dom**.
- Creating UI Components using **MUI**.
- Utilizing hooks to create custom hook to interact with server.
- Understand the need of a better state management, initiated **store** directory to implement states with **recoil** (just for simplicity).
- Overall Tuning server and client with each other.

---

### Deployment
- Deploy Frontend on **vercel**.
- Running Server code on **aws** using **pm2**.
- Created a proxy server using **nginx** to forward request to backend application.
- Figured out vercel or anyother host required ssl certification i.e. https protocol in aciton.
- Applied **https** on backend application using **python3-certbot**.
- **Boom Applicaiton works !** though many tries in ssl specially.
  
---
### Challenges
- **Optimizing caching** in client responses tab to cache correct amount of response data each time by bundling.
- Implementing Nginx and Certbot to Backend protocol
- **Optimizing rendering** with Recoil and React Hooks.

---
### Areas of Improvement
- In the application (backend) we are using external **Judge0 API** , better we can do is setting up locally the Judge0 application in **ec2 instance** and somehow keep the docker container / service running with a program manager (lack of time).
- Better UI for users.
- Improve system latency (my roommate says its too slow).
- Writing Tests