"use strict";

const jsfiddle = require("../lib");
const expect = require('chai').expect;

describe("General JSFiddle tests", () => {

  describe("Panes", () => {

    it("should contain HTML", done => {
      jsfiddle.getFiddle("lucillevl/o5skom1u", function (err, res) {
        expect(res.html).to.not.be.empty;
        done()
      });
    })

    it("should contain JavaScript", done => {
      jsfiddle.getFiddle("lucillevl/o5skom1u", function (err, res) {
        expect(res.js).to.not.be.empty;
        done()
      });
    })

    it("should contain CSS", done => {
      jsfiddle.getFiddle("lucillevl/o5skom1u", function (err, res) {
        expect(res.css).to.not.be.empty;
        done()
      });
    })

  })

  describe("Resources", () => {

    it("should not be present", done => {
      jsfiddle.getFiddle("lucillevl/o5skom1u", function (err, res) {
        expect(res.resources).to.be.empty;
        done()
      });
    })

    it("should have 2 urls", done => {
      jsfiddle.getFiddle("KeesCBakker/32qv5dy6/", function (err, res) {
        expect(res.resources).not.to.be.empty;
        expect(res.resources).to.contain("https://cdnjs.cloudflare.com/ajax/libs/knockout/3.5.0/knockout-min.js");
        expect(res.resources).to.contain("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css");
        done()
      });
    })

  })

});