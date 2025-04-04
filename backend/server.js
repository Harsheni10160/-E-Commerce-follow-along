
const app =require("./app");
const connectDatabase = require("./db/Database");
process.on("uncaughtException",(err) =>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server for handling uncaught exception`);
});

// config
if (process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"./config/.env",
    });
};
connectDatabase();

const server =app.listen(process.env.PORT,() =>{
    console.log(
        `server is running on http://localhost:${process.env.PORT}`  
    );
});
process.on("unhandledRejection",(err) => {
    console.error(`Unhandled Rejection: ${err.message}`);
    crossOriginIsolated.log("Shutting down the server due to unhandled promise rejection. ");

    server.close(() => {
        process.exit(1);
    });
})
