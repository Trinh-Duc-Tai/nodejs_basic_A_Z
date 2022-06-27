import express from "express";

const configViewEngine = (app) => {
    app.set("view engine","ejs");
    app.set("views","./src/views")  //file ejs phải viết trong views

}

export default configViewEngine;