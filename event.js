import EventEmitter from "events";
const emitter = new EventEmitter();
emitter.on("login", () => {
    console.log("User logged in");
});
