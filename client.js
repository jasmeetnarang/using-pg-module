const pg = require("pg");

const postgresUrl = "postgres://postgres:xyz@localhost:5432/input_app"

const express =require('express')

const client = new pg.Client(postgresUrl)

client.connect();

module.exports = client;