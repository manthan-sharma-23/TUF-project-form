# FORM APP

**Please read the [TIMELINE.md](./TIMELINE.md) file to workflow**

### Application Working Links :
- **Frontend Application:** [tuf-project-form.vercel.app](https://tuf-project-form.vercel.app/)
- **Backend Application:** [https://www.form-tuf.publicvm.com](https://www.form-tuf.publicvm.com)

## Setup Locally
- Clone the repository locally
```
git clone https://github.com/manthan-sharma-23/TUF-project-form.git
```
- Requirements
>node >= 16.5
>docker

### Frontend Setup
After cloning the repository **cd** into the client folder and install the dependencies.
```
cd client
npm install
npm run dev 
```

### Backend Setup

**Manual Setup**
All the steps from the **root of directory**.
```
cd server
npm install 
```
Create a **.env** file and fill it as **.env.example** file
After creating and configuring .env file

Pick **X_RAPIDAPI_HOST** and **X_RAPIDAPI_KEY** from Rapid Api  Freemium Plan [Judge0 Extra CE](https://rapidapi.com/judge0-official/api/judge0-extra-ce/pricing)
```
npm run build
npm run dev
```

**Your application should up and running by now.**


